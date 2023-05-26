import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import FirstActiveCard, { FirstPassiveCard } from "./FirstActiveCard.jsx";
import SecondCard, { SecondPassiveCard } from "./SecondCard.jsx";
import ThirdCard, { ThirdPassiveCard } from "./ThirdCard.jsx";
import { Box, Stack } from "@mui/material";

const ProductsCarousel = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Swiper
        spaceBetween={10}
        autoplay={true}
        slidesPerView={3}
        autoHeight={true}
        modules={[Navigation, Autoplay]}
        navigation
        loop
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(4)].map((_, i) => (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-around"
          >
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      {i === 0 ? (
                        <FirstActiveCard />
                      ) : i === 1 ? (
                        <SecondCard />
                      ) : (
                        <ThirdCard />
                      )}
                    </motion.div>
                  ) : (
                    <>
                      {i === 0 ? (
                        <FirstPassiveCard />
                      ) : i === 1 ? (
                        <SecondPassiveCard />
                      ) : (
                        <ThirdPassiveCard />
                      )}
                    </>
                  )}
                </>
              )}
            </SwiperSlide>
          </Stack>
        ))}
      </Swiper>
    </Box>
  );
};

export default ProductsCarousel;
