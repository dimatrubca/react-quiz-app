import React, { ReactNode, useEffect, useState } from "react";
import { Avatar, Container, Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";

import LockIcon from "@material-ui/icons/Lock";

import { QuestionForm } from '../../components/question-form'
import { useStyles } from "./question-page-styles";
import { useFetch } from "../../hooks";
import { QuizAPIService } from "../../services";
import { Quiz } from "../../types";
import { QuizCompleted } from "../../components/quiz-completed";


// TODO: props type (interface)
const QuestionPage = (props: any) => {
  const classes = useStyles();
  const { id } = useParams();
  const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0)
  const [currScore, setCurrScore] = useState<number>(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [answeredRight, setAnsweredRight] = useState<boolean[]>([])

  const {
    data: quiz,
    fetch: fetchQuiz,
    isLoading,
  } = useFetch<Quiz.Quiz>(() => QuizAPIService.GetQuiz(Number(id)));

  useEffect(() => {
      fetchQuiz()
  }, [])

  const incCurrQuestionIndex = (answer: string, answeredCorrectly: boolean) => {
      setCurrQuestionIndex(currQuestionIndex + 1)

      if (answeredCorrectly) {
          setCurrScore(currScore + 1)
      }

      const answersValues = answers
      answersValues.push(answer)
      setAnswers(answersValues)

      const answeredRightValues = answeredRight
      answeredRightValues.push(answeredCorrectly) 
      setAnsweredRight(answeredRightValues)
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!quiz) {
      return <p>Quiz coudn't be loaded</p>
  }
  
  return (
    <Container component="main" maxWidth="xs" className={classes.main}>
      <Paper className={classes.mainSection}>
          { (currQuestionIndex >= quiz.questions.length) ? (
            <QuizCompleted quiz={quiz} finalScore={currScore} userAnswers={answers} answeredRight={answeredRight}/>

          ) : (
            <QuestionForm question={quiz.questions[currQuestionIndex]} goToNextQuestion={incCurrQuestionIndex} quizId={Number(id)}/>
          )}
      </Paper>
    </Container>
  );
};

export { QuestionPage };