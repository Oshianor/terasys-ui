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
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    borderRadius: 0,
		width: 180,
		backgroundColor: 'black',
		color: 'white',
		fontWeight: '600'
  },
  forgot: { 
		lineHeight: 3,
		fontSize: 13,
    cursor: 'pointer', 
    textDecoration: 'underline', 
		textDecorationColor: theme.palette.primary.main, 
		color: theme.palette.primary.main,
    textAlign: "right" 
  },
});

class Login extends Component {
	state = {
		loading: false,
		email: "",
		emailHelper: {
			msg: "",
			err: false
		},
		password: "",
		passwordHelper: {
			msg: "",
			err: false
		}
	}


	handleLogin = async () => {
		const { email, password } = this.state;
		if (!this.handleEmail() || !this.handlePassword()) {
			return false;
		}
		this.setState({
			loading: true
		});

		let data = {
			email,
			password,
    };
    
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      data: JSON.stringify(data),
      url: config.login,
    };
    

    try {
      let login = await axios(options);
      console.log("login  ===>>>> ", login);
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

	onchnage = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}


	render() { 
    const { classes, handleSectionChange } = this.props;
    const { password, passwordHelper, email, emailHelper, loading, res } = this.state;
    return (
      <div className={classes.root}>
        <Typography gutterBottom style={{ lineHeight: 5, fontFamily: 'poppins', fontSize: 16 }}> 
          Welcome, Please Login to your Account
        </Typography>
        <form className={classes.container} noValidate autoComplete="off">
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
            value={password}
            onBlur={this.handlePassword}
            onChange={this.onchnage}
            type="password"
            helperText={passwordHelper.msg}
            fullWidth
            margin="normal"
            variant="outlined"
          />
					<div>
						<a onClick={() => handleSectionChange('forgot')} className={classes.forgot} >
							Forgot Password ?
						</a>
					</div>
					

					<Button 
						variant="outlined" 
						size="large"
						color="secondary" 
						disabled={loading}
						onClick={this.handleLogin}
						className={classes.button}
					>
						Log In
					</Button>

        </form>
      </div>
		)
	}
}

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login)