import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import LoginForm from './../LoginForm/index';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar()
  const handleSubmit = async (values) => {
    try {
      const action = login(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      //close dialog
      const {closeDialog} = props
      if (closeDialog) {
            closeDialog()
      }
      //do some thing here on register successfully
    } catch (error) {
      console.log('Fail to login', error);
        enqueueSnackbar(error.message, {variant:'error'});
    }
  };
  return (
      <LoginForm onSubmit={handleSubmit} />
  );
}

export default Login;
