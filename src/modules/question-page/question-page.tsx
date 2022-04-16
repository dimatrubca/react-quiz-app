import React, { ReactNode } from "react";
import { Avatar, Container, Paper, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import { QuestionForm } from '../../components/question-form'
import { useStyles } from "./question-page-styles";



const QuestionPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <Paper className={classes.mainSection}>
        <QuestionForm/>
      </Paper>
    </Container>
  );
};

export { QuestionPage };