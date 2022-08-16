import React from 'react';
import PropTypes from 'prop-types';

// import InputField from 'components/form-controls/inputField'
import InputField from 'components/form-controls/inputField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar,  Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import PasswordField from './../../../../components/form-controls/PasswordField/index';


RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};



function RegisterForm(props) {

  const schema = yup.object({
    // title: yup.string()
    // .required('Please enter title'),
  });

  const form = useForm({
    defaultValues: {
        fullName: '',
        email: '',
        password: '',
        retypePassword: ''
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {

    const {onSubmit} = props
    if(onSubmit) {
        onSubmit(values)
    }
    form.reset()
  };
  return (
    <div  >
        <Avatar  sx={{ m: 1, backgroundColor: 'secondary.main' , display: 'flex',alignItems: 'center'}}>
            <LockOutlined></LockOutlined>
        </Avatar>

        <Typography  component="h3" variant="h5">
            Create An Account
        </Typography>


    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="fullName" label="Full Name" form={form}/>
      <InputField name="email" label="Email" form={form}/>
      <PasswordField name="password" label="Password" form={form}/>
      <PasswordField name="retypePassword" label="Retype Password" form={form}/>
      <Button
               
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >Create An Account</Button>
    </form>
    </div>
  );
}

export default RegisterForm;
