/* eslint-disable no-unused-vars */
import PageComponent from "../components/PageComponent"
import LogistictsHero from "../assets/LogistictsHero.png"
import LogisticsFAQ from "../assets/LogisticsFAQ.png"
import styled from "styled-components"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { UseStateContext } from '../context/ContextProvider'
import Loader from "../components/Loader"
import { useEffect } from "react"

import { hero, cardsSection, faqs } from "../lib/logistics"
import { useLocation, useNavigate } from "react-router-dom"


// const cards = [
//   {
//     id: 1,
//     title: {
//       english: "By Land",
//       arabic: "بري"
//     },
//     cost: {
//       english: "From $2.5 per lbs",
//       arabic: ""
//     },
//     weight: {
//       english: "Up to 44,000 lbs",
//       arabic: ""
//     }
//   },
//   {
//     id: 2,
//     title: {
//       english: "By Air",
//       arabic: "بري"
//     },
//     cost: {
//       english: "From $9 per lbs",
//       arabic: ""
//     },
//     weight: {
//       english: "Up to 20,000 lbs",
//       arabic: ""
//     }
//   },
//   {
//     id: 3,
//     title: {
//       english: "By Sea",
//       arabic: "بري"
//     },
//     cost: {
//       english: "From $2.5 per lbs",
//       arabic: ""
//     },
//     weight: {
//       english: "&infin;",
//       arabic: "&infin;"
//     }
//   },
// ]

