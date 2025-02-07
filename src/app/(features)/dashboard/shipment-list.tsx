"use client"

import { ArrowUpDown, Filter } from "lucide-react"
import { Button } from "src/components/ui/button"
import { Badge } from "src/components/ui/badge"
import Image from 'next/image';

const shipments = [
  {
    id: "0678912344",
    name: "Name name",
    address: "12, usthb , algeria",
    amount: "$120",
    status: "pending",
  },
  {
    id: "6516154854",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "in-progress",
  },
  {
    id: "6516154855",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "done",
  },
  {
    id: "6516154856",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "pending",
  },
  {
    id: "651615455",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "done",
  },
  {
    id: "651654856",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "pending",
  },
  {
    id: "616154855",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "done",
  },
  {
    id: "651615456",
    name: "mondher mondeher",
    address: "Change change",
    amount: "$120",
    status: "fail",
  },
]

export function ShipmentList() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">SHIPMENTS</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-[33px]" size="sm">
            <ArrowUpDown className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">
                Sort
                </p>
          </Button>
          <Button variant="outline" className="h-[33px]" size="sm">
            <Filter className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">
            Add filter
            </p>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div key={shipment.id} className="border rounded-lg p-6 bg-white flex items-center gap-6">
            <div className="w-[390px] h-24 border rounded-lg flex items-center justify-center">
              <Image
              alt=""
              src="Frame.svg"
                width={146}
                height={108}
              >
                </Image>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{shipment.name}</h4>
                  <p className="text-sm text-gray-500">{shipment.id}</p>
                </div>
                <Badge
                  variant={
                    shipment.status === "done" ? "success" : shipment.status === "in-progress" ? "default" : "warning"
                  }
                  className={`capitalize text-white px-8 py-4 
                    ${shipment.status === "done" && "bg-green-500"} 
                    ${shipment.status === "fail" && "bg-red-500"}
                     ${shipment.status === "pending" && "bg-blue-500"}
                    ${shipment.status === "in-progress" && "bg-yellow-500"}`}
                >
                  {shipment.status}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{shipment.address}</p>
                <p className="font-semibold mt-1">{shipment.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

