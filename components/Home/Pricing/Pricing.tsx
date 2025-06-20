import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="pt-16 pb-16 bg-slate-50">
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-center ">
        Pilih Paket Website Terbaik
      </h1>
      <h1 className="mt-2 text-4xl md:text-5xl font-bold text-center ">
        untuk Bisnis Anda
      </h1>
      <p className="text-center text-gray-600 mt-10 text-lg max-w-[900px] mx-auto">
        Dapatkan website profesional dengan berbagai pilihan paket yang sesuai
        dengan kebutuhan dan budget bisnis Anda. Semua paket dilengkapi dengan
        dukungan penuh dan garansi kualitas.
      </p>

      <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 mx-auto">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:grid-cols-3 md:gap-8" data-aos="flip-up" data-aos-anchor-placement="top-center">
          <PricingCard
            plan="Starter"
            price="500.000"
            desc="Website sederhana cocok untuk UMKM."
            features={[
              { label: "10 users", isAvailable: true },
              { label: "2GB of storage", isAvailable: true },
              { label: "Email support", isAvailable: true },
              { label: "Help center access", isAvailable: false },
              { label: "Phone support", isAvailable: false },
              { label: "Community access", isAvailable: false },
            ]}
          />

          <PricingCard
            plan="Pro"
            price="1.000.000"
            desc="Website profesional untuk bisnis besar"
            features={[
              { label: "50 users", isAvailable: true },
              { label: "10GB of storage", isAvailable: true },
              { label: "Priority email support", isAvailable: true },
              { label: "Help center access", isAvailable: true },
              { label: "Phone support", isAvailable: false },
              { label: "Community access", isAvailable: false },
            ]}
          />

          <PricingCard
            plan="Business"
            price="2.000.000"
            desc="Website profesional untuk bisnis besar."
            features={[
              { label: "100 users", isAvailable: true },
              { label: "20GB of storage", isAvailable: true },
              { label: "Phone & email support", isAvailable: true },
              { label: "Help center access", isAvailable: true },
              { label: "Priority phone support", isAvailable: true },
              { label: "Community access", isAvailable: true },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
