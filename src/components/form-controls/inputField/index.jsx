import React from 'react';

import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const { formState } = form;
  const { errors } = formState;
  const hasError = errors[name];
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <TextField
            margin="dense"
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
    />
  );
}

export default InputField;
