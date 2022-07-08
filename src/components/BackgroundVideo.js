import { Link } from "gatsby"
import React from "react"
import video from "../images/scuba2.mp4"

const BackgroundVideo = () => {
  return (
    <div class="bg-video w-screen max-w-lg">
      <video
        className="bg-video__content"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      >
        <source src={video} type="video/mp4" />
        Your device does not support playing 'video/mp4' videos
      </video>
      <Link to="/certified">
        <button className="bg-video__button top-[60%] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
          Certified Divers
        </button>
      </Link>
      <Link to="/courses">
        <button className="bg-video__button top-[calc(60%+96px)] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
          Courses
        </button>
      </Link>
      <Link to="/contact">
        <button className="bg-video__button top-[calc(60%+192px)] inline-block rounded-md text-center w-48 font-bold text-lg py-4 px-4 mb-20 text-white bg-sky-500 opacity-75 hover:opacity-100 hover:bg-blue-600">
          Contact Me
        </button>
      </Link>
    </div>
  )
}

export default BackgroundVideo
