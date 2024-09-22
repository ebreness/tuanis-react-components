import * as React from 'react';
import { useTheme } from '../../theme/ThemeContext';

export interface FormFieldTooltipProps {
  children: React.ReactNode;
}

export const FormFieldTooltip = ({ children }: FormFieldTooltipProps) => {
  const theme = useTheme();

  if (!theme) return null;
  return (
    <span
      className='trc-form-field-tooltip'
      style={theme.form ? { ...theme.form['fieldTooltip'] } : {}}
    >
      {children}
    </span>
  );
};
