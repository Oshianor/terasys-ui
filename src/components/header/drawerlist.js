import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Person from '@material-ui/icons/Person';
import DeviceHub from '@material-ui/icons/DeviceHub';
import Security from '@material-ui/icons/Security';
import Group from '@material-ui/icons/GroupAdd';
import Dashboard from '@material-ui/icons/Dashboard';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { withRouter } from 'next/router';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.primary.light
	},
	bigAvatar: {
		margin: '20px 0px',
		width: 110,
		height: 110,
	},
	font: {
		fontFamily: 'poppins',
		color: 'gray'
	},
	fontSelected: {
		fontFamily: 'poppins',
		color: 'black',
		fontWeight: '600',
    fontSize: 20
	},
	fontName: {
		fontFamily: 'poppins',
	},
	icon: {
		color: 'black',		
	},
	list: {
		// margin: '10%'
		textAlign: 'center',
		marginTop: 20
	},
	listItem: {
		margin: '10% 0px',
		paddingLeft: "15%"
	},
	linknon: {
		textDecoration: 'none'
	},
	listbodyItem: {
		margin: 0,
		marginTop: 0,
		paddingLeft: "20%"
	},
	listbodyItemHead: {
		marginTop: -25,
	},
	img: {
		width: 150
	}
});

function DrawerList(props) {
	const { classes, router } = props;
	console.log('Router', router);

	const [user, setUser] = useState(true);
	console.log('user', user);
	
	return (
		<div className={classes.root}>
			<Grid container justify="center" alignItems="center">
				<Avatar alt="Remy Sharp" src="https://tipestry.com/public/profile_images/1tqiuw.jpg" className={classes.bigAvatar} />
			</Grid>
			<Grid container justify="center" alignItems="center">
				<Typography className={classes.fontName} >
					Hi, 
					<strong>&nbsp;Teresys Admin</strong>
				</Typography>
			</Grid>

			<List className={classes.list} >
				<Link prefetch href="/dashboard/in" >
					<a className={classes.linknon} >
						<ListItem button className={classes.listItem}>
							<ListItemIcon>
								<Dashboard className={router.asPath === "/dashboard/in" && classes.icon} />
							</ListItemIcon>
							<ListItemText 
								classes={{
									primary: router.asPath === "/dashboard/in" ? classes.fontSelected : classes.font
								}} 
								primary={'Dashboard'} 
							/>
						</ListItem>
					</a>
				</Link>

				<Link prefetch href="/dashboard/device" >
					<a className={classes.linknon}>
						<ListItem button className={classes.listItem} >
							<ListItemIcon>
								<DeviceHub className={router.asPath === "/dashboard/device" && classes.icon}  />
							</ListItemIcon>
							<ListItemText 
								primary={'Devices'} 
								classes={{
									primary: router.asPath === "/dashboard/device" ? classes.fontSelected : classes.font
								}} 
							/>
						</ListItem>
					</a>
				</Link>

				<ListItem button onClick={() => setUser(!user)} className={classes.listItem} >
					<ListItemIcon>
						<Person className={user && classes.icon}  />
					</ListItemIcon>
					<ListItemText 
						primary={'Users'} 
						classes={{
							primary: user ? classes.fontSelected : classes.font
						}} 
					/>
				</ListItem>


				<Collapse in={user} className={classes.listbodyItemHead}>
					<Link prefetch href="/dashboard/users" >
						<a className={classes.linknon}>				
							<ListItem button className={classes.listbodyItem} >
								<ListItemIcon>
									<Person className={router.asPath === "/dashboard/users" && classes.icon}  />
								</ListItemIcon>
								<ListItemText 
									primary={'Users'} 
									classes={{
										primary: router.asPath === "/dashboard/users" ? classes.fontSelected : classes.font
										// primary: classes.font
									}} 
								/>
							</ListItem>
						</a>
					</Link>	

					<Link prefetch href="/dashboard/roles" >
						<a className={classes.linknon}>
							<ListItem button className={classes.listbodyItem} >
								<ListItemIcon>
									<Security className={router.asPath === "/dashboard/roles" && classes.icon}  />
								</ListItemIcon>
								<ListItemText 
									primary={'Roles'} 
									classes={{
										primary: router.asPath === "/dashboard/roles" ? classes.fontSelected : classes.font
									}} 
									/>
							</ListItem>
						</a>
					</Link>

					<Link prefetch href="/dashboard/Organisation" >
						<a className={classes.linknon}>
							<ListItem button className={classes.listbodyItem} >
								<ListItemIcon>
									<Group className={router.asPath === "/dashboard/Organisation" && classes.icon}  />
								</ListItemIcon>
								<ListItemText 
									primary={'Organisation'} 
									classes={{
										primary: router.asPath === "/dashboard/Organisation" ? classes.fontSelected : classes.font
									}} 
									/>
							</ListItem>
						</a>
					</Link>

				</Collapse>

			</List>
		</div>
	)
}

export default withRouter(withStyles(styles)(DrawerList));