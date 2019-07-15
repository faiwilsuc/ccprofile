import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    margin: 'auto',
  },
  logoHolder: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    paddingTop: theme.spacing(10),
  },
  logo: {
    width: '45%',
    minWidth: '300px',
  },
  buttonBox: {
    width: '100%',
    margin: '50px auto',
    textAlign: 'center'
  },
  button: {
    width: '200px',
    height: '80px',
    fontSize: '26px',
    fontWeight: '500',
    margin: '20px 50px',
    color: '#fff',
    borderColor: '#fff',
    [theme.breakpoints.down('sm')]: {
      width: '180px',
      height: '50px',
      fontSize: '20px',
    },
  },
});
const Splash = ({classes}) => {
  return (
    <main className={classes.main}>
      <div className={classes.logoHolder}>
        <img alt="Captain's Club" className={classes.logo} src={require('../../assets/images/splash.svg')} />
      </div>
      <div className={classes.buttonBox}>
        <Button variant="outlined" component={RouterLink} to='/profile' className={classes.button}>Profile</Button>
      </div>
  </main>
  )  
}

export default withStyles(styles)(Splash)
