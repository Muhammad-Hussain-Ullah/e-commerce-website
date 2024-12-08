import Image from "next/image";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { PiCirclesFourFill } from "react-icons/pi";
import { MdOutlineViewDay } from "react-icons/md";

export default function ShopHeader() {
  return (
    <div>
      <div>
        <Image
          src={"/Group 78.png"}
          alt="Main banner"
          width={1440}
          height={316}
        />
      </div>
      {/* Main image */}
      <div className="flex items-center relative w-[1440px] h-[100px] bg-[#F9F1E7]">
        <div className="flex gap-3 absolute items-center left-[85px] justify-center text-[20px]">
          <HiOutlineAdjustmentsHorizontal />
          <span>Filter</span>
        </div>
        <PiCirclesFourFill className="text-2xl absolute left-[180px]" />
        <MdOutlineViewDay className="text-2xl absolute left-[240px]" />
        <p className="absolute left-[310px]">
          |&nbsp;&nbsp;&nbsp;&nbsp;Showing 1-16 of 32 results
        </p>
        {/* before gap */}

        <div className="flex items-center justify-center gap-2 absolute right-[335px]">
          <p>Show</p>
          <input
            className="w-[2.5rem] h-[2.5rem] bg-white text-black text-center self-center"
            type="number"
            placeholder="16"
          />
        </div>
        <div className="absolute right-[65px] flex items-center gap-2">
          <label htmlFor="sort-options" className="block text-lg font-medium">
            Sort By
          </label>
          <select
            id="sort-options"
            name="sort-options"
            className="mt-2 p-2 border border-gray-300 rounded-md"
          >
            <option value="default" selected>
              Default
            </option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="rating-high-to-low">Rating: High to Low</option>
            <option value="rating-low-to-high">Rating: Low to High</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        {/* after gap */}
      </div>
    </div>
  );
}
