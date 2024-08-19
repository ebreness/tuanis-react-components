import * as React from 'react';
import { useFormContext, useFormFieldContext } from './formContext';
import { useTheme } from '../../theme/ThemeContext';

export interface FormFieldLabelProps {
  children: React.ReactNode;
}

export const FormFieldLabel = ({ children }: FormFieldLabelProps) => {
  const theme = useTheme();
  const { schema } = useFormContext();
  const { fieldName } = useFormFieldContext();

  return (
    <label
      className='trc-form-field-label'
      style={{ ...theme.form['fieldLabel'] }}
      htmlFor={fieldName}
    >
      {children}
      {schema.fields.find((f) => f.name === fieldName).required && (
        <span style={{ color: 'var(--trc-error-color)' }}>*</span>
      )}
    </label>
  );
};
