import styled from "styled-components";
import BackgroundVideo from "../../assets/background.mp4";
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
                <source src={`${BackgroundVideo}`} type="video/mp4" />
            </Video>
            <div className="hero-text w-full max-w-screen-xl h-[40%] px-4 text-white absolute flex flex-col items-start md:items-center justify-center lg:justify-end top-0 left-0 right-0 m-auto">
                <div rows={4} className="bg-transparent border-none p-0 text-4xl md:text-5xl lg:text-6xl 2xl:text-[6rem] font-semibold 2xl:font-normal w-full md:w-[68%] lg:w-[63%] xl:w-[50%] 2xl:w-[80%]">
                    {
                        language === "English"
                            ? hero.english
                            : hero.arabic
                    }
                </div>

                <div className="h-1 w-full md:w-[70%] xl:w-[53%] 2xl:w-[80%] bg-blue" />

            </div>
        </Container>
    )
}

export default Hero