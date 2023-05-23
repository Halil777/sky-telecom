import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  activeCard,
  activeText,
  passiveText,
  readMoreButton,
} from "../../style/products/products.mjs";
import { text } from "../../style/titleName/title.mjs";

export const ThirdPassiveCard = () => {
  return (
    <>
      <Box sx={{ ...activeCard, width: "464px", height: "150px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Stack>
            <Typography sx={passiveText}>Q3 2023</Typography>
            <Typography sx={activeText}>Platform 6</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

const ThirdCard = () => {
  return (
    <>
      <Box sx={activeCard}>
        <Grid container>
          <Grid item lg={6} md={6}>
            <Stack spacing={1}>
              <Typography sx={{ ...passiveText, pt: 2, pl: 2 }}>
                Q3 2023
              </Typography>
              <Typography sx={{ ...activeText, pl: 2 }}>Platform 6</Typography>
              <img
                src="/images/png.png"
                style={{ width: "100%" }}
                alt="png.png"
              />
            </Stack>
          </Grid>
          <Grid item lg={0.2} md={0.2}>
            <img
              src="/images/Vector 1.png"
              style={{ height: "400px" }}
              alt="Vector 1.png"
            />
          </Grid>
          <Grid item lg={5.5} md={5.5}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Typography sx={{ ...passiveText }}>Attitude</Typography>
              <Typography sx={text}>500-600 km</Typography>
            </Stack>
            <Stack mt={3}>
              <img
                src="/images/Vector 2.png"
                style={{ width: "100%" }}
                alt="Vector 2.png"
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Typography sx={{ ...passiveText }}>Type</Typography>
              <Typography sx={text}>SSO</Typography>
            </Stack>
            <Stack mt={3}>
              <img
                src="/images/Vector 2.png"
                style={{ width: "100%" }}
                alt="Vector 2.png"
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Typography sx={{ ...passiveText }}>Units available</Typography>
              <Typography sx={text}>9U</Typography>
            </Stack>
            <Stack mt={3}>
              <img
                src="/images/Vector 2.png"
                style={{ width: "100%" }}
                alt="Vector 2.png"
              />
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Typography sx={{ ...passiveText }}>Time until launch</Typography>
              <Typography sx={text}>405d : 03h : 27m</Typography>
            </Stack>
            <Stack mt={3}>
              <img
                src="/images/Vector 2.png"
                style={{ width: "100%" }}
                alt="Vector 2.png"
              />
            </Stack>
            <Stack mt={5} direction="row" justifyContent="center">
              <Button variant="contained" sx={readMoreButton}>
                Read more
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ThirdCard;
