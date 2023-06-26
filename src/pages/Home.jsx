/* eslint-disable react/prop-types */
import PageComponent from "../components/PageComponent"
import Branches from "../components/homeComponents/Branches"
import Cards from "../components/homeComponents/Cards"
import Hero from "../components/homeComponents/Hero"
import KarInNumbers from "../components/homeComponents/KarInNumbers"


const Home = () => {

  return (
    <PageComponent>
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