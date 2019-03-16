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
import isEmail from 'validator/lib/isEmail';
import { config } from '../../../config';
import axios from 'axios';

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
	state = {
		loading: false,
		first: "",
		last: "",
		email: "",
		emailHelper: {
			msg: "",
			err: false
		},
		password: "",
		passwordHelper: {
			msg: "",
			err: false
		},
		confirmPassword: "",
		confirmPasswordHelper: {
			msg: "",
			err: false
		}
	}


	handleEmail = () => {
		const {
			email
		} = this.state;
		if (!isEmail(email)) {
			this.setState({
				emailHelper: {
					msg: "A valid email is required!",
					err: true
				}
			});
			return false;
		}
		if (isEmpty(email)) {
			this.setState({
				emailHelper: {
					msg: "Email is required",
					err: true
				}
			});
			return false;
		}
		this.setState({
			emailHelper: {
				msg: "",
				err: false
			}
		});
		return true
	}

	handlePassword = () => {
		const {
			password
		} = this.state;
		if (isEmpty(password)) {
			this.setState({
				passwordHelper: {
					msg: "Password is required",
					err: true
				}
			});
			return false;
		}
		if (password.length <= 4) {
			this.setState({
				passwordHelper: {
					msg: "A minimum of 4 characters are required for your password",
					err: true
				}
			});
			return false;
		}
		this.setState({
			passwordHelper: {
				msg: "",
				err: false
			}
		});
		return true;
	}

	handleConfirmPassword = () => {
		const { confirmPassword, password } = this.state;
		if (isEmpty(confirmPassword)) {
			this.setState({
				confirmPasswordHelper: {
					msg: "Confirm Password is required",
					err: true
				}
			});
			return false;
		}
		if (confirmPassword.length <= 4) {
			this.setState({
				confirmPasswordHelper: {
					msg: "A minimum of 4 characters are required for your confirm password",
					err: true
				}
			});
			return false;
		}
		if (confirmPassword.length <= 4) {
			this.setState({
				confirmPasswordHelper: {
					msg: "A minimum of 4 characters are required for your confirm password",
					err: true
				}
			});
			return false;
		}
		if (confirmPassword !== password) {
			this.setState({
				confirmPasswordHelper: {
					msg: "Confirm Password and password wasn't a match",
					err: true
				}
			});
			return false;
		}
		this.setState({
			confirmPasswordHelper: {
				msg: "",
				err: false
			}
		});
		return true;
	}

	onchnage = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleRegister = async () => {
		const { email, first, last, password, confirmPassword } = this.state;
		if (!this.handleEmail() || !this.handlePassword() || !this.handleConfirmPassword()) {
			return false;
		}
		this.setState({
			loading: true
		});

		let data = {
			email,
			password,
			password_confirm: confirmPassword,
			profile: {
				firstname: first,
				lastname: last
			},
			device: []
    };
    
    const options = {
      method: 'POST',
      headers: {
				'content-type': 'application/json',
				'authorization': 'JWT ' + localStorage.getItem('token')
      },
      data: JSON.stringify(data),
      url: config.registerUser,
    };
    

    try {
      let user = await axios(options);
      console.log("user  ===>>>> ", user);
      // if (register.data.error) {
      //   this.setState({
      //     res: register.data
      //   })
      // } else {
      //   localStorage.setItem('token', register.headers['x-auth-token']);
      //   this.props.getToken(register.headers['x-auth-token']);
        Router.push('/dashboard/users');
      // }
      
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false
    });
	}


	render() { 
		const { classes, handleClose, handleConfirm, open } = this.props;
    const { password, passwordHelper, email, emailHelper, loading, first, last, confirmPassword, confirmPasswordHelper} = this.state;
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
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						<TextField
							autoFocus
							name="first"
							value={first}
							label="First Name"
							className={classes.textFieldHalf}
							onChange={this.onchnage}
							fullWidth
							margin="normal"
							variant="outlined"
						/>

						<TextField
							name="last"
							label="Last Name"
							className={classes.textFieldHalf}
							value={last}
							onChange={this.onchnage}
							fullWidth
							margin="normal"
							variant="outlined"
						/>
					</div>
          <TextField
            error={emailHelper.err}
            name="email"
            value={email}
            label="Email"
            type="email"
						required
						className={classes.textField}
            onBlur={this.handleEmail}
            onChange={this.onchnage}
            helperText={emailHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

          <TextField
            error={passwordHelper.err}
            required
            name="password"
						label="Password"
						className={classes.textField}
            // style={{ margin: '2% 8%' }}
            value={password}
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            type="password"
            helperText={passwordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />

					<TextField
            error={confirmPasswordHelper.err}
            required
            name="confirmPassword"
						label="Confirm Password"
						className={classes.textField}
            value={confirmPassword}
            onBlur={this.handleConfirmPassword}
            onChange={this.onchnage}
            type="password"
            helperText={confirmPasswordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />		
					<div />	
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
					onClick={this.handleRegister.bind(this)}
					className={classes.button}
				>
					Create User
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
