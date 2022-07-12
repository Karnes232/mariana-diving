import React from "react"
import Layout from "../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import catalina1 from "../images/catalina/catalinaCard.jpg"
import catalina2 from "../images/catalina/Dominicana-Isla_Catalina2.jpg"
import catalina3 from "../images/catalina/pexels-leonardo-lamas-7001709.jpg"
import catalina4 from "../images/catalina/scubacaribe.jpg"
import catalina5 from "../images/catalina/seahorse-gda1528204_640.jpg"
import catalina6 from "../images/catalina/The_Aquarium,_Catalina_Island_.jpg"

const catalina = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <Carousel showThumbs={false}>
          <div>
            <img src={catalina1} />
          </div>
          <div>
            <img src={catalina2} />
          </div>
          <div>
            <img src={catalina3} />
          </div>
          <div>
            <img src={catalina4} />
          </div>
          <div>
            <img src={catalina5} />
          </div>
          <div>
            <img src={catalina6} />
          </div>
        </Carousel>
      </div>
    </Layout>
  )
}

export default catalina
