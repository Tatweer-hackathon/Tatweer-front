"use client"

import { useState } from "react"
import { ShipmentHeader } from "../shipment-header"
import { Button } from "src/components/ui/button"
import { Input } from "src/components/ui/input"
import { MapPin } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "src/components/ui/select"
import { Separator } from 'src/components/ui/separator';
import { Tally3,Package } from 'lucide-react';
export default function Page() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [selectedTransport, setSelectedTransport] = useState<number | null>(null)

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option === selectedOption ? null : option)
  }

  const transports = [
    { id: 1, name: "Transport 1", price: 50, unit: "Km", truck: "Tata Truck", offersAccepted: "12345", offersNeglected: "12345" },
    { id: 2, name: "Transport 2", price: 50, unit: "Day", truck: "Volvo Truck", offersAccepted: "12345", offersNeglected: "54321" },
    { id: 3, name: "Transport 3", price: 50, unit: "mo", truck: "Mercedes Truck", offersAccepted: "12345", offersNeglected: "54321" },
  ]

  return (
    <main className="items-center justify-center w-full h-full  bg-gray-100">
      <ShipmentHeader title="CAREER" />
      <div className=" justify-center bg-gray-100 items-start m-4 mt-8 p-4">
        <h1 className="h1">Choose a transporter</h1>
      </div>
      <Separator className="border mt-8 border-black" />
      <div className="w-full h-full  bg-gray-100 flex items-center justify-center">

        <div className=" w-full     justify-center items-center px-8 shadow-md rounded-lg   ">
          <h1 className="text-2xl font-bold text-center mb-6"></h1>
          <div className="flex flex-col gap-4 h-full w-full ">

            <div className="flex flex-row items-center gap-4 justify-between ">
              <Button className="h-[52px] flex items- justify-start bg-white items-center w-full border">
                <span><MapPin /></span>
                From
              </Button>

              <Button className="w-full h-[52px] flex justify-start items-center bg-white border">
                <span><MapPin /></span>
                To
              </Button>
            {/* ShadCN Select for Product */}
            </div>
            <Button className="h-[52px] flex items- justify-start bg-white items-center w-full border">
                <span><Tally3 /></span>
                Amount
              </Button>
            {/* ShadCN Select for Amount */}
            <Button className="h-[52px] flex items- justify-start bg-white items-center w-full border">
                <span><Package /></span>
                Product
              </Button>

            <Input  type="date" placeholder="Empty" className="w-full font-semibold h-[52px] p-8 flex items-center justify-center pt-4    bg-white" />
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">Choose one:</p>
            <div className="grid grid-cols-3 gap-4">
              {["Internal", "External", "Shared"].map((option) => (
                <Button
                  key={option}
                  variant={selectedOption === option ? "default" : "outline"}
                  className={ `w-full bg-white h-[52px] ${selectedOption === option ? "bg-blue-400":""}`}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
          </div>

          <Input className="mt-4 bg-white h-24 p-8 w-full" placeholder="Anything to add..." />
<div className="flex justify-end pb-16 items-center w-full h-full">
          <Button className="m-8  bg-blue-400 rounded-full text-white w-[148px] h-[46px]" onClick={() => setIsDialogOpen(true)}>
            Continue

          </Button>
</div>

        </div>
      </div>
      {isDialogOpen && (
          <div className="bg-red-400 p-6 rounded-lg max-w-lg w-full shadow-md">
        <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col   items-center justify-center">
            <div className="bg-white m-16">

            <h2 className="text-xl text-white  m-8 text-center my-16   bg-gray-400 p-8 text-[72px] font-bold ">Choose a transport</h2>
            <div className="flex flex-raw gap-4 m-16 ">
              {transports.map((transport) => (
                <div
                  key={transport.id}
                  className={`p-4 border flex flex-col rounded-lg w-[556px] h-[556px] ${selectedTransport === transport.id ? "bg-blue-600 text-white" : "bg-gray-100"
                    }`}
                >
                  <h3 className="text-lg font-semibold">{transport.name}</h3>
                  <p className="text-xl font-bold">DZD {transport.price}/{transport.unit}</p>
                  <p className="text-sm">{transport.truck}</p>
                  <p className="text-xs">Offers accepted: {transport.offersAccepted}</p>
                  <p className="text-xs mb-2">Offers neglected: {transport.offersNeglected}</p>
                  <Button
                    className={`w-full text-black mt-32 ${selectedTransport === transport.id ? "bg-gray-400 " : "bg-white"}`}
                    variant={selectedTransport === transport.id ? "outline" : "default"}
                    onClick={() => {
                      setSelectedTransport(transport.id)
                      setIsDialogOpen(false)
                    }}
                  >
                    Choose
                  </Button>
                </div>
              ))}
            </div>

            </div>
          </div>
        </div>
      )}
    </main>
  )
}
