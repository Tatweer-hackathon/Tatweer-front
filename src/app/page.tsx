"use client"
import { ref, onValue } from "firebase/database";
import { database } from "../../firebase/fireBase.config"; // Ensure Firebase is initialized
import { useEffect, useState } from "react";

const Page = () => {
  const [userData, setUserData] = useState<any>(null);
  
  useEffect(() => {
    const userRef = ref(database, "trucks/"); // Reference to "user" node
    const unsubscribe = onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      setUserData(data);
    });

    return () => unsubscribe(); // Cleanup subscription
  }, []);

  return (
    <div>
      <h1>Realtime User Data,{JSON.stringify(userData)}</h1>
    </div>
  );
};

export default Page;
