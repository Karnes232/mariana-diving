import React, { useState } from "react"
import { Listbox } from "@headlessui/react"
import PayPalButtonComponent from "./PayPalButtonComponent"
import {
  PayPalScriptProvider
} from "@paypal/react-paypal-js";
const tipOptions = [1, 10, 20, 30, 50, 75, 100]
const PayPalComponent = ({ tour }) => {
  const [tip, setTip] = useState(20)
  const calculatePrice = tips => {
    setTip(tips)
 
  }
  return (
    <div className="bg-video__button top-[50%] w-[90vw] max-w-lg flex flex-col mx-auto">
      <div className="inline-block rounded-md text-center w-48 font-bold text-lg py-2 mx-auto px-4 mb-20 text-white bg-blue-600 opacity-100">
      <Listbox value={tip} onChange={calculatePrice}>
        <Listbox.Button>Tip:{' '}
        <Listbox.Label>
          ${tip}
        </Listbox.Label></Listbox.Button>
        <Listbox.Options>
          {tipOptions.map(tips => (
            <Listbox.Option key={tips} value={tips}>
              {tips}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      </div>
      <div className="mt-10">
      <PayPalScriptProvider
            options={{
              "client-id": "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
              components: "buttons",
              currency: "USD",
            }}
          >
      <PayPalButtonComponent price={tip} /></PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PayPalComponent
