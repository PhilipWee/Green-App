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

class ThreadList extends Component {

    render() {
        return (
            <Box mt={2}>
                <Grid container direction='column'>
                    <Grid item>{this.props.threadnumber || '#'}</Grid>
                    <Grid item>{this.props.username || 'User XXX'}</Grid>
                    <Grid item>{this.props.content || 'Comments about the Challenge'}</Grid>
                </Grid>
            </Box>
        )
    }
}

export default ThreadList