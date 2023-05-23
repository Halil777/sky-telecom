import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { text, titleName } from "../../style/titleName/title.mjs";

const Contact = () => {
  return (
    <div id="contactUs" style={{ background: "#0A0B0F", paddingTop: "16vh" }}>
      <Box p={2}>
        <img
          src="/images/Dotted Shape.png"
          alt="Dotted Shape"
          style={{ width: "345px" }}
        />
      </Box>
      <Container>
        <Grid container mt={-20}>
          <Grid lg={6} md={6} sm={12} xs={12}></Grid>
          <Grid lg={6} md={6} sm={12} xs={12}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing={2}
            >
              <img
                style={{ width: "90px" }}
                src="/images/Rectangle 1.png"
                alt="Rectangle 1.png"
              />
              <Typography sx={titleName}>Contact us</Typography>
            </Stack>
            <Stack direction="row" justifyContent="flex-end" mt={1}>
              <Typography sx={{ ...text, textAlign: "end" }}>
                Sky Telecom new hosted payload services introduces the easiest
                way to fly and operate your payload in orbit. The Shared
                Satellite Service eliminates the traditional legal, technologic
                and logistic and logistic complexity from your mission.
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
