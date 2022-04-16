import React, { ReactNode } from "react";
import { Container, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

import { useStyles } from "./quiz-list-page-styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'


const QuizListPage = () => {
    const classes = useStyles();
    
    console.log("...")
    return (

        <Container>
            <Paper className={classes.paper}>
            
            <Grid container spacing={2}>
                <Grid item xs={8} md={10}>
                    <Typography variant="h6">Select the quiz</Typography>
                </Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>
                    <Typography variant="h6">Questions</Typography>
                </Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
            </Grid>
            </Paper>
        </Container>
    )
}

export { QuizListPage }
