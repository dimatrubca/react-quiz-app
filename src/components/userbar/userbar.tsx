import React, { useContext } from "react";
import { Container, Typography } from "@material-ui/core";
import { Link as RouterLink } from "@material-ui/core";
import { AuthContext } from "../../context";
import { useStyles } from "./userbar.styles";
import { UserService } from "../../services";

interface NavData {
  label: string;
  href: string;
}



const Userbar = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  if (!authContext.isAuthenticated) {
      return <></>
  }

  return (
    <>
      <Container className={classes.root}>
            <RouterLink href="/profile">
              {" "}
              Welcome {authContext.user?.name} {authContext.user?.surname}!
            </RouterLink>

            <RouterLink
              href="/authenticate"
              className={classes.linkItem}
              onClick={async () => { await authContext.logout()}}
            >
              Switch User
            </RouterLink>
      </Container>
    </>
  );
};

export { Userbar };