import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import withStyles from '@material-ui/core/styles/withStyles';

import logo from 'static/images/logo_1@2x.png'
import * as axios from 'lib/api/login'

const styles = theme => ({
  main: {
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    backgroundColor: '#FF5858',
    left: '50%',
    top: '50%',
    position: 'absolute',
    transform: 'translateX(-50%) translateY(-50%)',
  },
  avatar: {
    width: '100%',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    color: 'white',
  },
  text: {
    color: 'white',
    // borderBottom: '2px solid white',
    '&::after': {
      color: 'white',
      borderBottom: '2px solid white'
    },
    '&::before': {
      color: 'white',
      // borderBottom: '2px solid white'
    },
  },
  formLabelFocused: {
    color: 'green', // won't affect anything
  },
  textTitle: {
    color: 'white',
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'white',
    borderColor: 'white',
    color: '#FF5858',
    '&:active': {
      backgroundColor: '##FF5858',
      color: 'white',
      borderColor: 'white',
    },
    '&:focus': {
      backgroundColor: '#FF5858',
      color: 'white',
      outline: 'none',
    },
  },
});


class Login extends Component {
  state = {
    isLoading: false,
    email: null,
    password: null,
  }

  onLoginhandler = async () => {
    const res = await axios.getSignin({
      email: this.state.email,
      password: this.state.password,
    })

    if (res.status === 200) {
      localStorage.setItem('user_session', JSON.stringify(res.data.result));
      localStorage.setItem('token', JSON.stringify(res.data.result.token));
      
      const recruitMeta = await axios.getInterviewColumn(21, localStorage)
      localStorage.setItem('recruitMeta', JSON.stringify(recruitMeta.data.result));
      
      this.props.onhandleLogin()

    } else {
      alert('아이디 혹은 비밀번호를 확인해 주세요.')
    }
  }

  onKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onLoginhandler()
    }
  }

  onChangeInputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render () {
    const { classes } = this.props
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <div className={classes.avatar}>
              <img src={logo} />
          </div>
          <div className={`${classes.form} FormContainer`}>
            <form>
            <FormControl margin="normal" required fullWidth className={`${classes.text} BaseLine` }>
              <InputLabel  className={classes.textTitle}>ID</InputLabel>
              <Input id="email" name="email" autoComplete="id" onChange={this.onChangeInputHandler} className={classes.text} />
            </FormControl>
            <FormControl margin="normal" required fullWidth className={classes.text}>
              <InputLabel htmlFor="password" className={classes.textTitle}>PW</InputLabel >
              <Input name="password" type="password" id="password" onChange={this.onChangeInputHandler} onKeyPress={this.onKeyPress} className={classes.text}/>
            </FormControl>
            </form>
          </div>
          <Button fullWidth type="submit" variant="contained" className={classes.submit} onClick={this.onLoginhandler}>
            로그인
          </Button>
        </Paper>
      </main>
    );
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);