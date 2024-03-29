import React from 'react';

import RegisterForm from '../RegisterForm';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
  const dispatch = useDispatch();
  const {enqueueSnackbar} = useSnackbar()
  const handleSubmit = async (values) => {
    try {
      // auto set user name = email
      values.username = values.email;
      const action = register(values);
      const resultAction = await dispatch(action);
      unwrapResult(resultAction);
      //close dialog
      const {closeDialog} = props
      if (closeDialog) {
            closeDialog()
      }
      //do some thing here on register successfully
     
      enqueueSnackbar('Register successfully', {variant:'success'})
    } catch (error) {
        enqueueSnackbar(error.message, {variant:'error'});
    }
  };
  return (
      <RegisterForm onSubmit={handleSubmit} />
  );
}

export default Register;
