import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const styles = theme => ({
  root: {
		display: 'flex',
		alignItems: 'center'
	},
	but: {
		margin: '2px 5px'
	}
});

function AddDeviceField(props) {
	const { classes, index, total, handleAddDeviceField, handleRemoveDeviceField } = props;
	return (
		<div className={classes.root} >
			<TextField
				// error={descriptionHelper.err}
				required
				name={"device" + index}
				label={"Add Device Address " + (index + 1)}
				// value={device}
				// onBlur={this.handleDevice}
				// onChange={this.onChange}
				fullWidth
				type="text"
				margin="normal"
				variant="outlined"
			/>
			<Fab 
				size="small" 
				color="secondary" 
				aria-label="Add" 
				className={classes.but}
				onClick={() => handleAddDeviceField()}
			>
				<AddIcon />
			</Fab>

			{
				total > 1 &&
					<Fab 
						size="small" 
						color="primary" 
						aria-label="Add" 
						className={classes.but}
						onClick={() => handleRemoveDeviceField()}
					>
						<RemoveIcon />
					</Fab>
			}
			
		</div>
	)
}

export default withStyles(styles)(AddDeviceField);