import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
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


class ThreadForm extends Component {

    constuctor() {
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target)
        alert("Your response has been submitted!")
    };

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
							<Grid>
                                <form onSubmit={this.handleSubmit}>
                                    <label>
                                        Name: <br />
                                        <input
                                            id='name'
                                            type='text'
                                            name='name'
                                            size='30' />
                                    </label>
                                    <br />
                                    <label>
                                        Message: <br />
                                        <input
                                            id='message'
                                            type="text"
                                            name="message"
                                            size='30' />
                                    </label>
                                    <Button
                                        variant="contained"
                                        type="submit"
                                        value="Submit"
									>
                                        Leave Comment
									</Button>
                                </form>
                            </Grid>
						</Box>
					</Paper>
				</Box>
			</ThemeProvider>
        )
    }
}

export default ThreadForm