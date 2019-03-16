import React, { Component } from 'react';
import DashboardHeader from '../components/header/dashboard';
import Iconandvalbox from '../components/reuseable/boxes/iconandvalbox';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Userboxes from '../components/reuseable/boxes/userboxes';
import AddButtonUsers from '../components/users/add.button.users';



const styles = theme => ({
  root: {
    width: '100%',
    display: 'flex',
    backgroundColor: 'white'
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
	},
	button: {
		backgroundColor: 'black', 
		fontFamily: 'poppins', 
		color: 'white', 
		borderRadius: 0,
		'&:hover': {
			color: 'black'
		}
	},
	font: {
		fontFamily: "poppins",
		fontSize: 25,
		fontWeight: '500'
	},
	head: {
		display: 'flex', justifyContent: 'space-between', margin: '50px 0px'
	},
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	icon1: {
		fontSize: 50,
	},
	icon2: {
		fontSize: 50,
		color: theme.palette.primary.main
	},
	icon3: {
		fontSize: 50,
		color: theme.palette.secondary.light
	},
	card: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between'
	},
});


class UserContainer extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<DashboardHeader>
					<div className={classes.head}>
						<Typography className={classes.font} >
							Users
						</Typography>
						{/* <Button 
							variant="outlined" 
							size="large" 
							color="secondary" 
							className={classes.button}
						>
							New User
						</Button> */}
						<AddButtonUsers />
					</div>
					<div className={classes.header} >
						<Iconandvalbox 
							icon={<Person className={classes.icon1} />} 
							num={2052} 
							text="Users" 
						/>
						<Iconandvalbox 
							icon={<Person className={classes.icon2} />} 
							num={2000} 
							text="Active Users" 
						/>
						<Iconandvalbox 
							icon={<Person className={classes.icon3} />} 
							num={8900} 
							text="Inactive Users" 
						/>
					</div>
					<br />
					<br />
					<div className={classes.card}>
						<Userboxes />
						<Userboxes />
						<Userboxes />
						<Userboxes />
						<Userboxes />
					</div>
				</DashboardHeader>
			</div>
		)
	}
}

UserContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserContainer);