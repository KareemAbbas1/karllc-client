import { useRef } from "react";
import styled from "styled-components"
import { UseStateContext } from "../../context/ContextProvider";
import { slider } from "../../lib/home";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";


const Container = styled.div``

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

    div.image {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: ${props => `url(${props.bg})`};

        .overlay {
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.3;
        }
    }
  }
`
const Branches = () => {

    const { language } = UseStateContext();

    const ref = useRef(null);
    const handleClick = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };


    return (
        <Container className="w-screen min-h-screen pt-28 pb-20 bg-dark text-white px-4" id="branches">
            <header className="flex flex-col md:flex-row gap-12 md:gap-0 md:justify-between lg:px-8 xl:px-20 2xl:pe-28">
                <div className="flex flex-col items-start gap-6 md:ps-10">
                    <p className="text-4xl w-[60%] md:w-[80%]">
                        {
                            language === "English"
                                ? slider.headline.english
                                : slider.headline.arabic
                        }
                    </p>
                    <p className="text-sm text-gray-300 md:w-[80%]">
                        {
                            language === "English"
                                ? slider.secondaryParagraph.english
                                : slider.secondaryParagraph.arabic
                        }
                    </p>
                    <button className="flex items-end gap-2">
                        <span className="border border-blue rounded p-1">
                            {
                                language === "English"
                                ? <ChevronRightIcon className="w-4" />
                                : <ChevronLeftIcon className="w-4" />
                            }
                        </span>
                        {
                            language === "English"
                                ? slider.whyKar.english
                                : slider.whyKar.arabic
                        }
                    </button>
                </div>

                {/* Filters */}
                <div className="flex items-end md:flex-col md:items-end justify-between md:w-[33%]">
                    <div className="text-white flex flex-col items-start md:items-end gap-2 text-sm ">
                        {
                            slider.filters.map((filter) => (
                                <button key={filter.english} className={`border-l md:border-r md:border-l-0 px-2 md:w-[100%] py-[3px] md:text-right ${filter.english === "LOGISTICS & SHIPPING" && 'border-blue text-blue'}`}>
                                    {
                                        language === "English"
                                            ? filter.english
                                            : filter.arabic
                                    }
                                </button>
                            ))
                        }
                    </div>


                    <div className={`buttons flex gap-3 ${language === "العربية" && "flex-row-reverse"}`}>
                        <button className="border border-blue rounded p-2" onClick={() => handleClick(-372)}>
                            <ChevronLeftIcon className="w-4" />
                        </button>

                        <button className="border border-blue rounded p-2" onClick={() => handleClick(372)}>
                            <ChevronRightIcon className="w-4" />
                        </button>
                    </div>
                </div>
            </header>


            <Slider ref={ref} className="horizontal-snap mt-8 md:ms-10 lg:ms-16 xl:ms-28 snap-proximity" id="scroll-slider">
                {
                    slider.branches.map((branch) => (
                        <div key={branch.id} className="snap-center">
                            <div className="card w-[360px] h-[553px] flex flex-col items-start gap-5 rounded-3xl">
                                <div
                                    style={{ backgroundImage: `url(${branch.image})` }}
                                    className="image w-full h-[393px] rounded-3xl">
                                    <div className="overlay rounded-3xl" />
                                </div>

                                <div className="">
                                    <p className="text-xl mb-3">
                                        {
                                            language === "English"
                                                ? branch.title.english
                                                : branch.title.arabic
                                        }
                                    </p>

                                    <p className="text-[16px] text-gray-400 mb-6 max-w-[85%] leading-5">
                                        {
                                            language === "English"
                                                ? branch.description.english
                                                : branch.description.arabic
                                        }
                                    </p>

                                    <button className="flex items-end gap-2">
                                        <span className="border border-blue rounded p-1">
                                            {
                                                language === "العربية"
                                                    ? <ChevronLeftIcon className="w-4" />
                                                    : <ChevronRightIcon className="w-4" />
                                            }
                                        </span>
                                        {
                                            language === "English"
                                                ? branch.readMore.english
                                                : branch.readMore.arabic
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </Container>
    )
}

export default Branches