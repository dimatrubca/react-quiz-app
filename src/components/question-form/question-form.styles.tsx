import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    minWidth: '300px',

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      minWidth: '500px'
    },
  },
  submitBtn: {
    margin: theme.spacing(5, 0, 2),
    marginTop: theme.spacing(3),
    width: '150px', 
    alignSelf: 'end',
  },
}));
export { useStyles };
