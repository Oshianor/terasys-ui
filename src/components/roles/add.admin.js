import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import isEmpty from 'validator/lib/isEmpty';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import AddDevice from '../device/add.device';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    // display: 'flex',
    // flexWrap: 'wrap',
  },
  textField: {
    // marginLeft: theme.spacing.unit,
    // marginRight: theme.spacing.unit,
		// width: 320,
	},
	profile: {
		display: 'flex',
		justifyContent: 'space-between'
	},
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    borderRadius: 5,
		width: 150,
		backgroundColor: 'black',
		color: 'white',
		fontWeight: '600',
		'&:hover': {
			color: 'black'
		}
	},
	formControl: {
		margin: '8px 0px',
		width: "100%"
	},
});

class AddAdmin extends Component {
	constructor(props) {
		super(props);
		// this.InputLabelRef = React.createRef();

		this.state = {
			loading: false,
			name: "",
			nameHelper: {
				msg: "",
				err: false
			},
			description: "",
			descriptionHelper: {
				msg: "",
				err: false
			},
			admin: ''
		}
	}
	

	handleName = () => {
		const { name } = this.state;
		if (isEmpty(name)) {
			this.setState({
				nameHelper: {
					msg: "Group Name is required",
					err: true
				}
			});
			return false;
		}
		this.setState({
			nameHelper: {
				msg: "",
				err: false
			}
		});
		return true;
	}

	handleDescription = () => {
		const { description } = this.state;
		if (isEmpty(description)) {
			this.setState({
				descriptionHelper: {
					msg: "Group Description is required",
					err: true
				}
			});
			return false;
		}
		this.setState({
			descriptionHelper: {
				msg: "",
				err: false
			}
		});
		return true;
	}

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}


	render() { 
		const { classes, handleClose, handleConfirm, open } = this.props;
    const { name, nameHelper, description, descriptionHelper, loading, labelWidth, admin } = this.state;
    return (
			<Dialog
				open={open}
				onClose={() => handleClose()}
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Add Admin
				</DialogTitle>
			<DialogContent>
				<form className={classes.container} noValidate autoComplete="off">

					<FormControl variant="outlined" className={classes.formControl}>
						<InputLabel htmlFor="select-admin" >
							Select Group
						</InputLabel>
						<Select
							native
							value={admin}
							onChange={this.handleChange('age')}
							input={
								<OutlinedInput
									name="age"
									labelWidth={100}
									id="select-admin"
								/>
							}
						>
							<option value="" disabled/>
							<option value={10}>Ten</option>
							<option value={20}>Twenty</option>
							<option value={30}>Thirty</option>
						</Select>
					</FormControl>

					<div className={classes.profile}>
						<TextField
							error={nameHelper.err}
							name="firstName"
							value={name}
							label="First Name"
							type="text"
							required
							className={classes.textField}
							onBlur={this.handleName}
							onChange={this.onChange}
							helperText={nameHelper.msg}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							error={descriptionHelper.err}
							required
							name="lastName"
							label="Last Name"
							className={classes.textField}
							value={description}
							onBlur={this.handlePassword}
							onChange={this.onChange}
							type="text"
							helperText={descriptionHelper.msg}
							fullWidth
							margin="normal"
							variant="outlined"
						/>
					</div>


					<TextField
						error={nameHelper.err}
						name="name"
						value={name}
						label="Email"
						type="email"
						required
						className={classes.textField}
						onBlur={this.handleName}
						onChange={this.onChange}
						helperText={nameHelper.msg}
						fullWidth
						margin="normal"
						variant="outlined"
					/>

					<TextField
						error={descriptionHelper.err}
						required
						name="password"
						label="Password"
						className={classes.textField}
						value={description}
						onBlur={this.handlePassword}
						onChange={this.onChange}
						type="text"
						helperText={descriptionHelper.msg}
						fullWidth
						margin="normal"
						variant="outlined"
					/>

					<TextField
						error={nameHelper.err}
						name="confirmPassword"
						value={name}
						label="Confirm Password"
						type="password"
						required
						className={classes.textField}
						onBlur={this.handleName}
						onChange={this.onChange}
						helperText={nameHelper.msg}
						fullWidth
						margin="normal"
						variant="outlined"
					/>
					


        </form>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} style={{ color: 'red' }}>
					Cancel
				</Button>
				<Button 
					variant="outlined" 
					size="large"
					color="secondary" 
					disabled={loading}
					onClick={() => handleConfirm()} 
					// onClick={this.handleLogin.bind(this)}
					className={classes.button}
				>
					Add Admin
				</Button>
			</DialogActions>
		</Dialog>
		)
	}
}

AddAdmin.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddAdmin)
