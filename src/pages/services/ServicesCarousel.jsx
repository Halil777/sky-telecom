import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { useMediaQuery, Stack, Typography } from "@mui/material";
import { text } from "../../style/titleName/title.mjs";

const ServicesCarousel = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const slidesPerView = isMobile ? 1 : 3;

  return (
    <div style={{ marginBottom: "50px" }}>
      <Swiper
        spaceBetween={200}
        slidesPerView={slidesPerView}
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
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/Group 1.png"
            />
            <Typography sx={text}>Network</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/pngwing 3.png"
            />
            <Typography sx={text}>Satellite</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
            <img
              alt="group"
              style={{ width: "100%" }}
              src="/images/6502 [Converted] 1.png"
            />
            <Typography sx={text}>Server</Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Stack
            alignItems="center"
            spacing={2}
            direction={isMobile ? "column" : "row"}
          >
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
