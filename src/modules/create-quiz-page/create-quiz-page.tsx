import React, { Fragment, ReactNode, useState } from "react";
import { Avatar, Box, Button, Container, Paper, Radio, TextField, Typography } from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import SendSharpIcon from '@mui/icons-material/SendSharp';

import { AuthenticationForm } from '../../components/authentication-form'
import { useStyles } from "./create-quiz-page-styles";
import { Add } from "@material-ui/icons";



const CreateQuizPage = () => {
  const classes = useStyles();
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' }
  ]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("inputFields", inputFields);
  };

  const handleInputChange = (index: any, event: any) => {
    const values = [...inputFields];
    if (event.target.name === "firstName") {
      values[index].firstName = event.target.value;
    } else {
      values[index].lastName = event.target.value;
    }

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ firstName: '', lastName: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index: any) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <Container>
      <Paper className={classes.mainSection}>
        <Typography variant='h4' className={classes.title}>Create Quiz</Typography>
        <TextField id="outlined-basic" label="Question 1" variant="outlined" size="small" style ={{width: '70%'}} />
        <DeleteOutlinedIcon sx={{ ml: 2 }}/>
        <Typography className={classes.questionHint}>Enter answer options and select the correct one</Typography>

        <div className={classes.answerOption}>
            <Radio />
            <TextField id="standard-basic" label="Standard1" variant="standard" className={classes.centerVerticalAlign}/>
            {/* <AddIcon sx={{ m: 2 }}/> */}
            <RemoveIcon sx={{ m: 1 }}/>
        </div>
        <div className={classes.answerOption}>
            <Radio />
            <TextField id="standard-basic" label="Standard2" variant="standard" className={classes.centerVerticalAlign}/>
            {/* <AddIcon sx={{ m: 2 }}/> */}
            <RemoveIcon sx={{ m: 1 }}/>
        </div>
        <div className={classes.answerOption}>
            <Radio />
            <TextField id="standard-basic" label="Standard3" variant="standard" className={classes.centerVerticalAlign}/>
            {/* <AddIcon sx={{ m: 2 }}/> */}
            <RemoveIcon sx={{ m: 1 }}/>
        </div>
        <div className={classes.answerOption}>
            <Radio />
            <TextField id="standard-basic" label="Standard4" variant="standard" className={classes.centerVerticalAlign}/>
            <RemoveIcon sx={{ m: 1 }}/>
            <AddIcon/>

        </div>

        <Button variant="outlined" startIcon={<AddIcon/>}>
        Add new
        </Button>
        <Button variant="contained" color="primary" endIcon={<SendSharpIcon/>} className={classes.right}>
        Submit
        </Button>
      </Paper>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          {inputFields.map((inputField, index) => (
            <Fragment key={`${inputField}~${index}`}>
              <div className="form-group col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={inputField.firstName}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-4">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={inputField.lastName}
                  onChange={event => handleInputChange(index, event)}
                />
              </div>
              <div className="form-group col-sm-2">
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleRemoveFields(index)}
                >
                  -
                </button>
                <button
                  className="btn btn-link"
                  type="button"
                  onClick={() => handleAddFields()}
                >
                  +
                </button>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="submit-button">
          <button
            className="btn btn-primary mr-2"
            type="submit"
            onSubmit={handleSubmit}
          >
            Save
          </button>
        </div>
        <br/>
        <pre>
        {JSON.stringify(inputFields, null, 2)}
        </pre>
      </form>

    </Container>
  );
};

export { CreateQuizPage };