import { ShipmentHeader } from "../shipment-header"
import { CardWithForm } from './card';
import { Separator } from "src/components/ui/separator";
export default function ShipmentPage() {
    return (
        <div className="flex flex-col h-full">
            <ShipmentHeader title="support" />
            <div className="flex flex-col   ">
                <div className="flex  m-8 pr-16">
                    <h1 className="text-[20px] text-start">SUPPORT</h1>
                </div>
                <Separator className="my-4 border-t border-black"/>
                
                <div className="flex flex-col my-32 items-center justify-center">
                    <CardWithForm />
                </div>
            </div>
        </div>
    )
}

