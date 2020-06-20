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


class IconSVG extends Component {

    render() {
        switch (this.props.iconName) {
            case 'bus':
                return <img src={require('../../assets/1x/Asset 8.svg')}></img>
            case 'lunchBox':
                return <img src={require('../../assets/1x/Asset 9.svg')}></img>
            case 'shoes':
                return <img src={require('../../assets/1x/Asset 10.svg')}></img>
            case 'plant':
                return <img src={require('../../assets/1x/Asset 11.svg')}></img>
            case 'bottle':
                return <img src={require('../../assets/1x/Asset 12.svg')}></img>
        }
    }
}

class CommunityList extends Component {

    render() {
        return (
        <ThemeProvider theme={theme}>
        	<CssBaseline />
                <Box mt={3}>
                <Paper elevation={3} style={{ 'border-radius': '50px' }}>
					<Box
						px={2}
						py={5}
					>
						<Grid
							direction='row'
						>
							<Grid
								container
								direction='column'
								alignItems='center'
								spacing= '1'
							>
								<Grid
									item
									style={{ 'text-align': 'center' }}
								>
									{this.props.name || 'Challenge ID, Challenge Name'}
								</Grid>
								<Grid
									item
									style={{ 'text-align': 'center' }}
								>
									{this.props.participants || 'Number of Participants: 10'}</Grid>
								<Grid
									item
									style={{ 'text-align': 'center' }}
								>
									{this.props.sponsorCompany || 'ABC Company'}
								</Grid>
							</Grid>

							<Grid
								container
								direction="row"
								alignItems='flex-end'
							>
								<Grid
									item
									style={{ width: '20%' }}
									xs={3}
								>
									<IconSVG iconName={this.props.iconName || 'bus'}></IconSVG>
								</Grid>

								<Grid
									item
									xs={4}
								>
								</Grid>

								<Grid
									item
									xs={5}
									alignContent='flex-end'
								>
									<Button
										variant="contained"
										href='community-page/thread-challenge-1'
									>Enter Thread
									</Button>
								</Grid>
                            </Grid>
                        </Grid>
                    </Box>
				</Paper>
				</Box>
			</ThemeProvider>
        )
    }
}

export default CommunityList