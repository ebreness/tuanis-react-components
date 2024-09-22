import * as React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import './FormRow.css';

export interface FormRowProps {
  children: React.ReactNode;
}

export const FormRow = ({ children }: FormRowProps) => {
  const theme = useTheme();

  const columns = React.Children.count(children);
  const cssVariables = {
    '--trc-form-row-columns': columns
  } as React.CSSProperties;

  if (!theme) return null;
  return (
    <div
      className='trc-form-row'
      style={theme.form ? { ...theme.form['row'], ...cssVariables } : {}}
    >
      {children}
    </div>
  );
};
