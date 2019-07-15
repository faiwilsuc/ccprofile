import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  footermenu: {
    backgroundColor: '#E9EDF2',
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 58,
    padding: '15px 0',
    borderTop: "2px solid #E1E3E4",
  },
  footermenuitem: {
    color: '#B6B8BA',
    fontSize: '20px',
    paddingRight: 30,
    [theme.breakpoints.down('md')]: {
      width: "100%",
    },
    [theme.breakpoints.up('md')]: {
      width: "none",
    },
  },
});

const FooterMenu = ({ classes }) => (
  <div className={classes.footermenu}>
    <div style={{ width: "70%", margin: 'auto'}}>
      <Button className={classes.footermenuitem}>
        Help
        </Button>
      <Button className={classes.footermenuitem}>
        Blog
      </Button>
      <Button className={classes.footermenuitem}>
        Twetter
      </Button>
      <Button className={classes.footermenuitem}>
        Terms & Risks
      </Button>
      <Button className={classes.footermenuitem}>
        Privacy Policy & Cookies
      </Button>
      <Button className={classes.footermenuitem}>
        Press
      </Button>
    </div>
  </div>
);

export default withStyles(styles)(FooterMenu);
