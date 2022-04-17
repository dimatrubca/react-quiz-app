import React, { Fragment, ReactNode, useState } from "react";
import { Avatar, Box, Button, Container, Divider, FormControlLabel, Grid, IconButton, Paper, Radio, RadioGroup, TextField, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';

import { AuthenticationForm } from '../../components/authentication-form'
import { useStyles } from "./create-quiz-page-styles";
import { Add } from "@material-ui/icons";
import { QuizAPIService } from "../../services";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";



const CreateQuizPage = () => {
  const classes = useStyles();
  const navigate = useNavigate()
  const [quizTitle, setQuizTitle] = useState<string>('');
  const [inputFields, setInputFields] = useState<any>([{ question: '', answers: ['', '', '', ''], correct_answer: null},
                                                       { question: '', answers: ['', '', '', ''], correct_answer: null}]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();




  const handleTitleChange = (index: any, event: any) => {
    const values = [...inputFields];

    values[index].question = event.target.value;

    setInputFields(values)
  };

  const handleAnswerOptionChanges = (index: any, answerIndex:any, event:any) => {
    const values = [...inputFields];

    values[index].answers[answerIndex] = event.target.value;

    setInputFields(values)

    console.log(inputFields)
  }

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
        question: '',
        answers: ['Option1', 'Option2', 'Option3', 'Option4 '],
        correct_answer: null
    });
    setInputFields(values);
  };

  const handleRemoveFields = (index: any) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleAddAnswerFields = (index: any) => {
    const values = [...inputFields];
    values[index].answers.push('');
    setInputFields(values);
  }

  const handleRemoveAnswerFields = (index: any) => {
      const values = [...inputFields]

      if (values[index].answers.length > 1) {
        values[index].answers.pop()
        setInputFields(values)
    }
  }


  const handleRadioChange = (index: any, event: React.ChangeEvent<HTMLInputElement>) => {
        const values = [...inputFields]
        values[index].correct_answer = (event.target as HTMLInputElement).value

        setInputFields(values)
  }

  const validateInput = () => {
        if (inputFields.length < 3) {
            return `Quiz should contain at least 3 questions`
        }

        for (let i = 0; i < inputFields.length; i++) {
            let inputField = inputFields[i]
            if (!inputField.correct_answer) return `Correct answer not selected for question ${i + 1}`
            if (!inputField.question) return `Question ${i + 1} title is blank`

            if (inputField.answers.length < 2 || inputField.answers.length > 10) {
                return `Each question should contain between 2 and 10 answer options`
            }

            for (let answer of inputField.answers) {
                if (!answer) return 'Blank answer options not allowed'
            }
        }
        

        return null;
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      console.log("inside handleForm submit, createQuiz, inputFields = ", inputFields)

      let errorMessage = validateInput();

      if (errorMessage) {
        enqueueSnackbar(errorMessage, { variant: "error" });
        return
      }

      try {
        const response = await QuizAPIService.CreateQuiz(inputFields, quizTitle)

        enqueueSnackbar('Quiz created', { variant: "success" });  
        navigate('/') 
      } catch (e: any) {
        let errorMessage = JSON.parse(e['message'])
        enqueueSnackbar(errorMessage['message'], { variant: "error" });      }
      }

  return (
    <Container>
      <Paper className={classes.mainSection}>
        <Typography variant='h4' className={classes.title}>Create Quiz</Typography>

        <form onSubmit={handleFormSubmit}>

            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <TextField id="outlined-basic" label={'Quiz Title'} variant="outlined"
                                onChange={(event: any) => setQuizTitle(event.target.value)} value={quizTitle} fullWidth/>
                </Grid>
            </Grid>
                

                {inputFields.map((inputField: any, index: any) => (
                    <div className={classes.questionContainer} key={index}>
                            <Divider light className={classes.divider}/>

                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <TextField id="outlined-basic" label={'Question ' + (index+1)} variant="outlined" size="small"
                                        onChange={event => handleTitleChange(index, event)} value={inputFields[index].question} style={{width: '85%'}}/>
                                    <IconButton  onClick={ () => handleRemoveFields(index)}>
                                        <DeleteOutlinedIcon sx={{ mt: -1 }}/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        



                        <Typography className={classes.questionHint}>Enter answer options and select the correct one</Typography>

                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            name={"radio-buttons-group" + index}
                            onChange={(e) => handleRadioChange(index, e)}
                        >                    
                            {
                                inputField.answers.map((answerOption: any, answerIndex: any) => (
                                    <div className={classes.answerOption} key={answerIndex}>
                                        <Radio value={answerOption} key={answerIndex} checked={(answerOption == inputFields[index].correct_answer)}/>
                                        {/* <FormControlLabel value={answerOption} control={<Radio />} key={answerIndex}/> */}
                                        <TextField id="standard-basic" label={'Option ' + (answerIndex + 1)} variant="standard" className={classes.centerVerticalAlign}
                                            onChange={event => handleAnswerOptionChanges(index, answerIndex, event)} value={inputFields[index].answers[answerIndex]}/>
                                        { (answerIndex == (inputField.answers.length - 1)) && (
                                            <>
                                                <IconButton onClick= { () => handleRemoveAnswerFields(index)}>
                                                    <RemoveIcon sx={{ ml: 1, mr: -1 }} />
                                                </IconButton>
                                                <IconButton onClick = {() => handleAddAnswerFields(index)}>
                                                    <AddIcon sx={{ ml: -1 }}  />
                                                </IconButton>
                                            </>)
                                        }
                                    </div>
                                ))
                            }
                        </RadioGroup>

                    </div>
                ))}


        <Button variant="outlined" startIcon={<AddIcon/>} onClick={ handleAddFields}>
        Add question
        </Button>
        <Button type='submit' variant="contained" color="primary" endIcon={<SendSharpIcon/>} className={classes.right}>
        Create Quiz
        </Button>
        </form>


      </Paper>
      <pre>
        {JSON.stringify(inputFields, null, 2)}
        </pre>
    </Container>
  );
};

export { CreateQuizPage };