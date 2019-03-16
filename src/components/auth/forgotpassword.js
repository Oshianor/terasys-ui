import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';

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
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
		width: 320,
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

class ForgotPassword extends Component {
	state = {
		loading: false,
		email: "",
		emailHelper: {
			msg: "",
			err: false
		},
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

	onchnage = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}


	render() { 
    const { classes, handleSectionChange } = this.props;
    const { email, emailHelper, loading } = this.state;
    return (
      <div className={classes.root}>
				<Typography variant="h6" gutterBottom style={{ lineHeight: 4, fontFamily: 'poppins' }}> 
          Forgot Password ?
        </Typography>
        <Typography gutterBottom style={{ lineHeight: 8, fontFamily: 'poppins', fontSize: 16 }}> 
          Oops; seems you have forgotten your password
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

					<div style={{ fontSize: 13 }}>
						Back to &nbsp;
						<a onClick={() => handleSectionChange('login')} className={classes.forgot} >
							Log In
						</a>
					</div>
					

					<Button 
						variant="outlined" 
						size="large"
						color="secondary" 
						disabled={loading}
						// onClick={this.handleLogin.bind(this)}
						className={classes.button}
					>
						send link
					</Button>

        </form>
      </div>
		)
	}
}

ForgotPassword.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ForgotPassword)