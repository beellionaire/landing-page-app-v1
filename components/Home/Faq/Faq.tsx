const Faq = () => {
  return (
    <div className="pt-16 pb-16 bg-slate-50 scroll-mt-28" id="faq">
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-center ">
        Pertanyaan Seputar
      </h1>
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mt-2">
        <span className="text-4xl md:text-5xl text-blue-400">Inspira</span>
        Site
      </h1>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
        <div className="flow-root">
          <div className="-my-4 flex flex-col divide-y divide-gray-200">
            <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Apa itu jasa pembuatan website?
                </h2>

                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="pt-4 text-gray-900">
                Layanan pembuatan website kami menyediakan solusi lengkap untuk
                merancang dan mengembangkan website profesional, mulai dari
                company profile hingga toko online menggunakan platform unggulan
                seperti WordPress dan teknologi eCommerce terkini.
              </p>
            </details>

            <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Berapa lama waktu yang dibutuhkan untuk menyelesaikan proyek
                  jasa pembuatan website?
                </h2>

                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="pt-4 text-gray-900">
                Waktu pengerjaan bergantung pada kompleksitas proyek. Umumnya,
                website dapat diselesaikan dalam 2–4 minggu. Untuk proyek yang
                lebih kompleks, durasinya bisa lebih lama menyesuaikan
                kebutuhan.
              </p>
            </details>

            <details className="group py-4 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-1.5 text-gray-900">
                <h2 className="text-lg font-medium">
                  Tools apa yang digunakan untuk membuat website?
                </h2>

                <svg
                  className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>

              <p className="pt-4 text-gray-900">
                Kami menggunakan WordPress sebagai platform utama karena
                fleksibilitas dan kemudahan penggunaannya. Dengan WordPress,
                Anda dapat mengelola konten dengan mudah serta mengembangkan
                situs sesuai kebutuhan di masa depan.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
