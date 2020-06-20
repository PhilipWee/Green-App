import React from 'react';
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
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  Row,
  Col
} from 'reactstrap';

//Import the font
import '../../assets/css/cera-pro-font.css';

//Import the icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'



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
    background: '#f4f5f4',
    borderRadius: '25px',
    alignItems: 'center'
  }
}));

export default function SignIn() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />


      <div style={{
        backgroundImage: "url(" + require('../../assets/1x/Asset 6.png') + ")",
        backgroundRepeat: 'repeat-x',
        backgroundColor: '#c4c5d9',
        height: '90vh'
      }}>
        <Container component="main" maxWidth="xs" >

          <CssBaseline />

          <div className={classes.paper}>

            <div className={classes.card}>
              <Grid container direction="column" alignItems='center'>
                <Grid item>
                  <h3>Log in</h3>
                </Grid>
                <Grid item style={{ 'width': '70%' }}>
                  <img style={{ 'width': '100%' }} src={require('../../assets/1x/Asset 7.png')}></img>
                </Grid>
              </Grid>



              {/* <Typography component="h1" variant="h5" style={{ 'font-family': 'CeraPro-Thin' }}>
              Log in
              </Typography> */}
              <form className={classes.form} noValidate>
                <div>
                  <Row>
                    <Col xs="auto" className='px-0 my-auto' style={{ 'flex-basis': '30px' }}>
                      <img className="mx-auto d-block" src={require('../../assets/1x/Asset 4.png')}></img>
                    </Col>
                    <Col>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs="auto" className='px-0 my-auto' style={{ 'flex-basis': '30px' }}>
                      <img className="mx-auto d-block" src={require('../../assets/1x/Asset 5.png')}></img>
                    </Col>
                    <Col>
                      <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Col>
                  </Row>
                </div>
                <Row className='float-right'>
                  <Col>
                    <Link href="#" variant="body2">
                      Forgot password
    </Link>
                  </Col>

                </Row>
                <br />
                <Row className='d-flex justify-content-center'>
                  <Col xs='auto'>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                      href='/milestones'
                    >LOGIN
    </Button>
                  </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <Col xs='auto'>
                    <Link href="#" variant="body2">
                      {"Create Account"}
                    </Link>
                  </Col>
                </Row>
                <Row className='d-flex justify-content-center'>
                  <Col xs='auto'>
                    or
  </Col>
                </Row>
                <div className="d-flex justify-content-center">
                  <div>
                    <FontAwesomeIcon size='2x' icon={faFacebook} style={{ 'color': 'gray' }} />
                  </div>
                  <div style={{ 'margin': "0px 20px" }}>
                    <FontAwesomeIcon size='2x' icon={faTwitter} style={{ 'color': 'gray' }} />
                  </div>
                  <div>
                    <FontAwesomeIcon size='2x' icon={faGoogle} style={{ 'color': 'gray' }} />
                  </div>
                </div>
              </form>
            </div>


          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}