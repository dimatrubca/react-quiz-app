import React, { useContext, useState } from "react";
import { Box, Button, Divider, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Quiz } from "../../types";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { useStyles } from "./quiz-completed.styles";
import { boolean } from "yup";


interface QuizCompletedParams {
    quiz: Quiz.Quiz,
    userAnswers: string[],
    finalScore: number,
    answeredRight: boolean[]
}

const QuizCompleted = (props: QuizCompletedParams) => {
    const [showAnswers, setShowAnswers] = useState<boolean>(false)
    const authContext = useContext(AuthContext)
    const classes = useStyles()
    const navigate = useNavigate()

    console.log("answers:", props.userAnswers)

    return (
        <div className={classes.main}>
            <Typography variant='h4'>{authContext.user?.name}, Congrutulations!</Typography>
            <Typography>You scored {props.finalScore} out of {props.quiz.questions.length}</Typography>

            <Box sx={{ mt: 5, mr: 1, mb: 2 }}>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={() => setShowAnswers(!showAnswers)}
                >{showAnswers ? 'Hide answers' : 'View answers'}</Button>
                    
                <Button
                    type="submit"
                    sx={{ mt: 1 }}
                    fullWidth
                    variant="outlined"
                    color="primary"
                    onClick={() => {
                        return navigate('/');
                    }}
                >Main Page</Button>
            </Box>
            <Divider/>

            { showAnswers &&
                props.quiz.questions.map((question: Quiz.Question, index: number) => (
                    <Box>
                        <Box key={index} sx={{my: 3}}>
                        <FormLabel id="demo-error-radios" sx={{ mb: 2}}>{question.question}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                // defaultValue={props.question.answers[0]}
                                name="radio-buttons-group"
                                // onChange={handleRadioChange}
                            >
                                {
                                    question.answers.map((option, key) => {
                                        {console.log(option == props.userAnswers[key], option, props.userAnswers[key])}
                                        let label = option

                                        if (option == props.userAnswers[index]) {
                                            if (props.answeredRight[index]) label += ' (Correct)'
                                            else label += ' (Wrong)'
                                        } 
                                        return <FormControlLabel value={option} control={<Radio />} 
                                                    label={label} 
                                                    key={key} disabled={true} checked={option == props.userAnswers[index]}/>
                                    })
                                }
                            </RadioGroup>
                        </Box>
                        <Divider/>
                    </Box>
                    
                ))
            }

        </div>
    )
}

export {QuizCompleted}