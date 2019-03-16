import React from 'react';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function DialogComponent(props)  {
	const { title, handleClose, handleConfirm, open, confirmBtnText } = props;
	return (
		<Dialog
			open={open}
			onClose={() => handleClose()}
			aria-labelledby="form-dialog-title"
		>
			<DialogTitle id="form-dialog-title">
				{title}
			</DialogTitle>
			<DialogContent>
				{props.children}
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} color="primary">
					Cancel
				</Button>
				<Button onClick={() => handleConfirm()} color="secondary">
					{confirmBtnText}
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogComponent;
