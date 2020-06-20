import React, { Component } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import MilestoneUnit from '../subcomponents/milestone-unit.component';
import Slider from '@material-ui/core/Slider';
import { withRouter } from 'react-router-dom'
// import { DropzoneArea } from 'material-ui-dropzone'
import { DropzoneDialog } from 'material-ui-dropzone';
import { useHistory } from "react-router-dom";
import Paper from '@material-ui/core/Paper';

//import the font
import CeraPro from '../../assets/css/CeraPro-Regular.woff'
import { Icon } from '@material-ui/core';

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

function DropzoneAreaExample() {
    const [open, setOpen] = React.useState(false);

    return (<>
        <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add Image
        </Button>
        <Box mt={2}>
            <DropzoneDialog
                acceptedFiles={['image/*']}
                cancelButtonText={"cancel"}
                submitButtonText={"submit"}
                maxFileSize={5000000}
                open={open}
                onClose={() => setOpen(false)}
                onSave={(files) => {
                    console.log('Files:', files);
                    setOpen(false);
                }}
                showPreviews={true}
                showFileNamesInPreview={true}
            /></Box></>

    )

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

function valuetext(value) {
    return `${value}°C`;
}

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

export default function ActivityLog(props) {

    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
        checkedF: true,
        checkedG: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();

    const history = useHistory();

    var activityType = history.location.pathname.split('/').slice(-1)[0].split('&')[0]
    var activityName = history.location.pathname.split('/').slice(-1)[0].split('&')[1]

    console.log(activityType)

    return (
        <ThemeProvider theme={theme}>

            <Container component="main" maxWidth="xs" >




                <CssBaseline />

                <div className={classes.paper}>
                    <Paper elevation={3} style={{ padding: "20px", borderRadius: '20px' }}>
                        <FormControl component="fieldset">
                            <Grid container direction='column' alignItems='stretch'>
                                <Grid item >
                                    <Grid container direction='column' alignItems='center'>
                                        <Grid item style={{ width: '50%' }}>
                                            <IconSVG iconName={activityType || 'bottle'} style={{ width: '100%' }}></IconSVG>
                                        </Grid>

                                    </Grid>

                                </Grid>
                                <Grid item>
                                    <Typography align='center' variant='h4'>{activityName || "Recycle bottle"}</Typography>
                                </Grid>
                                <Grid item>
                                    {activityType == 'bottle' &&
                                        <>
                                            <Box mt={5}></Box>
                                            <Typography>How many plastic bottles have you recycled?</Typography>
                                        </>
                                    }
                                    {activityType == 'plant' &&
                                        <>
                                            <Box mt={5}></Box>
                                            <Typography>How many seeds have you planted?</Typography>
                                        </>
                                    }

                                </Grid>
                                <Grid item>
                                    {(activityType == 'bottle' || activityType == "plant") &&
                                        <Slider
                                            defaultValue={1}
                                            getAriaValueText={valuetext}
                                            aria-labelledby="discrete-slider"
                                            valueLabelDisplay="auto"
                                            step={1}
                                            min={1}
                                            max={10}
                                        />
                                    }

                                </Grid>
                                <Grid item>
                                    <Box mt={5}></Box>
                                    {activityType == 'bottle' &&
                                        <>
                                            <Grid container direction='row' justify='space-between' alignItems='center'>
                                                <Grid item>
                                                    <Typography>Have you rinsed the bottle?</Typography>
                                                </Grid>
                                                <Grid item><Checkbox
                                                    checked={state.checkedB}
                                                    onChange={handleChange}
                                                    name="checkedB"
                                                    color="primary"
                                                /></Grid>
                                            </Grid>
                                        </>
                                    }

                                </Grid>
                                <Grid item>
                                    <Box mt={5}></Box>
                                    {activityType == 'bottle' &&
                                        <Grid item>
                                            <Typography>Please upload a picture of you recycling the bottle</Typography>
                                        </Grid>
                                    }
                                    {activityType == 'bus' &&
                                        <Grid item>
                                            <Typography>Please scan the QR code located at the exit of the bus</Typography>
                                        </Grid>
                                    }
                                    {activityType == 'plant' &&
                                        <Grid item>
                                            <Typography>Please upload a picture of you planting the seeds</Typography>
                                        </Grid>
                                    }
                                    {activityType == 'lunchBox' &&
                                        <Grid item>
                                            <Typography>Please scan the QR code at the takeaway counter</Typography>
                                        </Grid>
                                    }
                                    {activityType == 'shoes' &&
                                        <Grid item>
                                            <Typography>Please scan the QR code at the supermarket counter</Typography>
                                        </Grid>
                                    }

                                </Grid>
                                <Box mt={2}></Box>
                                <Grid item>
                                    <DropzoneAreaExample></DropzoneAreaExample>
                                </Grid>

                            </Grid>

                        </FormControl>
                    </Paper>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>

            </Container>
        </ThemeProvider>
    );
}

