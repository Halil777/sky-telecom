import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { navbarItems } from "../../data/navbarItems/items.mjs";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 1,
        }}
      >
        <Box className="header bgGlass">
          <Container>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              pt={2}
            >
              <img
                src="/images/Logo.png"
                style={{ width: "138px", height: "71px", cursor: "pointer" }}
                alt="Logo"
              />
              <Stack direction="row" alignItems="center" spacing={5}>
                {navbarItems.map((item, i) => {
                  return (
                    <Link
                      key={`navbar_items${i}`}
                      activeClass="active"
                      spy={true}
                      to={item.link}
                      smooth={true}
                      duration={500}
                      className="scroll-link"
                    >
                      <Typography>{t(item.title)}</Typography>
                    </Link>
                  );
                })}
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
