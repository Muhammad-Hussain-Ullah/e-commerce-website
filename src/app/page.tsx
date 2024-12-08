import Image from "next/image";
import Catogories from "./components/catogories";
import Product from "./components/products";
import { FaArrowRight } from "react-icons/fa6";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="flex flex-col  justify-between">
      <Hero/>
      <Catogories />
      <Product />
      <br />
      <br />
      <br />
      {/* carousel */}
      <div className="w-[1440px] relative items-center h-[670px]  flex bg-[#FCF8F3]">
        <section className="flex absolute left-[85px] flex-col pb-[2px]">
          <h3 className="text-[40px] leading-[120%] font-bold">
            50+ Beautiful rooms
            <br /> inspiration
          </h3>
          <p className="text-[16px] leading-[150%] text-[#616161]font-medium">
            Our designer already made a lot of beautiful <br /> prototipe of
            rooms that inspire you
          </p>
        </section>
        <button className="w-[176px] h-[48px] absolute left-[87px] top-[430px] bg-customGold text-[16px] font-semibold text-white ">
          Explore more
        </button>

        <div className="flex absolute right-0">
          <img
            src="/image24.png"
            className="h-[582px] w-[404px]"
            alt="Image 1"
          />
          <div className="w-[217px] h-[130px] bg-white absolute bottom-[22px] left-[20px]">
            <div className="ml-[2.5rem] mt-[1.75rem]">
              <img src="Frame 3.png" alt="01-Bed Room" />
            </div>
            <p className="text-[28px] text-center text-[#3A3A3A] leading-[120%]">
              inner peace
            </p>
          </div>
          <button className="w-[48px] h-[48px] bg-customGold absolute left-[237px] flex items-center justify-center bottom-[22px]">
            <FaArrowRight className="text-white" />
          </button>
          <img
            src="/image25.png"
            className="h-[486px] w-[372px]"
            alt="Image 2"
          />
          <img src="/image26.png" className="h-[486px] " alt="Image 3" />
          <div className="absolute  left-[425px] bottom-[25px]">
            <img src="Indicator.png" alt="" />
          </div>
        </div>
      </div>
      {/* Banner */}
      <div className="flex items-center justify-center mt-6">
          <div className="text-center"> <h3 className="text-[20px] leading-[150%] font-semibold">
            share you setup with
            </h3>
            <p className="text-[40px] leading-[120%] font-bold">
            #FuniroFurniture</p></div>
          {/* top sxection */}
      </div>
      <div>
      <Image src={"/collection.png"} alt="work pics" width={1440} height={721}/>
      </div> 
    </div>
  );
}
