import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
import Linkedin from '../assets/Linkedin.png'
import Facebook from '../assets/Facebook.png'
import Twitter from '../assets/Twitter.png'
import Logo from '../assets/Logo.png'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { UseStateContext } from '../context/ContextProvider'
import { navigation } from '../lib/navLinks';




const languages = [
  {
    text: 'En',
    value: 'English',
  },
  {
    text: 'ع',
    value: 'العربية',
  },
  {
    text: 'Tur',
    value: 'Turkish',
  },
  {
    text: 'Rus',
    value: 'Russian',
  },
]

const LanguagesList = styled.button`
  position: fixed; 
  right: ${props => props.language !== "العربية" && '16%'};
  left: ${props => props.language === "العربية" && props.width < 450 && '16%'};
  top: 4.9%;
  z-index: 20;
  display: flex;
  align-items: end;


  #chvron-left {
    position: absolute;
    transform: rotate(-50deg);
    right: 68%;
    bottom: -10%;
  }

  ul.closed {
    color: transparent;
    height: 0;
    padding: 0;
    transition: all 0.4s ease-in-out;

    li {
      display: none;
    }
  }

  @media(min-width: 360px) and (max-width: 375px) {
    top: 6%;
  }

  @media(min-width: 768px) and (max-width: 1023px) {
    top: 10%;
    right: 4%;
  }

  @media(min-width: 1024px) {
    top: 50%;
    right: 4%;
  }

  @media(min-width: 1920px) {
    right: 8%;
  }
`

