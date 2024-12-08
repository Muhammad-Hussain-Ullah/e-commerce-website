import Image from "next/image";
import Link from "next/link";

export default function Product() {
  return (
    <div className="flex items-center justify-center min-h-[1084px]">
      <div className="flex flex-col items-center w-[1236px] h-[1084px]">
        <h1 className="font-semibold text-[40px] pb-6 text-center">
          Our Products
        </h1>
        {/* cards row 1 */}

        <div className="w-[1236px] h-[446px] flex justify-between">
          {/* 1 */}
          <div className="w-[285px] relative h-[446px] bg-customLightGray">
            <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
              -30%
            </div>
            <Image
              src={"/Images.png"}
              alt="Syltherine"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Syltherine
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Stylish cafe chair
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 2.500.000
                  </span>
                  <span className="text-[16px] leading-[150%] text-[#B0B0B0] line-through">
                    Rp 3.500.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[285px] h-[446px] bg-customLightGray">
            <Image
              src={"/image 2.png"}
              alt="Leviosa"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Leviosa
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Stylish cafe chair
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 2.500.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[285px] relative h-[446px] bg-customLightGray">
          <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
              -30%
            </div>
            <Image
              src={"/Images (1).png"}
              alt="Lolito"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Lolito
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  luxury big sofa
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 7.000.000
                  </span>
                  <span className="text-[16px] leading-[150%] text-[#B0B0B0] line-through">
                    Rp 14.000.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="w-[285px] relative h-[446px] bg-customLightGray">
          <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-[#2EC1AC] rounded-full">
              New
            </div>
            <Image
              src={"/Images.png"}
              alt="Syltherine"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Respira
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Outdoor bar table and stool
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 5.000.000
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* cards row 2 */}
        <div className="w-[1236px] h-[446px] flex justify-between mt-8 mb-8">
          {/* 1 */}
          <div className="w-[285px] h-[446px] bg-customLightGray">
            <Image
              src={"/Images (5).png"}
              alt="Grifo"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Grifo
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Night lamp
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 1.500.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 2 */}
          <div className="w-[285px] relative h-[446px] bg-customLightGray">
          <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-[#2EC1AC] rounded-full">
              New
            </div>
            <Image src={"/image 6.png"} alt="Muggo" height={301} width={285} />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Muggo
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Small Mug
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 150.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div className="w-[285px] h-[446px] relative bg-customLightGray">
          <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
              -50%
            </div>
            <Image
              src={"/Images (4).png"}
              alt="Pingky"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Pingky
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Cute bed set
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 7.000.000
                  </span>
                  <span className="text-[16px] leading-[150%] text-[#B0B0B0] line-through">
                    Rp 14.000.000
                  </span>
                </section>
              </div>
            </div>
          </div>
          {/* 4 */}
          <div className="w-[285px] relative h-[446px] bg-customLightGray">
          <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-[#2EC1AC] rounded-full">
              New
            </div>
            <Image
              src={"/Images (3).png"}
              alt="potty"
              height={301}
              width={285}
            />
            <div className="flex items-center justify-center pb-2">
              <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-3">
                <p className="text-[24px] font-semibold leading-[120%]">
                  Potty
                </p>
                <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
                  Minimalist flower pot
                </p>
                <section>
                  <span className="text-[20px] font-medium leading-[150%] mr-2">
                    Rp 500.000
                  </span>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* shop now button */}
        <Link href={"/shop"}>
        
        <button className="min-w-[245px] min-h-[48px] font-semibold text-[16px] leading-[150%] bg-white text-customGold border-2 border-customGold rounded-md">
    Shop More
</button>
        </Link>

      </div>
    </div>
  );
}
