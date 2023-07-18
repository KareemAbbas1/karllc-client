import styled from "styled-components";
import { cards } from "../../lib/home";
import { useRef } from "react";
import { UseStateContext } from "../../context/ContextProvider";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


const Section = styled.div`
    /* @media (min-width: 768px) and (max-width: 992px) {
        top: 40%
    } */
`

const Slider = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
    height: 100%;
    align-items: center;
    overflow-y: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-inline: 1rem;
    
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

    
  .card {
    object-fit: cover;
    background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
    backdrop-filter: blur(21px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 16px;
    cursor: pointer;
    transition: all 500ms ease-in-out;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 1px 2px #1869FE;
    }

    h2 {
        transition: all 300ms ease-in-out;
        &:hover {
            color: #1869FE;
        }    
    }
  }

  @media(min-width: 1366px) {
    gap: 3rem;
  }
`

const Cards = () => {


    const ref = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const handleClick = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };

    const { language } = UseStateContext();

    // h-[85vh] from shehab's responsiveness
    return (
        <Section className="
        min-h-fit
        h-[80vh]
        md:h-[50vh]
        lg:h-[85vh]
        w-screen 
        flex 
        justify-center 
        absolute 
        top-[21rem]
        md:top-[30rem]
        lmd:top-[29rem]
        midLarge:top-[33rem]
        large:top-[39rem]
        " 
        id="services"
        >
            <Slider ref={ref} className="horizontal-snap snap-proximity" id="scroll-slider">
                {
                    cards.map((card) => (
                        <a href={card.to} key={card.id} className="
                        card
                        text-white
                        h-[494px]
                        w-[350px]
                        2xl:w-[360px]
                        flex
                        flex-col
                        items-center
                        px-14
                        py-16
                        gap-4
                        snap-center
                        "
                        >
                            <img
                                src={card.icon}
                                alt={`${card.title} icon`}
                                className="w-24"
                            />
                            <h2 className="text-[24px] font-semibold flex items-center gap-2 mt-6">
                                {
                                    language === "English"
                                        ? card.title.english
                                        : language === "العربية" ? card.title.arabic
                                        : language === "Russian" ? card.title.russian
                                        : card.title.chinese
                                }
                                <span className="inline">
                                    <ArrowRightIcon className="w-5" />
                                </span>
                            </h2>
                            <p className="text-center text-[16px] text-gray-200">
                                {
                                    language === "English"
                                        ? card.description.english
                                        : language === "العربية" ? card.description.arabic
                                        : language === "Russian" ? card.description.russian
                                        : card.description.chinese
                                }
                            </p>
                        </a>
                    ))
                }
            </Slider>
        </Section>
    )
}

export default Cards