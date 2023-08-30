import React, { useEffect } from 'react';
import { Wrapper } from '../../layout';
import { animationCreate } from '../../utils/utils';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import LoginArea from './login-area';


const Login = () => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <LoginArea/>
    </Wrapper>
  );
};

export default Login;