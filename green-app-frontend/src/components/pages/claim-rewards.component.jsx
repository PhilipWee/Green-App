import React, { Component } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import RewardUnit from '../subcomponents/reward-unit.component';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                NlPS
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const useStyles = makeStyles((theme) => ({
    paper: {
        paddingTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        padding: theme.spacing(4),
        background: 'rgba(255, 255, 255, 0.9)',
        borderRadius: '25px'
    }
}));

export default function ClaimRewards() {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" style={{height:'90vh'}}>

            <CssBaseline />

            <div className={classes.paper}>
                <Grid container direction='row' justify="space-between">
                    <Grid item>Claim Rewards</Grid>

                </Grid>
                <RewardUnit name='10% off innis free'></RewardUnit>
                <RewardUnit></RewardUnit>
                <RewardUnit></RewardUnit>
                <RewardUnit></RewardUnit>
                <RewardUnit></RewardUnit>
                
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}