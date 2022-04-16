import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "15px",
    marginTop: "10px",
  },

  linkItem: {
    marginLeft: "1rem",
  },
}));

export { useStyles };