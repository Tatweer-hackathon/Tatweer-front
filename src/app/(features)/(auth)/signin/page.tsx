import { Sign } from "crypto";
import Image from "next/image";
import SignForm from "./components/signinForm";
import Googgle from "./components/google";

const Page = () => {
  console.log("hi");
  return (
    <div className="flex justify-evenly items-center flex-row-reverse h-screen  w-screen">
      <aside className="bg-[#3461e0]  w-1/2 h-full flex justify-center items-center">
        <Image src="/signin/map.svg" alt="map" height={700} width={700} />
      </aside>
      <aside className="flex flex-col justify-center items-center gap-8 w-1/2 h-full">
        <SignForm />
        <section className="flex justify-center items-center gap-10">
          <hr className="w-32" />
          <p className="text-3xl whitespace-nowrap">
            <span className="font-bold">Login </span>
            with Other
          </p>
          <hr className="w-32" />
        </section>
        <Googgle />
      </aside>
    </div>
  );
};
export default Page;
