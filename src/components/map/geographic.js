import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Map from './map';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from './list';
import Link from 'next/link'


const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
	fonthead1: {
		fontFamily: "poppins",
		fontSize: 20	
	},
	fonthead2: {
		fontFamily: "poppins",
		color: theme.palette.primary.main,
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		padding: '25px 40px'
	}
});

class Geographic extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Paper className={classes.root}>
				<div className={classes.header} >
					<Typography className={classes.fonthead1} >
						Geographical Metrics
					</Typography>
					<Link href="/report">
						<a className={classes.fonthead2} >
							View full Report
						</a>
					</Link>
				</div>
				<Grid container spacing={24}>
					<Grid item xs={8}>
						<Map />
					</Grid>
					<Grid item xs={4}>
						<List />
						<List />
						<List />
						<List />
						<List />
						<List />
						<List />
						<List />
						<List />
					</Grid>
				</Grid>
			</Paper>
		)
	}
}

Geographic.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Geographic);