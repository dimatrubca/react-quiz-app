import React, { useContext } from "react";
import { Button, Container, FormControl, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { FormControlLabel } from '@mui/material';
import { useStyles } from "./question-form.styles";

const QuestionForm = () => {
    const classes = useStyles();

    return (
        <div className={classes.form}>
            <FormControl>
                <Typography variant="h5" component="h2">h1. Heading</Typography>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="other2" control={<Radio />} label="Other2" />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Next
                    </Button>

                </RadioGroup>
            </FormControl>
        </div>
    )
}

export {QuestionForm}