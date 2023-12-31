import PageComponent from "../components/PageComponent"
import AboutUs from "../assets/AboutUs.jpeg"
import AboutSubHero from "../assets/AboutSubHero.jpg"
import styled from "styled-components"
import { UseStateContext } from "../context/ContextProvider"
import { v4 as uuidv4 } from 'uuid';
import { BuildingOffice2Icon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { useEffect } from "react"
import Loader from '../components/Loader'
import ScrollToTop from "../components/ScrollToTop"
import { NavLink } from "react-router-dom"





const Container = styled.div`
  .hero {
    background-image: ${`url(${AboutUs})`};
  }
`

const cards = [
  {
    id: uuidv4(),
    title: {
      english: "Russia Office",
      arabic: "مكتب روسيا",
      russian: "rus",
      turkish: "tur",
    },
    building: "K.A.R. Petroleum LLC (reg. 2311296918) K.A.R. LLC (reg. 0105073983) Celine Tourism LLC (reg. 0105079640) Dobro LLC (reg. 0105080317) KASLA LLC (reg. 0105074722)",
    location: "385020, Maykop, Proletarskaya, 334, office 316",
    phone: {
      arabic: "0238364610+",
      else: "+0238364610"
    }
  },
  {
    id: uuidv4(),
    title: {
      english: "Turkey Office",
      arabic: "مكتب تركيا",
      russian: "rus",
      turkish: "tur",
    },
    building: "KAR EMLAK GAYRIMENKUL DANISMALIK PETROL INSAAT A.S. (reg. 4991254125)",
    location: "BARBAROS MAH. AL ZAMBAK SK. VARYAP MERIDIAN A BLOK GRAND TOWER NO: 2 İÇ KAPI NO: 355 ATAŞEHİR/ İSTANBUL",
    phone: {
      arabic: "0238364610+",
      else: "+0238364610"
    }
  },
  {
    id: uuidv4(),
    title: {
      english: "UAE Office",
      arabic: "مكتب الإمارات",
      russian: "rus",
      turkish: "tur",
    },
    building: "HDS Business Centre - Office 3605 - Jumeirah Lake Towers",
    location: "Dubai - United Arab Emirates",
    phone: {
      arabic: "0238364610+",
      else: "+0238364610"
    }
  },
  {
    id: uuidv4(),
    title: {
      english: "Egypt Office",
      arabic: "مكتب المملكة السعودية",
      russian: "rus",
      turkish: "tur",
    },
    building: "The doctors towers. building 21, office no:9 in second floor",
    location: "6 October City, Cairo, Egypt",
    phone: {
      arabic: "0238364610+",
      else: "+0238364610"
    }
  },
]

const Slider = styled.div`
    /* display: grid; */
    grid-auto-flow: column;
    gap: 1rem;
    align-items: center;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-inline: 1rem;

    @media(min-width: 1366px) {
      /* grid-auto-flow: row: */
    }
    
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
    display: none;
    }

    /* Hide scrollbar for IE, Edge and Firefox */
     {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    }

    .horizontal-snap > a {
        scroll-snap-align: center;
    }
`


const About = () => {


  const { language, loading, setLoading } = UseStateContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return (
    <PageComponent>
      <ScrollToTop />
      {
        loading &&
        <div className="bg-dark w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <div>
            <Loader />
          </div>
        </div>
      }

      <div className="hidden  lg:flex w-full h-[330vh] px-8 bg-dark absolute top-0 z-0 left-0 items-center" >
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
        <div className="w-[20%] h-full border-x border-gray-900" />
      </div>

      <Container className="
      w-screen 
      min-h-[100vh] 
      pt-[70vh]
      pb-12 
      lg:pb-32 
      large:pb-48 
      bg-dark 
      text-white 
      flex 
      flex-col
      gap-40
      snap-y-mandatory
      "
      >
        <div className="
        hero 
        w-[95vw]
        md:w-[98vw]
        h-[70vh]
        bg-cover
        bg-no-repeat
        bg-top
        absolute
        top-2
        xl:top-4
        left-0
        right-0
        mx-auto
        rounded-lg
        flex
        flex-col
        items-center
        justify-center
        "
        >
          <div className=" text-center py-3 px-4 rounded-lg bg-black/75 xl:bg-transparent xl:text-dark">
            <h2 className="text-2xl xl:text-4xl mb-4">
              {
                language === "English" ? "Know More About"
                  : language === "العربية" ? "معرفة المزيد عن"
                    : language === "Russian" ? "Узнайте больше о"
                      : "了解更多"
              }
            </h2>
            <h1 className="text-5xl xl:text-6xl font-semibold xl:font-bold">
              {
                language === "English" ? "KarLLC Group"
                  : language === "العربية" ? "مجموعة شركات كار"
                    : language === "Russian" ? "КарООО Групп"
                      : "卡尔有限责任公司集团"
              }
            </h1>
          </div>
        </div>


        <div className="w-full h-fit xl:h-[90vh] px-4 pt-12 md:pt-24 md:px-12 xl:px-24 large:px-52 lg:flex items-center gap-20 ">
          <div style={{ backgroundImage: `url(${AboutSubHero})` }} className="hidden xl:block h-[600px] w-[50%] rounded-lg relative bg-no-repeat bg-cover">
            {/* <div className="absolute top-0 left-0 w-full h-full" style={{ background: 'rgba(12,17, 24, 0.5)' }} /> */}
          </div>

          <div className="text-white xl:flex flex-col items-start justify-center xl:w-[50%] z-10">
            <h2 className="text-xl font-bold mb-12 ps-1 text-blue border-s-2 border-blue">
              {
                language === "English" ? "About us"
                  : language === "العربية" ? "عن الشركة"
                    : language === "Russian" ? "О нас"
                      : "关于我们"
              }
            </h2>
            <p className=" pb-4 xl:text-xl large:text-2xl">
              {
                language === "English"
                  ? "We are proud to be one of the world's leading companies in the fields of IT, tourism, real estate, etc. It is also planned to open new areas that will provide good opportunities for cooperation. Our team is always in touch and at any time ready to answer any questions and solve any problems. We are always interested in our customers receiving good products and services of excellent quality and at a good price. Our clients are not only residents of the countries in which the companies are located, we also cooperate with clients all over the world. We look forward to collaborating."
                  : language === "العربية" ? "نحن فخورون بأن نكون إحدى الشركات العالمية الرائدة في مجالات تكنولوجيا المعلومات ، السياحة ، العقارات ، إلخ. ومن المخطط أيضًا فتح مجالات جديدة توفر فرصًا جيدة للتعاون. فريقنا على اتصال دائم ومستعد في أي وقت للإجابة على أي أسئلة وحل أي مشاكل. نحن مهتمون دائمًا بتلقي عملائنا منتجات وخدمات جيدة ذات جودة ممتازة وبسعر جيد. عملاؤنا ليسوا فقط مقيمين في البلدان التي توجد بها الشركات ، بل نتعاون أيضًا مع العملاء في جميع أنحاء العالم. نحن نتطلع إلى التعاون."
                    : language === "Russian" ? "Мы гордимся тем, что являемся одной из ведущих мировых компаний в сфере IT, туризма, недвижимости и т. д. Также планируется открытие новых направлений, которые предоставят хорошие возможности для сотрудничества. Наша команда всегда на связи и в любое время готова ответить на любые вопросы и решить любые проблемы. Мы всегда заинтересованы в том, чтобы наши клиенты получали хорошие товары и услуги отличного качества и по хорошей цене. Нашими клиентами являются не только жители стран, в которых расположены компании, мы также сотрудничаем с клиентами по всему миру. Будем рады сотрудничеству."
                      : "我们很自豪能够成为IT、旅游、房地产等领域的世界领先公司之一。我们还计划开辟新的领域，为合作提供良好的机会。 我们的团队始终保持联系，随时准备回答任何问题并解决任何问题。 我们始终希望我们的客户能够以优惠的价格获得优质的产品和服务。 我们的客户不仅是公司所在国家的居民，我们还与世界各地的客户合作。 我们期待合作。"
              }
            </p>
            <NavLink onClick={() => setLoading(true)} to="/contact-us" className="bg-blue border border-blue py-2 px-4 xl:px-12 text-lg large:text-2xl large:py-4 rounded-md font-semibold mt-6 hover:bg-transparent">
              {
                language === "English" ? "Contact us"
                  : language === "العربية" ? "اتصل بنا"
                    : language === "Russian" ? "связаться с нами"
                      : "联系我们"
              }
            </NavLink>
          </div>
        </div>


        {/* Large screens branches info */}
        <h2 className="text-xl md:text-3xl pt-4 pb-2 ms-3 md:ms-10 midLarge:ms-20 large:ms-44 ps-2 w-[80%] midLarge:w-[40%] large:w-[30%] font-semibold -mb-24 large:-mb-10 border-s-2 border-blue">Our branches are distrubuted around the World</h2>

        <div className="hidden w-full h-fit xmd:flex flex-wrap justify-center gap-x-12 gap-y-24 large:px-20 large:gap-x-16 relative">
          {
            cards.map(card => (
              <div key={card.id} className="
                snap-center 
                w-[400px]
                h-[450px]
                border 
                border-gray-600 
                rounded-2xl 
                flex 
                flex-col 
                gap-6
                justify-between 
                pt-20
                pb-8
                relative
                px-4
                ">
                <h2 className="max-w-[85%] bg-dark text-blue text-5xl font-semibold absolute -top-5 px-2">
                  {
                    card.title.english
                  }
                </h2>

                <div>
                  {/* <p className="text-gray-500">COST</p> */}
                  <p className="text-2xl flex gap-2">
                    <span>
                      <BuildingOffice2Icon className="w-6" />
                    </span>
                    {
                      card.building
                    }
                  </p>
                </div>

                <div className="flex gap-2">
                  <span>
                    <MapPinIcon className="w-6" />
                  </span>
                  <p className="text-2xl" dangerouslySetInnerHTML={{ __html: card.location }}>
                  </p>
                </div>


                <div>
                  {/* <p className="text-gray-500">COST</p> */}
                  <p className="text-2xl flex gap-2">
                    <span>
                      <PhoneIcon className="w-6" />
                    </span>
                    {
                      language === "العربية"
                        ? card.phone.arabic
                        : card.phone.else
                    }
                  </p>
                </div>
              </div>
            ))
          }
        </div>


        {/* Mobile & tablet branches info */}
        <Slider className="horizontal-snap snap-proximity h-[600px] grid xmd:hidden md:ms-8">
          {
            cards.map(card => (
              <div key={card.id} className="
                snap-center 
                w-[340px]
                h-[550px]
                border 
                border-gray-600 
                rounded-2xl 
                flex 
                flex-col 
                gap-6
                justify-between 
                pt-20
                pb-8
                relative
                px-4
                ">
                <h2 className="bg-dark text-blue text-5xl font-semibold absolute -top-5 px-2 ">
                  {
                    card.title.english
                  }
                </h2>

                <div>
                  {/* <p className="text-gray-500">COST</p> */}
                  <p className="text-2xl flex gap-2">
                    <span>
                      <BuildingOffice2Icon className="w-6" />
                    </span>
                    {
                      card.building
                    }
                  </p>
                </div>

                <div className="flex gap-2">
                  <span>
                    <MapPinIcon className="w-6" />
                  </span>
                  <p className="text-2xl" dangerouslySetInnerHTML={{ __html: card.location }}>
                  </p>
                </div>


                <div>
                  {/* <p className="text-gray-500">COST</p> */}
                  <p className="text-2xl flex gap-2">
                    <span>
                      <PhoneIcon className="w-6" />
                    </span>
                    {
                      language === "العربية"
                        ? card.phone.arabic
                        : card.phone.else
                    }
                  </p>
                </div>
              </div>
            ))
          }
        </Slider>

        {/* <div className="w-full h-[161vh] " /> */}
      </Container>
    </PageComponent>
  )
}

export default About