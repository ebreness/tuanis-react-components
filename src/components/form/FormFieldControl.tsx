import * as React from 'react';
import { useFormContext, useFormFieldContext } from './formContext';
import { FieldValue } from 'components/form/Form';

export interface FormFieldControlProps {
  children: React.ReactNode;
}

export const FormFieldControl = ({ children }: FormFieldControlProps) => {
  const { handleFieldValueChange } = useFormContext();
  const { fieldName, fieldData } = useFormFieldContext();
  const control = React.Children.only(children) as React.ReactElement; // only 1 control allowed
  return React.cloneElement(control, {
    name: fieldName,
    value:
      control.type['displayName'] === 'Checkbox' ? fieldData.value === 'true' : fieldData.value,
    onChange: (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      // e.preventDefault();
      let value: FieldValue = e.target.value;

      if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
        value = String(e.target.checked);
      }

      handleFieldValueChange(fieldName, value);
    }
  });
};
