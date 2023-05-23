import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  servicesActiveButton,
  servicesPassiveButton,
} from "../../style/services/services.mjs";
import ServerComponent from "./ServerComponent.jsx";
import { text, titleName } from "../../style/titleName/title.mjs";
import ServicesCarousel from "./ServicesCarousel.jsx";

const Services = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };
  return (
    <div id="services" style={{ background: "#0A0B0F", paddingTop: "16vh" }}>
      <Container>
        <Stack alignItems="center" mb={10}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <img
              style={{ width: "90px" }}
              src="/images/Rectangle 1.png"
              alt="Rectangle 1.png"
            />
            <Typography sx={titleName}>services</Typography>
            <img
              style={{ width: "90px" }}
              src="/images/Rectangle 1.png"
              alt="Rectangle 1.png"
            />
          </Stack>
          <Typography sx={{ ...text, width: "50%", textAlign: "center" }}>
            Sky Telecom new hosted payload services introduces the easiest way
            to fly and operate your payload in orbit. The Shared Satellite
            Service eliminates the traditional legal, technologic and logistic
            and logistic complexity from your mission.
          </Typography>
        </Stack>
        <ServicesCarousel />
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button
            variant="contained"
            sx={
              activeButton === 0 ? servicesActiveButton : servicesPassiveButton
            }
            onClick={() => handleButtonClick(0)}
          >
            Server
          </Button>
          <Button
            variant="contained"
            sx={
              activeButton === 1 ? servicesActiveButton : servicesPassiveButton
            }
            onClick={() => handleButtonClick(1)}
          >
            Network
          </Button>
          <Button
            variant="contained"
            sx={
              activeButton === 2 ? servicesActiveButton : servicesPassiveButton
            }
            onClick={() => handleButtonClick(2)}
          >
            Satellite
          </Button>
        </Stack>
        {activeButton === 0 && <ServerComponent />}
        {activeButton === 1 && <>salam 2</>}
        {activeButton === 2 && <>salam 3</>}
      </Container>
    </div>
  );
};

export default Services;
