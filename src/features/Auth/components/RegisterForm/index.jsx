import React from 'react';
import PropTypes from 'prop-types';

// import InputField from 'components/form-controls/inputField'
import InputField from 'components/form-controls/inputField'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar,  LinearProgress,  Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import PasswordField from './../../../../components/form-controls/PasswordField/index';


RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};



function RegisterForm(props) {

  const schema = yup.object({
    fullName: yup.string().required('Please enter your full name.')
    .test('should has at least two words','Please enter at least two words.', (value) => {
     
        return value.split(' ').length >= 2
    }),
    email: yup.string().required('Please enter your email.') 
    .email('Please enter a valid email dress'),
    password: yup.string().required('Please enter your password.')
    .min(6,'Please enter at least 6 characters.') ,
    retypePassword: yup.string().required('Please retype your password.')
    .oneOf([yup.ref('password')],'Password does not match'), 

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

  const handleSubmit = async (values) => {

    const {onSubmit} = props
    if(onSubmit) {
      await  onSubmit(values)
    }

  };
  const {isSubmitting} = form.formState
  return (
    <div  >
        {isSubmitting && <LinearProgress/>}
        <div style={{ display: 'flex',justifyContent:'center'}}>
        <Avatar  sx={{ m: 1, backgroundColor: 'secondary.main'}}>
            <LockOutlined></LockOutlined>
        </Avatar>
        </div>
        <div style={{ display: 'flex',justifyContent:'center',marginBottom: 32}}>
        <Typography  component="h3" variant="h5">
            Create An Account
        </Typography>
        </div>


    <form   onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="fullName" label="Full Name" form={form}/>
      <InputField name="email" label="Email" form={form}/>
      <PasswordField name="password" label="Password" form={form}/>
      <PasswordField name="retypePassword" label="Retype Password" form={form}/>
      <Button
               disabled={isSubmitting}
               size="large"
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
