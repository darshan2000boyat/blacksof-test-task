"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { SectionType, DATA } from "./constant";

type Props = {
  section: SectionType;
};

const VideoCarousel = ({ section }: Props) => {
  const { videos, modules, title, desc } = DATA[section];

  return (
    <div className="text-white w-full flex flex-col items-center justify-center py-16">
      <h2 className="text-2xl md:text-4xl font-bold text-sky-400 text-center">
        {title}
      </h2>
      <p className="mt-4 text-center text-lg md:text-xl max-w-xl">{desc}</p>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        autoplay
        loop
        className="w-full mt-10 max-w-3xl"
      >
        {videos.map((videoSrc, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col items-center justify-center pb-24">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-auto max-h-[400px] rounded-lg bg-black"
              >
                <source src={`/assets/${videoSrc}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="absolute bottom-8 text-xl font-medium text-white text-center">
                {modules[idx]}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Dot Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: #1e293b;
          opacity: 1;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #00bfff;
          width: 36px;
          height: 8px;
          border-radius: 9999px;
        }
      `}</style>
    </div>
  );
};

export default VideoCarousel;
