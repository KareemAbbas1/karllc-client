/* eslint-disable react/prop-types */
import { useEffect } from "react"
import PageComponent from "../components/PageComponent"
import Branches from "../components/homeComponents/Branches"
import Cards from "../components/homeComponents/Cards"
import Hero from "../components/homeComponents/Hero"
import KarInNumbers from "../components/homeComponents/KarInNumbers"
import { UseStateContext } from "../context/ContextProvider"
import Loader from "../components/Loader"
import ScrollToTop from "../components/ScrollToTop"


const Home = () => {
  const { loading, setLoading } = UseStateContext();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }

  }, [loading])
  
  return (
    <PageComponent>
      <ScrollToTop />
      {
        loading &&
        <div className="bg-dark w-screen h-screen fixed top-0 left-0 z-50 flex flex-col items-center justify-center">
          <div>
            <Loader />
          </div>
        </div>
      }
      <Hero />

      <Cards />

      <Branches />

      <KarInNumbers />
      {/* <div style={{width: '100ve', height: '100vh'}} /> */}
      {/* <div style={{width: '100ve', height: '100vh'}} /> */}
    </PageComponent>
  )
}

export default Home