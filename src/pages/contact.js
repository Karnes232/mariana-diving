import React from "react"
import Contact from "../components/ContactComponents/Contact"
import Layout from "../components/layout"

const contact = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-10 items-center h-screen">
        <Contact />
      </div>
    </Layout>
  )
}

export default contact
