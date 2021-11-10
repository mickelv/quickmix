import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#ff420e',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
