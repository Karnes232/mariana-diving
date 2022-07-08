import React, { useEffect, useState } from "react"

const Contact = () => {
  const [success, setSuccess] = useState(false)
  useEffect(() => {
    if (window.location.search.includes("success=true")) {
      setSuccess(true)
    }
  }, [])
  return (
    <form
      name="contact"
      method="POST"
      action="/contact/?success=true"
      data-netlify="true"
      className="form w-80"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />
      {success ? (
        <h2 className="text-center text-xl font-bold mb-4">
          Thank you for your message!
        </h2>
      ) : (
        <h2 className="text-center text-2xl font-bold mb-4">Contact us</h2>
      )}
      <div>
        <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          placeholder=""
          name="name"
        />
      </div>
      <div class="mt-4">
        <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
        <input
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
          type="text"
          name="email"
        />
      </div>
      <div class="mt-4">
        <span class="uppercase text-sm text-gray-600 font-bold">Guests</span>
        <select
          name="guests"
          class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="mt-4">
        <span class="uppercase text-sm text-gray-600 font-bold">
          Let me know what your interested in
        </span>
        <textarea
          name="message"
          class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>
      <div class="mt-4">
        <button class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
          Send Message
        </button>
      </div>
    </form>
  )
}

export default Contact
