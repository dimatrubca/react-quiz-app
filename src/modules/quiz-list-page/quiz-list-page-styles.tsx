import { makeStyles } from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '75vh',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
        textAlign:'start'
      },
    title: {
      paddingBottom:theme.spacing(3)
    },

    centerAlignText: {
      textAlign: 'center'
    }
}));
export { useStyles };