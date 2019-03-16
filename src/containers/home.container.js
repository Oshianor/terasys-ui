import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderHome from '../components/header/home';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/footer/footer'


const styles = theme => ({
	root: {
		[theme.breakpoints.up("lg")]: {
			width: 1170
		}
	}
});



class HomeContainer extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<HeaderHome />
				{/* <Grid container justify="center">
					<Grid
						container
						className={classes.root}
						alignItems="center"
						justify="center"
					>
					</Grid>
				</Grid> */}
				<Footer />
			</div>
		)
	}
}

HomeContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeContainer);