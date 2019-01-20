import React from 'react';
import LoginForm from './loginform/LoginForm'
import './LoginTemplate.scss';

const LoginTemplate = ({onhandleLogin}) => (
  <LoginForm onhandleLogin={onhandleLogin}/>
);

export default LoginTemplate;
