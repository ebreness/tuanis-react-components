import * as React from 'react';
import { useTheme } from '../../theme/ThemeContext';

export interface FormRowProps {
  children: React.ReactNode;
}

export const FormRow = ({ children }: FormRowProps) => {
  const theme = useTheme();
  return (
    <div className='trc-form-row' style={{ ...theme.form['row'] }}>
      {children}
    </div>
  );
};