// const navigation = [
//   { name: 'Home', to: "/" },
//   { name: 'Services', to: "" },
//   { name: 'About us', to: "/about-us" },
//   { name: 'Branches', to: "" },
//   { name: 'Contact', to: "/contact-us" },
// ]


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {


  const { language, setLanguage } = UseStateContext();
  const setCurrentLanguage = (lang) => {
    localStorage.setItem('LANG', lang);
    setLanguage(lang);
    location.reload();
    window.scrollTo(0, 0);
    // document.querySelector('body').scrollTop = 0;
  }


  const currentLocation = useLocation();





  useEffect(() => {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        const navbar = document.getElementById("navbar")
        navbar.style.background = "#0C1118";
        navbar.style.paddingBlock = '1.5rem'
        Array.from(document.getElementsByClassName('navLinks')).map(el => el.style.color = "#fff")
        // navbar.style.top = '1rem'
        // navbar.style.border = '1px solid #1869FE'
        document.getElementById("menu-btn").style.top = '1rem'
        window.innerWidth < 450 && (document.getElementById("languages-list").style.top = '2.6%')
        window.innerWidth > 1023 && (document.getElementById("languages-list").style.top = '15%')
        document.getElementById("scroll-down-right").style.display = 'none'
      } else {
        const navbar = document.getElementById("navbar")
        navbar.style.background = "transparent";
        currentLocation.pathname === "/trade" && Array.from(document.getElementsByClassName('navLinks')).map(el => el.style.color = "#000")
        navbar.style.paddingBlock = '2rem'
        navbar.style.top = '0'
        navbar.style.border = 'none'
        window.innerWidth > 1023 && (document.getElementById("languages-list").style.top = '50%')
        window.innerWidth > 450 && (document.getElementById("scroll-down-right").style.display = 'flex')
      }
    }
  }, [currentLocation.pathname])

  const [openLangList, setOpenLangList] = useState(false);

  return (


    <>
      <div className="min-h-full bg-transparent" dir={language === "العربية" ? "rtl" : 'ltr'}>
        <Disclosure as="nav">
          {({ open }) => (
            <>
              <div
                id="navbar"
                className={`
                  w-screen
                  left-0
                  right-0
                  mx-auto 
                  py-10
                  px-4
                  xl:px-7
                  2xl:px-8
                  bg-none
                  fixed
                  top-0
                  z-20
                  flex
                  items-center
                  justify-center
                  ${currentLocation.pathname === '/trade' && "border-b border-gray-700"}
                `}
                style={{ transition: "all 500ms ease-in-out" }}
              >

                {/* Navbar */}
                <div className="flex items-center justify-between text-white w-full max-w-[1680px] ">
                  <div className="w-full flex items-center justify-between">
                    <div className='flex items-center gap-3 xl:gap-20'>
                      <NavLink to="/" className="flex-shrink-0">
                        <img
                          className="h-6 xl:h-7 w-auto logos"
                          src={Logo}
                          alt="Your Company"
                        />
                      </NavLink>
                      <div className="hidden md:block">
                        <div className="flex items-baseline space-x-4">
                          {navigation.map((item) => (
                            item.name.english !== "Branches" && item.name.english !== "Services" ?
                              <NavLink
                                href={item.to}
                                key={item.name.english}
                                to={item.to}
                                style={{color: `${currentLocation.pathname === '/trade' ? "#000" : "#fff"}`}}
                                className={({ isActive }) => classNames(
                                  isActive && item.name.english !== "Home"
                                    ? 'bg-dark text-white'
                                    : 'text-dark hover:bg-blue hover:text-white',
                                    'rounded-md px-2 md:px-1 xl:px-3 2xl:px-11 py-2 xl:text-lg font-medium text-white md:text-sm navLinks',
                                    
                                )}
                              >
                                {
                                  language === "English"
                                    ? item.name.english
                                    : item.name.arabic
                                }
                              </NavLink>
                              :
                              <a
                                key={item.name.english}
                                href={item.to}
                                style={{color: `${currentLocation.pathname === '/trade' ? "#000" : "#fff"}`}}
                                className={
                                  `
                                rounded-md 
                                px-2 
                                md:px-1 
                                xl:px-3 
                                2xl:px-6 
                                py-2 
                                xl:text-md 
                                font-medium 
                                md:text-sm 
                                navLinks
                                hover:bg-blue 
                                hover:text-white
                                `
                                }
                              >
                                {
                                  language === "English"
                                    ? item.name.english
                                    : item.name.arabic
                                }
                              </a>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-between">
                      <NavLink to="/login" id="login-btn" className="navLinks" style={{color: `${currentLocation.pathname === '/trade' ? "#000" : "#fff"}`}}>
                        {
                          language === "English"
                            ? "Login"
                            : "تسجيل الدخول"
                        }
                      </NavLink>
                      <div className='bg-blue h-6 w-[2px] rounded mx-5' />
                      <button className='bg-blue text-white 2xl:text-sm font-semibold pb-2 pt-3 px-5 rounded-md hover:opacity-80'>
                        {
                          language === "English"
                            ? "Get Quote"
                            : "احصل على عرض"
                        }
                      </button>
                    </div>
                  </div>


                  {/* Mobile menu button */}
                  <div className={
                    `
                      flex
                      md:hidden 
                      fixed 
                      ${language === "العربية" ? "left-4" : "right-4"}
                      top-9
                      z-15
                    `
                  }
                    id="menu-btn"
                  >
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden bg-[#fff] pb-2 fixed top-0 z-10 w-full pt-20" >
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3" >
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name.arabic}
                      to={item.to}
                      className={({ isActive }) => classNames(
                        isActive && item.name.english !== "Home" && item.name.english !== "Services" && item.name.english !== "Branches"
                          ? 'bg-gray-900 text-white' : 'text-dark hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                    >
                      {
                        language === "English"
                          ? item.name.english
                          : item.name.arabic
                      }
                    </NavLink>
                  ))}
                </div>
                <div className="px-2 sm:px-3">
                  <button className='bg-blue text-white font-semibold py-2 px-5 rounded-xl hover:opacity-80'>
                    Subscribe
                  </button>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Language Icon */}
        <LanguagesList 
        language={language}
        width={window.innerWidth}
        className={`${currentLocation.pathname === "/trade" && "text-black"} text-gray-300`} id="languages-list" 
        onClick={() => setOpenLangList(!openLangList)}
        >

          <div>
            <ChevronLeftIcon className='w-3' id='chvron-left' />

            <GlobeAltIcon
              className='
            w-6     
            '
            />
          </div>

          <ul className=
            {`
            bg-gray-300
            w-10
            text-dark
            py-3
            rounded-lg
            absolute
            top-[100%]
            right-[10%]
            ${!openLangList && 'closed'}
          `
            }
          >
            {
              languages.map(lang => (
                <li key={lang.text} className={`border-b border-dark w-full hover:opacity-70 ${language === lang.value && "bg-blue text-white"}`} onClick={() => setCurrentLanguage(lang.value)}>
                  {lang.text}
                </li>
              ))
            }
          </ul>

          <span className='hidden lg:flex items-center justify-center rotate-90 absolute w-[6rem] -bottom-16 -right-9 -z-10' id='scroll-down-right'>scroll down <ChevronRightIcon className='w-3' /> </span>
        </LanguagesList>
        <Outlet />


        {/* Footer */}
        <div
          className={`
          w-full 
          bg-dark 
          text-white
            flex
            items-center
            sticky
            top-[100vh]
            ${currentLocation.pathname === "/trade" && "border-t border-gray-600"}
          `}
        >

          <div
            className='
            w-full
            max-w-screen-3xl
            mx-auto 
            py-12
            px-4
            xl:px-12
            2xl:px-28
            flex
            flex-col
            md:flex-row
            items-start
            justify-between
            '
          >
            <div className='addres my-2 h-full'>
              <h1 className='font-bold'>Address</h1>

              <div className='flex flex-col gap-5 my-4'>
                <div className='flex items-center gap-3'>
                  <MapPinIcon className='w-6 h-auto' />
                  <p>385020, maykop, proletarskaya, 334, office 316</p>
                </div>
                <div className='flex items-center gap-3'>
                  <PhoneIcon className='w-6 h-auto' />
                  <p>+793 855 09782</p>
                </div>
                <div className='flex items-center gap-3'>
                  <EnvelopeIcon className='w-6 h-auto' />
                  <p>info@karllc-group.com</p>
                </div>
                <div className='flex items-center gap-3'>
                  <img src={Facebook} alt='Facebook' />
                  <img src={Twitter} alt='Twitter' />
                  <img src={Linkedin} alt='Linkedin' />
                </div>
              </div>
            </div>

            <div className='quick-links my-2 sm:h-[14.5rem]'>
              <h1 className='font-bold'>Quick Links</h1>

              <div className='my-4'>
                <h3>Partners</h3>
                <h3>About</h3>
                <h3>Jobs</h3>
                <h3>Finance</h3>
              </div>
            </div>

            <div className='w-36 py-2 px-6 border border-blue rounded-md'>
              <img src={Logo} />
            </div>
            <div className='border-b border-gray-500 w-[98%] absolute bottom-8 left-0 right-0 mx-auto xs:hidden' />
            <div className='absolute bottom-1 text-center'>&#169;KAR LLC, all right reserved.</div>
          </div>

        </div>


      </div >
    </>
  )
}