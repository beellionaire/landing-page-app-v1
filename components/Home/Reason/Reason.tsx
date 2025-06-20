import ReasonCard from "./ReasonCard";

const Reason = () => {
  return (
    <div className="pt-16 pb-0">
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-center">
        Kenapa Harus Buat Website di
      </h1>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mt-2">
        <span className="text-4xl md:text-5xl text-blue-400">Inspira</span>
        Site
      </h1>
      <p className="text-gray-600 text-center mt-10 text-xl max-w-[900px] mx-auto">
        Selain jasa pembuatan website, kami juga membantu memperbarui dan
        menyempurnakan desain website Anda agar selaras dengan kebutuhan bisnis
        yang terus berkembang.
      </p>

      <div className="mt-24 mb-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 py-8 ">
        {/* Card */}
        <div data-aos="fade-right" data-aos-anchor-placement="top-center">
          <ReasonCard
            image="/images/reason/reason1.png"
            title="Cepat dan Professional"
            description="Pembuatan website cepat, tepat waktu, dan dikerjakan oleh tim profesional berpengalaman."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="100"
        >
          <ReasonCard
            image="/images/reason/reason2.png"
            title="Mudah Dikelola dan Aman"
            description="Website mudah digunakan, aman dari gangguan, dan cocok untuk semua level pengguna."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="200"
        >
          <ReasonCard
            image="/images/reason/reason3.png"
            title="Desain Variatif dan Responsif"
            description="Desain modern, variatif, dan tampil optimal di semua perangkat, dari desktop hingga mobile."
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-anchor-placement="top-center"
          data-aos-delay="300"
        >
          <ReasonCard
            image="/images/reason/reason4.png"
            title="Layanan Konsultasi Gratis"
            description="Dapatkan konsultasi gratis untuk menentukan solusi digital terbaik sesuai kebutuhan bisnis Anda."
          />
        </div>
      </div>
    </div>
  );
};

export default Reason;
