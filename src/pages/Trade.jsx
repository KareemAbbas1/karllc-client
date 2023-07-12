import PageComponent from "../components/PageComponent"
import BlueArrows2 from "../assets/BlueArrows2.png"
import LogisticsFAQ from "../assets/LogisticsFAQ.png"
import styled from "styled-components"
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import TradeHero from '../assets/TradeHero.jpg'
import MiniMap from '../assets/MiniMap.png'
import LargeMap from '../assets/LargeMap.png'
import { hero, mapSection, faqs } from "../lib/trade"
// import { useLocation } from "react-router-dom"

import { UseStateContext } from '../context/ContextProvider'
import Loader from "../components/Loader"
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"



const Hero = styled.div`
  .over-lay {
    width: 100%;
    height: 10%;
    position: absolute;
    bottom: 0;
    background: linear-gradient(0deg, #0C1118 0%, rgba(12, 17, 24, 0.00) 100%);
  } 

  .headline {
    @media(min-width: 1600px) and (max-width: 1919px) {
      font-size: 110px;
    }

    @media(width: 1366px) and (height: 625px) {
      font-size: 5rem;
    }
    
    @media(width: 1280px) and (height: 800px) {
      font-size: 5rem;
    }

    @media(width: 1280px) and (height: 657px) {
      font-size: 5.2rem;
    }
  }


  .cta {
    
    @media(min-width: 1600px) and (max-width: 1919px) {
      bottom: 1%;
    }
    
    @media(height: 1050px) {
      bottom: 10%;
    }

    @media(width: 1366px) and (height: 625px) {
      bottom: 4px;

      button {
        padding-inline: 4rem;
      }
      /* margin-top: 3rem; */
    }

    @media(width: 1280px) and (height: 800px) {
      bottom: 12%;
    }

    @media(width: 1280px) and (height: 657px) {
      bottom: 6%;
    }
  }
`


const MapContent = styled.div`
  @media(min-height: 625px) and (max-height: 657px) {
    height: 110vh;
  }

  @media(height: 900px) {
    height: 110vh;
  }
  @media(height: 757px) {
    height: 110vh;
  }
`

const MapPin = styled.div`
  transition: all 300ms ease-in-out;

  .toolpit {
    display: none;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    transform: scale(1.05);
    .toolpit {
      display: block;
    }
  }
`

