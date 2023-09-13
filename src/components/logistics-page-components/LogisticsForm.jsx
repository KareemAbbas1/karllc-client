import { useState } from "react";
import {
  products,
  cargoTypes,
  cargoDetails,
  deliveryTypes,
  seaTransportaionTypes,
  landTransportaionTypes,
  transportationDetails,
  containerTypes,
  shipsTypes,
  trucksTypes,
  associatedServices
} from "../../lib/logisticsForm";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CountryList from "./CountryList";
import axios from "axios";
import Loader from "../Loader";
import { UseStateContext } from "../../context/ContextProvider";

const LogisticsForm = () => {

  const { language } = UseStateContext();

  const [formData, setFormData] = useState({
    product: "",
    cargoType: "",
    cargoDetails: {},
    deliveryType: "Sea",
    transportationType: "Full Container Load FCL",
    transportationDetails: {},
    from: "",
    to: "",
    readyToLoad: "",
    additionalInfo: null,
    associatedServices: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: null,
    invoiceAmount: null
  })


  console.log(formData)
  const [showProducts, setShowProducts] = useState(false);
  const [showCargoTypes, setShowCargoTypes] = useState(false);
  const [showCargoDetails, setShowCargoDetails] = useState(false);
  const [showTransportaionType, setShowTransportaionType] = useState(false);
  const [showContainerTypes, setShowContainerTypes] = useState(false);
  const [showShipsTypes, setShowShipsTypes] = useState(false);
  const [showTrucksTypes, setShowTrucksTypes] = useState(false);


  const handleCheckboxChange = (el, service) => {
    let newArr = formData.associatedServices;
    let elIndex;
    if (el.checked) {
      newArr.push(service);
      setFormData((prev) => {
        return { ...prev, associatedServices: newArr }
      })
    } else {
      elIndex = formData.associatedServices.indexOf(service)
      if (elIndex > -1) {
        formData.associatedServices.splice(elIndex, 1);
        service === "Insurance" && setFormData((prev) => {
          return { ...prev, invoiceAmount: null }
        })
        newArr = formData.associatedServices;
        setFormData((prev) => {
          return { ...prev, associatedServices: newArr }
        })
      }
    }
  }


  // Handle Submit
  const [sendLoading, setSendLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSendLoading(true);
    setSubmitting(true);

    axios.post('https://www.karllc-group.com/karllc-mailer/get-logistics-qoute.php', formData)
      .then(() => {
        setSendLoading(false);
        setSucceeded(true);
        console.log("Success");
        document.getElementById("logistics-get-goute").reset();
        setFormData({});
        setSubmitting(false);
        setTimeout(() => {
          setSucceeded(false);
        }, 5000);
      })
      .catch((err) => {
        setError(true);
        setErrorMsg("Message could not be sent. Please try again later.");
        document.getElementById("logistics-get-goute").reset();
        setFormData({});
        setSendLoading(false);
        setTimeout(() => {
          setSubmitting(false);
          setError(false);
        }, 10000);
        console.error("Error", err);
      })
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full 
        max-w-[1100px] 
        min-h-[500px] 
        border 
        border-gray-600 
        rounded-lg 
        relative 
        mb-6 
        pb-4 
        px-3
        lg:px-7
        flex 
        flex-col 
        gap-12
        lg:mt-24
        slide-top-animation
      "
      id="logistics-get-goute"
      onClick={() => {
        showProducts === true && setShowProducts(false);
        showTransportaionType === true && setShowTransportaionType(false);
        showContainerTypes === true && setShowContainerTypes(false);
        showShipsTypes === true && setShowShipsTypes(false);
      }}
    >



      <h1
        className={`
          absolute 
          ${language === "العربية" ? "right-1 lg:right-5" : "left-1 lg:left-5"}
          -top-[1.5rem] 
          h-[3rem] 
          flex 
          items-center
          px-1
          text-3xl 
          font-bold
          bg-dark
          text-blue
          lg:text-5xl
        `}
      >
        {
          language === "Chinese" ? "请求报价"
            : language === "Russian" ? "Сделать заказ"
              : language === "العربية" ? "طلب عرض أسعار"
                : "Request a Quote"
        }
      </h1>
      {
        sendLoading
          ? (

            <div className="w-screen h-screen bg-[rgba(0,0,0,0.7)] fixed top-0 left-0 z-[100] flex flex-col gap-3 items-center justify-center">
              <Loader />
              <p>Sending...</p>
            </div>
          )
          : (
            <>

              {/* Send success modal */}
              <div className={`
                    w-screen 
                    h-fit 
                    fixed 
                    left-0 
                    z-[100] 
                    flex 
                    flex-col 
                    gap-3 
                    items-center 
                    justify-start 
                    pt-3 
                    slide-top-animation
                    top-0
                    ${succeeded || error ? "translate-y-[20%]" : "-translate-y-[100%]"}
                  `}>
                <div
                  className={`
                    w-[90%] 
                    h-[4rem] 
                    max-w-[1100px] 
                    overflow-hidden 
                    bg-dark 
                    border 
                    ${succeeded ? "border-blue" : "border-[red]"}
                    rounded-lg 
                    flex 
                    items-center 
                    px-4
                    `}
                >
                  <p>
                    {
                      succeeded ? "Message sent successfully." : errorMsg
                    }
                  </p>
                </div>
              </div>

              {/* Cargo Details */}
              <div
                className="
                  w-full
                  mt-[2rem]
                  flex
                  flex-col
                  items-start
                  justify-center
                  gap-4
                  max-w-[1100px]
                  lg:mt-[4rem]
                  
                "

              >
                <h2 className="text-lg font-semibold">Cargo Details</h2>

                <div className="flex flex-col gap-3 w-full relative" >
                  <label className="text-gray-400">Product <span className="text-[red]">*</span></label>

                  <div className="relative md:w-[84%] lg:w-[81%]">
                    <input
                      className="
                        w-full
                        border 
                        border-gray-600 
                        px-2 
                        h-[3rem] 
                        flex 
                        items-center 
                        cursor-pointer
                        rounded-md
                        bg-dark
                        flex
                        justify-between
                        z-[1]
                      "
                      name="product"
                      placeholder="Choose commodity type"
                      required
                      defaultValue={formData.product}
                      onClick={() => setShowProducts(!showProducts)}
                    />


                    <span className="
            absolute 
            right-5 
            top-0 
            bottom-0 
            my-auto 
            mt-3 
            cursor-pointer 
            text-xl 
            h-fit
            z-10
            "
                      onClick={() => {
                        setFormData((prev) => {
                          return { ...prev, product: "", cargoType: "", cargoDetails: {} }
                        });
                        setShowCargoTypes(false);
                        setShowCargoDetails(false);
                        setShowProducts(false);
                      }}
                    >
                      {
                        formData.product
                          ? "x"
                          : showProducts
                            ? <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" style={{ transform: 'rotate(180deg)' }} />
                            : <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" />

                      }
                    </span>

                    {
                      showProducts &&
                      <div className="
              border 
              border-gray-600 
              absolute 
              bg-dark 
              z-10
              w-[85vw]
              md:w-full
              max-h-[300px]
              overflow-y-scroll
              smooth-snimation
              ">

                        {
                          products.map(p => (
                            <p
                              key={p}
                              className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                              onClick={(e) => {
                                setFormData((prev) => {
                                  return { ...prev, product: e.target.innerText }
                                });
                                setShowProducts(!showProducts);
                                setShowCargoTypes(true);
                              }}>
                              {p}
                            </p>
                          ))
                        }
                      </div>
                    }

                    {
                      showCargoTypes &&
                      <div className="w-full flex flex-nowrap gap-2 overflow-x-auto py-7 ">
                        {

                          cargoTypes.map(t => (
                            <div
                              key={t}
                            >
                              <label htmlFor={t}
                                className={`
                          block
                          w-[150px]
                          border
                          border-gray-600
                          px-2
                          py-1
                          flex
                          justify-center
                          rounded-3xl
                          cursor-pointer
                          ${formData.cargoType === t ? "bg-blue" : "bg-dark"}
                        `}
                                onClick={() => {
                                  setFormData((prev) => {
                                    return { ...prev, cargoType: t, cargoDetails: {} }
                                  });
                                  setShowCargoDetails(true);
                                }}
                              >{t}</label>
                              <input
                                id={t}
                                type="radio"
                                className="hidden"
                              />
                            </div>
                          ))
                        }

                      </div>
                    }

                    {
                      showCargoDetails &&
                      <div className="flex flex-col gap-3 my-8 md:flex-row md:justify-between md:items-center">
                        {
                          cargoDetails.filter(item => item.cargoType === formData.cargoType).map(i => (
                            <div
                              key={i.name}
                              className="flex flex-col gap-2 md:w-[50%]"
                            >
                              <label className="text-gray-400">{i.name}{i.required && (<span className="text-[red]">*</span>)}</label>
                              <input
                                required={i.required}
                                className="
                          w-full 
                          border 
                          border-gray-600 
                          px-2 
                          h-[3rem] 
                          flex 
                          items-center 
                          cursor-text
                          rounded-md
                          bg-dark
                          flex
                          justify-between
                        "
                                onChange={(e) =>
                                  setFormData((prev) => {
                                    return { ...prev, cargoDetails: { ...formData.cargoDetails, [i.name]: e.target.value } }
                                  })}
                              />
                            </div>
                          ))
                        }
                      </div>
                    }
                  </div>
                </div>
              </div>


              {/* Delivery */}
              <div>
                <h2 className="text-lg font-semibold">Delivery</h2>

                <div className="flex flex-col gap-3 w-full relative" >
                  <div className="w-fit flex items-center gap-3 bg-gray-900 p-1 rounded-lg">
                    {
                      deliveryTypes.map(type => (
                        <div
                          onClick={() => {
                            formData.deliveryType !== type &&
                              setFormData((prev) => {
                                return { ...prev, deliveryType: type, transportationType: "Full Container Load FCL", transportationDetails: {} }
                              });
                            document.getElementById("Container Type")
                              && (document.getElementById("Container Type").value = "")
                          }
                          }
                          key={type}
                          className={`
                    text-lg
                    rounded-md
                    cursor-pointer
                    p-0
                    w-[4rem]
                    h-[2rem]
                    flex
                    items-center
                    justify-center
                    ${formData.deliveryType === type ? "bg-blue" : "bg-dark"}
                  `}
                        >
                          {type}
                        </div>
                      ))
                    }
                  </div>

                  <div className="flex flex-col gap-3 my-8 md:w-[84%] lg:w-[80%] relative">
                    <label className="text-gray-400">Transportation by <span className="text-[red]">*</span></label>
                    <input
                      required
                      className="
                        w-full 
                        border 
                        border-gray-600 
                        px-2 
                        h-[3rem] 
                        flex 
                        items-center 
                        cursor-text
                        rounded-md
                        bg-dark
                        flex
                        justify-between
                      "
                      defaultValue={formData.transportationType}
                      onClick={() => setShowTransportaionType(!showTransportaionType)}
                    />

                    <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowTransportaionType(!showTransportaionType)}>
                      {
                        showTransportaionType
                          ? <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" style={{ transform: 'rotate(180deg)' }} />
                          :
                          <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" />
                      }
                    </span>


                    {
                      showTransportaionType && (


                        <div
                          className="
                            border 
                            border-gray-600  
                            bg-dark 
                            z-10
                            w-[85vw]
                            md:w-full
                            max-h-[300px]
                            overflow-y-scroll
                            smooth-snimation
                            absolute
                            top-[100%]
                          "
                        >

                          {
                            formData.deliveryType === "Sea"
                              ?
                              seaTransportaionTypes.map(t => (
                                <p
                                  key={t}
                                  className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                                  onClick={(e) => {
                                    setFormData((prev) => {
                                      return { ...prev, transportationType: e.target.innerText, transportationDetails: {} }
                                    });
                                    setShowTransportaionType(!showTransportaionType);
                                  }}>
                                  {t}
                                </p>
                              ))
                              :
                              landTransportaionTypes.map(t => (
                                <p
                                  key={t}
                                  className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                                  onClick={(e) => {
                                    setFormData((prev) => {
                                      return { ...prev, transportationType: e.target.innerText }
                                    });
                                    setShowTransportaionType(!showTransportaionType);
                                  }}>
                                  {t}
                                </p>
                              ))
                          }
                        </div>
                      )
                    }
                  </div>

                  <div
                    className="flex flex-col gap-6 md:flex-row md:flex-wrap md:w-[84%] lg:w-[81%]"
                  >
                    {
                      transportationDetails.filter(item => item.transTypes.includes(formData.transportationType)).map(type => (
                        <div
                          key={type.name}
                          className="flex flex-col gap-3 md:w-[48%] relative"
                        >
                          <label className="text-gray-400">{type.name} {type.required && (<span className="text-[red]">*</span>)}</label>
                          <input
                            required={type.required}
                            className="
                      w-full 
                      border 
                      border-gray-600 
                      px-2 
                      h-[3rem] 
                      rounded-md
                      bg-dark
                  "
                            onClick={() =>
                              type.name === "Container Type"
                                ? setShowContainerTypes(!showContainerTypes)
                                : type.name === "Ship Type" ? setShowShipsTypes(!showShipsTypes)
                                  : type.name === "Truck Type" && setShowTrucksTypes(!showTrucksTypes)
                            }
                            id={type.name}
                            onChange={(e) =>
                              setFormData((prev) => {
                                return {
                                  ...prev, transportationDetails: {
                                    ...formData.transportationDetails, [
                                      type.name.split(" ").join("-")
                                    ]: e.target.value
                                  }
                                }
                              })}
                          />

                          {
                            type.name === "Container Type"
                              ?
                              (

                                <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowContainerTypes(!showContainerTypes)}>
                                  {
                                    showContainerTypes
                                      ? <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" style={{ transform: 'rotate(180deg)' }} />
                                      :
                                      <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" />
                                  }
                                </span>
                              )
                              : type.name === "Ship Type"
                                ? (

                                  <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowShipsTypes(!showShipsTypes)}>
                                    {
                                      showShipsTypes
                                        ? <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" style={{ transform: 'rotate(180deg)' }} />
                                        :
                                        <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" />
                                    }
                                  </span>
                                )
                                : type.name === "Truck Type"
                                &&
                                (

                                  <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowTrucksTypes(!showTrucksTypes)}>
                                    {
                                      showTrucksTypes
                                        ? <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" style={{ transform: 'rotate(180deg)' }} />
                                        :
                                        <ChevronDownIcon className="w-6 text-gray-600 smooth-snimation" />
                                    }
                                  </span>
                                )
                          }

                          {
                            type.name === "Container Type" && showContainerTypes ?
                              <div className="
                      border 
                      border-gray-600 
                      absolute 
                      bg-dark 
                      z-10
                      w-[85vw]
                      md:w-full
                      max-h-[300px]
                      overflow-y-scroll
                      smooth-snimation
                      top-[100%]
                    "
                              >
                                {
                                  containerTypes.map(t => (
                                    <p
                                      key={t}
                                      className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                                      onClick={(e) => {
                                        setFormData((prev) => {
                                          return { ...prev, transportationDetails: { ...formData.transportationDetails, ["containerType"]: e.target.innerText } }
                                        });
                                        setShowContainerTypes(false);
                                        document.getElementById(type.name).value = e.target.innerText;
                                      }
                                      }
                                    >
                                      {t}
                                    </p>
                                  ))
                                }
                              </div>

                              : type.name === "Ship Type" && showShipsTypes
                                ?
                                <div className="
                      border 
                      border-gray-600 
                      absolute 
                      bg-dark 
                      z-10
                      w-[85vw]
                      md:w-full
                      max-h-[300px]
                      overflow-y-scroll
                      smooth-snimation
                      top-[100%]
                    "
                                >
                                  {
                                    shipsTypes.map(ship => (
                                      <p
                                        key={ship}
                                        className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                                        onClick={(e) => {
                                          setFormData((prev) => {
                                            return { ...prev, transportationDetails: { ...formData.transportationDetails, ["shipType"]: e.target.innerText } }
                                          });
                                          setShowShipsTypes(false);
                                          document.getElementById(type.name).value = e.target.innerText;
                                        }
                                        }
                                      >
                                        {ship}
                                      </p>
                                    ))
                                  }
                                </div>
                                : type.name === "Truck Type" && showTrucksTypes &&
                                <div className="
                      border 
                      border-gray-600 
                      absolute 
                      bg-dark 
                      z-10
                      w-[85vw]
                      md:w-full
                      max-h-[300px]
                      overflow-y-scroll
                      smooth-snimation
                      top-[100%]
                    "
                                >
                                  {
                                    trucksTypes.map(truck => (
                                      <p
                                        key={truck}
                                        className="border-b border-gray-600 p-2 cursor-pointer hover:opacity-50 smooth-snimation"
                                        onClick={(e) => {
                                          setFormData((prev) => {
                                            return { ...prev, transportationDetails: { ...formData.transportationDetails, ["truckType"]: e.target.innerText } }
                                          });
                                          setShowTrucksTypes(false);
                                          document.getElementById(type.name).value = e.target.innerText;
                                        }
                                        }
                                      >
                                        {truck}
                                      </p>
                                    ))
                                  }
                                </div>
                          }
                        </div>
                      ))
                    }
                  </div>


                  <div className="flex flex-col md:flex-row md:gap-6 md:w-[84%] lg:w-[81%] md:flex-wrap">
                    <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                      <label className="text-gray-400">From <span className="text-[red]">*</span></label>
                      <input
                        required
                        className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                        onChange={(e) => setFormData((prev) => {
                          return { ...prev, from: e.target.value }
                        })}
                      />
                    </div>

                    <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                      <label className="text-gray-400">To <span className="text-[red]">*</span></label>
                      <input
                        required
                        className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                        onChange={(e) => setFormData((prev) => {
                          return { ...prev, to: e.target.value }
                        })}
                      />
                    </div>

                    <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                      <label className="text-gray-400">Ready to Load <span className="text-[red]">*</span></label>
                      <input
                        required
                        className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                        onChange={(e) => setFormData((prev) => {
                          return { ...prev, readyToLoad: e.target.value }
                        })}
                      />
                    </div>

                    <div className="flex flex-col gap-3 mt-8 w-full relative ">
                      <label className="text-gray-400">Additional Information</label>
                      <textarea
                        className="
                w-full 
                border 
                border-gray-600 
                px-2 
                bg-dark
                rounded-lg
              "
                        rows={3}
                        style={{ resize: 'none' }}
                        onChange={(e) => setFormData((prev) => {
                          return { ...prev, additionalInfo: e.target.value }
                        })}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Associated Services */}
              <div className="
        w-full
        mt-[2rem]
        flex
        flex-col
        items-start
        justify-center
        gap-4
        max-w-[1000px]
        lg:mt-[4rem]
        z-[1]
      ">
                <h2 className="text-lg font-semibold">Associated Services</h2>

                <div className="w-full flex flex-nowrap gap-2 overflow-x-auto py-7 ">
                  {

                    associatedServices.map(service => (
                      <div
                        key={service}
                        className={`
                          block
                          min-w-fit
                          border
                          border-gray-600
                          px-2
                          py-1
                          flex
                          justify-center
                          items-center
                          gap-3
                          rounded-3xl
                          cursor-pointer
                          bg-dark
                `}
                      >
                        <input
                          id={service}
                          type="checkbox"
                          className="rounded bg-dark"
                          onChange={(e) => handleCheckboxChange(e.target, service)}
                        />
                        <label htmlFor={service} className="cursor-pointer">
                          {service}
                        </label>

                      </div>
                    ))
                  }

                </div>

                {
                  formData.associatedServices && formData.associatedServices.includes("Insurance") && (


                    <div className="flex flex-col gap-3 mt-8 w-full md:w-[40%] max-w-[400px]">
                      <label className="text-gray-400">Invoice Amount <span className="text-[red]">*</span></label>
                      <input
                        required
                        className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                        onChange={(e) => setFormData((prev) => {
                          return { ...prev, invoiceAmount: e.target.value }
                        })}
                      />
                    </div>
                  )
                }



              </div>

              {/* Contact Details */}
              <div className="
        
        ">
                <h2 className="text-lg font-semibold">Contact Details</h2>

                <div className="flex flex-col md:flex-row md:gap-6 md:w-[84%] lg:w-[81%] md:flex-wrap">

                  <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                    <label className="text-gray-400">First Name <span className="text-[red]">*</span></label>
                    <input
                      required
                      className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                      onChange={(e) => setFormData((prev) => {
                        return { ...prev, firstName: e.target.value }
                      })}
                    />
                  </div>

                  <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                    <label className="text-gray-400">Last Name <span className="text-[red]">*</span></label>
                    <input
                      required
                      className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                      onChange={(e) => setFormData((prev) => {
                        return { ...prev, lastName: e.target.value }
                      })}
                    />
                  </div>

                  <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                    <label className="text-gray-400">Email <span className="text-[red]">*</span></label>
                    <input
                      required
                      className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                      onChange={(e) => setFormData((prev) => {
                        return { ...prev, email: e.target.value }
                      })}
                      type="email"
                    />
                  </div>

                  <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                    <label className="text-gray-400">Phone <span className="text-[red]">*</span></label>
                    <div className="flex flex-nowrap items-center gap-2">
                      <CountryList setFormData={setFormData} />
                      <input
                        required
                        className="
                w-[70%]
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
                "
                        placeholder="00-000-0000"
                        type="tel"
                        id="phone-num"
                        onChange={(e) => {
                          const countryCode = document.getElementById("country_list").value;
                          setFormData((prev) => {
                            return { ...prev, phone: `(+${countryCode})-${e.target.value}` }
                          })
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-8 md:w-[48%] relative">
                    <label className="text-gray-400">Company</label>
                    <input
                      className="
                w-full 
                border 
                border-gray-600 
                px-2 
                h-[3rem] 
                flex 
                items-center 
                cursor-text
                rounded-md
                bg-dark
                flex
                justify-between
              "
                      onChange={(e) => setFormData((prev) => {
                        return { ...prev, company: e.target.value }
                      })}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              <button
                className="w-full md:w-[300px] border border-blue hover:bg-dark py-2 text-xl rounded-lg bg-blue smooth-snimation"
                type="submit"
                disabled={submitting}
              >
                Send
              </button>
            </>
          )
      }
    </form >
  )
}

export default LogisticsForm