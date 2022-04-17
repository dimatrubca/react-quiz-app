import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    marginTop: theme.spacing(3),
    
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        minWidth: "600px",
      },
  },
}));
export { useStyles };