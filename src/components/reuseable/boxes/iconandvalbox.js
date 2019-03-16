import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';


const styles = theme => ({
	root: {
		// display: 'flex',
		fontFamily: 'poppins',
		marginBottom: 10,
		width: 260,
		height: 120,
		borderRadius: 0,
		[theme.breakpoints.down('sm')]: {
			width: 200,
			height: 90,
		},
	},
	body: {
		padding: '8% 2%',
		display: 'flex',
		// justifyContent: 'center',
		// alignItems: 'flex-start'
	},
	bodycentered: {
		textAlign: 'center',
		marginTop: -15
	},
	icon: {

	},
	valNum: {
		color: theme.palette.primary.main,
		fontSize: 30,
		marginLeft: '15%',
		textTransform: 'capitalize',
		fontWeight: '600'
	},
	valText: {
		color: theme.palette.secondary.main,
		fontSize: 15,
		fontFamily: 'poppins',
		fontWeight: '400',
		textTransform: 'capitalize'
	},
});


function Iconandvalbox(props) {
	const { classes, num, text, icon } = props;

	return (
		<Paper className={classes.root}>
			<div className={classes.body}>
				<div className={classes.icon}>
					{icon}
				</div>
				<Typography className={classes.valNum} variant="h6" >
					<NumberFormat 
						value={num}
						displayType="text"
						thousandSeparator={true}
					/>
				</Typography>
			</div>
			<div className={classes.bodycentered}>
				
				<Typography className={classes.valText} variant="h6" >
					{text}
				</Typography>
			</div>
		</Paper>
	)
}

export default withStyles(styles)(Iconandvalbox);
