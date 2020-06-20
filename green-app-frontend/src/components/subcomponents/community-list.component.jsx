import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
      height: 10,
      borderRadius: 5,
    },
    colorPrimary: {
      backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#1a90ff',
    },
  }))(LinearProgress);

class CommunityList extends Component {

    render() {
        return (
            <Box mt={2}>
                <Grid container direction='column'>
                    <Grid item>{this.props.name || 'Challenge ID, Challenge Name'}</Grid>
                    <Grid item>{this.props.participants || 'Number of Participants: 10'}</Grid>
                    <Grid item>{this.props.sponsorCompany || 'ABC Company'}</Grid>
                    <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                        <Button
                            variant="contained"
                            href='community-page/thread-challenge-1'
                        >Enter Thread
                        </Button>
                    </Grid>
                    </Grid>
            </Box>
        )
    }
}

export default CommunityList