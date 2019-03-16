import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.primary.main,
    flexGrow: 1,
  },
  grow: {
		flexGrow: 1,
    fontFamily: 'poppins',
    cursor: 'pointer'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
	},
	header: {
    boxShadow: '0px 0px 0px 0px',
    background: 'transparent'
  },
  tool: {
    [theme.breakpoints.up("lg")]: {
      width: 1170
    }
  },
});

class HeaderHome extends React.Component {
  render() {
    const { classes, asBack } = this.props;

    return (
      <Grid container justify="center"  style={asBack ? { backgroundColor: '#7adbff' } : { backgroundColor: 'transparent' }}  >
        <Grid
          container
          className={classes.tool}
          alignItems="center"
          justify="center"
        >
          <AppBar position="static" className={classes.header} >
            <Toolbar>
              <Link href="/">
                <Typography variant="h4" color="inherit" className={classes.grow}>
                  Terasys<strong>Hub.</strong>
                </Typography>
              </Link>
              <div>
                <Button>
                  About
                </Button>
                <Button>
                  api docs
                </Button>
                <Button>
                  faq
                </Button>
                <Button>
                  Community
                </Button>
              </div>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    );
  }
}

HeaderHome.defaultProps = {
  asBack: false
}

HeaderHome.propTypes = {
  classes: PropTypes.object.isRequired,
  asBack: PropTypes.bool
};

export default withStyles(styles)(HeaderHome);
