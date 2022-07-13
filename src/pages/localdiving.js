import React from "react"

import Layout from "../components/layout"

import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

import localdiving1 from "../images/local/dive1.jpg"
import localdiving2 from "../images/local/dive2.jpg"
import localdiving3 from "../images/local/diving-ga6ee93e48_640.jpg"
import localdiving4 from "../images/local/eel-g56837cb99_640.jpg"
import localdiving5 from "../images/local/turtle-g8f13fe5dc_640.jpg"
import { Link } from "gatsby"

const localdiving = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
          <div className="h-60">
            <img src={localdiving1} alt="Diving" />
          </div>
          <div className="h-60">
            <img src={localdiving2} alt="Diving" />
          </div>
          <div className="h-60">
            <img src={localdiving3} alt="Diving" />
          </div>
          <div className="h-60">
            <img src={localdiving4} alt="Diving" />
          </div>
          <div className="h-60">
            <img src={localdiving5} alt="Diving" />
          </div>
        </Carousel>
        <div className="flex flex-col items-center justify-center mt-5 space-y-2 mx-4">
          <h1 className="text-2xl font-semibold">Scuba Diving in Bavaro</h1>
          <p className="text-sm text-gray-800 text-center">
            Punta Cana features the longest reef in the country stretching north
            to Bavaro. You will find a great variety of dive sites from shallow
            coral reefs, wrecks, caves and canyons
          </p>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-1 mx-4">
          <h1 className="text-xl font-semibold">Trip Overview</h1>
          <h4 className="text-sm text-gray-500">Price: $100 per Diver</h4>
          <h4 className="text-sm text-gray-500">Duration: 2.5 - 3 hrs</h4>
          <h4 className="text-sm text-gray-500">Included: 2 local dives</h4>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 mx-4 space-y-2">
          <p className="text-sm text-gray-800 text-center">
            To dive as a certificate it is necessary to be able to show their
            certification whenever requested (physically or digitally). Also, if
            you have not dived for two years or more, you will need to do a
            Refresh program in the pool, at least the day before the excursion.
          </p>
          <p className="text-sm text-gray-800 text-center">
            If you are not yet certified, you can choose between the{" "}
            <Link to="/discover" className="no-underline">
              DSD (Discover Scuba Diving)
            </Link>{" "}
            program or a{" "}
            <Link to="/openwater" className="no-underline">
              PADI diving course.
            </Link>
          </p>
          <p className="text-sm text-gray-800 text-center">
            Also from Bávaro you can organize dives to the Caribbean side of the
            island. You can combine with the family or people who do not dive
            the excursion to{" "}
            <Link to="/catalina" className="no-underline">
              Catalina Island
            </Link>
            , where you can enjoy diving in a coral wall and reef.
          </p>
        </div>
        <Link to="/contact" className="no-underline w-11/12 my-10">
          <button class="uppercase text-sm font-bold tracking-wide bg-sky-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
            Contact Me
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default localdiving
