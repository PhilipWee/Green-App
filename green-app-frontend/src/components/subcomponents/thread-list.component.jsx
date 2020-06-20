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

class ThreadList extends Component {

    render() {
        return (
			<ThemeProvider theme={theme}>
        		<CssBaseline />
				<Box mt={3}>
                	<Paper elevation={3} style={{ 'border-radius': '50px' }}>
						<Box
							px={5}
							py={2}
						>
							<Grid container direction='column'>
								<Grid item>{this.props.threadnumber || '#'}</Grid>
								<Grid item>{this.props.username || 'User XXX'}</Grid>
								<Grid item>{this.props.content || 'Comments about the Challenge'}</Grid>
							</Grid>
						</Box>
					</Paper>
				</Box>
			</ThemeProvider>
        )
    }
}

export default ThreadList