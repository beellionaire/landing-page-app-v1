const Portfolio = () => {
  return (
    <div className="pt-16 pb-16">
      <h1 className="mt-6 text-4xl md:text-5xl font-bold text-center">
        Proyek Unggulan Kami
      </h1>
      <p className="text-gray-600 text-center mt-10 text-xl max-w-[900px] mx-auto">
        Jelajahi portofolio solusi digital kami yang telah membantu berbagai
        bisnis mengubah kehadiran online mereka.
      </p>

      <div className="mt-24 mb-20 grid w-[90%] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-4 py-8 "></div>
    </div>
  );
};

export default Portfolio;
