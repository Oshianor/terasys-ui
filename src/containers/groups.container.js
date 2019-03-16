import React, { Component } from 'react';
import DashboardHeader from '../components/header/dashboard';
import Iconandvalbox from '../components/reuseable/boxes/iconandvalbox';
import Security from '@material-ui/icons/Security';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import GroupBoxes from '../components/reuseable/boxes/groupboxes';
import AddButtonGroup from '../components/group/add.button.group';

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


class GroupContainer extends Component {
	state = {
		open: false
	}

	handleOpen = () => {
		this.setState({
			open: true
		})
	}

	handleClose = () => {
		this.setState({
			open: false
		})
	}


	render() {
		const { classes } = this.props;
		const { open } = this.state;
		return (
			<div>
				<DashboardHeader>
					<div className={classes.head}>
						<Typography className={classes.font} >
							Groups
						</Typography>
						<AddButtonGroup />
					</div>
					<div className={classes.header} >
						<Iconandvalbox 
							icon={<Security className={classes.icon1} />} 
							num={2052} 
							text="Groups" 
						/>
						<Iconandvalbox 
							icon={<Security className={classes.icon2} />} 
							num={2000} 
							text="Active Groups" 
						/>
						<Iconandvalbox 
							icon={<Security className={classes.icon3} />} 
							num={8900} 
							text="Inactive Groups" 
						/>
					</div>
					<br />
					<br />
					<div className={classes.card}>
						<GroupBoxes />
						<GroupBoxes />
						<GroupBoxes />
						<GroupBoxes />
						<GroupBoxes />
					</div>
				</DashboardHeader>
			</div>
		)
	}
}

GroupContainer.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GroupContainer);