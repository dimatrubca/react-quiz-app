import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    minWidth: "400px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export { useStyles };