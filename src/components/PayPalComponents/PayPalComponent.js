import React, { useState } from "react"
import { Listbox } from "@headlessui/react"
import PayPalButtonComponent from "./PayPalButtonComponent"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
const tipOptions = [10, 20, 30, 50, 75, 100]
const PayPalComponent = () => {
  const [tip, setTip] = useState(20)
  const calculatePrice = tips => {
    setTip(tips)
  }
  return (
    <div className="bg-video__button top-[50%] w-[90vw] max-w-lg flex flex-col mx-auto">
      <div className='flex flex-col mx-auto'>
        <Listbox  value={tip} onChange={calculatePrice}>
          <Listbox.Button  className="inline-block rounded-md text-center w-48 font-bold text-lg py-2 mx-auto px-4 mb-10 text-white bg-blue-600 opacity-100">
            Tip: <Listbox.Label>${tip}</Listbox.Label>
          </Listbox.Button>
          <Listbox.Options className="inline-block rounded-md text-center w-48 font-bold text-lg py-2 mx-auto px-4 text-white bg-blue-600 opacity-75">
            {tipOptions.map(tips => (
              <Listbox.Option key={tips} value={tips}>
                {tips}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div className="mt-10 h-[25vh]">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
            components: "buttons",
            currency: "USD",
          }}
        >
          <PayPalButtonComponent price={tip} />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PayPalComponent
