import React, { ReactNode } from "react";
import { Avatar, Container, Paper, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { AuthenticationForm } from '../../components/authentication-form'
import { useStyles } from "./authentication-styles";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';



const AuthenticationPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <Paper className={classes.mainSection}>
        <Avatar className={classes.avatar}>
          <LoginSharpIcon />
        </Avatar>
        <AuthenticationForm/>
      </Paper>
    </Container>
  );
};

export { AuthenticationPage };