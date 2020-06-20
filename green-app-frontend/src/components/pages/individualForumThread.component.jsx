import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import ThreadList from '../subcomponents/thread-list.component';
import ThreadForm from '../subcomponents/thread-form.component';
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


export default function ForumThread() {

    var state = [
            {
                id: '1',
                name: 'Philip Wee',
                content: 'Anyone wants to recycle at the collection point together?'
            },
            {
                id: '2',
                name: 'Nicholas Lim',
                content: 'Hi guys, nice to see us all recycling together! LOL'
            },
            {
                id: '3',
                name: 'Low En',
                content: '@PhilipWee Hey I am in, lets go at 3pm?'
            },
            {
                id: '4',
                name: 'Son Soo Han',
                content: 'We are almost reaching the challenge goal!'
            }
        ]

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" >

            <CssBaseline />

            <div className={classes.paper}>
                <Grid container direction='row' justify="space-between">
                    <Grid item><h3>Thread 1 Activities</h3></Grid>
                    <Grid item>

                        {state.map(function(d, idx){
                            return (
                            <ThreadList
                                threadnumber= {d.id}
                                username={d.name}
                                content={d.content}
                            >
                            </ThreadList>
                        )})}
                    </Grid>
                    <Grid item>
                        <ThreadForm
                            statechange={state}
                        >
                        </ThreadForm>
                    </Grid>
                </Grid>


            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}