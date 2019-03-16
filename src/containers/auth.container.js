import React, { Component } from "react";
import Authbox from "../components/reuseable/boxes/authbox";
import Headerhome from "../components/header/home";
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import Login from "../components/auth/login";
import Otherlinks from "../components/auth/component/otherlinks";
import Register from "../components/auth/register";
import ForgotPassword from "../components/auth/forgotpassword";

const styles = theme => ({
	paper: {
		fontFamily: 'poppins',
		width: 600,
		height: 400,
		borderRadius: 0,
		[theme.breakpoints.down('sm')]: {
			width: 400,
			height: 500,
		},
	},
	root: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: -80
	},
	space: {
		backgroundColor: theme.palette.primary.main,
		height: 350
	},
	text: {
		lineHeight: 15,
		textAlign: 'center',
		verticalAlign: 'middle',
		fontFamily: 'poppins',
		fontSize: 24
	},
	nav: {
		display: 'flex',
		justifyContent: 'center'
	},
	bottom: {
		marginTop: 50
	}
});

class Auth extends Component {
	state = {
		auth: 'login'
	}

	handleSectionChange(auth) {
		this.setState({
			auth
		})
	}

	displayNav = () => {
		const { classes } = this.props;
		const { auth } = this.state;
		const navText = {
			textAlign: 'center',
			fontFamily: 'poppins',
			fontSize: 20,
			margin: "15px",
			color: 'gray',
			cursor: 'pointer'
		}
		const current = {
			fontWeight: '500',
			borderBottom: '2px solid black',
			textAlign: 'center',
			fontFamily: 'poppins',
			fontSize: 24,
			margin: "15px",
			cursor: 'pointer'
		}
		return (
			<div className={classes.nav} >
				<Typography onClick={this.handleSectionChange.bind(this, 'login')} style={auth === 'login' ? current : navText} >
					Log In
				</Typography>
				<Typography onClick={this.handleSectionChange.bind(this, 'register')} style={auth == 'register' ? current : navText} >
					Sign Up
				</Typography>
			</div>
		)
	}

	render() {
		const { auth } = this.state;
		const { classes } = this.props;
		return (
			<div>
				<Headerhome asBack />
				<div className={classes.space}>
					<Typography className={classes.text} >
						Manage all your web devices and platforms in one place...
					</Typography>
				</div>

				<div className={classes.root} >
					<Authbox>
						{
							auth !== "forgot" &&
								this.displayNav()
						}
						{auth === "login" && <Login handleSectionChange={this.handleSectionChange.bind(this)} />}
						{auth === "register" && <Register />}
						{auth === "forgot" && <ForgotPassword handleSectionChange={this.handleSectionChange.bind(this)} />}
					</Authbox>
				</div>

				<div className={classes.bottom}>
					<Otherlinks />
				</div>
				
			</div>
		)
	}
}

export default withStyles(styles)(Auth);