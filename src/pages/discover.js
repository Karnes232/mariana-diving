import React from "react"
import Layout from "../components/layout"

import ReactPlayer from "react-player/youtube"

const discover = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=Ad5iorC7xlo",
    "https://www.youtube.com/watch?v=qEzf4MjmowA",
    "https://www.youtube.com/watch?v=KvZT3etZIsw",
  ]
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
          <ReactPlayer
            className="absolute top-0 left-0"
            url={videoUrls}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </Layout>
  )
}

export default discover
