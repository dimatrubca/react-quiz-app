import React from "react";
import { Container, Grid, Paper } from "@material-ui/core";
import { useStyles } from "./paper-container.styles";

interface PaperContainerProps {
  children: React.ReactNode;
}



const AuthenticationPage = (props: PaperContainerProps) => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </Container>
  );
};

export { AuthenticationPage };