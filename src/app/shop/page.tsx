import Link from "next/link";
import ShopHeader from "../components/shoptop";
import Image from "next/image";
// import { Link } from "lucide-react";
export default function Products(){

    interface Card{
        name: string,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        
      ];
    
    return (
        <div className="w-[1440px] h-[2880px] flex-col justify-center items-center">
       <ShopHeader/>
            <div className="w-[1440px] h-[2034px] m-[50px] flex flex-wrap justify-center items-center">
            {data.map((card, index) => (
                <div className="w-1/4" key={index}>
    <div className="w-[285px] h-[446px] flex-shrink-0 bg-customLightGray relative">
                <Link href={"single"} >
      {/* Discount Badge for 1st Card */}
      {(index % 4 === 0) && ( // Only for the 1st card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
          -30%
        </div>
      )}
      
      {/* Discount Badge for 3rd Card */}
      {(index % 4 === 2) && ( // Only for the 3rd card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
          -30%
        </div>
      )}

      {/* "New" Badge for 4th Card */}
      {(index % 4 === 3) && ( // Only for the 4th card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-[#2EC1AC] rounded-full">
          New
        </div>
      )}

      <img
        src={card.image}
        style={{ width: "18rem", height: "18rem" }}
        className="card-img-top"
        alt={card.description}
        />
      <div className="flex items-center justify-center pb-2">
        <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-[1.75rem]">
          <h5 className="text-[24px] font-semibold leading-[120%]">
            {card.name}
          </h5>
          <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
            {card.description}
          </p>
          {/* Render the price based on the card's position */}
          <span className="text-[20px] font-medium leading-[150%] mr-2">
            {(index % 4 === 0 || index % 4 === 2) ? "Rp 2.500.000" : card.price}
          </span>
          {/* Only show the discounted price on 1st and 3rd cards */}
          {(index % 4 === 0 || index % 4 === 2) && ( // For 1st and 3rd cards in each row
            <span>
              {/* <span className="text-[20px] font-medium leading-[150%] mr-2">{(index % 4 === 0 || index % 4 === 2) ? "Rp 2.500.000" : card.price}</span> */}
              <span className="text-[16px] leading-[150%] text-[#B0B0B0] line-through">
                {card.price} {/* Show old price only on 1st and 3rd cards */}
              </span >
            </span>
          )}
        </div>
      </div>
          </Link>
    </div>
  </div>
))}

        </div>
        <ul className="flex mx-auto my-12 gap-8 divide-x-2 overflow-hidden w-max font-[sans-serif]">
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-customGold cursor-pointer text-base font-bold text-gray-500">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-base font-bold text-gray-800">
            2
      </li>
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-base font-bold text-gray-500">
        3
      </li>
      <li className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-sm text-gray-800">
        Next
      </li>
    </ul>
    <Image src={"/Frame 161.png"} alt="trust building banner" width={1440} height={270}/>
        </div>


    )
}