const Trade = () => {

  // const currentLocation = useLocation();
  const { language, loading, setLoading, onScrollableLinkClick } = UseStateContext();

  const currentLocation = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])


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


        <div className="w-screen h-screen " />
        {/* Hero */}
        <Hero className="
        hero 
        h-screen
        w-screen
        flex 
        flex-col 
        items-center 
        justify-between 
        absolute
        top-0
        left-0
        bg-bottom
        bg-cover
        bg-no-repeat
        lg:bg-top
        "
          style={{ backgroundImage: `url(${TradeHero})` }}
        >

          {/* <div className="over-lay" /> */}

          <div className="
          hero-content 
          w-screen 
          h-screen 
          pt-32 
          md:pt-40 
          px-4 
          lg:h-[700px] 
          large:h-[900px] 
          lg:pt-44 
          overflow-hidden 
          lg:px-56 
          max-w-screen-large 
          large:pt-60 
          relative
          ">
            <h1 className={`
            headline 
            text-black 
            text-6xl 
            md:text-8xl 
            lg:text-8xl 
            large:text-9xl 
            font-bold 
            ${language === "Russian" ? "lg:w-[600px]" : "lg:w-[500px]"}
            ${language === "Russian" ? "midLarge:w-[700px]" : "midLarge:w-[600px]"}
            ${language === "Russian" ? "large:w-[67%]" : "large:w-[700px]"}
            `}>
              {
                language === "English"
                  ? hero.headline.english
                  : language === "العربية" ? hero.headline.arabic
                    : language === "Russian" ? hero.headline.russian
                      : hero.headline.chinese
              }

            </h1>

            <div
              className={`
              w-[150%] 
              md:w-full 
              h-[300px] 
              md:h-[500px] 
              lg:w-[50%] 
              lg:h-[280px] 
              ms-16 
              md:ms-64 
              mt-8 
              md:mt-0 
              bg-contain 
              bg-center 
              bg-no-repeat 
              lg:absolute 
              lg:top-72
              large:top-[40%]
              ${language === "العربية" ? "lg:-scale-x-100 left-20" : "right-20"}
              `}
              style={{ backgroundImage: `url(${BlueArrows2})` }}
            />

            <div className="
            cta 
            max-w-full 
            flex 
            flex-col 
            absolute 
            bottom-5 
            md:px-4 
            lg:bottom-10
            ">
              <ol className="list-disc px-4 text-2xl md:text-4xl lg:text-xl lg:text-black font-semibold">
                <li className="mb-6 lg:mb-2">
                  {
                    language === "English" ? hero.bulletPoints[0].english
                      : language === "العربية" ? hero.bulletPoints[0].arabic
                        : language === "Russian" ? hero.bulletPoints[0].russian
                          : hero.bulletPoints[0].chinese
                  }
                </li>
                <li className="mb-6 lg:mb-2">
                  {
                    language === "English" ? hero.bulletPoints[1].english
                      : language === "العربية" ? hero.bulletPoints[1].arabic
                        : language === "Russian" ? hero.bulletPoints[1].russian
                          : hero.bulletPoints[1].chinese
                  }
                </li>
                <li className="mb-6 lg:mb-8">
                  {
                    language === "English" ? hero.bulletPoints[2].english
                      : language === "العربية" ? hero.bulletPoints[2].arabic
                        : language === "Russian" ? hero.bulletPoints[2].russian
                          : hero.bulletPoints[2].chinese
                  }
                </li>
              </ol>

              <button
                onClick={() => onScrollableLinkClick("kar-in-numbers", currentLocation, navigate)}
                className="
                border-2 
                border-blue 
                text-lg 
                md:text-2xl
                py-2
                px-12
                md:px-20
                rounded-lg
                font-bold 
                self-start
                large:text-2xl 
                large:py-4 
                bg-blue
                hover:bg-transparent
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

        </Hero>


        {/* MAP */}
        <MapContent className={`
        w-screen 
        min-h-[90vh] 
        flex 
        flex-col 
        pt-24 
        lg:ps-48 
        relative
        `} style={{ right: `${language === "العربية" && '-4.5%'}` }} dir="ltr"
        >

          {/* mobile header */}
          <h1
            className={`
          lg:hidden 
          text-white 
          text-6xl 
          font-semibold 
          mb-10 
          ${language === "العربية" && "px-6"}`
            }
            dir={language === "العربية" ? "rtl" : "ltr"}
          >
            {
              language === "English" ? mapSection.headline.english
                : language === "العربية" ? mapSection.headline.arabic
                  : language === "Russian" ? mapSection.headline.russian
                    : mapSection.headline.chinese
            }
          </h1>

          {/* pc header */}
          <h1 className={`
          hidden 
          lg:block 
          text-white 
          text-6xl 
          font-semibold 
          mb-10 
          lg:w-[29%] 
          2xl:w-[24%]
          `}
            dir={language === "العربية" ? "rtl" : "ltr"}
          >
            {
              language === "English" ? mapSection.headline.english
                : language === "العربية" ? mapSection.headline.arabic
                  : language === "Russian" ? mapSection.headline.russian
                    : mapSection.headline.chinese
            }
          </h1>

          <div className="relative ">
            {/* mobile map */}
            <img src={MiniMap} className={`lg:hidden md:scale-125 md:absolute right-16 top-6 lg:scale-[1.4] lg:right-[-25%] large:scale-[1.6] large:-right-32 `} />

            {/* pc map */}
            <img src={LargeMap} className={`hidden lg:block md:scale-125 md:absolute right-16 top-6 lg:scale-[1.4] lg:right-[-25%] large:scale-[1.6] large:-right-32 `} />

            <MapPin className="absolute left-[76%] top-[21%] md:hidden lg:flex flex-col items-center lg:left-[65%] lg:top-1 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 2xl:w-8 2xl:h-8 text-blue bg-dark rounded-full">
                <path fill="#1869FE" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="toolpit bg-blue py-1 px-3 rounded-lg absolute -top-5 -left-16">toolpit</div>
              <div className="hidden lg:flex items-center justify-center bg-dark w-5 h-5 rounded-full">
                <div className="hidden lg:block w-3 h-3 bg-blue rounded-full" />
              </div>
            </MapPin>

            <MapPin className={`
            absolute 
            left-[47.5%]
            top-[17%]
            lg:left-[47%]
            lg:top-24
            md:hidden
            lg:flex
            flex-col
            items-center
            cursor-pointer
            `}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 2xl:w-8 2xl:h-8 text-blue bg-dark rounded-full">
                <path fill="#1869FE" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="toolpit bg-blue py-1 px-3 rounded-lg absolute -top-5 -left-16">toolpit</div>
              <div className="hidden lg:flex items-center justify-center bg-dark w-5 h-5 rounded-full">
                <div className="hidden lg:block w-3 h-3 bg-blue rounded-full" />
              </div>
            </MapPin>

            <MapPin className="absolute left-[30%] top-[35%] md:hidden lg:flex flex-col items-center lg:left-[45%] lg:top-4 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 2xl:w-8 2xl:h-8 text-blue bg-dark rounded-full">
                <path fill="#1869FE" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="toolpit bg-blue py-1 px-3 rounded-lg absolute -top-5 -left-16">toolpit</div>
              <div className="hidden lg:flex items-center justify-center bg-dark w-5 h-5 rounded-full">
                <div className="hidden lg:block w-3 h-3 bg-blue rounded-full" />
              </div>
            </MapPin>

            <MapPin className="absolute left-[86.7%] top-[63.7%] md:hidden lg:flex flex-col items-center lg:top-16 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue 2xl:w-8 2xl:h-8 bg-dark rounded-full">
                <path fill="#1869FE" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="toolpit bg-blue py-1 px-3 rounded-lg absolute -top-5 -left-16">toolpit</div>
              <div className="hidden lg:flex items-center justify-center bg-dark w-5 h-5 rounded-full">
                <div className="hidden lg:block w-3 h-3 bg-blue rounded-full" />
              </div>
            </MapPin>

            <MapPin className="absolute left-[33.4%] top-[57.6%] md:hidden lg:flex flex-col items-center lg:left-[90%] lg:top-96 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="w-6 h-6 text-blue 2xl:w-8 2xl:h-8 bg-dark rounded-full">
                <path fill="#1869FE" strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <div className="toolpit bg-blue py-1 px-3 rounded-lg absolute -top-5 -left-16">toolpit</div>
              <div className="hidden lg:flex items-center justify-center bg-dark w-5 h-5 rounded-full">
                <div className="hidden lg:block w-3 h-3 bg-blue rounded-full" />
              </div>
            </MapPin>
          </div>


          <p className={`
          hidden
          lg:block
          text-gray-300 
          text-lg
          ${language === "العربية" ? "w-[27%] 2xl:w-[24%]" : "w-[23%]"}
          `}
            dir={language === "العربية" ? "rtl" : "ltr"}
          >
            {
              language === "English" ? mapSection.firstParagraph.english
                : language === "العربية" ? mapSection.firstParagraph.arabic
                  : language === "Russian" ? mapSection.firstParagraph.russian
                    : mapSection.firstParagraph.chinese
            }
          </p>

          <div className={`flex flex-col items-cneter gap-4 mt-4 md:absolute lg:bottom-0 midLarge:bottom-48 lg:w-[25%]  ${language === "العربية" ? "px-6 bottom-0 2xl:w-[23%]" : "bottom-40"}`}>
            <p className="text-gray-400 pe-6 md:w-[50%] lg:w-full " dir={language === "العربية" ? "rtl" : "ltr"}>
              {
                language === "English" ? mapSection.secondParagraph.english
                  : language === "العربية" ? mapSection.secondParagraph.arabic
                    : language === "Russian" ? mapSection.secondParagraph.russian
                      : mapSection.secondParagraph.chinese
              }
            </p>
            <button className={`
                border-2 
                border-blue 
                text-lg 
                md:text-2xl
                py-2
                px-12
                md:px-20
                lg:px-16
                rounded-lg
                font-bold 
                ${language === "العربية" && "lg:self-end"}
                self-start
                large:text-2xl 
                large:py-4 
                bg-blue
                hover:bg-transparent
                cursor-pointer 
                z-10 
                transition-all 
                ease-in-out
              `}
            >
              {
                language === "English"
                  ? mapSection.getQuote.english
                  : language === "العربية" ? mapSection.getQuote.arabic
                    : language === "Russian" ? mapSection.getQuote.russian
                      : mapSection.getQuote.chinese
              }
            </button>
          </div>

        </MapContent>


        {/* FAQs */}
        <div className="w-full max-w-[1040px] min-h-[88vh] large:scale-125 large:mt-24 flex flex-col lg:flex-row gap-12 snap-start md:px-10 lg:px-0 lg:h-fit lg:min-h-[400px] pt-24 lg:gap-3 lg:pt-3 relative mt-72">
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
                <Menu key={question.id} as="div" className="relative inline-block text-left w-full">
                  <div>
                    <Menu.Button className="inline-flex w-full h-16 justify-between items-center gap-x-1.5 rounded-lg border border-gray-600 px-3 py-2 font-semibold text-gray-200">
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
                          <p className="text-dark text-lg px-3">
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
      </div>
    </PageComponent >
  )
}

export default Trade