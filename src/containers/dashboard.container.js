import React, { Component } from 'react';
import DashboardHeader from '../components/header/dashboard';
import Iconandvalbox from '../components/reuseable/boxes/iconandvalbox';
import Security from '@material-ui/icons/Security';
import Devices from '@material-ui/icons/Devices';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Geographic from '../components/map/geographic';

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
		backgroundColor: 'black', fontFamily: 'poppins', color: 'white', borderRadius: 0,
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
	icon: {
		fontSize: 50
	},
});



class DashboardContainer extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div>
				<DashboardHeader>
					<div className={classes.head}>
						<Typography className={classes.font} >Dashboard</Typography>
						<Button 
							variant="outlined" 
							size="large" 
							color="secondary" 
							className={classes.button}
						>
							View Metrics
						</Button>
					</div>
					<div className={classes.header} >
						<Iconandvalbox 
							icon={<Devices className={classes.icon} />} 
							num={2052} 
							text="Connected Devices" 
						/>
						<Iconandvalbox 
							icon={<Security className={classes.icon} />} 
							num={2000} 
							text="Admins" 
						/>
						<Iconandvalbox 
							icon={<Person className={classes.icon} />} 
							num={8900} 
							text="Users" 
						/>
					</div>
					<br />
					<br />
					<Geographic />
				</DashboardHeader>
			</div>
		)
	}
}

DashboardContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DashboardContainer);