import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { config } from '../../../config';
import axios from 'axios';


const styles = theme => ({
  root: {
		textAlign: 'center',
		display: 'flex',
		flexDirection: 'column',
    justifyContent: 'center',
    // [theme.breakpoints.down('sm')]: {
    //   backgroundImage: "url('/static/login/phone.svg')",
    //   backgroundColor: "transparent",
    //   // width: "100%",
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: "cover",
    // },
    // [theme.breakpoints.only('md')]: {
    //   backgroundImage: "url('/static/login/tablet.svg')",
    //   backgroundColor: "transparent",
    //   // width: "100%",
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: "cover",
    // },
  },
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
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
		width: 320,
	},
	textFieldHalf: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 150,
	},
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
		marginTop: 10,
    borderRadius: 0,
		width: 180,
		backgroundColor: 'black',
		color: 'white',
		fontWeight: '600'
  },
});

class Register extends Component {
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
			devices: []
    };
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(data),
      url: config.registerUser,
    };
    

    try {
      let register = await axios(options);
      console.log("register  ===>>>> ", register);
      // if (register.data.error) {
      //   this.setState({
      //     res: register.data
      //   })
      // } else {
      //   localStorage.setItem('token', register.headers['x-auth-token']);
      //   this.props.getToken(register.headers['x-auth-token']);
      //   Router.push('/');
      // }
      
    } catch (error) {
      console.log("ERROR : ", error);
      
    }
    this.setState({
      loading: false
    });
	}


	render() { 
		console.log('this.state', this.state);
		
    const { classes } = this.props;
    const { password, passwordHelper, email, emailHelper, loading, first, last, confirmPassword, confirmPasswordHelper} = this.state;
    return (
      <div className={classes.root}>
        <Typography gutterBottom style={{ lineHeight: 2, fontFamily: 'poppins', fontSize: 16 }}> 
          New here? Create an Account to begin...
        </Typography>
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

					<Button 
						variant="outlined" 
						size="large"
						color="secondary" 
						disabled={loading}
						onClick={this.handleRegister.bind(this)}
						className={classes.button}
					>
						Sign Up
					</Button>

        </form>
      </div>
		)
	}
}

Register.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register)