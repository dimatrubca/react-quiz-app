import React, { useContext } from "react";
import { Box, Button, Container, FormControl, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { FormControlLabel } from '@mui/material';
import { useSnackbar } from 'notistack';

import { useStyles } from "./question-form.styles";
import { Quiz } from "../../types";
import { QuizAPIService } from "../../services";
import { AuthContext } from "../../context";


interface QuestionFormParams {
    quizId: number,
    question: Quiz.Question,
    goToNextQuestion: (answer: string, answeredCorrect: boolean) => void
}

const QuestionForm = (props: QuestionFormParams) => {
    const [value, setValue] = React.useState('');
    const classes = useStyles();
    const authContext = useContext(AuthContext)
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        console.log("inside handleSubmit, value = " + value)

        try {
            if (!authContext.user) {
                throw Error("No user")
            }

            const userAnswer = ((value != '') ? value : props.question.answers[0])

            const response = await QuizAPIService.SubmitQuizResponse({ 
                question_id: props.question.id,
                answer: userAnswer,
                user_id: authContext.user.id
            }, props.quizId)

            props.goToNextQuestion(userAnswer, response.correct)
        } catch (e: any) {
            console.log(e)
            let errorMessage = JSON.parse(e['message'])
            enqueueSnackbar(errorMessage['message'], { variant: "error" });
        }
    }

    console.log("question form, question:", props.question)
    
    if (!props.question.answers) {
        return <div>No options</div>
    }

    return (
        <div className={classes.form}>
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel id="demo-error-radios" sx={{ mb: 2}}>{props.question.question}</FormLabel>

                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={props.question.answers[0]}
                        name="radio-buttons-group"
                        onChange={handleRadioChange}
                    >
                        {
                            props.question.answers.map((option, key) => {
                                return <FormControlLabel value={option} control={<Radio />} label={option} key={key}/>
                            })
                        }
                    </RadioGroup>
                    <Box className={classes.submitBtn}>
                        <Button
                            type="submit"
                            variant="outlined"
                            color="primary"
                            fullWidth
                        >
                            Next
                        </Button>
                    </Box>
                </FormControl>
            </form>
        </div>
    )
}

export {QuestionForm}