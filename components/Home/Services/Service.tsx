import ServiceCard from "./ServiceCard";

const Service = () => {
  return (
    <div className="pt-16 pb-16 scroll-mt-28" id="services">
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-center">
        Pilihan Jenis Website yang Dapat Dibuat
      </h1>

      <div className="mt-7 mb-20 grid w-[70%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-12 px-4 py-8 ">
        {/* Card */}
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason1.png"
            title="Website Aplikasi"
            description="Kembangkan website aplikasi yang fungsional, responsif, dan user-friendly sesuai kebutuhan operasional bisnismu"
          />
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason2.png"
            title="Website Toko Online"
            description="Bangun website eCommerce profesional untuk mendukung penjualan online bisnis Anda."
          />
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason3.png"
            title="Website Profil Perusahaan"
            description="Tingkatkan kepercayaan pelanggan dengan website profil perusahaan yang profesional dan menarik."
          />
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason4.png"
            title="E-Education"
            description="Ciptakan website pendidikan digital yang mendukung pembelajaran online dengan sistem yang mudah diakses dan aman."
          />
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason4.png"
            title="E-Course"
            description="Bangun platform kursus online interaktif dengan fitur lengkap untuk membagikan pengetahuan dan materi pelatihan."
          />
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="top-center">
          <ServiceCard
            image="/images/reason/reason4.png"
            title="Blog"
            description="Mulai blog dengan desain profesional dan fitur lengkap untuk menyampaikan ide, konten, dan tulisan kreatifmu."
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
