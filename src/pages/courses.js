import React from "react"
import { Link } from "gatsby"
import YouTube from "react-youtube"

import CourseCard from "../components/CourseCardComponents/CourseCard"
import Layout from "../components/layout"

import dsdCardImage from "../images/dsdCard.jpg"
import sdCardImage from "../images/sdCard.jpg"
import owdCardImage from "../images/owdCard.jpg"

const courses = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=KvZT3etZIsw",
    "https://www.youtube.com/watch?v=Ad5iorC7xlo",
    "https://www.youtube.com/watch?v=qEzf4MjmowA",
  ]
  const opts = {
    height: "100%",
    width: "100%",
  }
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <YouTube videoId="KvZT3etZIsw" opts={opts} className="h-full" />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <Link to="/discover" className="no-underline w-11/12">
            <CourseCard
              img={dsdCardImage}
              course={"Discover Scuba Diving"}
              price={"110"}
              description={
                "The perfect introduction for those who have never tried scuba diving before!"
              }
            />
          </Link>
          <Link to="/scubadiver" className="no-underline w-11/12 ">
            <CourseCard
              img={sdCardImage}
              course={"Scuba Diver"}
              price={"360"}
              description={
                "Learn to dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet"
              }
            />
          </Link>
          <Link to="/openwater" className="w-11/12 ">
            <CourseCard
              img={owdCardImage}
              course={"Open Water Diver"}
              price={"460"}
              description={
                "Learn to dive anywhere in the world with a certified buddy!"
              }
            />
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export default courses
