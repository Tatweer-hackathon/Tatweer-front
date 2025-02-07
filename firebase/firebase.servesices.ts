import { database } from "./fireBase.config";
import { ref, set, update } from "firebase/database";

export function updateTruckData(truckId: string, data: any) {
  const truckRef = ref(database, `trucks/${truckId}`);
  return update(truckRef, data);
}

export function addTruck(truckId: string, data: any) {
  const truckRef = ref(database, `trucks/${truckId}`);
  return set(truckRef, data);
}
