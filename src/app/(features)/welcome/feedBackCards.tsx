import * as React from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader } from "src/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "src/components/ui/carousel"
const usersArray = [
    { user: "Yasser Tech" },
    { user: "Aymen Dz" },
    { user: "Mohamed moh" },
    { user: "Mondher" },
    { user: "Amine" },
    { user: "Zakria" },
]

export default function CarouselDemo() {
    return (
        <Carousel className="w-[900px] h-[334px] max-w-none my-8">
            <CarouselContent className="w-full ">
                {usersArray.map((userObj, index) => (
                    <CarouselItem key={index} className="w-[900px] h-[334px]">
                        <div className="p-1 w-full ">
                            <Card className="    flex flex-col relative">
                                {/* Icon at the top */}
                                <CardHeader className="flex justify-start">
                                    <Image src="quoted.svg" alt="" width={36} height={36} />
                                </CardHeader>
    
                                {/* Row containing two columns: feedback text and profile image */}
                                <CardContent className="flex flex-row items-center justify-between  relative">
                                    {/* Left Column: Feedback Text */}
                                    <div className="w-2/3 pr-4">
                                        <span className="text-4xl font-semibold">{userObj.user}</span>
                                        <div className="h-[149px] text-black text-[28px] font-normal ">This app helped  
                                             me brrrrrrrrrrrrrrrrrrrrrrrrr erbrtebw wefdw f wd fwdfwdf w dwf wd fwf wdf wdf wdf wdf wdf wdf wd wd wdf wd wdf </div>
                                    </div>
    
                                    {/* Right Column: User Profile Photo (Shifted to the right) */}
                                    <div className="w-1/3 flex justify-end pr-6"> {/* Added `pr-6` for spacing */}
                                        <img 
                                            src={"image.png"} 
                                            alt="User Profile" 
                                            width={120} 
                                            height={120} 
                                            className="rounded-full"
                                        />
                                    </div>
                                </CardContent>
    
                                {/* Background at the bottom only */}
                                <div className="absolute bottom-0 left-11 right-1 w-[90%] center h-[270px]  bg-[#cfecff]/40 "></div>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )

    
    }
    