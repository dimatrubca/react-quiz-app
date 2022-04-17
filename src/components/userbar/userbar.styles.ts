import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "10px",
    marginTop: "80px",
  },

  linkItem: {
    marginLeft: "1rem",
  },
}));

export { useStyles };