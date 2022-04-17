import { makeStyles } from "@material-ui/core";
import { ArrowLeft } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    paper: {
        minHeight: '75vh',
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
        padding: theme.spacing(5),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginBottom: theme.spacing(6),
          padding: theme.spacing(6),
        },
        textAlign:'start'
      },
    title: {
      paddingBottom:theme.spacing(3)
    },

    centerAlignText: {
      textAlign: 'end'
    },

    quizTitle: {
      textDecoration: 'none',
      fontSize: '1.2rem'

    }
}));
export { useStyles };