import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ReactComponent as Logo } from '../../assets/1x/Asset 8.svg';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { useHistory } from "react-router-dom";

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

class IconSVG extends Component {

    render() {
        switch (this.props.iconName) {
            case 'bus':
                return <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 8.png')}></img>
            case 'lunchBox':
                return <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 9.png')}></img>
            case 'shoes':
                return <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 10.png')}></img>
            case 'plant':
                return <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 11.png')}></img>
            case 'bottle':
                return <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 12.png')}></img>

        }
    }
}

// function ClickablePaper() {
//     return(
//         <Paper elevation={3} style={{ 'border-radius': '50px' }} onClick={event => {history.push('/')}}></Paper>
//     )
// }

export default function MilestoneUnit(props) {

    const history = useHistory();

    function handleClick(){
        history.push('/log-activity/'+props.iconName+'&'+props.name)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box mt={3}>
                <Paper elevation={3} style={{ 'border-radius': '50px' }} onClick={handleClick}>

                    <Box px={3} py={2}>

                        <Grid container wrap='nowrap' direction='row' alignItems='center' justify='space-between'>

                            <Grid item style={{ 'width': '20%' }}>

                                {/* <img style={{'width':'100%'}} src={require('../../assets/1x/Asset 12.png')}></img> */}



                                <IconSVG iconName={props.iconName || 'bus'}></IconSVG>
                            </Grid>
                            <Grid item style={{ width: '70%' }}>
                                <Grid container direction="column"
                                    justify="center"
                                    alignItems="stretch"
                                >
                                    <Grid item><BorderLinearProgress variant='determinate' value={props.curVal / props.targetVal * 100 || 50} /></Grid>
                                    <Grid item>
                                        <h6 style={{ margin: 0 }}>{props.name || 'milestoneName'}</h6>
                                    </Grid>
                                    <Grid item>{props.reward || 'milestoneReward'}</Grid>

                                    <Grid item>
                                        <Grid container direction='row' justify='flex-end'>
                                            <Grid item>{props.curVal || 50}/{props.targetVal || 100}</Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        {/* <Grid container alignItems="flex-start" justify="space-between" direction="row">
                            <Button variant="contained">CHALLENGE FORUM</Button>
                            <Button variant="contained">Contribute</Button>
                        </Grid> */}
                                    </Grid>

                                </Grid>
                            </Grid>
                        </Grid>

                    </Box>

                </Paper>



            </Box>
        </ThemeProvider>

        // <Col className="pb-5 mb-5" lg="4">
        //     <Card className="card-lift--hover shadow border-0">
        //         <CardImg variant="top" src={props.map_img_featured} />
        //         <CardBody className="pb-5">
        //             <h6 className="text-primary text-uppercase">
        //                 {props.map_name}
        //             </h6>
        //             <p className="description">
        //                 {props.map_description}
        //             </p>
        //             <Button
        //                 className="mt-2"
        //                 color="primary"
        //                 href="#pablo"
        //                 onClick={e => e.preventDefault()}
        //             >
        //                 Develop Strats
        //               </Button>
        //         </CardBody>
        //     </Card>
        // </Col>
    )
}


