import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { motion } from "framer-motion";
import FirstActiveCard, { FirstPassiveCard } from "./FirstActiveCard.jsx";
import { Box, Grid } from "@mui/material";

const items = [
  {
    title: "Platform 1",
    image: "/images/png.png",
  },
  {
    title: "Platform 2",
    image: "/images/pngwing 1.png",
  },
  {
    title: "Platform 3",
    image: "/images/pngwing 3.png",
  },
  {
    title: "Platform 4",
    image: "/images/imagee.png",
  },
];

const ProductsCarousel = () => {
  const [active, setActive] = useState(0);

  const handleSlideChange = () => {
    console.log("slide change");
  };

  const handleSwiper = (swiper) => {
    console.log(swiper);
  };

  const handleSlideActive = (i) => {
    setActive(i);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        spaceBetween={10}
        autoplay={true}
        slidesPerView={3}
        autoHeight={true}
        modules={[Autoplay]}
        loop
        onSlideChange={handleSlideChange}
        onSwiper={handleSwiper}
      >
        {items.map((item, i) => (
          <SwiperSlide
            key={i}
            style={{ width: active === i ? "100%" : "100%" }}
          >
            {({ isActive }) => {
              if (isActive) {
                handleSlideActive(i);
              }

              return (
                <>
                  <Grid container sx={{ width: "100%" }}>
                    <Grid item lg={7} sm={7} xs={12} width="100%">
                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.1 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 1 }}
                        >
                          <FirstActiveCard item={item} />
                        </motion.div>
                      ) : null}
                    </Grid>
                    <Grid item lg={5} sm={5} xs={12}>
                      {!isActive ? <FirstPassiveCard item={item} /> : null}
                    </Grid>
                  </Grid>
                </>
              );
            }}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductsCarousel;
