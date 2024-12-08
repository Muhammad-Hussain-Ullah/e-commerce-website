import Image from "next/image";
import Link from "next/link";

export default function Catogories() {
  return (
      
        <div className="flex flex-col items-center justify-center">

      <div className="min-w-[1183px] min-h-[685px]">
      {/* top part */}
      <div className="flex flex-col items-center">
        <h3 className="font-bold text-[32px]">
          Browse The Range
        </h3>
        <p className=" text-customGrey w-[559px] h-[28.71px] font-normal text-[20px] leading-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      {/* cards */}
      <div className="my-6 flex justify-between">
        <div>
            <Link href={"/shop"}>
             <Image src={"/Mask Group.png"} alt="Tables" width={381} height={480}/>
            <section className="text-center font-semibold text-[24px] my-6">Dining</section>
            </Link>
        </div>
        <div>
            <Link href={"/shop"}>
             <Image src={"/Screenshot 2024-12-08 094927.png"} alt="Tables" width={381} height={480}/>
            <section className="text-center font-semibold text-[24px] my-6">Living</section>
            </Link>
        </div>
        <div>
            <Link href={"/shop"}>
             <Image src={"/Mask group (1).png"} alt="Tables" width={381} height={480}/>
            <section className="text-center font-semibold text-[24px] my-6">Bedroom</section>
            </Link>
        </div>
      </div>
    </div>
        </div>
  );
}
