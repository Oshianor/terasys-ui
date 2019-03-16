import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import ProgressBarExample from '../reuseable/progress';



const styles = theme => ({
  root: {
		// width: '100%',
		margin: 10
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'flex', justifyContent: 'space-between'
	},
	font: {
		fontFamily: 'poppins'
	}
});


class List extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root} >
				<div className={classes.title}>
					<Typography className={classes.font} >
						Russia
					</Typography>
					<Typography className={classes.font} >
						1020 Users
					</Typography>
				</div>
				<ProgressBarExample percent={78} />
			</div>
		)
	}
}

List.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(List);