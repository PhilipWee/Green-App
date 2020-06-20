import React, { Component } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core/';
import { CssBaseline } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
//Main Page image
import Background from '../../assets/1x/landingpage-04.png';

//import the font
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
        paddingTop: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        // alignItems:'center',
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

export default function LandingPage() {

    var classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className={classes.paper} style={{marginLeft:20,position:'absolute'}}>
                        <Grid container direction='column'>
                            <Grid item>
                                <h3 style={{margin:0}}>Less Pollution.</h3>
                                <h4>More Savings.</h4>
                            </Grid>
                            <Grid item>
                                <Button variant='contained'>
                                    Sign up now.
                                </Button>
                            </Grid>
                        </Grid>
                    
                

                {/* </div> */}
            {/* </Container> */}
            </div>
            <img src={Background} style={{width:'100%'}}/>
            {/* <div style={{ height: '100vh', backgroundRepeat: 'no-repeat',backgroundImage: `url("${Background}")`, backgroundSize: 'contain',width:'100%',height:0,paddingTop:'500%'}}>
            <Container component="main" maxWidth="xs" > */}
                
                    



        </ThemeProvider>

    )

}