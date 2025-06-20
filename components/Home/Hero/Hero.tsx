import ButtonExpand from "@/components/Button/ButtonExpand";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#f7f6fb]">
      <div className="flex justify-center flex-col w-[90%] sm:w-[80%] h-[700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div>
            {/* Top */}
            <div className="w-fit py-1.5 px-2 md:px-5 rounded-full shadow-md flex items-center space-x-3 bg-white hover:transform hover:-rotate-5 transition-all duration-300">
              <div className="px-3 py-1 md:px-5 md:py-1 rounded-full bg-blue-700 md:text-base sm:text-sm text-xs text-white">
                <p className="font-bold">FYI</p>
              </div>
              <p className="text-xs sm:text-sm font-semibold">
                Jasa Pembuatan Web Terbaik
              </p>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-4xl md:text-6xl mt-6 mb-6 font-bold md:leading-[3.5rem] lg:leading-[4rem]">
              Jasa Pembuatan Website Professional Mudah dan Tepercaya
            </h1>
            <p className="text-gray-600 text-lg">
              Wujudkan desain website professional untuk bisnis impian anda.
              Dapatkan paket pembuatan website sesuai dengan kebutuhan bisnis
              Anda.
            </p>

            {/* Additional Content */}

            <div className="flex items-center space-x-4 mt-5">
              <ButtonExpand
                text="Konsultasi Gratis"
                containerStyles="bg-indigo-600 text-white"
              />
              <ButtonExpand
                text="Buat Website"
                containerStyles="border border-current text-indigo-600"
              />
            </div>
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <Image src="/images/hero.png" alt="" width={700} height={700} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
