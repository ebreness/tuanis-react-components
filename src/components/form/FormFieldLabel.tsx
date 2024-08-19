import * as React from 'react';
import { useFormFieldContext } from './formContext';
import { useTheme } from '../../theme/ThemeContext';

export interface FormFieldLabelProps {
  children: React.ReactNode;
}

export const FormFieldLabel = ({ children }: FormFieldLabelProps) => {
  const theme = useTheme();
  const { fieldName: fieldName } = useFormFieldContext();

  return (
    <label
      className='trc-form-field-label'
      style={{ ...theme.form['fieldLabel'] }}
      htmlFor={fieldName}
    >
      {children}
    </label>
  );
};
