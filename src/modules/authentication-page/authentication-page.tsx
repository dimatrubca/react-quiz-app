import React, { ReactNode, useContext } from "react";
import { Avatar, Container, Paper, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { AuthenticationForm } from '../../components/authentication-form'
import { useStyles } from "./authentication-styles";
import LoginSharpIcon from '@mui/icons-material/LoginSharp';
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";



const AuthenticationPage = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate ();

  if (authContext.isAuthenticated) {
    navigate('/')
  }

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