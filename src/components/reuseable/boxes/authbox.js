import React from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	paper: {
		fontFamily: 'poppins',
		width: 600,
		height: 500,
		borderRadius: 0,
		[theme.breakpoints.down('sm')]: {
			width: 400,
			height: 450,
		},
	}
});

function AuthBox(props) {
	const { classes, children } = props;
	return (
		<Paper className={classes.paper} >
			{children}
		</Paper>
	)
}

export default withStyles(styles)(AuthBox);