import { useRef } from "react";
import type { Swiper as SwiperClass } from "swiper";
import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { Button } from "@mantine/core";

const Projects = () => {
  const showSlider = ProjectInfo.length > 3;
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
<div className="relative z-0 px-16 my-10 font-mono md-mx:px-[11px]" id="Projects">
      {/* Heading */}
    <div className="relative mb-10">
  <h1 className="text-4xl sm-mx:text-3xl xs-mx:text-2xl text-center font-bold text-primaryColor">
    Projects
  </h1>

  {/* Top-right container with GET CV + arrows */}
  {showSlider && (
    <div className="absolute top-0 right-6 sm:right-4 hidden sm:flex gap-2 z-10 items-center">
      {/* <Button
        className="
          focus-visible:!outline-none
          !text-primaryColor 
          !w-fit 
          xs-mx:!w-[46%]
          border 
          border-[#64FFDA] 
          hover:!bg-[#64FFDA] 
          hover:!text-bgColor"
        variant="outline"
        color="#64FFDA"
      >
        VIEW ALL
      </Button> */}
      <button className="swiper-button-prev-custom bg-bgColor text-primaryColor border border-primaryColor hover:bg-primaryColor hover:text-bgColor transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center">
        <FaArrowLeft />
      </button>
      <button className="swiper-button-next-custom bg-bgColor text-primaryColor border border-primaryColor hover:bg-primaryColor hover:text-bgColor transition-all duration-200 rounded-full w-10 h-10 flex items-center justify-center">
        <FaArrowRight />
      </button>
    </div>
  )}
</div>


      {/* Swiper */}
      {showSlider ? (
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper: SwiperClass) => {
              swiperRef.current = swiper;
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={10}
            centeredSlides={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {ProjectInfo.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} swiperRef={swiperRef} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom arrows (mobile only) */}
          <div className="sm:hidden flex justify-center gap-4">
            <button className="swiper-button-prev-custom bg-bgColor text-primaryColor border border-primaryColor hover:bg-primaryColor hover:text-bgColor transition duration-200 rounded-full w-10 h-10 flex items-center justify-center">
              <FaArrowLeft />
            </button>
            <button className="swiper-button-next-custom bg-bgColor text-primaryColor border border-primaryColor hover:bg-primaryColor hover:text-bgColor transition duration-200 rounded-full w-10 h-10 flex items-center justify-center">
              <FaArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
          {ProjectInfo.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
