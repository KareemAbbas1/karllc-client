import styled from "styled-components"
// import BackgroundVideo from "../../assets/background.mp4";
import Logo from "../../assets/logo.png";
import { karInNumbers } from "../../lib/home";
import { UseStateContext } from "../../context/ContextProvider";
// import Linkedin from '../../assets/Linkedin.png'
// import Facebook from '../../assets/Facebook.png'
// import Twitter from '../../assets/Twitter.png'

const Container = styled.div`
    width: 100vw;
    height: 100%;
    position: relative;

    div {
        /* resize: none; */

        @media(min-width: 360px) and (max-width: 393px) {
            font-size: 1.9rem;
        }
    }

    .hero-text {
        @media(width: 1366px) {
            /* top: -4%; */
        }
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

const Video = styled.div`
    /* width: auto; */
    /* height: 195vh; */
    /* object-fit: cover; */
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */

    @media(min-width: 1024px) and (max-width: 1439px) {
        /* height: 180vh; */
    }

    @media(min-width: 1440px) {
        /* height: 150vh; */
    }
`
const OverLay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #0C1118;
    opacity: 0.5;
`


const KarInNumbers = () => {

    const { language } = UseStateContext();

    return (
        <Container className="relative" id="kar-in-numbers">
            <OverLay />
            <Video
                className="w-[2910px] md:w-[2500px] large:w-[2520px] boject-cover"

                dangerouslySetInnerHTML={{
                    __html: `
            <video
            loop="true"
            defaultmuted="true"
            muted="true"
            autoplay="true"
            playsinline="true"
            >
            <source src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1688387825/background-71fffdb1_xr5otm.webm"  type="video/webm"/>
            </video>
          ` }}
            // src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1688387825/background-71fffdb1_xr5otm.mp4" 
            // autoPlay 
            // loop 
            // muted
            >
                {/* <source  type="video/mp4" /> */}
            </Video>
            {/* <Video 
            src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1688387825/background-71fffdb1_xr5otm.mp4" 
            autoPlay 
            loop 
            muted 
            className="h-[180vh] min-h-[1630px] md:h-[100vh]"
            >
            </Video> */}

            <div>
                <div className="
            hero-text 
            w-full 
            max-w-screen-xl 
            h-fit 
            px-4 
            text-white 
            absolute 
            flex 
            flex-col 
            items-start 
            md:items-center 
            justify-center 
            lg:justify-end 
            top-[10%]
            md:top-[10%]
            large:top-[15%]
            left-0 
            right-0 
            m-auto
            pb-6
            ">
                    {/* <div
                    className="
                        w-full 
                        max-w-[1100px] 
                        h-full 
                        px-4 
                        text-white 
                        absolute 
                        flex 
                        flex-col 
                        items-center
                        top-0 
                        left-0 
                        right-0 
                        m-auto
                        pt-24
                        pb-8
                        xl:pt-40
                        2xl:pt-56
                        md:pt-40
                        md:gap-28
                    "
                    id="kar-in-numbers"
                > */}
                    <div className="flex flex-col items-center gap-20 xl:scale-105 2xl:scale-125">
                        <div className="text-center flex flex-col items-center gap-6">
                            <h1 className="text-4xl font-semibold flex items-start justify-center gap-3">
                                <img src={Logo} alt="company logo" />
                                {
                                    language === "English"
                                        ? karInNumbers.title.english
                                        : language === "العربية" ? karInNumbers.title.arabic
                                            : language === "Russian" ? karInNumbers.title.russian
                                                : karInNumbers.title.chinese
                                }
                            </h1>
                            <p className="text-[1rem] text-gray-300 px-5">
                                {
                                    language === "English"
                                        ? karInNumbers.secondaryParagraph.english
                                        : language === "العربية" ? karInNumbers.secondaryParagraph.arabic
                                            : language === "Russian" ? karInNumbers.secondaryParagraph.russian
                                                : karInNumbers.secondaryParagraph.chinese
                                }
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center gap-12 xl:gap-24 text-center mb-24">
                            {
                                karInNumbers.items.map(item => (
                                    <div key={item.title.english}>
                                        <p className="text-5xl">
                                            {item.number}
                                            <span className="text-blue">+</span>
                                        </p>
                                        <pre className="text-lg max-w-37">
                                            {
                                                language === "English"
                                                    ? item.title.english
                                                    : language === "العربية" ? item.title.arabic
                                                        : language === "Russian" ? item.title.russian
                                                            : item.title.chinese
                                            }
                                        </pre>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className="
            max-w-screen-xl 
            w-full 
            h-full
            xl:h-[700px] 
            text-white
            bg-white 
            lg:bg-transparent
            flex 
            flex-col 
            justify-between 
            gap-3 
            py-10
            px-3 
            md:px-10 
            md:py-12 
            rounded-2xl
            lg:flex-row
            lg:items-center
            form-container

            `
            "
                    >
                        <div className=" py-0 my-0 lg:pb-6 lg:px-4 lg:rounded-xl lg:w-[50%] lg:h-full xl:flex flex-col justify-center lg:justify-start">
                            <h1 className="text-blue text-3xl pt-2 lg:text-2xl xl:text-4xl font-semibold border-s-4 border-blue px-2 mb-6 xl:mb-16">
                                {
                                    language === "English"
                                        ? "Get a Quote"
                                        : language === "العربية" ? "احصل على عرض"
                                            : language === "Russian" ? "получить цитату О нас"
                                                : "获取报价"
                                }
                            </h1>
                            <p className="text-sm px-2 py-3 rounded-lg mb-2 xl:mb-10">
                                {
                                    language === "English"
                                        ? " The ‘’KAR’’ group of companies multilaterally captures many areas of life. We are located in several countries in the world, such as the United Arab Emirates, Turkey, Estonia, Russia, Syria, etc. Our team is ready to cooperate."
                                        : language === "العربية" ? "تلتقط مجموعة شركات \"KAR\" بشكل متعدد الجوانب العديد من مجالات الحياة. نحن موجودون في عدة دول في العالم ، مثل الإمارات العربية المتحدة وتركيا وإستونيا وروسيا وسوريا ، إلخ. فريقنا جاهز للتعاون."
                                            : language === "Russian" ? "Группа компаний «КАР» многосторонне охватывает многие сферы жизни. Мы находимся в нескольких странах мира, таких как Объединенные Арабские Эмираты, Турция, Эстония, Россия, Сирия и др. Наша команда готова к сотрудничеству."
                                                : "“KAR”公司集团涉足生活的许多领域。 我们遍布世界多个国家，如阿联酋、土耳其、爱沙尼亚、俄罗斯、叙利亚等。我们的团队已准备好合作。"
                                }
                            </p>
                            <div className="hidden lg:flex flex-col gap-12 h-full">
                                {/* <p className="text-3xl text-blue font-bold">Estimate your project&apos;s cost right now!</p> */}
                                <p className="text-3xl font-semibold">
                                    {
                                        language === "English"
                                            ? "Send us a quote request, and we&apos;ll get back to you."
                                            : language === "العربية" ? "أرسل إلينا طلب عرض أسعار وسنرد عليك في خلال ثلاثة أيام عمل."
                                                : language === "Russian" ? "Отправьте нам запрос на расценки, и мы свяжемся с вами."
                                                    : "向我们发送报价请求，您将得到回复。"
                                    }
                                </p>
                                {/* <div className='flex items-center gap-3'>
                                    <img src={Facebook} alt='Facebook' className="bg-dark lg:bg-transparent rounded-full" />
                                    <img src={Twitter} alt='Twitter' className="bg-dark lg:bg-transparent rounded-full" />
                                    <img src={Linkedin} alt='Linkedin' className="bg-dark lg:bg-transparent rounded-full" />
                                </div> */}
                            </div>
                        </div>

                        <form
                            id="get-a-quote"
                            className="flex flex-col lg:justify-center lg:text-white px-2 lg:px-6 py-3 rounded-xl h-full lg:w-full lg:shadow-lg"
                            dir={language === "العربية" ? "rtl" : "ltr"}
                        >
                            <div className="w-full flex flex-col">
                                <label className="mb-1 text-[16px]">
                                    {
                                        language === "English"
                                            ? "Name"
                                            : language === "العربية" ? "الأسم"
                                                : language === "Russian" ? "имя"
                                                    : "姓名"
                                    }
                                    <span className="text-[red]">*</span></label>
                                <input className="bg-transparent text-[16px] h-10 px-2 lg:h-12 mb-3 lg:mb-8 border-b border-gray-400" />

                                <label className="mb-1 text-[16px]">
                                    {
                                        language === "English"
                                            ? "Email Address"
                                            : language === "العربية" ? "البريد الإلكتروني"
                                                : language === "Russian" ? "Адрес электронной почты"
                                                    : "电子邮件地址"
                                    }
                                    <span className="text-[red]">*</span></label>
                                <input className="bg-transparent text-[16px] h-10 px-2 lg:h-12 mb-3 lg:mb-8 border-b border-gray-400" />

                                <label className="mb-1 text-[16px]">
                                    {
                                        language === "English"
                                            ? "Phone Number"
                                            : language === "العربية" ? "رقم التليفون"
                                                : language === "Russian" ? "Номер телефона"
                                                    : "电话号码"
                                    }
                                    <span className="text-[red]">*</span></label>
                                <input className="bg-transparent text-[16px] h-10 px-2 lg:h-12 mb-3 lg:mb-8 border-b border-gray-400" />
                            </div>

                            <label className="mb-1 text-[16px]">
                                {
                                    language === "English"
                                        ? "Message"
                                        : language === "العربية" ? "الرسالة"
                                            : language === "Russian" ? "Сообщение"
                                                : "信息"
                                }
                                <span className="text-[red]">*</span></label>
                            <textarea rows="4" className="bg-transparent text-[16px] border-0 border-b border-gray-400 lg:h-48" />
                            <button className="bg-blue text-white text-xl mt-4 py-2 rounded-lg font-semibold lg:w-[30%] lg:self-end hover:opacity-75">
                                {
                                    language === "English"
                                        ? "Send Message"
                                        : language === "العربية" ? "إرسال"
                                            : language === "Russian" ? "Отправить сообщение"
                                                : "发信息"
                                }
                            </button>
                        </form>
                    </div>

                    {/* <div className="form-container w-full h-[85vh] px-4 py-10 flex flex-col "> */}
                    {/* <form className="
                    form-container 
                    h-fit w-full 
                    md:w-[80%] 
                    py-8 px-4 
                    md:px-8 
                    flex 
                    flex-col 
                    lg:flex-row 
                    lg:flex-wrap 
                    justify-between 
                    items-center 
                    gap-6
                    lg:pt-28
                    ">
                        <h1 className="text-2xl font-semibold text-center lg:absolute border-b top-8 left-0 right-0 mx-auto">Get a Quote</h1>
                        <div className="w-full lg:w-[48%]">
                            <label className="text-[1rem]">Name <span style={{ color: 'red' }}>*</span></label>
                            <input
                                className="w-full bg-transparent text-lg py-2 px-2 border-b "
                            />
                        </div>

                        <div className="w-full lg:w-[48%]">
                            <label className="text-[1rem]">Company <span style={{ color: 'red' }}>*</span></label>
                            <input
                                className="w-full bg-transparent text-lg py-2 px-2 border-b "
                            />
                        </div>

                        <div className="w-full lg:w-[48%]">
                            <label className="text-[1rem]">Email <span style={{ color: 'red' }}>*</span></label>
                            <input
                                className="w-full bg-transparent text-lg py-2 px-2 border-b "
                            />
                        </div>

                        <div className="w-full lg:w-[48%]">
                            <label className="text-[1rem]">Phone Number <span style={{ color: 'red' }}>*</span></label>
                            <input
                                className="w-full bg-transparent text-lg py-2 px-2 border-b "
                            />
                        </div>

                        <div className="w-full">
                            <label className="text-[1rem]">Your Request <span style={{ color: 'red' }}>*</span></label>
                            <textarea
                                rows={4}
                                className="w-full bg-transparent text-lg py-2 px-2 border-0 border-b border-gray-300 "
                            />
                        </div>

                        <button className="bg-blue w-full rounded py-2 text-xl">Send</button>
                    </form> */}
                    {/* </div> */}

                </div>
            </div>
        </Container>
    )
}

export default KarInNumbers