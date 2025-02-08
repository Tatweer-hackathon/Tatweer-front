import { Sign } from "crypto";
import Image from "next/image";
import SignForm from "./components/signinForm";
import Googgle from "./components/google";

const Page = () => {
  return (
    <div className="flex justify-evenly items-center flex-row-reverse h-screen  w-screen">
     <aside className="bg-[#3461e0]  w-1/2 h-full flex justify-center items-center">
            <Image src="/signin/map.svg" alt="map" height={700} width={700}  />
          </aside>
      
      <aside className="flex  w-1/2 flex-col justify-center items-center gap-8  h-full">
      {/* <Image src="/logo.svg" alt="Trackini Logo" width={500} height={200} className=" rounded-2xl" priority /> */}
        <SignForm />
        
      </aside>
    </div>
  );
};
export default Page;
