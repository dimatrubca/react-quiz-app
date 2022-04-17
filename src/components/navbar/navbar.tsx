import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  Drawer,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { makeStyles, Link } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

import { useStyles } from "./navbar.styles";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Create QUiz",
    href: "/quizzes/create",
  },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));


  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        {logoComponent}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setDrawerOpen(true);
    };
    const handleDrawerClose = () => {
      setDrawerOpen(false);
    };

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
        </Drawer>

        <div>{logoComponent}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const logoComponent = (
    <Typography variant="h6" component="h1" className={classes.logo}>
      QuizApp
    </Typography>
  );

  const getMenuButtons = () => {
    let buttons = headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });

    return <>{buttons}</>;
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {isMobile ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
};

export { Navbar };