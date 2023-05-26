import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { text, titleName } from "../../style/titleName/title.mjs";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  CustomTextField,
  accordionStyle,
  passiveText,
  sendMessageButton,
} from "../../style/products/products.mjs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useTheme } from "@mui/material/styles/";
const Contact = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const theme = useTheme();
  const handleChange = () => {
    setExpanded(!expanded);
  };

  const handleChange1 = () => {
    setExpanded1(!expanded1);
  };

  const handleChange2 = () => {
    setExpanded2(!expanded2);
  };
  //   Yup form
  const validationSchema = Yup.object({
    fullName: Yup.string().required("required"),
    message: Yup.string().required("required"),
    email: Yup.string().required("required").email("Invalid email"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: "",
    },
    validationSchema, // shorthand used here
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <div
      id="contactUs"
      style={{
        backgroundColor: theme.palette.background.paper,
        paddingTop: "16vh",
      }}
    >
      <Box p={2}>
        <img
          src="/images/Dotted Shape.png"
          alt="Dotted Shape"
          style={{ width: "345px" }}
        />
      </Box>
      <Container>
        <Grid container mt={-30} mb={6}>
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
        <Grid container spacing={4}>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={1} mb={2}>
              <CustomTextField
                fullWidth
                name="fullName"
                label="Your full Name"
                id="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.fullName && Boolean(formik.errors.fullName)
                }
                helperText={formik.touched.fullName && formik.errors.fullName}
                placeholder="Your full Name"
                type="text"
              />
              <CustomTextField
                fullWidth
                name="email"
                label="Your Email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                placeholder="Your Email"
                type="text"
              />
              <CustomTextField
                fullWidth
                name="message"
                label="Message"
                id="message"
                multiline
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.message && Boolean(formik.errors.message)}
                helperText={formik.touched.message && formik.errors.message}
                placeholder="Message"
                type="text"
              />
            </Stack>
            <Stack>
              <Button fullWidth variant="contained" sx={sendMessageButton}>
                Send your message
              </Button>
            </Stack>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <Stack spacing={1}>
              <Typography sx={passiveText}>Address:</Typography>
              <Typography sx={text}>
                Ashgabat city, Maskovsky street <br /> (Bagtyyarlyk Sowda
                Merkezi) 4th Floor
              </Typography>
            </Stack>
            <Stack spacing={1} mt={3}>
              <Typography sx={passiveText}>Phone:</Typography>
              <Typography sx={text}>
                +993 63 129804 <br /> +993 61 010005
              </Typography>
            </Stack>
            <Stack spacing={1} mt={3}>
              <Typography sx={passiveText}>Email:</Typography>
              <Typography sx={text}>info@skytelecom.com</Typography>
            </Stack>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          justifyContent="center"
          mt={8}
          pb={3}
        >
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
          <Typography sx={titleName}>Contact us and leave a comment</Typography>
          <img
            style={{ width: "90px" }}
            src="/images/Rectangle 1.png"
            alt="Rectangle 1.png"
          />
        </Stack>
        <Stack spacing={2.5} pb={15} mt={2}>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded}
            onChange={handleChange}
          >
            <AccordionSummary
              expandIcon={
                expanded ? (
                  <RemoveIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                ) : (
                  <AddIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded1}
            onChange={handleChange1}
          >
            <AccordionSummary
              expandIcon={
                expanded1 ? (
                  <RemoveIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                ) : (
                  <AddIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={text}>Lorem Ipsum is simply dummy</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{ backgroundColor: theme.palette.customTheme.accordionBg }}
            expanded={expanded2}
            onChange={handleChange2}
          >
            <AccordionSummary
              expandIcon={
                expanded2 ? (
                  <RemoveIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                ) : (
                  <AddIcon sx={{ background: "#0A0B0F", color: "#fff" }} />
                )
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={text}>
                Lorem Ipsum is simply dummy text of the printing and
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Container>
    </div>
  );
};

export default Contact;
