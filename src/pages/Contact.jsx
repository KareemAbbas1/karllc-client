import styled from "styled-components"
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline"
import ContactUsBG from "../assets/ContactUsBG.jpg"
// import Facebook from '../assets/Facebook.png'
// import Twitter from '../assets/Twitter.png'
// import ScrollToTop from "../components/ScrollToTop"
import { UseStateContext } from "../context/ContextProvider"
// import { useEffect } from "react"
// import Loader from "../components/Loader"
import { Facebook, Whatsapp, Instagram, Linkedin } from "react-bootstrap-icons"
import Loader from "../components/Loader"
import { useEffect } from "react"
import ScrollToTop from "../components/ScrollToTop"
// import { useForm, ValidationError } from '@formspree/react';



const Container = styled.div`
  background-image: ${`url(${ContactUsBG})`};

  textarea {
      resize: none;
  }

  .form-container {
        background: linear-gradient(152.97deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        backdrop-filter: blur(21px);
        /* Note: backdrop-filter has minimal browser support */
        border-radius: 16px;

        textarea {
            resize: none;
        }
    }
`
const OverLay = styled.div`
    width: 100%;
    height: 110%;
    position: absolute;
    background: #0C1118;
    opacity: 0.5;
`

const Contact = () => {


  const { language, loading, setLoading } = UseStateContext();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])



  // const [state, handleSubmit] = useForm("xbjvrgnd");

  return (
    // <PageComponent>
    <Container className="
    w-screen 
    h-[110%] 
    lg:h-[120vh] 
    bg-dark 
    pt-28 
    pb-2 
    px-4 
    md:px-24 
    flex 
    items-center 
    justify-center
    bg-cover
    bg-no-repeat
    bg-center
    "
    >
      <ScrollToTop />
      {
        loading &&
        <div className="bg-dark w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <div>
            <Loader />
          </div>
        </div>
      }
      {/* <ScrollToTop /> */}

      <OverLay />

      <div className="
            max-w-screen-xl 
            w-full 
            h-full
            lg:h-[700px] 
            text-dark 
            bg-white 
            lg:bg-transparent
            flex 
            flex-col 
            justify-between 
            gap-3 
            py-6 
            px-3 
            md:px-10 
            md:py-12 
            rounded-2xl
            lg:flex-row
            lg:items-center
            form-container
            `
            "
      >
        <div className="py-0 my-0 lg:pb-6 lg:px-4 lg:rounded-xl text-white lg:w-[50%] lg:h-full xl:flex flex-col justify-center">
          <h1 className="text-blue text-3xl lg:text-2xl xl:text-4xl font-semibold border-s-4 border-blue px-2 mb-6 xl:mb-16 pt-2">
            {
              language === "English"
                ? "Contact Us"
                : "تواصل معنا"
            }
          </h1>
          <p className="lg:bg-transparent text-sm px-2 py-3 rounded-lg mb-2 xl:mb-8">
            {
              language === "English"
                ? "Lorem ipum for Test to b Wirtten Today so we don’t. Also you don’t know if lorem ipsum back. Either ways do for yet still just to, but in order to iptum sor. Lorem ipum for Test to b Wirtten Today so we don’t. Also you don’t know if lorem ipsum back. Either ways do for yet still just to, but in order to iptum sor."
                : "عربي"
            }
          </p>
          <div>
            <div className="p-0 m-0 lg:bg-transparent px-1 py-3 rounded-xl">
              <div className='flex flex-col gap-5'>
                <div className='flex items-center gap-3'>
                  <MapPinIcon className='w-8 h-auto text-white' />
                  <p className="text-sm">
                    {
                      language === "English"
                        ? "385020, Maykop, Proletarskaya, 334, office 316"
                        : "385020, Maykop, Proletarskaya, 334, office 316"
                    }
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <PhoneIcon className='w-8 h-auto text-white' />
                  <p>
                    {
                      language === "English"
                        ? "+793 855 09782"
                        : "793 855 09782+"
                    }
                  </p>
                </div>
                <div className='flex items-center gap-3'>
                  <EnvelopeIcon className='w-8 h-auto text-white' />
                  <p>info@karllc-group.com</p>
                </div>
                <div className='flex items-center gap-3'>
                  <Facebook size={30} className='text-white hover:text-[#0165E1] hover-effect cursor-pointer' />
                  <Instagram size={30} className='text-white hover:text-[#833AB4] hover-effect cursor-pointer' />
                  <Linkedin size={30} className='text-white hover:text-[#0A66C2] hover-effect cursor-pointer' />
                  <Whatsapp
                    className='text-white hover:text-[#25D366] hover-effect cursor-pointer'
                    size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>


        <form className="flex flex-col lg:justify-center text-white px-2 lg:px-6 py-3 rounded-xl h-full lg:w-full lg:shadow-lg">
          <div className="w-full flex flex-col">
            <label className="mb-1">
              {
                language === "English"
                  ? "Name"
                  : "الأسم"
              }
              <span className="text-[red]">*</span></label>

            <input
              id="contact-us-name"
              type="text"
              name="name"
              className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
              required
            />

            <label className="mb-1">
              {
                language === "English"
                  ? "Email"
                  : "البريد الإلكتروني"
              }
              <span className="text-[red]">*</span></label>

            <input
              id="contact-us-email"
              type="email"
              name="email"
              className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
              required
            />

            <label className="mb-1">
              {
                language === "English"
                  ? "Subject"
                  : "الموضوع"
              }
            </label>

            <input
              id="contact-us-subject"
              type="text"
              name="subject"
              className="h-10 px-2 lg:h-12 mb-3 lg:mb-4 rounded-lg border border-gray-400 bg-transparent"
            />
          </div>

          <label className="mb-1">
            {
              language === "English"
                ? "Message"
                : "الرسالة"
            }
            <span className="text-[red]">*</span></label>

          <textarea
            id="contact-us-message"
            name="message"
            rows="4"
            className="border-gray-400 bg-transparent rounded-lg lg:h-48"
            required
          />


          <button
            type="submit"
            className="bg-blue text-white text-xl mt-4 py-2 rounded-lg font-semibold lg:w-[30%] lg:self-end hover:opacity-75">
            {
              language === "English"
                ? "Send Message"
                : "إرسل"
            }
          </button>
        </form>
      </div>
    </Container>
    // </PageComponent>
  )
}

export default Contact