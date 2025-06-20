import ButtonExpand from "@/components/Button/ButtonExpand";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

const Feature = () => {
  return (
    <div className="pt-0 pb-16">
      {/* Define Grid */}
      <div className="w-[95%] sm:w-[80%] mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <Image
            src="/images/feature.png"
            alt="features"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        {/* Content */}
        <div
          className="p-6"
          data-aos="fade-left"
          data-aos-anchor-placement="top-center"
        >
          <h1 className="text-base font-semibold text-blue-700">
            Tingkatkan Visibilitas Bisnis Anda di Mesin Pencari
          </h1>
          <h1 className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Optimalkan Website Anda dengan Layanan SEO Profesional dan Terukur
          </h1>
          <p className="mt-4 text-gray-700 text-sm font-medium leading-[2rem]">
            Dengan strategi SEO yang tepat, website Anda bisa tampil di halaman
            pertama Google. Kami bantu Anda menjangkau lebih banyak pelanggan
            melalui teknik optimasi yang efektif dan aman untuk jangka panjang.
          </p>
          <ul className="mt-7 space-y-2 text-gray-800">
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Audit dan Riset Kata Kunci Mendalam
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Optimasi On-Page dan Off-Page
            </li>
            <li className="flex items-center font-semibold">
              <FaCheckCircle className="text-green-500 mr-2" />
              Laporan Performa dan Traffic Bulanan
            </li>
          </ul>
          <ButtonExpand
            text="Konsultasi Gratis"
            containerStyles="mt-8 bg-indigo-600 text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
