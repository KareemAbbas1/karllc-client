import { useState } from "react";
import {
  products,
  cargoTypes,
  cargoDetails,
  deliveryTypes,
  seaTransportaionTypes,
  landTransportaionTypes,
  transportationDetails,
  containerTypes
} from "../../lib/logisticsForm";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const LogisticsForm = () => {

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
    additionalInfo: "",
    associatedServices: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: ""
  })
  console.log(formData)

  const [showProducts, setShowProducts] = useState(false);
  const [showCargoTypes, setShowCargoTypes] = useState(false);
  const [showCargoDetails, setShowCargoDetails] = useState(false);
  const [showTransportaionType, setShowTransportaionType] = useState(false);
  const [showContainerTypes, setShowContainerTypes] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value }
    })
  }
  return (
    <form className="
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
    "
    >
      <h1 className="
      absolute 
      left-1
      lg:left-5
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
      ">
        Request a Quote
      </h1>

      {/* Cargo Details */}
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
      ">
        <h2 className="text-lg font-semibold">Cargo Details</h2>

        <div className="flex flex-col gap-3 w-full relative" >
          <label className="text-gray-400">Product <span className="text-[red]">*</span></label>

          <div className="relative md:w-[84%] lg:w-[80%]">
            <input className="
            w-full
            border 
            border-gray-600 
            opacity-50 
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
              name="product"
              placeholder="Choose commodity type"
              required
              value={formData.product}
              onClick={() => setShowProducts(true)}
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
                  : <ChevronDownIcon className="w-6 text-gray-600" />
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
              <div className="flex flex-nowrap gap-2 overflow-x-scroll py-7 ">
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
                        onClick={(e) => {
                          setFormData((prev) => {
                            return { ...prev, cargoType: t }
                          });
                          setShowCargoDetails(true);
                          console.log(e.target.value)
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
                          opacity-50 
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
                    document.getElementById("Container Type").value = ""
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
                opacity-50 
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
              value={formData.transportationType}
              onClick={() => setShowTransportaionType(!showTransportaionType)}
            />

            <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowTransportaionType(!showTransportaionType)}>
              {
                showTransportaionType
                  ? "x"
                  :
                  <ChevronDownIcon className="w-6 text-gray-600" />
              }
            </span>


            {
              showTransportaionType && (


                <div className="
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
                              return { ...prev, transportationType: e.target.innerText }
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
            className="flex flex-col gap-6 md:flex-row md:flex-wrap md:w-[84%] lg:w-[80%]"
          >
            {
              transportationDetails.filter(item => item.transTypes.includes(formData.transportationType)).map(type => (
                <div
                  key={type.name}
                  className="flex flex-col gap-3 md:w-[48%] relative"
                >
                  <label className="text-gray-400">{type.name} {type.required && (<span className="text-[red]">*</span>)}</label>
                  <input
                    required
                    className="
                      w-full 
                      border 
                      border-gray-600 
                      px-2 
                      h-[3rem] 
                      rounded-md
                      bg-dark
                  "
                    onClick={() => type.name === "Container Type" && setShowContainerTypes(!showContainerTypes)}
                    id={type.name}
                  />

                  {
                    type.name !== "Container Type"
                      ? ""
                      : (

                        <span className="absolute bottom-3 right-2 text-gray-600" onClick={() => setShowContainerTypes(!showContainerTypes)}>
                          {
                            showContainerTypes
                              ? "x"
                              :
                              <ChevronDownIcon className="w-6 text-gray-600" />
                          }
                        </span>
                      )
                  }

                  {
                    type.name === "Container Type" && showContainerTypes &&
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
                  }
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Associated Services */}
      <div>
        <h2 className="text-lg font-semibold">Associated Services</h2>
      </div>

      {/* Contact Details */}
      <div>
        <h2 className="text-lg font-semibold">Contact Details</h2>
      </div>

      <button className="w-full p-3 text-lg bg-blue" type="submit">Submit</button>
    </form >
  )
}

export default LogisticsForm