import React from "react"
import ReactPlayer from "react-player/youtube"
import CourseCard from "../components/CourseCardComponents/CourseCard"
import Layout from "../components/layout"

import dsdCardImage from "../images/dsdCard.jpg"
import sdCardImage from "../images/sdCard.jpg"
import owdCardImage from "../images/owdCard.jpg"

const courses = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen h-52">
          <ReactPlayer
            className="absolute top-0 left-0"
            url="https://www.youtube.com/watch?v=KvZT3etZIsw"
            //url='https://www.youtube.com/watch?v=Ad5iorC7xlo'
            //url="https://www.youtube.com/watch?v=qEzf4MjmowA"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <CourseCard
            img={dsdCardImage}
            course={"Discover Scuba Diving"}
            price={"110"}
            description={
              "The perfect introduction for those who have never tried scuba diving before!"
            }
          />
          <CourseCard
            img={sdCardImage}
            course={"Scuba Diver"}
            price={"360"}
            description={
              "The perfect introduction for those who have never tried scuba diving before!"
            }
          />

          <CourseCard
            img={owdCardImage}
            course={"Open Water Diver"}
            price={"460"}
            description={
              "The perfect introduction for those who have never tried scuba diving before!"
            }
          />
        </div>
      </div>
    </Layout>
  )
}

export default courses
