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
import MilestoneUnit from '../subcomponents/milestone-unit.component';
import Slider from '@material-ui/core/Slider';
import { DropzoneArea } from 'material-ui-dropzone'
import { DropzoneDialog } from 'material-ui-dropzone';


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

export default function ActivityLog() {

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

    return (
        <Container component="main" maxWidth="xs" >

            <CssBaseline />

            <div className={classes.paper}>
                <FormControl component="fieldset">
                    <Grid container direction='column' alignItems='stretch'>
                        <Grid item>
                            <Typography align='center' variant='h4'>Recycle Plastic Bottles</Typography>
                        </Grid>
                        <Grid item>
                            <Box mt={5}></Box>
                            <Typography>How many plastic bottles have you recycled?</Typography>
                        </Grid>
                        <Grid item>
                            <Slider
                                defaultValue={1}
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                step={1}
                                min={1}
                                max={10}
                            />
                        </Grid>
                        <Grid item>
                            <Box mt={5}></Box>
                            <Grid container direction='row' justify='space-between' alignItems='center'>
                                <Grid item>
                                    <Typography>Have you rinsed the bottles?</Typography>
                                </Grid>
                                <Grid item><Checkbox
                                    checked={state.checkedB}
                                    onChange={handleChange}
                                    name="checkedB"
                                    color="primary"
                                /></Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Box mt={5}></Box>
                            <Grid item>
                                <Typography>Please upload a picture of you recycling the bottles</Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <DropzoneAreaExample></DropzoneAreaExample>
                        </Grid>

                    </Grid>

                </FormControl>

            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    );
}