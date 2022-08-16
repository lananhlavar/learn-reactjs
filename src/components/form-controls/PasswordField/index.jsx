import React from 'react';

// import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';

import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';

import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  const hasError = formState.touchedFields[name] && errors[name];
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };
  return (
    <div>
      {/* <Controller
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <TextField
            margin="normal"
            variant="outlined"
            fullWidth
            label={label}
            {...field}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
          />       
        );
      }}
    /> */}
      <FormControl margin="normal" fullWidth variant="standard">
        <InputLabel htmlFor={name}>{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          render={({ field }) => {
            return (
              <Input
                margin="normal"
                variant="outlined"
                fullWidth
                id={name}
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label={label}
                {...field}
                disabled={disabled}
                error={!!hasError}
                helperText={errors[name]?.message}
              />
            );
          }}
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
