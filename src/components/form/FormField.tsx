import * as React from 'react';
import { FormFieldContext, useFormContext } from './formContext';
import { useTheme } from '../../theme/ThemeContext';

export interface FormFieldProps {
  name: string;
  children: React.ReactNode;
}

export const FormField = ({ name, children }: FormFieldProps) => {
  const theme = useTheme();

  if (!theme) {
    return null;
  }

  const { formData } = useFormContext();

  return (
    <FormFieldContext.Provider value={{ fieldName: name, fieldData: formData[name] }}>
      <div className='trc-form-field' style={theme.form ? { ...theme.form['field'] } : {}}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};
