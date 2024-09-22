import * as React from 'react';
import { useFormFieldContext } from './formContext';
import { useTheme } from '../../theme/ThemeContext';

export const FormFieldMessage = () => {
  const theme = useTheme();
  const { fieldData } = useFormFieldContext();

  if (!theme) return null;

  return (
    <p
      className='trc-form-field-message'
      style={theme.form ? { ...theme.form['fieldMessage'] } : {}}
    >
      {fieldData.error}
    </p>
  );
};
