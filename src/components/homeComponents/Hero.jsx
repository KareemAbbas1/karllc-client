import styled from "styled-components";
// import BackgroundVideo from "../../assets/background.mp4";
import { hero } from "../../lib/home";
import { UseStateContext } from "../../context/ContextProvider"
import HeroLogo from "../../assets/HeroLogo.png"


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
  
`

const Video = styled.div`
    /* width: auto; */
    /* height: 130vh; */
    /* object-fit: cover; */
    /* position: absolute; */
    /* top: 0; */
    /* left: 0; */

    @media(min-width: 1024px) {
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


const Hero = () => {

    const { language } = UseStateContext();



    return (
        <Container className="-z-20">
            <OverLay />
            <Video
                className="w-[1700px] md:w-[2000px] lmd:w-[2200px] large:w-[2520px] boject-cover"

                dangerouslySetInnerHTML={{
                    __html: `
            <video
              loop="true"
              defaultmuted="true"
              muted="true"
              autoplay="true"
              playsinline="true"
              >
              <source src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1689254439/pexels-henry-5396795_2160p_xqhudg.webm"  type="video/webm"/>
            </video>
          ` }}
            // src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1688387825/background-71fffdb1_xr5otm.mp4" 
            // autoPlay 
            // loop 
            // muted
            >
                {/* <source  type="video/mp4" /> */}
            </Video>


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
            items-center 
            justify-center 
            gap-3
            top-[10%]
            md:top-[15%]
            midLarge:top-[21%]
            large:top-[20%]
            left-0 
            right-0 
            m-auto
            pb-6
            ">

                <img src={HeroLogo} className="w-20 lg:w-24 midLarge:w-28" />

                <pre rows={4} className="
                bg-transparent 
                border-none 
                pb-2 
                p-0 
                text-[1.6rem]
                text-center
                md:text-4xl 
                lg:text-5xl 
                2xl:text-[5rem] 
                font-semibold 
                2xl:font-normal 
                w-full 
                md:w-[68%] 
                lg:w-[63%] 
                xl:w-[50%] 
                2xl:w-[80%]
                ">
                    {
                        language === "English"
                            ? hero.english
                            : language === "العربية" ? hero.arabic
                                : language === "Russian" ? hero.russian
                                    : hero.chinese
                    }
                </pre>

                <div className="h-1 w-full md:w-[70%] xl:w-[53%] 2xl:w-[80%] bg-blue" />

            </div>
        </Container>
    )
}

export default Hero






// <div className="
//             hero-text
//             w-full
//             max-w-screen-xl
//             h-fit
//             px-4
//             text-white
//             absolute
//             flex
//             flex-col
//             items-start
//             md:items-center
//             justify-center
//             lg:justify-end
//             top-[20%]
//             md:top-[23%]
//             midLarge:top-[28%]
//             large:top-[25%]
//             left-0
//             right-0
//             m-auto
//             pb-6
//             ">

//                 <img src={HeroLogo} className="w-8" />

//                 <pre rows={4} className="
//                 bg-transparent
//                 border-none
//                 pb-2
//                 p-0
//                 text-4xl
//                 md:text-5xl
//                 lg:text-6xl
//                 2xl:text-[6rem]
//                 font-semibold
//                 2xl:font-normal
//                 w-full
//                 md:w-[68%]
//                 lg:w-[63%]
//                 xl:w-[50%]
//                 2xl:w-[80%]
//                 ">
//                     {
//                         language === "English"
//                             ? hero.english.split("\n")[0] + "\n" + hero.english.split("\n")[1] + "\n" + hero.english.split("\n")[2]
//                             : language === "العربية" ? hero.arabic
//                                 : language === "Russian" ? hero.russian
//                                     : hero.chinese
//                     }
//                 </pre>

//                 <div className="h-1 w-full md:w-[70%] xl:w-[53%] 2xl:w-[80%] bg-blue" />

//             </div>











{/* <div className="
            hero-text 
            w-full 
            max-w-screen-xl 
            h-fit 
            px-4 
            text-white 
            absolute 
            flex 
            flex-col
            items-center 
            justify-center 
            gap-3
            top-[13%]
            md:top-[15%]
            midLarge:top-[28%]
            large:top-[25%]
            left-0 
            right-0 
            m-auto
            pb-6
            ">

                <img src={HeroLogo} className="w-20 lg:w-24" />

                <pre rows={4} className="
                bg-transparent 
                border-none 
                pb-2 
                p-0 
                text-[1.6rem]
                text-center
                md:text-5xl 
                lg:text-5xl 
                2xl:text-[6rem] 
                font-semibold 
                2xl:font-normal 
                w-full 
                md:w-[68%] 
                lg:w-[63%] 
                xl:w-[50%] 
                2xl:w-[80%]
                ">
                    {
                        language === "English"
                            ? hero.english
                            : language === "العربية" ? hero.arabic
                                : language === "Russian" ? hero.russian
                                    : hero.chinese
                    }
                </pre>

                <div className="h-1 w-full md:w-[70%] xl:w-[53%] 2xl:w-[80%] bg-blue" />

            </div> */}