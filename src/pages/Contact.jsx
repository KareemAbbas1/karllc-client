import styled from "styled-components"
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import ContactUsBG from "../assets/ContactUsBG.jpg"
import { UseStateContext } from "../context/ContextProvider"
import { Facebook, Whatsapp, Printer, Linkedin } from "react-bootstrap-icons"
import Loader from "../components/Loader"
import { useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
import { useForm, ValidationError } from '@formspree/react';
import { NavLink } from "react-router-dom"



const Container = styled.div`
  background-image: ${`url(${ContactUsBG})`};

  textarea {
      resize: none;
  }

  .form-container {
        background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        backdrop-filter: blur(21px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 16px;

        textarea {
            resize: none;
        }
    }
`
// const OverLay = styled.div`
//     width: 100%;
//     height: 110%;
//     position: absolute;
//     background: #0C1118;
//     opacity: 0.5;
// `

const Contact = () => {


  const { language, loading, setLoading } = UseStateContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  const [state, handleSubmit] = useForm("mpzgzogw");



  // const [state, handleSubmit] = useForm("xbjvrgnd");

  return (
    // <PageComponent>
    <Container className="
    w-screen 
    min-h-screen 
    bg-dark 
    pt-40
    pb-28 
    px-4 
    md:px-24 
    flex
    flex-col
    items-center 
    justify-center
    gap-12
    bg-cover
    bg-no-repeat
    bg-center
    "
    >
      <ScrollToTop />
      {
        loading &&
        <div className="bg-dark w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <div>
            <Loader />
          </div>
        </div>
      }
      {/* <ScrollToTop /> */}

      {/* <OverLay /> */}

      {/* Contact Info */}
      <div className="form-container max-w-screen-xl py-8 px-4 my-0 lg:pb-6 md:px-10 lg:rounded-xl text-white lg:h-full xl:flex flex-col justify-center ">
        <h1 className="text-blue text-3xl lg:text-2xl xl:text-4xl font-semibold border-s-4 border-blue px-2 mb-6 xl:mb-16 pt-2">
          {
            language === "English"
              ? "Contact Us"
              : language === "العربية" ? "تواصل معنا"
                : language === "Russian" ? "Контакты"
                  : "联系我们"
          }
        </h1>
        <p className="lg:bg-transparent text-md text-white px-2 py-3 rounded-lg mb-2 xl:mb-8 lg:w-[70%]">
          {
            language === "English"
              ? " The ‘’KAR’’ group of companies multilaterally captures many areas of life. We are located in several countries in the world, such as the United Arab Emirates, Turkey, Estonia, Russia, Syria, etc. Our team is ready to cooperate."
              : language === "العربية" ? "تلتقط مجموعة شركات \"KAR\" بشكل متعدد الجوانب العديد من مجالات الحياة. نحن موجودون في عدة دول في العالم ، مثل الإمارات العربية المتحدة وتركيا وإستونيا وروسيا وسوريا ، إلخ. فريقنا جاهز للتعاون."
                : language === "Russian" ? "Группа компаний «КАР» многосторонне охватывает многие сферы жизни. Мы находимся в нескольких странах мира, таких как Объединенные Арабские Эмираты, Турция, Эстония, Россия, Сирия и др. Наша команда готова к сотрудничеству."
                  : "“KAR”公司集团涉足生活的许多领域。 我们遍布世界多个国家，如阿联酋、土耳其、爱沙尼亚、俄罗斯、叙利亚等。我们的团队已准备好合作。"
          }
        </p>
        <div>
          <div className="p-0 m-0 lg:bg-transparent px-1 py-3 rounded-xl">
            <div className='flex flex-col gap-5'>
              <div className='flex items-center gap-3'>
                <MapPinIcon className='w-8 h-auto text-white' />
                <p className="text-sm">
                  HDS Business Centre - Office 3605 - Jumeirah Lake Towers. Dubai, United Arab Emirates.
                </p>
              </div>

              <div className='flex items-center gap-3'>
                <MapPinIcon className='w-8 h-auto text-white' />
                <p className="text-sm">
                  The doctors towers. building 21, office no:9 in second floor, 6 October City, Cairo, Egypt.
                </p>
              </div>

              <NavLink to='https://wa.me/447452117813' target="_blank" className='flex items-center gap-3 hover:text-[#25D366]'>
                <Whatsapp
                  className=' hover-effect cursor-pointer'
                  size={30} />

                {/* <PhoneIcon className='w-8 h-auto text-white' /> */}
                {/* <p>
                  {
                    language === "العربية"
                      ? "447452117813+"
                      : "+447452117813"
                  }
                </p> */}
                <p className="lg:text-xl max-w-[60%]">
                  {
                    language === "English" ? "To serve you well, please contact any communication option available to re contact you from our team."
                      : language === "العربية" ? "لخدمتك بشكل جيد ، يرجى الاتصال بأي خيار اتصال متاح وسيقوم فريقنا بالرد عليك قريبًا."
                        : language === "Russian" ? "Для качественного обслуживания, пожалуйста, оставьте Ваши контактные данные чтобы наша команда связалась с Вами."
                          : "为了更好地为您服务，请联系任何可用的通讯选项，以便我们的团队重新与您联系"
                  }
                </p>
              </NavLink>

              <div className='flex items-center gap-3'>
                <Printer size={30} className='text-white hover:text-blue hover-effect cursor-pointer' />
                <p>
                  {
                    language === "العربية"
                      ? "442039963709+ (fax)"
                      : "+442039963709 (fax)"
                  }
                </p>
              </div>

              <a href="mailto:info@karllc-group.com" className='flex items-center gap-3 hover:text-blue cursor-pointer'>
                <EnvelopeIcon className='w-8 h-auto text-white hover:text-blue' />
                <p>info@karllc-group.com</p>
              </a>
              <div className='flex items-center gap-3'>

                <NavLink to="https://www.facebook.com/people/Kar-db-group/100093632534966/?mibextid=ZbWKwL" target="_blank">
                  <Facebook size={30} className='text-white hover:text-[#0165E1] hover-effect cursor-pointer' />
                </NavLink>

                <NavLink to="https://www.linkedin.com/in/karbd-group-0b6247284/" target="_blank">
                  <Linkedin size={30} className='text-white hover:text-[#0A66C2] hover-effect cursor-pointer' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Contact Form */}
      <div className="
            max-w-screen-xl 
            w-full 
            h-full
            lg:h-[750px]
            bg-white
            lg:bg-transparent
            flex
            flex-col
            justify-between
            gap-3
            py-6
            px-3
            md:px-10
            rounded-2xl
            lg:items-center
            form-container
            `
            "
      >
        <form onSubmit={handleSubmit} className="flex flex-col lg:justify-center text-white px-2 lg:px-6 py-3 rounded-xl h-fit lg:w-full lg:shadow-lg">

          <h1 className="text-blue text-3xl lg:text-2xl xl:text-4xl font-semibold border-s-4 border-blue px-2 mb-6 xl:mb-16 pt-2">
            {
              language === "English"
                ? "Send us a message"
                : language === "العربية" ? "ارسل إلينا"
                  : language === "Russian" ? "Отправьте нам сообщение"
                    : "给我们发信息"
            }
          </h1>

          {
            state.succeeded
              ?
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="
                                    w-[300px] 
                                    h-[300px] 
                                    rounded-full 
                                    bg-blue 
                                    text-white 
                                    flex 
                                    flex-col 
                                    justify-center 
                                    items-center 
                                    gap-2
                                    border-2 
                                    border-blue
                                    "
                >
                  <p className="text-[7rem]">
                    &#10003;
                  </p>
                  <p className="text-md font-semibold text-center w-[80%]">
                    {
                      language === "العربية"
                        ? "تم الاشتراك بنجاح. سيتم التواصل معك عن طريق احد موظفينا قريباً"
                        : "Thanks for subscribing"
                    }
                  </p>
                </div>
              </div>
              :
              <>

                <div className="w-full flex flex-col">
                  <label className="mb-1">
                    {
                      language === "English"
                        ? "Name"
                        : language === "العربية" ? "الأسم"
                          : language === "Russian" ? "имя"
                            : "姓名"
                    }
                    <span className="text-[red]">*</span></label>

                  <input
                    id="contact-us-name"
                    type="text"
                    name="name"
                    className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
                    required
                  />

                  <label className="mb-1">
                    {
                      language === "English"
                        ? "Email Address"
                        : language === "العربية" ? "البريد الإلكتروني"
                          : language === "Russian" ? "Адрес электронной почты"
                            : "电子邮件地址"
                    }
                    <span className="text-[red]">*</span></label>

                  <input
                    id="contact-us-email"
                    type="email"
                    name="email"
                    className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
                    required
                  />

                  <label className="mb-1">
                    {
                      language === "English"
                        ? "Subject"
                        : language === "العربية" ? "الموضوع"
                          : language === "Russian" ? "Предмет"
                            : "主题"
                    }
                  </label>

                  <input
                    id="contact-us-subject"
                    type="text"
                    name="subject"
                    className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
                  />
                </div>

                <label className="mb-1">
                  {
                    language === "English"
                      ? "Message"
                      : language === "العربية" ? "الرسالة"
                        : language === "Russian" ? "Сообщение"
                          : "信息"
                  }
                  <span className="text-[red]">*</span></label>

                <textarea
                  id="contact-us-message"
                  name="message"
                  rows="4"
                  className="border-gray-400 bg-transparent rounded-lg lg:h-48"
                  required
                />

                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-blue text-white text-xl mt-4 py-2 rounded-lg font-semibold lg:w-[30%] lg:self-end hover:opacity-75">
                  {
                    language === "English"
                      ? "Send Message"
                      : language === "العربية" ? "إرسال"
                        : language === "Russian" ? "Отправить сообщение"
                          : "发信息"
                  }
                </button>
              </>
          }
        </form>
      </div>
    </Container>
    // </PageComponent>
  )
}

export default Contact