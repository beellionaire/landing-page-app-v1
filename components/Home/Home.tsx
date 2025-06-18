import Faq from "./Faq/Faq";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Pricing from "./Pricing/Pricing";
import Reason from "./Reason/Reason";

const Home = () => {
  return (
    <div className="overflow-hidden h-[10000px]">
      <Hero />
      <Reason />
      <Pricing />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
