import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingTop: theme.spacing(4),
    textAlign: 'left'
  },

  centerVerticalAlign: {
      verticalAlign: 'top',
      marginTop: '-10px'
  },

  questionHint: {
      margin: '10px 0'
  },
  answerOption: {
      marginBottom: '10px',
      marginTop: '10px',
      display: 'flex',
      alignItems: 'center'
  },

  title: {
      marginBottom: '20px'
  },
  right: {
    float: 'right'
  }
}));
export { useStyles };