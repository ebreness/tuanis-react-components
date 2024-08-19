import * as React from 'react';
import { useFormContext, useFormFieldContext } from './formContext';
import { FieldValue } from 'components/form/Form';

export interface FormFieldControlProps {
  children: React.ReactNode;
}

export const FormFieldControl = ({ children }: FormFieldControlProps) => {
  const { onFieldValueChange } = useFormContext();
  const { fieldName, fieldData } = useFormFieldContext();
  const control = React.Children.only(children) as React.ReactElement; // only 1 control allowed

  return React.cloneElement(control, {
    name: fieldName,
    value: fieldData.value,
    className: 'trc-form-field-control',
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      // e.preventDefault();
      let value: FieldValue = e.target.value;

      if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
        value = String(e.target.checked);
      }

      onFieldValueChange(fieldName, value);
    }
  });
};
