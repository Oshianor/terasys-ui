import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const styles = theme => ({
	root: {
		display: 'flex',
		justifyContent: 'center'
	},
	subroot: {
		display: 'flex',
		justifyContent: 'space-evenly',
		width: 400
	},
	hr: {
		borderLeft: '2px solid gray'
	},
	text: {
		fontFamily: 'poppins',
		color: 'gray',
		fontSize: 11
	}
});

function OtherLinks(props) {
	const { classes } = props;
	return (
		<div className={classes.root}>
			<div className={classes.subroot}>
				<Typography className={classes.text} >
					Terms of use
				</Typography>
				<span className={classes.hr} />
				<Typography className={classes.text} >
					Privacy Policies
				</Typography>
				<span className={classes.hr} />
				<Typography className={classes.text} >
					Support
				</Typography>
			</div>
		</div>
	)
}

export default withStyles(styles)(OtherLinks);
