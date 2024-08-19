import * as React from 'react';
import { useFormContext } from './formContext';
import { useTheme } from '../../theme/ThemeContext';
export interface FormActionsProps {
  children: React.ReactNode;
}

export const FormActions = ({ children }: FormActionsProps) => {
  const theme = useTheme();
  const { handleSubmit, isFormValid } = useFormContext();

  return (
    <div className='trc-form-actions' style={{ ...theme.form['actions'] }}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.type === 'submit') {
          const submitBtn = child as React.ReactElement<
            React.ButtonHTMLAttributes<HTMLButtonElement>
          >;

          return React.cloneElement(submitBtn, {
            disabled: !isFormValid(),
            onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
              if (e) {
                e.preventDefault();
              }
              handleSubmit();
            }
          });
        } else {
          return child;
        }
      })}
    </div>
  );
};
