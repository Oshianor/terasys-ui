import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
	root: {
		backgroundColor: theme.palette.secondary.main,
	},
	demo: {
		// height: 300,
		margin: '20px 0px',
		// backgroundColor: theme.palette.secondary.main,
		[theme.breakpoints.up("lg")]: {
			width: 1170
		}
	},
	head: {
		color: 'white',
		fontSize: 18,
		fontFamily: 'poppins'
	},
	listhead: {
		listStyleType: 'none',
		margin: "10 auto",
		padding: 0
	},
	list: {
		color: 'white',
		margin: 10,
    fontSize: 13,
		fontFamily: 'poppins',
	},
	textbody: {
		fontSize: 13,
		color: 'white',
		flexWrap: 'wrap',
	}
});

function Footer(props) {
	const { classes } = props;
	return (
		<Grid container justify="center" className={classes.root}>
			<Grid
				container
				className={classes.demo}
				// alignItems="center"
				spacing={40} 
				justify="space-between"
			>
				<Grid item xs="12" sm='6' md='4' lg='4' xl='4'>
					<Typography variant='h6' className={classes.head} >
						Terasys<strong>Hub.</strong>
					</Typography>
					<Typography variant='subtitle2' className={classes.textbody} >
						Connect your hardware and / or digital data - services to Ubidots’ device agnostic cloud with our REST API and deliver customized IoT and Cloud solutions the way you want
					</Typography>
				</Grid>
				<Grid item xs="12" sm='6' md='4' lg='4' xl='4'>
					<Typography variant='h6' className={classes.head} >
						Quicklinks
					</Typography>
					<ul className={classes.listhead} >
						<li className={classes.list} >ABOUT</li>
						<li className={classes.list} >API DOCS</li>
						<li className={classes.list} >FAQ</li>
						<li className={classes.list} >COMMUNITY</li>
					</ul>
				</Grid>
				<Grid item xs="12" sm='6' md='4' lg='4' xl='4'>
					<Typography variant='h6' className={classes.head} >
						Social Links
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	)
}

Footer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);