/* eslint-disable no-unused-vars */
import PageComponent from "../components/PageComponent"
import LogistictsHero from "../assets/LogistictsHero.png"
import LogisticsLargeHero from "../assets/LogisticsLargeHero.png"
import LogisticsFAQ from "../assets/LogisticsFAQ.png"
import styled from "styled-components"
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronLeftIcon } from '@heroicons/react/20/solid'
import { UseStateContext } from '../context/ContextProvider'
import Loader from "../components/Loader"
import { useEffect } from "react"

import { hero, cardsSection, faqs } from "../lib/logistics"
import { useLocation, useNavigate } from "react-router-dom"
import LogisticsForm from "../components/logistics-page-components/LogisticsForm"




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
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    .horizontal-snap > a {
        scroll-snap-align: center;
    }
`

const Ol = styled.ol`
  .list-item {
      
      textarea {
        display: none;
        resize: none;
      }

      &:hover {
        .item-content {
          display: block;
          color: white;
        }   
      }
    }
`




const OverLay = styled.div`
    width: 100%;
    height: 100%;
    min-height: 810px;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(12, 17, 24, 0.32) 65%, rgba(12, 17, 24, 0) 100%);
    /* background: linear-gradient(180deg, rgba(12, 17, 24, 0.32) 0%, rgba(12, 17, 24, 0) 100%); */
    /* background: linear-gradient(0deg, #0C1118 0%, rgba(12, 17, 24, 0.00) 100%); */
    z-index: 1;
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


  // Handle video background on ios devices
  const [iosDevice, setIosDevice] = useState(false);

  useEffect(() => {
    const isIOS = (function () {
      const iosQuirkPresent = function () {
        const audio = new Audio();

        audio.volume = 0.5;
        return audio.volume === 1;   // volume cannot be changed from "1" on iOS 12 and below
      };

      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      const isAppleDevice = navigator.userAgent.includes('Macintosh');
      const isTouchScreen = navigator.maxTouchPoints >= 1;   // true for iOS 13 (and hopefully beyond)

      return isIOS || (isAppleDevice && (isTouchScreen || iosQuirkPresent()));
    })();

    if (isIOS) {
      setIosDevice(true)
    }
  }, []);

  // Extract data
  const { bulletPoints } = hero;
  const { cards } = cardsSection;


  // handle serivces
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  // console.log(showServicesMenu)

  const toggleServicesMenu = () => {
    const links = Array.from(document.getElementsByClassName("service-link"));
    if (!showServicesMenu) {
      setShowServicesMenu(true);
      setTimeout(() => {
        links.map(li => li.style.display = "block")
      }, 100);
    } else {
      setShowServicesMenu(false);
      links.map(li => li.style.display = "none")
    }
  }

  const onServiceClick = (serviceId) => {
    setActiveAccordion("");
    window.scrollTo({ top: `${document.getElementById(serviceId).offsetTop - 100}` });
    setTimeout(() => {
      setActiveAccordion(serviceId);
    }, 1000);
  };
  // End handle serivces



  // handel services description accordions
  const [activeAccordion, setActiveAccordion] = useState("");
  console.log(activeAccordion)
  const toggleAccordion = () => {

  };





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
      <div className="
      w-screen 
      min-h-[100vh] 
      pt-32 
      md:pt-40 
      lg:pt-24 
      pb-12 
      lg:pb-32 
      large:pb-48 
      bg-dark 
      text-white 
      px-4 
      md:px-6 
      lg:px-4 
      lg:flex 
      flex-col 
      items-center 
      snap-y-mandatory
      "
        onClick={() => {
          const body = document.querySelector("body");
          const links = Array.from(document.getElementsByClassName("service-link"));

          if (showServicesMenu) {
            setShowServicesMenu(false);
            links.map(li => li.style.display = "none")
          }
        }}
      >


        {/* <OverLay /> */}

        <div className="w-screen h-screen">
          {/* <div className="w-full h-full bg-dark absolute top-0 left-0 z-[1000]" /> */}
        </div>

        {/* Desktop video */}
        <div
          dangerouslySetInnerHTML={{
            __html: `
              <video
                loop="true"
                defaultmuted="true"
                muted="true"
                autoplay="true"
                playsinline="true"
                style="width: 100vw; height: 100vh; position: absolute; top: 0; left:0; object-fit: cover"
                >
                <source src="${iosDevice
                ? "https://res.cloudinary.com/dqmqc0uaa/video/upload/v1692559540/Drone_Shot_of_Cargo_Containers_Terminal_Ships_at_Dock_Port._Stock_Videos_of_Logistics_Export_Import_1_1_prupah.mp4"
                : "https://res.cloudinary.com/dqmqc0uaa/video/upload/v1692559540/Drone_Shot_of_Cargo_Containers_Terminal_Ships_at_Dock_Port._Stock_Videos_of_Logistics_Export_Import_1_1_prupah.webm"
              }"  type="video/${iosDevice ? "mp4" : "webm"}"/>
              </video>
            `
          }}
        >
        </div>

        {/* overlay */}
        <div style={{
          position: 'absolute',
          zIndex: '8',
          background: 'rgba(0,0,0,0.3)',
          width: '100vw',
          height: '100vh',
          top: '0',
          left: '0'
        }} />
        <div style={{
          position: 'absolute',
          zIndex: '9',
          background: 'linear-gradient(180deg, rgba(12, 17, 23, 0.00) 86.98%, #0C1117 100%)',
          width: '100vw',
          height: '100vh',
          top: '0',
          left: '0'
        }}

        />


        {/* Hero */}
        <div className="
          w-full
          lg:w-[900px]
          lmd:w-[67%]
          midLarge:w-[70%]
          large:w-[1230px]
          h-fit
          z-[9]
          absolute
          top-0
          -bottom-16
          left-0
          right-0
          m-auto
          lg:-bottom-16
          midLarge:bottom-0
          px-4
          lg:px-0
          
        "
        >


          <div className="
          w-full
          h-fit
          flex 
          flex-col 
          bg-[rgba(0,0,0,0.5)]
          md:bg-[rgba(0,0,0,0.7)]
          lg:bg-transparent
          px-2
          py-6
          rounded-lg
          md:p-6
          lg:w-[60%]
          lg:min-w-[700px]
          lg:h-full
          lg:justify-center
          lg:px-0
          
          ">
            <h1 className="text-6xl md:text-7xl large:text-8xl font-semibold">
              {
                language === "English"
                  ? hero.headline.english
                  : language === "العربية" ? hero.headline.arabic
                    : language === "Russian" ? hero.headline.russian
                      : hero.headline.chinese
              }
            </h1>

            <p className="mt-8 mb-24 md:w-[80%] md:text-2xl lg:w-full">
              {
                language === "English"
                  ? hero.secondaryParagraph.english
                  : language === "العربية" ? hero.secondaryParagraph.arabic
                    : language === "Russian" ? hero.secondaryParagraph.russian
                      : hero.secondaryParagraph.chinese
              }
            </p>

            <div className="flex flex-col items-start gap-3 md:flex-row md:w-[80%] large:w-[40rem] relative">
              <button
                className="bg-blue w-full text-lg py-3 rounded-lg md:w-[150%] md:text-xl midLarge:py-4 large:w-[60%] border border-blue hover:bg-transparent smooth-snimation"
                onClick={() => window.scrollTo({ top: document.getElementById("logistics-get-goute").offsetTop - 120 })}
              >
                {
                  language === "English"
                    ? "Get a Quote"
                    : language === "العربية" ? "احصل على عرض"
                      : language === "Russian" ? "Подробнее"
                        : "获取报价"
                }
              </button>

              <div
                className={`
                  absolute
                  bg-white 
                  text-dark 
                  w-full
                  max-h-[300px]
                  md:w-[330px]
                  bottom-[2.9rem]
                  md:right-0
                  ${language !== "العربية" ? "lg:-right-[330px]" : "lg:right-[100%]"}
                  lg:bottom-0
                  flex
                  flex-wrap
                  items-center
                  justify-start
                  smooth-snimation
                  gap-2
                  px-3
                  rounded-xl
                  ${showServicesMenu ? "h-[230px] py-3 rounded-es-none" : "h-0 py-0"}
                `}
              >

                {
                  bulletPoints.map(service => (
                    <p
                      key={`${service.id}ser`}
                      className={`
                        w-[48%] 
                        cursor-pointer
                        service-link
                        hover:opacity-50
                        smooth-snimation
                        hidden
                      `}
                      onClick={() => onServiceClick(service.id)}
                    >
                      {
                        language === "Russian" ? service.title.russian
                          : language === "Chinese" ? service.title.chinese
                            : language === "العربية" ? service.title.arabic
                              : service.title.english
                      }
                    </p>
                  ))
                }

              </div>
              <button
                onClick={toggleServicesMenu}
                className={`
                  bg-white 
                  text-dark 
                  w-full 
                  text-lg 
                  py-3 
                  rounded-lg 
                  md:text-xl 
                  midLarge:py-4 
                  large:w-[40%] 
                  border 
                  hover:opacity-75
                  smooth-snimation
                  flex
                  items-center
                  justify-center
                  gap-1
                  ${showServicesMenu ? "rounded-ee-none rounded-se-none" : ""}
                `}
              >
                <span>
                  {
                    language === "English"
                      ? "Shipping Services"
                      : language === "العربية" ? "خدمات الشحن"
                        : language === "Russian" ? "Услуги доставки"
                          : "运输服务"
                  }
                </span>
                {
                  showServicesMenu
                    ? (
                      <ChevronLeftIcon
                        className={`
                          w-5 
                          smooth-snimation
                          ${language === "العربية" ? "rotate-180" : ""}
                        `}
                      />
                    )
                    : (
                      <ChevronLeftIcon
                        className={`
                          w-5 
                          smooth-snimation
                          ${language !== "العربية" ? "rotate-180" : ""}
                          
                        `}
                      // style={{ transform: 'rotate(180deg)' }}
                      />
                    )
                }
              </button>

            </div>
          </div>

        </div>


        {/* Delivery */}
        <div className="w-full flex flex-col justify-center items-center">

          {/* <h1 className="text-white text-4xl ">
            {
              language === "English" ? cardsSection.paragraph.english
                : language === "العربية" ? cardsSection.paragraph.arabic
                  : language === "Russian" ? cardsSection.paragraph.russian
                    : cardsSection.paragraph.chinese
            }
          </h1> */}

          <LogisticsForm />
        </div>


        {/* Services Description */}
        <div className="w-full h-fit flex flex-col gap-3 my-[6rem] lg:my-[11rem] max-w-[1100px]">
          <h2 className="text-3xl font-bold text-blue mb-6">
            {
              language === "English"
                ? "Our Services"
                : language === "العربية" ? "خداماتنا"
                  : language === "Russian" ? "Наши услуги"
                    : "我们的服务"
            }
          </h2>
          {
            bulletPoints.map(service => (
              <div
                key={service.id}
                id={service.id}
                className="w-full h-fit rounded-lg flex flex-col items-start justify-center border border-gray-600 relative">

                <div
                  className={`
                    w-full 
                    h-[3.5rem] 
                    px-3 
                    rounded-lg
                    flex 
                    items-center 
                    jsutify-between 
                    border-b 
                    border-gray-600
                    cursor-pointer
                    hover:bg-blue
                    smooth-snimation
                  `}
                  onClick={() => {
                    activeAccordion === service.id
                      ? setActiveAccordion("")
                      : setActiveAccordion(service.id)
                  }}
                >
                  <p className="w-full">
                    {
                      language === "Russian" ? service.title.russian
                        : language === "Chinese" ? service.title.chinese
                          : language === "العربية" ? service.title.arabic
                            : service.title.english
                    }
                  </p>

                  <div>
                    {
                      activeAccordion === service.id
                        ? (
                          <ChevronDownIcon className="w-7 rotate-180 smooth-snimation" />
                        )
                        : (
                          <ChevronDownIcon className="w-7 smooth-snimation" />
                        )
                    }
                  </div>
                </div>

                <p
                  className={`
                  ${activeAccordion === service.id
                      ? "block"
                      : "h-0 hidden"
                    }
                    p-4
                    h-fit
                    smooth-snimation
                  `}
                >
                  {
                    language === "Russian" ? service.paragraph.russian
                      : language === "Chinese" ? service.paragraph.chinese
                        : language === "العربية" ? service.paragraph.arabic
                          : service.paragraph.english
                  }
                </p>
              </div>
            ))
          }
        </div>


        {/* FAQs */}
        <div
          className="
          w-full 
          max-w-[1100px] 
          min-h-[88vh] 
          
          large:mt-24 
          flex 
          flex-col 
          lg:flex-row 
          gap-12 
          snap-start 
          lg:px-0 
          lg:h-fit 
          lg:min-h-[400px] 
          lg:gap-3 
          lg:pt-3 
          relative
          mt-[7rem]
          md:mt-[9rem]
          lg:mt-[3rem]
        "
        >
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




