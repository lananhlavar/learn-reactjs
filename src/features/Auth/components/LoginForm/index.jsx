import React from 'react';
import PropTypes from 'prop-types';

// import InputField from 'components/form-controls/inputField'
import InputField from 'components/form-controls/inputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Avatar, LinearProgress, Typography } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import Button from '@mui/material/Button';
import PasswordField from './../../../../components/form-controls/PasswordField/index';

LoginForm.propTypes = {
  onSubmit: PropTypes.func,
};

function LoginForm(props) {
  const schema = yup.object({
    identifier: yup.string().required('Please enter your email.')
    .email('Please enter a valid email dress'),
    password: yup.string().required('Please enter your password.'),
  });

  const form = useForm({
    defaultValues: {
      identifier: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const { isSubmitting } = form.formState;
  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
          <LockOutlined></LockOutlined>
        </Avatar>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
        <Typography component="h3" variant="h5">
          Sign In
        </Typography>
      </div>

      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <InputField name="identifier" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />

        <Button disabled={isSubmitting} size="large" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default LoginForm;
