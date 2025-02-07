"use client"

import { useState, useEffect } from "react"
import { ref, onValue } from "firebase/database"
import { database } from "../../../../../firebase/fireBase.config"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icon in Leaflet with Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
})

interface Vehicle {
  id: string
  lat: number
  lng: number
  status: string
}

export  default function TrackingMap() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([])
  const [mapCenter, setMapCenter] = useState<[number, number]>([10, 0])
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const vehiclesRef = ref(database, "vehicles")
    const unsubscribe = onValue(vehiclesRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        const vehicleList = Object.entries(data).map(([id, vehicle]: [string, any]) => ({
          id,
          ...vehicle,
        }))
        setVehicles(vehicleList)
        if (vehicleList.length > 0) {
          setMapCenter([vehicleList[0].lat, vehicleList[0].lng])
        }
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={`relative ${isExpanded ? "fixed inset-0 z-50 bg-background" : "h-screen"}`}>
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        key={isExpanded ? "expanded" : "normal"}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vehicles.map((vehicle) => (
          <Marker key={vehicle.id} position={[vehicle.lat, vehicle.lng]}>
            <Popup>
              Vehicle ID: {vehicle.id}
              <br />
              Status: {vehicle.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button
        onClick={toggleExpand}
        className="absolute top-2 right-2 z-[1000] bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
      >
        {isExpanded ? "Minimize" : "Expand"}
      </button>
    </div>
  )
}

