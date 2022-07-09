import React from "react"
import Contact from "../components/ContactComponents/Contact"
import Layout from "../components/layout"
import { FaWhatsapp } from "react-icons/fa"

const contact = () => {
  return (
    <Layout>
      <div className="w-screen max-w-lg flex flex-col mt-5 items-center h-screen">
        <Contact />
        <a
          href="https://api.whatsapp.com/send?phone=18296405433"
          target="_blank"
          aria-label="Whatsapp"
          rel="noreferrer"
        >
          <button class="uppercase text-sm font-bold tracking-wide bg-[#25D366] text-gray-100 p-3 rounded-lg w-80 mt-4 focus:outline-none focus:shadow-outline">
            WhatsApp
            <FaWhatsapp className="inline-block h-4 w-5 ml-1" />
          </button>
        </a>
      </div>
    </Layout>
  )
}

export default contact
