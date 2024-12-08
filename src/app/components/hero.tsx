export default function hero(){
    return(
        <div>
        {/* hero section */}
        <div className="firstchild relative">
          <div className="w-[643px] h-[443px] rounded-lg border-none outline-none bg-customCream absolute left-[739px] top-[253px]"></div>
          <div className="w-[561px] h-[344px] absolute left-[778px] top-[315px]">
            <h2 className="font-semibold text-[16px] tracking-[3px]">
              New Arrival
            </h2>
            <h3 className="w-[559px] h-[127px] font-bold text-[52px] leading-[65px] text-customGold">
              Discover Our <br /> New Collection
            </h3>
            <p className="font-medium text-[18px] leading-[24px] mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              perspiciatis repudiandae, ipsum quibusdam id obcaecati.
            </p>
          </div>
          <button className="bg-customGold py-6 px-20 font-bold text-[16px] absolute top-[585px] left-[778px]">
            Shop Now
          </button>
        </div>
      </div>
    )
}