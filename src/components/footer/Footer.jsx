import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles/";

const footerStyle = {
  background: "#18202B",
};

const footerTitle = {
  color: "#fff",
  fontWeight: "500",
  fontSize: "26px",
  paddingTop: "30px",
  marginBottom: "15px",
};

const footerText = {
  color: "#fff",
  fontWeight: "400",
  fontSize: "16px",
  width: "82%",
  paddingBottom: "30px",
};

const Footer = () => {
  const theme = useTheme();

  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.background.default }}>
        <Container>
          <Typography sx={footerTitle}>
            Get in touch with us for your service
          </Typography>
          <Typography sx={footerText}>
            Our company was established 15 July 2011. Since then we have seen a
            huge growth in turnovers and volumes of operation. Our company was
            established 15 July 2011.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: theme.palette.background.paper }}>
        <Container>
          <Typography
            sx={{ ...footerText, paddingTop: "15px", paddingBottom: "15px" }}
          >
            © 2023 Sky Telecom plaform all Rights Reserved!
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
