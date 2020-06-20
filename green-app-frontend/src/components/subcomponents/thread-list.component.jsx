import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import { CssBaseline } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CeraPro from '../../assets/css/CeraPro-Regular.woff'
import Avatar from '@material-ui/core/Avatar';

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

class IconSVG extends Component {

    render() {
        console.log(this.props.iconName)
        switch (this.props.iconName) {
            case 'phil':
                return <Avatar alt={this.props.username} src='../../assets/profile-pics/Philip.jpg' />
            case 'lowen':
                return <Avatar alt={this.props.username} src={this.props.piclink} />
            case 'soohan':
                return <Avatar alt={this.props.username} src={this.props.piclink} />
            case 'nick':
                return <Avatar alt={this.props.username} src={this.props.piclink} />
            
        }
    }
}

class ThreadList extends Component {

    render() {
        console.log(this.props.picname)
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box mt={3}>
                    <Grid container direction='row' justify={this.props.align||'flex-start'}>
                        {this.props.align == 'flex-end' &&
                            <Paper elevation={3} style={{ 'border-radius': '25px', width: '80%',backgroundColor:theme.palette.primary.main }}>
                        
                            <Box
                                px={2}
                                py={2}
                            >
                                <Grid container direction='row' >
                                    {/* <Grid item>{this.props.threadnumber || '#'}</Grid> */}
                                    <Grid item style={{ width: '20%' }}>
                                        <IconSVG iconName={this.props.picname}></IconSVG>
                                    </Grid>
                                    <Grid item style={{ width: '80%' }}>
                                        <Grid container direction='column'>
                                            <Grid item style={{color: 'white'}}>{this.props.username || 'User XXX'}</Grid>
                                            <Grid item style={{color: 'white'}}>{this.props.content || 'Comments about the Challenge'}</Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Paper>}
                        {this.props.align != 'flex-end' &&
                            <Paper elevation={3} style={{ 'border-radius': '25px', width: '80%' }}>
                        
                            <Box
                                px={2}
                                py={2}
                            >
                                <Grid container direction='row' >
                                    {/* <Grid item>{this.props.threadnumber || '#'}</Grid> */}
                                    <Grid item style={{ width: '20%' }}>
                                        <Avatar alt={this.props.username} src={this.props.piclink} />
                                    </Grid>
                                    <Grid item style={{ width: '80%' }}>
                                        <Grid container direction='column'>
                                            <Grid item>{this.props.username || 'User XXX'}</Grid>
                                            <Grid item>{this.props.content || 'Comments about the Challenge'}</Grid>
                                        </Grid>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Paper>}
                    </Grid>

                </Box>
            </ThemeProvider>
        )
    }
}

export default ThreadList