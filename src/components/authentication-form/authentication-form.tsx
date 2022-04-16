import React, { useContext } from "react";
import {
  Button,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useStyles } from "./authentication-form.styles";
import { User } from '../../types'
// import { AccountService, UserService } from "../../../services";
import { AuthContext } from '../../context/authContext'
import { useNavigate  } from "react-router";
import { useSnackbar } from "notistack";
import { UserService } from "../../services";

const schema = yup.object().shape({
  name: yup.string().required("Username is required"),
  surname: yup.string().required("No password provided"),
});

const AuthenticationForm = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate ();
//   const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User.User>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (user: User.User) => {
      console.log("inside on submit")

      
      try {
        const createdUser: User.User = await UserService.CreateUser(user)

        authContext.authenticate(createdUser)
        console.log('navigating...')
        navigate("/");
    } catch (e:any) {
        console.log(e)
    //   enqueueSnackbar(e.message, { variant: "error" });
    }
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            {...register("name")}
            autoComplete="uname"
            name="name"
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Name"
            autoFocus
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            {...register("surname")}
            variant="outlined"
            required
            fullWidth
            name="surname"
            label="Surname"
            id="surname"
            error={!!errors.surname}
            helperText={errors.surname?.message}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Continue
      </Button>
    </form>
  );
};

export { AuthenticationForm };