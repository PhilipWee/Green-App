import React, { Component, useState, useEffect } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import RewardUnit from '../subcomponents/reward-unit.component';
import Axios from 'axios';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CeraPro from '../../assets/css/CeraPro-Regular.woff'

const cerapro = {
    fontFamily: 'Cera Pro',
    src: `local('Cera Pro Regular'), local('CeraPro-Regular'),
        url(${CeraPro}) format('woff')`,
    fontWeight: 'normal',
    fontStyle: 'normal'
}

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#3e4069",
        },
        secondary: {
            main: '#c4c5d9',
        },
    },
    typography: {
        fontFamily: [
            'Cera Pro',

        ].join(','),

    },
    overrides: {
        MuiCssBaseline: {
            '@Global': {
                '@font-face': cerapro,
            }
        }
    }
});

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

    const [content, setContent] = useState(null);

    useEffect(() => {
        (async () => {
            if (content != null) {
                return;
            }

            const res = await Axios.get(`http://${window.location.hostname}/users/0/rewards`);

            console.log(res.data.challenges)
            const updatedContent = res.data.rewards.map((r) => (
                <RewardUnit title={r.title} description={r.description} imageSrc={r.image}></RewardUnit>
            ))

            setContent(updatedContent);
        })();
    }, [content])

    return (
        <Container component="main" maxWidth="xs" style={{ height: '90vh' }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <div className={classes.paper}>
                    <Grid container direction='row' justify="space-between" alignItems='baseline'>
                        <Grid item>
                            <h2>Claim Rewards</h2>
                        </Grid>
                        <Grid item style={{width: '30%'}}>
                            <img style={{width: '100%', marginBottom:'-50px'}} src={require('../../assets/1x/howto3-04.png')}></img>
                        </Grid>

                    </Grid>
                    {content}
                </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
            </ThemeProvider>


        </Container>
    );
}