"use client";
import { useState, useEffect, useRef } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../../../firebase/fireBase.config";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useTrackingStore } from "src/lib/zustand";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://www.svgrepo.com/show/376955/map-marker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowUrl: "",
});

interface Vehicle {
  id: string;
  latitude: number;
  longitude: number;
  status: string;
  address: string;
  name: string;
}

export default function TrackingMap() {
  const trackedDriver = useTrackingStore((state) => state.trackedDriver);

  const mapRef = useRef<L.Map | null>(null); // Reference to Leaflet map instance
  const mapCenterRef = useRef<[number, number] | null>(null); // Prevent re-renders
  const [mapCenter, setMapCenter] = useState<[number, number]>([36.75, 3.06]); // Default: Algiers
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const vehiclesRef = ref(database, "vehicles");
    const unsubscribe = onValue(vehiclesRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;

      const vehicleList = Object.entries(data).map(([id, vehicle]: [string, any]) => ({
        id,
        ...vehicle,
      }));

      setVehicles(vehicleList);

      const tracked = trackedDriver
        ? vehicleList.find((vehicle) => vehicle.id === trackedDriver.id)
        : vehicleList[0]; // Default to first vehicle

      if (tracked) {
        const newCenter: [number, number] = [tracked.latitude, tracked.longitude];

        // Only update if the new center is different
        if (
          !mapCenterRef.current ||
          mapCenterRef.current[0] !== newCenter[0] ||
          mapCenterRef.current[1] !== newCenter[1]
        ) {
          mapCenterRef.current = newCenter;
          setMapCenter(newCenter);

          // Smoothly move the map
          if (mapRef.current) {
            mapRef.current.flyTo(newCenter, 14);
          }
        }
      }
    });

    return () => unsubscribe();
  }, [trackedDriver]);

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {vehicles.map((vehicle) => (
          <Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]}>
            <Popup>
              <strong>{vehicle.name}</strong>
              <br />
              Address: {vehicle.address}
              <br />
              Status: {vehicle.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
