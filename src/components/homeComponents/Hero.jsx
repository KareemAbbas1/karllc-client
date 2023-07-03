import styled from "styled-components";
// import BackgroundVideo from "../../assets/background.mp4";
import { hero } from "../../lib/home";
import { UseStateContext } from "../../context/ContextProvider"


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
            top: -4%;
        }
    }
  
`

const Video = styled.video`
    width: auto;
    height: 130vh;
    object-fit: cover;
    /* position: absolute; */
    top: 0;
    left: 0;

    @media(min-width: 1024px) {
        height: 150vh;
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
            <Video autoPlay loop muted>
                <source src="https://res.cloudinary.com/dqmqc0uaa/video/upload/v1688387825/background-71fffdb1_xr5otm.mp4" type="video/mp4" />
            </Video>
            <div className="hero-text w-full max-w-screen-xl h-[40%] px-4 text-white absolute flex flex-col items-start md:items-center justify-center lg:justify-end top-0 left-0 right-0 m-auto">
                <pre rows={4} className="bg-transparent border-none pb-2 p-0 text-4xl md:text-5xl lg:text-6xl 2xl:text-[6rem] font-semibold 2xl:font-normal w-full md:w-[68%] lg:w-[63%] xl:w-[50%] 2xl:w-[80%]">
                    {
                        language === "English"
                            ? hero.english.split("\n")[0]+"\n"+hero.english.split("\n")[1]+"\n"+hero.english.split("\n")[2]
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