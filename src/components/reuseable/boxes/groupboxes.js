import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';




const styles = theme => ({
  card: {
		display: 'flex',
		width: 550,
		marginBottom: 20,
		height: 250,
		borderRadius: 0
  },
  details: {
    display: 'flex',
		flexDirection: 'column',
		// width: 250
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
		width: 200,
		objectFit: 'cover'
  },
  controls: {
    // display: 'flex',
    // alignItems: 'center',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
	},
	more: {
		display: 'flex',
		alignItems: 'center'
	},
	bottom: {
		display: 'flex',
		justifyContent: 'space-between'
	},
	fontTop: {
		fontFamily: 'poppins',
		fontSize: 18,
		fontWeight: '500'
	},
	fontmid: {
		fontFamily: 'poppins',
		fontSize: 12
	},
	 button: {
		fontSize: 10,
		fontFamily: 'poppins',
	},
	input: {
		display: 'none',
	},
	buttonDelete: {
		color: 'red',
		fontFamily: 'poppins',
		fontSize: 10
	}
});

function GroupBoxes(props) {
  const { classes, theme } = props;

  return (
    <Card className={classes.card}>
			<CardMedia
				component="img"
				// height="140"
        className={classes.cover}
        image="https://tipestry.com/public/profile_images/1tqiuw.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.fontTop} component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography className={classes.fontmid} variant="subtitle1" color="textSecondary">
            Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller
						 Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller Mac Miller
          </Typography>
					<div className={classes.more}>
						<Person style={{ color: '#575858' }} />
						<Typography className={classes.fontmid}>
							2200 Users
						</Typography>
					</div>
        </CardContent>
        <div className={classes.controls}>
          <div className={classes.bottom}>
						<Button size='small' className={classes.button} >
							Devices
						</Button>
						<Button size='small' className={classes.button} >
							View Metrics
						</Button>
						{/* <div style={{ flexGrow: 1 }} /> */}
						<Button size='small' className={classes.buttonDelete}  >
							Delete Admin
						</Button>
					</div>
        </div>
      </div>
      
    </Card>
  );
}

GroupBoxes.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(GroupBoxes);
