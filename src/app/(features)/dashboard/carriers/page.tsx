import { ShipmentHeader } from "../shipment-header"
import {ShipmentList}  from "./shipment-carry"

export default function ShipmentPage() {
  return (
    <div className="flex flex-col h-full">
      <ShipmentHeader title="carries"/>
      <ShipmentList />
    </div>
  )
}

