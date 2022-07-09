import React from "react"
import Layout from "../components/layout"

import YouTube from 'react-youtube';

const discover = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=Ad5iorC7xlo",
    "https://www.youtube.com/watch?v=qEzf4MjmowA",
    "https://www.youtube.com/watch?v=KvZT3etZIsw",
  ]
  const opts = {
    height: '100%',
    width: '100%',
  };
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
        <YouTube videoId="Ad5iorC7xlo" opts={opts} />;
        
        </div>
      </div>
    </Layout>
  )
}

export default discover
