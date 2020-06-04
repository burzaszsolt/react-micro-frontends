import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: theme.palette.background.default,
    width: '100%'
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(0, 8),
    minHeight: `calc(100vh - ${theme.spacing(8)}px)`,
    position: 'relative'
  }
}));

export default useStyles;
