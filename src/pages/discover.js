import React from "react"
import Layout from "../components/layout"

import YouTube from 'react-youtube';

const discover = () => {

  const opts = {
    height: '100%',
    width: '100%',
  };
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center">
        <div className="relative w-screen max-w-lg h-56">
        <YouTube videoId="Ad5iorC7xlo" opts={opts} className='h-full' />
        
        </div>
      </div>
    </Layout>
  )
}

export default discover
