import React from "react";
import {
  useTheme,
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { text } from "../../style/titleName/title.mjs";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div
      id="home"
      style={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <img
        style={{ width: "100%" }}
        src="/images/Untitled (1).png"
        alt="Untitled"
      />
      <Container>
        <Box sx={{ position: "absolute", top: 0 }}>
          <Stack
            direction={"row"}
            alignItems={isMobile ? "center" : "flex-start"}
            justifyContent={isMobile ? "center" : "flex-start"}
            height={isMobile ? "50%" : "100vh"}
            pt={isMobile ? "30%" : "50%"}
          >
            <Stack>
              <Typography
                sx={{ ...text, fontSize: isMobile ? "16px" : "24px" }}
              >
                SKY TELECOM
              </Typography>
              <Typography
                sx={{ ...text, fontSize: isMobile ? "30px" : "50px" }}
              >
                Shaping life experience
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Container>
      <Stack
        direction="row"
        alignItems="flex-end"
        justifyContent="center"
        width="100%"
        mt={isMobile ? -5 : -15}
        pb={isMobile ? 5 : 10}
      >
        <KeyboardArrowDownIcon className="animated-icon" />
      </Stack>
    </div>
  );
};

export default Home;
