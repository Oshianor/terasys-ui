import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AddGroup from './add.group';

const styles = theme => ({
	button: {
		backgroundColor: 'black', fontFamily: 'poppins', color: 'white', borderRadius: 0,
		'&:hover': {
			color: 'black'
		}
	}
});


class AddButtonGroup extends Component {
	state = {
		open: false
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	handleClose = () => {
		this.setState({
			open: false
		})
	}


	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div>
				<Button 
					variant="outlined" 
					size="large" 
					color="secondary"
					onClick={this.handleOpen}
					className={classes.button}
				>
					New Groups
				</Button>
				<AddGroup open={open} handleClose={this.handleClose} handleConfirm={this.handleOpen} />
			</div>
		)
	}
}

AddButtonGroup.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddButtonGroup);