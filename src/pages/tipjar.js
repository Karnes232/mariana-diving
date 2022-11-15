import React from 'react'
import Layout from '../components/layout'
import PayPalComponent from '../components/PayPalComponents/PayPalComponent'
import video from "../images/scuba2.mp4"
const tipjar = () => {
  return (
    <Layout>
    <div className="bg-video w-screen max-w-lg flex flex-col items-center"><video
        className="bg-video__content brightness-75"
        autoPlay
        muted
        loop
        playsInline
        src={video}
      >
        <source src={video} type="video/mp4" />
        Your device does not support playing 'video/mp4' videos
      </video>
    <PayPalComponent />
    </div>
    </Layout>
  )
}

export default tipjar