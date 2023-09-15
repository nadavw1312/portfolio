"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ProjectCard from "./ProjectCard";
import projects from "@/constants/projects";

const MySwiper = () => {
  return (
    <div className="">
      <Swiper
        effect={"coverflow"}
        slidesPerView={"auto"}
        style={
          {
            "--swiper-navigation-color": "#00e887",
            "--swiper-pagination-color": "#00e887",
          } as any
        }
        grabCursor={true}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              skills={project.skills}
              associated={project.associated}
              link={project.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default MySwiper;
