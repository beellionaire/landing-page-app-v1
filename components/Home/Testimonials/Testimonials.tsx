"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Testimonials = () => {
  return (
    <div className="pt-16 pb-16 bg-[#fcf6fa]">
      <h1 className="mt-6 text-2xl md:text-5xl capitalize font-bold text-center">
        Pelanggan Kami
      </h1>
      <div className="mt-20 w-[90%] md:w-[80%] mx-auto">
        <Carousel
          arrows={false}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite
          showDots
        >
          <TestimonialCard
            name="Lorem ipsum"
            images="/images/testi.png"
            job="Fullstack Developer"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus est ullam incidunt eos nesciunt porro tenetur laboriosam blanditiis impedit."
          />
          <TestimonialCard
            name="Lorem ipsum"
            images="/images/testi.png"
            job="Fullstack Developer"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus est ullam incidunt eos nesciunt porro tenetur laboriosam blanditiis impedit."
          />
          <TestimonialCard
            name="Lorem ipsum"
            images="/images/testi.png"
            job="Fullstack Developer"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus est ullam incidunt eos nesciunt porro tenetur laboriosam blanditiis impedit."
          />
          <TestimonialCard
            name="Lorem ipsum"
            images="/images/testi.png"
            job="Fullstack Developer"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus est ullam incidunt eos nesciunt porro tenetur laboriosam blanditiis impedit."
          />
          <TestimonialCard
            name="Lorem ipsum"
            images="/images/testi.png"
            job="Fullstack Developer"
            desc=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptatibus est ullam incidunt eos nesciunt porro tenetur laboriosam blanditiis impedit."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
