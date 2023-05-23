import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { Stack, Typography } from "@mui/material";
import { text } from "../../style/titleName/title.mjs";

const ServicesCarousel = () => {
  return (
    <div style={{ marginBottom: "50px" }}>
      <Swiper
        spaceBetween={200}
        slidesPerView={3}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Stack alignItems="center" spacing={2} direction="row">
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/Group 1.png"
            />
            <Typography sx={text}>Network</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack alignItems="center" spacing={2} direction="row">
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/pngwing 3.png"
            />
            <Typography sx={text}>Satellite</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack alignItems="center" spacing={2} direction="row">
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/6502 [Converted] 1.png"
            />
            <Typography sx={text}>Server</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack alignItems="center" spacing={2} direction="row">
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/pngwing 1.png"
            />
            <Typography sx={text}>Server</Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesCarousel;
