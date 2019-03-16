import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AddDeviceField from './device.textInput'

const styles = theme => ({
  root: {
    margin: '8px 0px',
    width: "100%"
  },
});


class AddDevice extends Component {
	state = {
		device: [AddDeviceField]
	}

	handleAddDeviceField = () => {
		this.state.device.push(AddDeviceField);
		console.log("func  => ", this.state);		
		this.setState(state => ({
			device: state.device
		}));
	}

	handleRemoveDeviceField = () => {
		this.state.device.pop();
		console.log("func  => ", this.state);
		this.setState(state => ({
			device: state.device
		}));
	}

	render() {
		const { classes } = this.props;
		console.log(this.state);
		
		const Field = this.state.device.map((Element, index) => (
			<Element 
				key={index}
				index={index} 
				total={this.state.device.length}
				handleRemoveDeviceField={this.handleRemoveDeviceField} 
				handleAddDeviceField={this.handleAddDeviceField}
			/>
		))
		return (
			<div className={classes.root} >
				{Field}
			</div>
		)
	}
}

AddDevice.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddDevice);