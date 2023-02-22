import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import BuildCircleOutlinedIcon from "@mui/icons-material/BuildCircleOutlined";

const Navbar = () => {
  /* CONFIGURE MENU ITEMS */
  const navItems = [
    { menu: "Home", link: "/" },
    { menu: "Szerviz", link: "szerviz" },
    { menu: "UV nyomtatas", link: "uv-nyomtatas" },
    { menu: "Kapcsolat", link: "kapcsolat" },
  ];

  /*MENU STATE */
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="sticky"
      sx={{
        p: "0 6%",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box display="flex" alignItems="center">
          <BuildCircleOutlinedIcon
            sx={{
              fontSize: { xs: "18px", sm: "32px" },
            }}
          />
          <Typography
            fontFamily="Kanit"
            variant="h6"
            color="secondary"
            sx={{
              fontSize: { xs: "18px", sm: "32px" },
              marginLeft: "8px",
            }}
          >
            CNC-Pro Kft
          </Typography>
        </Box>

        {/* DESKTOP MENU */}
        <Box
          display="flex"
          justifyContent="space-between"
          minWidth="30%"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          {navItems.map((item) => (
            <Button
              component={RouterLink}
              to={`${item.link}`}
              key={item.menu}
              sx={{ color: "#fff" }}
            >
              {item.menu}
            </Button>
          ))}
        </Box>
        <MenuIcon
          sx={{
            alignItem: "center",
            cursor: "pointer",
            display: { xs: "block", md: "none" },
          }}
          onClick={() => {
            setOpen(true);
            console.log(open);
          }}
        />
      </Toolbar>
      {/* MOBILE MENU */}
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {navItems.map((item) => (
          <MenuItem key={item} component={RouterLink} to={`${item.link}`}>
            {item.menu}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
