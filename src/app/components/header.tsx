import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TbUserExclamation } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <header className="min-w-[1440px] h-[100px] flex justify-center items-center ">
        <nav className="bg-white min-w-[1286px] h-[41px] text-black sm:h-[38px] md:h-[41px] lg:h-[48px] flex justify-between items-center ">
          {/*Logo div */}
          <div className="flex items-center">
            <Image
              src={"/Meubel House_Logos-05.png"}
              alt="furnirologo"
              width={50}
              height={32}
            />
            <h1 className="font-bold text-[34px]">Furniro</h1>
          </div>
          {/* route div */}
          <div>
            <nav className="w-[430px] h-[24px] flex justify-between items-center">
              <Link
                href={"/"}
                className="text-slate-600 hover:text-black font-medium leading-[16px]"
              >
                Home
              </Link>
              <Link
                href={"/shop"}
                className="text-slate-600 hover:text-black font-medium leading-[16px]"
              >
                Shop
              </Link>
              <Link
                href={"/"}
                className="text-slate-600 hover:text-black font-medium leading-[16px]"
              >
                Blog
              </Link>
              <Link
                href={"/"}
                className="text-slate-600 hover:text-black font-medium leading-[16px]"
              >
                Contact
              </Link>
            </nav>
          </div>
          {/* icons div */}
          <div className="flex space-x-6 items-center">
            <TbUserExclamation className="text-2xl" />
            <FiSearch className="text-2xl" />
            <FaRegHeart className="text-2xl" />
            <MdOutlineShoppingCart className="text-2xl" />
          </div>
        </nav>
      </header>
      
    </div>
  );
}
