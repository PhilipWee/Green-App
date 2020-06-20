import React, { Component, useState } from 'react';
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

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CeraPro from '../../assets/css/CeraPro-Regular.woff'
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';

import InputBase from '@material-ui/core/InputBase';

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
        alignItems: 'center',
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
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));


export default function ForumThread() {

    const [state, setState] = useState([

        {
            id: '1',
            name: 'Philip Wee',
            content: 'Anyone wants to recycle at the collection point together?',
            picname: 'phil'
        },
        {
            id: '4',
            name: 'Son Soo Han',
            content: 'We are almost reaching the challenge goal!',
            align: 'flex-end',
            picname: 'soohan'
        },
        {
            id: '2',
            name: 'Nicholas Lim',
            content: 'Hi guys, nice to see us all recycling together! LOL',
            picname: 'nick'
        },
        {
            id: '3',
            name: 'Low En',
            content: '@PhilipWee Hey I am in, lets go at 3pm?',
            picname: 'lowen'
        }

    ]);

    const [message, setMessage] = useState('')

    function handleChange(event) {
        setMessage(event.target.value);
    }

    function handleAdd() {
        const newState = state.concat({
            id: '4',
            name: 'Son Soo Han',
            content: message,
            align: 'flex-end',
            picname: 'soohan'
        });

        setState(newState);
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="md">

            <CssBaseline />

            <div className={classes.paper}>
                <Grid container direction='row' justify="center">
                    <Grid item><h3>Thread 1 Activities</h3></Grid>
                    <Paper elevation={3} style={{ paddingLeft: '75px', paddingRight: '75px', paddingBottom: '50px', borderRadius: '25px' }}>
                        <Grid item>

                            {state.map(function (d, idx) {
                                return (
                                    <ThreadList
                                        threadnumber={d.id}
                                        username={d.name}
                                        content={d.content}
                                        align={d.align}
                                        picname={d.picname}
                                    >
                                    </ThreadList>
                                )
                            })}
                        </Grid>
                        <Grid item style={{width:"100%"}}>

                            <ThemeProvider theme={theme}>
                                <CssBaseline />
                                <Box mt={3}>
                                    <Paper component="form" elevation={3} className={classes.root}>
                                        <IconButton className={classes.iconButton} aria-label="menu">
                                            <MenuIcon />
                                        </IconButton>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Type your message here..."
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                            onChange={handleChange}
                                        />

                                        <Divider className={classes.divider} orientation="vertical" />
                                        <IconButton color="primary" className={classes.iconButton} aria-label="directions" onClick={handleAdd}>
                                            <SendIcon />
                                        </IconButton>
                                    </Paper>
                                </Box>
                            </ThemeProvider>
                        </Grid>
                    </Paper>

                </Grid>


            </div>

            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}