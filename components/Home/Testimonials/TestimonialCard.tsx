import Image from "next/image";
import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  images: string;
  job: string;
  desc: string;
};

const TestimonialCard = ({ name, images, job, desc }: Props) => {
  return (
    <div className="w-full lg:w-[90%] relative mx-auto p-9 bg-white shadow-xl rounded-xl">
      <div>
        <FaQuoteLeft className="w-14 h-14 opacity-10 absolute top-8" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
        {/* Text Content */}
        <div className="col-span-3 order-2 lg:order-2">
          <p className="mt-8 text-sm sm:text-base md:text-lg font-medium leading-[1.5rem] sm:leading-[1.8rem] md:leading-[2.5rem]">
            {desc}
          </p>
          <div className="flex items-center mt-6">
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
            <FaStar className="text-yellow-600 w-6 h-6" />
          </div>
          <h1 className="text-xl font-semibold mt-8">{name}</h1>
          <p className="mt-2 text-lg text-gray-600 font-medium mb-6">{job}</p>
        </div>
        {/* Image */}
        <div className="col-span-2 mx-auto order-1 lg:order-2">
          <Image
            src={images}
            alt={name}
            width={250}
            height={120}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
