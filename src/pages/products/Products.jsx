import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import { text, titleName } from "../../style/titleName/title.mjs";
import ProductsCarousel from "./ProductsCarousel.jsx";

const Products = () => {
  return (
    <div id="products" style={{ background: "#0A0B0F", paddingTop: "16vh" }}>
      <Container>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={2}
        >
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
          <Typography sx={titleName}>products</Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" mt={1}>
          <Typography sx={{ ...text, width: "50%", textAlign: "end" }}>
            Sky Telecom new hosted payload services introduces the easiest way
            to fly and operate your payload in orbit. The Shared Satellite
            Service eliminates the traditional legal, technologic and logistic
            and logistic complexity from your mission.
          </Typography>
        </Stack>
        <Stack mt={5}>
          <ProductsCarousel />
        </Stack>
      </Container>
    </div>
  );
};

export default Products;