const Slider = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 1rem;
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
`

const Logistics = () => {

  const { language, loading, setLoading, onScrollableLinkClick } = UseStateContext();
  const currentLocation = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  // Extract data
  const { bulletPoints } = hero;
  const { cards } = cardsSection;

  return (
    <PageComponent>
      {
        loading &&
        <div className="bg-dark w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <div>
            <Loader />
          </div>
        </div>
      }
      <div className="w-screen min-h-[100vh] pt-32 md:pt-40 lg:pt-24 pb-12 lg:pb-32 large:pb-48 bg-dark text-white px-4 md:px-6 lg:px-4 lg:flex flex-col items-center snap-y-mandatory">

        {/* Hero */}
        <div className="
        hero 
        h-fit 
        min-h-[87vh] 
        flex 
        flex-col 
        items-center 
        justify-between 
        md:items-start 
        md:pb-10 
        snap-start
        lg:flex-row
        lg:px-20
        lg:pt-28
        lg:min-h-fit
        relative
        max-w-screen-2xl
        large:mt-32
        large:px-24
        
        ">

          <h1 className="text-6xl md:text-7xl large:text-8xl font-semibold large:-mt-28">
            {
              language === "English"
                ? hero.headline.english
                : language === "العربية" ? hero.headline.arabic
                  : language === "Russian" ? hero.headline.russian
                    : hero.headline.chinese
            }
          </h1>

          <img src={LogistictsHero} className="md:scale-125 md:px-20 lg:scale-100 lg:px-0 lg:py-4 large:scale-125" />

          <div className="cta w-full flex flex-col gap-6 lg:absolute lg:bottom-10 large:-bottom-5 lg:w-[50%] large:w-[50%] lg:gap-8 ">

            <p className="hidden large:block text-gray-300 w-[70%]">
              {
                language === "English"
                  ? hero.secondaryParagraph.english
                  : language === "العربية" ? hero.secondaryParagraph.arabic
                    : language === "Russian" ? hero.secondaryParagraph.russian
                      : hero.secondaryParagraph.chinese
              }
            </p>

            <ol className="list-disc px-4 md:text-xl lg:text-large lg:text-gray-400">
              <li className="lg:mb-4 large:mb-8">
                {
                  language === "English"
                    ? bulletPoints[0].english
                    : language === "العربية" ? bulletPoints[0].arabic
                      : language === "Russian" ? bulletPoints[0].russian
                        : bulletPoints[0].chinese
                }
              </li>
              <li className="lg:mb-4 large:mb-8">
                {
                  language === "English"
                    ? bulletPoints[1].english
                    : language === "العربية" ? bulletPoints[1].arabic
                      : language === "Russian" ? bulletPoints[1].russian
                        : bulletPoints[1].chinese
                }
              </li>
              <li className="lg:mb-4 large:mb-8">
                {
                  language === "English"
                    ? bulletPoints[2].english
                    : language === "العربية" ? bulletPoints[2].arabic
                      : language === "Russian" ? bulletPoints[2].russian
                        : bulletPoints[2].chinese
                }
              </li>
            </ol>

            <button 
            onClick={() => onScrollableLinkClick("kar-in-numbers",  currentLocation, navigate)} 
            className="
            border-2 
            border-blue 
            w-full 
            text-lg 
            py-2 
            rounded-lg 
            font-bold 
            md:w-[50%] 
            md:self-end 
            lg:self-start 
            large:text-2xl 
            large:py-4 
            hover:bg-blue 
            cursor-pointer 
            z-10 
            transition-all 
            ease-in-out
            ">
              {
                language === "English"
                  ? hero.getQuote.english
                  : language === "العربية" ? hero.getQuote.arabic
                    : language === "Russian" ? hero.getQuote.russian
                      : hero.getQuote.chinese
              }
            </button>
          </div>
        </div>


        {/* Delivery */}
        <div className="h-[700px] flex flex-col justify-center lg:mt-12 large:mt-36 gap-10 snap-start md:scale-125 lg:scale-100 large:scale-125 md:px-20 ">

          <h1 className="text-white text-4xl ">
            {
              language === "English" ? cardsSection.paragraph.english
                : language === "العربية" ? cardsSection.paragraph.arabic
                  : language === "Russian" ? cardsSection.paragraph.russian
                    : cardsSection.paragraph.chinese
            }
          </h1>
          <Slider className="horizontal-snap snap-proximity h-[300px]">
            {
              cards.map(card => (
                <div key={card.id} className="
                snap-center 
                w-[340px]
                h-[210px] 
                border 
                border-gray-600 
                rounded-2xl 
                flex 
                flex-col 
                justify-between 
                pt-12
                pb-8
                relative
                px-4
                ">
                  <h2 className="bg-dark text-blue text-5xl font-semibold absolute -top-5 px-2 ">
                    {
                      language === "English" ? card.title.english
                        : language === "العربية" ? card.title.arabic
                          : language === "Russian" ? card.title.russian
                            : card.title.chinese
                    }
                  </h2>

                  <div>
                    <p className="text-gray-500">COST</p>
                    <p className="text-2xl">
                      {
                        card.cost.english
                      }
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-500">WEIGHT</p>
                    <p className="text-2xl" dangerouslySetInnerHTML={{ __html: card.weight.english }}>
                    </p>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>


        {/* FAQs */}
        <div className="w-full max-w-[1040px] min-h-[88vh] large:scale-125 large:mt-24 flex flex-col lg:flex-row gap-12 snap-start md:px-10 lg:px-0 lg:h-fit lg:min-h-[400px] lg:gap-3 lg:pt-3 relative ">
          <h2 className="text-3xl font-bold text-blue lg:absolute">FAQs</h2>

          <p className="text-gray-400 md:text-xl lg:w-[70%] lg:pt-8">
            {
              language === "English" ? faqs.paragraph.english
                : language === "العربية" ? faqs.paragraph.arabic
                  : language === "Russian" ? faqs.paragraph.russian
                    : faqs.paragraph.chinese
            }
          </p>

          <img className="h-full lg:absolute lg:w-[68%] lg:h-auto lg:bottom-0" src={LogisticsFAQ} />

          <div className="flex flex-col gap-6 lg:gap-0 lg:justify-between lg:w-[30%] lg:pt-8">
            {
              faqs.questions.map(question => (
                <Menu as="div" className="relative inline-block text-left w-full" key={question.id}>
                  <div>
                    <Menu.Button className={`
                    inline-flex 
                    w-full 
                    h-16 
                    justify-between 
                    items-center 
                    gap-x-1.5 
                    rounded-lg 
                    border 
                    border-gray-600 
                    px-3 
                    py-2 
                    font-semibold 
                    text-gray-200
                    ${language === "العربية"
                        ? "text-right"
                        : "text-left"
                      }
                    `}>
                      {
                        language === "English" ? question.q.english
                          : language === "العربية" ? question.q.arabic
                            : language === "Russian" ? question.q.russian
                              : question.q.chinese
                      }
                      <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-gray-400">
                      <div className="py-1">
                        <Menu.Item>
                          <p className={`
                          text-dark 
                          text-lg 
                          px-3 ${language === "العربية"
                              ? "text-right"
                              : "text-left"
                            }`}>
                            {
                              language === "English" ? question.a.english
                                : language === "العربية" ? question.a.arabic
                                  : language === "Russian" ? question.a.russian
                                    : question.a.chinese
                            }
                          </p>
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ))
            }
          </div>
        </div>
      </div >
    </PageComponent >
  )
}

export default Logistics