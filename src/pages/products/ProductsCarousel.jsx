import React, { useEffect, useState } from "react";
import { Box, Fade, IconButton, Stack } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
  firstComponent,
  nextButtonStyle,
  prevButtonStyle,
} from "../../style/products/products.mjs";
import FirstActiveCard, { FirstPassiveCard } from "./FirstActiveCard.jsx";
import SecondCard, { SecondPassiveCard } from "./SecondCard.jsx";
import ThirdCard, { ThirdPassiveCard } from "./ThirdCard.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ProductsCarousel = () => {
  // const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // const handlePrevClick = () => {
  //   setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  // };

  // const handleNextClick = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
  // };

  // Slowly transition code

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsTransitioning(false);
      }, 1000);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [activeIndex]);

  const handlePrevClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
        setIsTransitioning(false);
      }, 1000);
    }
  };

  const handleNextClick = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
        setIsTransitioning(false);
      }, 1000);
    }
  };

  return (
    <div>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={2}
        mt={5}
        p={3.2}
      >
        {/* Simple variant starts here ........... */}

        {activeIndex === 0 ? <FirstActiveCard /> : <FirstPassiveCard />}
        {activeIndex === 1 ? <SecondCard /> : <SecondPassiveCard />}
        {activeIndex === 2 ? <ThirdCard /> : <ThirdPassiveCard />}

        {/* First varainat starts here ......... */}

        {/* {activeIndex === 0 ? (
          <FirstActiveCard />
        ) : activeIndex === 1 ? (
          <SecondCard />
        ) : (
          <ThirdCard />
        )}

        {activeIndex === 0 ? (
          <>
            <SecondPassiveCard />
            <ThirdPassiveCard />
          </>
        ) : activeIndex === 1 ? (
          <>
            <ThirdPassiveCard />
            <FirstPassiveCard />
          </>
        ) : (
          <>
            <FirstPassiveCard />
            <SecondPassiveCard />
          </>
        )} */}

        {/* Second variant starts here ......... */}

        {/* <TransitionGroup component={null}>
          <CSSTransition
            key={activeIndex}
            timeout={500}
            classNames="carousel-transition"
          >
            {activeIndex === 0 ? (
              <FirstActiveCard />
            ) : activeIndex === 1 ? (
              <SecondCard />
            ) : (
              <ThirdCard />
            )}
          </CSSTransition>
        </TransitionGroup>
        {activeIndex === 0 ? (
          <>
            <SecondPassiveCard />
            <ThirdPassiveCard />
          </>
        ) : activeIndex === 1 ? (
          <>
            <ThirdPassiveCard />
            <FirstPassiveCard />
          </>
        ) : (
          <>
            <FirstPassiveCard />
            <SecondPassiveCard />
          </>
        )} */}

        {/* Third variant starts here ..... */}

        {/* <Fade in={activeIndex === 0}>
          <Box>
            <FirstActiveCard />
          </Box>
        </Fade>
        <Fade in={activeIndex === 1}>
          <Box>
            <SecondCard />
          </Box>
        </Fade>
        <Fade in={activeIndex === 2}>
          <Box>
            <ThirdCard />
          </Box>
        </Fade>
        <SecondPassiveCard />
        {activeIndex === 0 ? (
          <Fade in={true}>
            <Box>
              <FirstPassiveCard />
            </Box>
          </Fade>
        ) : (
          <Fade in={true}>
            <Box>
              <ThirdPassiveCard />
            </Box>
          </Fade>
        )} */}
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
  );
};

export default ProductsCarousel;
