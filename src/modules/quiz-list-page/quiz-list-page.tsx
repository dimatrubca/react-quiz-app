import React, { ReactNode, useEffect, useState } from "react";
import { Container, Paper, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';

import { useStyles } from "./quiz-list-page-styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { QuizAPIService } from "../../services";
import { useFetch } from "../../hooks";
import { Quiz } from "../../types";
import { Link } from "react-router-dom";


const QuizListPage = () => {
    const classes = useStyles();

    const {
        data: quizzes,
        fetch: fetchQuizzes,
        isLoading,
      } = useFetch<Quiz.QuizInfo[]>(QuizAPIService.GetQuizzes);


    useEffect(() => {
        fetchQuizzes()
    }, [fetchQuizzes])
    
    console.log("...")
    return (

        <Container>
            <Paper className={classes.paper}>
            
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5">Select the Quiz</Typography>
                </Grid>
                <Grid item xs={8} md={10}>
                    <Typography variant="h6">Name</Typography>
                </Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>
                    <Typography variant="h6">Questions</Typography>
                </Grid>
                {quizzes?.map((quiz, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={8} md={10}><Link to={"quizzes/" + quiz.id} className={classes.quizTitle}>{quiz.title}</Link></Grid>
                        <Grid item xs={4} md={2} className={classes.centerAlignText}>{quiz.questions_count}</Grid>
                    </React.Fragment>
                ))}
                {/* <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid>
                <Grid item xs={8} md={10}>1</Grid>
                <Grid item xs={4} md={2} className={classes.centerAlignText}>2</Grid> */}
            </Grid>
            </Paper>
        </Container>
    )
}

export { QuizListPage }
