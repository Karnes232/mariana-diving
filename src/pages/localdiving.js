import React from "react"

import Layout from "../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import localdiving1 from "../images/local/dive1.jpg"
import localdiving2 from "../images/local/dive2.jpg"
import localdiving3 from "../images/local/diving-ga6ee93e48_640.jpg"
import localdiving4 from "../images/local/eel-g56837cb99_640.jpg"
import localdiving5 from "../images/local/turtle-g8f13fe5dc_640.jpg"

const localdiving = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div className="h-80">
            <img src={localdiving1} alt="Diving" />
          </div>
          <div className="h-80">
            <img src={localdiving2} alt="Diving" />
          </div>
          <div className="h-80">
            <img src={localdiving3} alt="Diving" />
          </div>
          <div className="h-80">
            <img src={localdiving4} alt="Diving" />
          </div>
          <div className="h-80">
            <img src={localdiving5} alt="Diving" />
          </div>
        </Carousel>
      </div>
    </Layout>
  )
}

export default localdiving
