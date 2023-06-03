import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  activeCard,
  activeText,
  passiveText,
  readMoreButton,
} from "../../style/products/products.mjs";
import { text } from "../../style/titleName/title.mjs";
import { motion } from "framer-motion";
import { Colors } from "../../style/theme/theme.mjs";

export const FirstPassiveCard = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          width: "100%",
          height: "150px",
          background: Colors.PassiveButton,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "150px",
            background: Colors.PassiveButton,
          }}
        >
          <Stack>
            <Typography sx={passiveText}>Q3 2023</Typography>
            <Typography sx={activeText}>Platform 4</Typography>
          </Stack>
        </Box>
      </motion.div>
    </>
  );
};

const FirstActiveCard = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Box sx={activeCard}>
          <Grid container>
            <Grid item lg={6} md={6}>
              <Stack spacing={1}>
                <Typography sx={{ ...passiveText, pt: 2, pl: 2 }}>
                  Q3 2023
                </Typography>
                <Typography sx={{ ...activeText, pl: 2 }}>
                  Platform 4
                </Typography>
                <img
                  src="/images/pngwing 3.png"
                  style={{ width: "100%" }}
                  alt="ppngwing 3.png"
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
                <Typography sx={{ ...passiveText }}>
                  Time until launch
                </Typography>
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
      </motion.div>
    </>
  );
};

export default FirstActiveCard;
