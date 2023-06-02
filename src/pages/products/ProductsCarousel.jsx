import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  nextButtonStyle,
  prevButtonStyle,
} from "../../style/products/products.mjs";
import FirstActiveCard, { FirstPassiveCard } from "./FirstActiveCard.jsx";
import SecondCard, { SecondPassiveCard } from "./SecondCard.jsx";
import ThirdCard, { ThirdPassiveCard } from "./ThirdCard.jsx";
import { IconButton, Stack } from "@mui/material";

const ProductsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const transition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <>
      <div>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          mt={5}
          p={3.2}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
            >
              {activeIndex === 0 ? (
                <FirstActiveCard />
              ) : activeIndex === 1 ? (
                <SecondCard />
              ) : (
                <ThirdCard />
              )}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {activeIndex === 0 ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <SecondPassiveCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <ThirdPassiveCard />
                </motion.div>
              </>
            ) : activeIndex === 1 ? (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <ThirdPassiveCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <FirstPassiveCard />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <FirstPassiveCard />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                  <SecondPassiveCard />
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={2}
          mt={-30}
          mb={40}
        >
          <IconButton sx={prevButtonStyle} onClick={handlePrevClick}>
            <ArrowBackIosIcon sx={{ fontSize: "10px" }} />
          </IconButton>
          <IconButton sx={nextButtonStyle} onClick={handleNextClick}>
            <ArrowForwardIosIcon sx={{ fontSize: "10px" }} />
          </IconButton>
        </Stack>
      </div>
    </>
  );
};

export default ProductsCarousel;
