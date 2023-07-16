import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon, ChevronRightIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/outline'
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'
// import Logo from '../assets/Logo.png'
// import Linkedin from '../assets/Linkedin.png'
// import Facebook from '../assets/Facebook.png'
// import Twitter from '../assets/Twitter.png'
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
    text: 'Chi',
    value: 'Chinese',
  },
  {
    text: 'Rus',
    value: 'Russian',
  },
]
const Button = styled.button`
    z-index: 1000;
    cursor: pointer;
`
const LanguagesList = styled.button`
  position: relative; 
  z-index: 20;
  display: flex;



  ul.closed {
    color: transparent;
    padding: 0;
    transition: all 0.4s ease-in-out;

    li {
      display: none;
    }
  }

`

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DefaultLayout() {


  const { language, setLanguage, setLoading, openMenu, setOpenMenu, onScrollableLinkClick } = UseStateContext();
  const setCurrentLanguage = (lang) => {
    localStorage.setItem('LANG', lang);
    setLanguage(lang);
    location.reload();
    window.scrollTo(0, 0);
    setLoading(true)
  }


  const currentLocation = useLocation();
  const navigate = useNavigate();

  // const scrollTo = (id) => {
  //   window.scrollTo({ top: `${document.getElementById(id).offsetTop}` });
  // };

  // const onScrollableLinkClick = (id) => {
  //   if (currentLocation.pathname !== "/") {
  //     setLoading(true)
  //     navigate("/");
  //     setOpenMenu(false)
  //     setTimeout(() => {
  //       scrollTo(id)
  //     }, 150)
  //   } else {
  //     setOpenMenu(false)
  //     scrollTo(id)
  //   }
  // }



  function topFunction() {
    document.querySelector('body').scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    let mybutton = document.getElementById("scrollTop");

    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        mybutton.style.display = "block";
        const navbar = document.getElementById("navbar")
        navbar.style.background = "#0C1118";
        navbar.style.paddingBlock = '1.5rem'
        Array.from(document.getElementsByClassName('navLinks')).map(el => el.style.color = "#fff")
        currentLocation.pathname === "/trade" || currentLocation.pathname === "/about-us" ? (document.getElementById("languages-list").style.color = '#fff') : document.getElementById("languages-list").style.color = '#fff'
        document.getElementById("scroll-down-right").style.display = 'none'

      } else {

        mybutton.style.display = "none";
        document.getElementById("menu-btn").style.top = 'unset'
        const navbar = document.getElementById("navbar")
        navbar.style.background = "transparent";
        // currentLocation.pathname === "/trade" && Array.from(document.getElementsByClassName('navLinks')).map(
        //   el => el.style.color = "#000"
        // );
        (currentLocation.pathname === "/about-us") && Array.from(document.getElementsByClassName('navLinks')).map(
          (el, i) => {
            if (i !== 2) { el.style.color = "#000" }
            // if (el.href !== "/about-us") { el.style.color = "#000" }
          }
        )
        navbar.style.paddingBlock = '2rem'
        navbar.style.top = '0'
        navbar.style.border = 'none';
        (currentLocation.pathname === "/about-us") && (document.getElementById("languages-list").style.color = 'black')
        window.innerWidth > 450 && currentLocation.pathname !== "/contact-us" && (document.getElementById("scroll-down-right").style.display = 'flex')
      }
    }

    // handle scroll to top on mount
    document.scrollTop = 0;
  }, [currentLocation.pathname])

  const [openLangList, setOpenLangList] = useState(false);



  return (


    <>
      <div className="min-h-full bg-transparent" dir={language === "العربية" ? "rtl" : 'ltr'}>
        <Disclosure as="nav">
          {() => (
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
                `}
                style={{ transition: "all 500ms ease-in-out" }}
              >

                {/* Navbar */}
                <div className="flex items-center justify-between text-white w-full max-w-[1680px] ">
                  <div className="w-full flex items-center justify-between">
                    <div className='flex items-center gap-3 xl:gap-20'>
                      <NavLink to="/" className="flex-shrink-0" onClick={() => { setLoading(true); setTimeout(() => { location.reload() }, 100) }}>
                        <img
                          className="h-8 xl:h-10 w-auto logos"
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
                                onClick={() => {
                                  if (item.to === "/services" || item.to === "/branches") {
                                    onScrollableLinkClick(item.to.split("#")[1], currentLocation, navigate)
                                  } else {
                                    setTimeout(() => {
                                      location.reload();
                                    }, 100)
                                    setLoading(true)
                                  }
                                }}
                                style={{
                                  color: `
                                  ${item.to === currentLocation.pathname ? "#fff"
                                      : (currentLocation.pathname === '/about-us')
                                        ? "#000"
                                        : "#fff"
                                    }
                                      `
                                }}
                                className={({ isActive }) => classNames(
                                  isActive && item.name.english !== "Home"
                                    ? 'bg-dark text-white'
                                    : 'text-dark hover:bg-blue hover:text-white',
                                  'rounded-md px-2 md:px-1 xl:px-3 2xl:px-8 py-2 xl:text-lg font-medium text-white md:text-sm navLinks',

                                )}
                              >
                                {
                                  language === "English"
                                    ? item.name.english
                                    : language === "العربية" ? item.name.arabic
                                      : language === "Russian" ? item.name.russian
                                        : item.name.chinese
                                }
                              </NavLink>
                              :
                              <button
                                key={item.name.english}
                                // href={item.to}
                                onClick={() => onScrollableLinkClick(item.to.split("#")[1], currentLocation, navigate)}
                                style={{ color: `${(currentLocation.pathname === '/about-us') ? "#000" : "#fff"}` }}
                                className={
                                  `
                                  rounded-md px-2 md:px-1 xl:px-3 2xl:px-8 py-2 xl:text-lg font-medium text-white md:text-sm navLinks
                                `
                                }
                              >
                                {
                                  language === "English"
                                    ? item.name.english
                                    : language === "العربية" ? item.name.arabic
                                      : language === "Russian" ? item.name.russian
                                        : item.name.chinese
                                }
                              </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">

                      {/* Language Icon */}
                      <LanguagesList
                        language={language}
                        width={window.innerWidth}
                        className={`${currentLocation.pathname === "/about-us" ? "text-black" : "text-gray-300"}`} id="languages-list"
                        onClick={() => setOpenLangList(!openLangList)}
                      >
                        {/* ${currentLocation.pathname === "/contact-us" && 'hidden'} */}
                        <div className={`flex items-center `}>
                          {/* <ChevronLeftIcon className={`w-3`} id='chvron-left' /> */}

                          <p className='pt-1'>
                            {
                              language === "العربية" ? "ع"
                                : language.substring(0, 2)
                            }
                          </p>

                          <GlobeAltIcon
                            className='
                            w-6     
                            '
                          />
                        </div>

                        <ul className=
                          {`
                          bg-dark
                          border
                          border-gray-700
                          border-t-0
                          border-b-0
                          w-10
                          text-white
                          rounded-sm
                          absolute
                          top-10
                          md:top-6
                          right-0
                          ${!openLangList && 'closed'}
                        `}
                        >
                          {
                            languages.map(lang => (
                              <li key={lang.text} className={`border-b border-gray-700 py-1 w-full hover:opacity-70 ${language === lang.value && "bg-blue text-white"}`} onClick={() => setCurrentLanguage(lang.value)}>
                                {lang.text}
                              </li>
                            ))
                          }
                        </ul>

                      </LanguagesList>
                      {/* <NavLink to="/login" id="login-btn" className="navLinks" style={{ color: `${(currentLocation.pathname === '/trade' || currentLocation.pathname === '/about-us') ? "#000" : "#fff"}` }}>
                        {
                          language === "English"
                            ? "Login"
                            : "تسجيل الدخول"
                        }
                      </NavLink> */}
                      <div className='bg-blue h-6 w-[2px] rounded mx-5' />

                      <NavLink
                        to="https://dev.karllc-group.com/"
                        target="_blank"
                        className="hidden lg:block me-6"
                      >
                        Login
                      </NavLink>

                      <button className='hidden md:block bg-blue text-white 2xl:text-sm font-semibold pb-2 pt-3 px-5 rounded-md hover:opacity-80' onClick={() => onScrollableLinkClick("kar-in-numbers", currentLocation, navigate)}>
                        {
                          language === "English"
                            ? "Get a Quote"
                            : language === "العربية" ? "احصل على عرض"
                              : language === "Russian" ? "получить цитату"
                                : "获取报价"
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
                    <Disclosure.Button onClick={() => setOpenMenu(!openMenu)} className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {openMenu ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              {/* <Disclosure.Panel className="md:hidden bg-[#fff] pb-2 fixed top-0 z-10 w-full pt-20" > */}
              {
                openMenu &&
                < div className="lg:hidden bg-[#fff] pb-2 fixed top-0 z-10 w-full pt-20">
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3" >
                    {navigation.map((item) => (
                      item.name.english !== "Branches" && item.name.english !== "Services" ?
                        <NavLink
                          key={item.name.arabic}
                          to={item.to}
                          onClick={() => { setLoading(true); setOpenMenu(false) }}
                          className={({ isActive }) => classNames(
                            isActive && item.name.english !== "Home" && item.name.english !== "Services" && item.name.english !== "Branches"
                              ? 'bg-gray-900 text-white' : 'text-dark hover:bg-gray-700 hover:text-white',
                            'block rounded-md px-3 py-2 text-base font-medium'
                          )}
                        >
                          {
                            language === "English"
                              ? item.name.english
                              : language === "العربية" ? item.name.arabic
                                : language === "Russian" ? item.name.russian
                                  : item.name.chinese
                          }
                        </NavLink>
                        :
                        <button
                          key={item.name.english}
                          onClick={() => onScrollableLinkClick(item.to.split("#")[1], currentLocation, navigate)}
                          className={
                            `
                          rounded-md px-3 md:px-1 xl:px-3 2xl:px-8 py-2 xl:text-lg font-medium md:text-sm navLinks
                        `
                          }
                        >
                          {
                            language === "English"
                              ? item.name.english
                              : language === "العربية" ? item.name.arabic
                                : language === "Russian" ? item.name.russian
                                  : item.name.chinese
                          }
                        </button>
                    ))}
                  </div>
                  <div className="px-2 sm:px-3">
                    <button className='bg-blue text-white font-semibold py-2 px-5 rounded-xl hover:opacity-80' onClick={() => onScrollableLinkClick("kar-in-numbers", currentLocation, navigate)}>
                      Get a Quote
                    </button>
                  </div>
                </div>
              }
              {/* </Disclosure.Panel> */}
            </>
          )}
        </Disclosure>


        <span className={`
          hidden 
          text-white
          ${currentLocation.pathname !== "/contact-us" && 'lg:flex'}
          items-center 
          justify-center 
          rotate-90
          absolute
          right-20
          top-[60%]
          w-[6rem]  
          `}
          id='scroll-down-right'
        >
          scroll down
          <ChevronRightIcon className='w-3' />
        </span>

        <Button
          id="scrollTop"
          // title="Go to top"
          onClick={topFunction}
          className="
                            hidden
                            p-4
                            bg-blue
                            fixed
                            bottom-[40px]
                            right-[20px]
                            rounded-full
                            text-white
                            hover:opacity-50
                            hover-effect
                        "
        >
          <ChevronDoubleUpIcon className="w-6" />
        </Button>

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
            ${(currentLocation.pathname === "/trade" || currentLocation.pathname === "/about-us") && "border-t border-gray-600"}
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
                  <p>+0238364610</p>
                </div>
                <div className='flex items-center gap-3'>
                  <EnvelopeIcon className='w-6 h-auto' />
                  <p>info@karllc-group.com</p>
                </div>
                {/* <div className='flex items-center gap-3'>
                  <img src={Facebook} alt='Facebook' />
                  <img src={Twitter} alt='Twitter' />
                  <img src={Linkedin} alt='Linkedin' />
                </div> */}
              </div>
            </div>

            <div className='quick-links my-2 sm:h-[14.5rem]'>
              <h1 className='font-bold'>Quick Links</h1>

              <div className='my-4'>
                <NavLink onClick={() => setLoading(true)} className="block cursor-pointer hover:text-blue" to="/trade">Trade</NavLink>
                <NavLink onClick={() => setLoading(true)} className="block cursor-pointer hover:text-blue" to="/logistics">Logistics</NavLink>
                <NavLink onClick={() => setLoading(true)} className="block cursor-pointer hover:text-blue" to="/about-us">About</NavLink>
                <NavLink onClick={() => setLoading(true)} className="block cursor-pointer hover:text-blue" to="/contact-us">Contact us</NavLink>
              </div>
            </div>

            <div className='w-36 py-2 px-6 rounded-md'>
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
