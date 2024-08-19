import * as React from 'react';
import { FormContext } from './formContext';
import { useMemo } from 'react';
import { getFieldErrorMessage } from './validator';
import { FormField } from './FormField';
import { FormFieldLabel } from './FormFieldLabel';
import { FormFieldControl } from './FormFieldControl';
import { FormFieldMessage } from './FormFieldMessage';
import { FormActions } from './FormActions';
import { FormRow } from './FormRow';

export interface Field {
  name: string;
  required: boolean;
  pattern: RegExp;
  minValue?: number;
  maxValue?: number;
  minLength?: number;
  maxLength?: number;
}
export type FieldValue = string;

type Data = { [key: string]: FieldValue };
export interface FormProps {
  schema: {
    fields: Field[];
  };
  initialData: Data;
  onSubmit: (data: Data) => void;
  children: React.ReactNode;
}

type FormData = { [key: string]: { value: FieldValue; error?: string } };

export const Form = ({ schema, initialData, onSubmit, children }: FormProps) => {
  /**
   * initialData and formData have different types
   * initialData is a simple object with key-value pairs
   * formData is an object with key-value pairs where the value is an object with more properties (value, isValid)
   */
  const defaultData: FormData = useMemo(() => {
    const schemaFields = schema.fields.map((f) => f.name);
    return Object.fromEntries(
      Object.entries(initialData)
        .filter(([key]) => schemaFields.includes(key)) // filters from initialData, only the values defined in the schema fields
        .map(([key, value]) => [
          key,
          {
            value,
            error: getFieldErrorMessage(
              schema.fields.find((f) => f.name === key),
              key,
              value
            )
          }
        ])
    );
  }, [initialData]);

  const [formData, setFormData] = React.useState<FormData>(defaultData);

  const onFieldValueChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: {
        value: value,
        error: getFieldErrorMessage(
          schema.fields.find((f) => f.name === name),
          name,
          value
        )
      }
    });
  };

  const handleSubmit = () => {
    // remove all properties from formData except for value
    onSubmit(
      Object.fromEntries(
        Object.entries(formData).map(([fieldName, data]) => [fieldName, data.value])
      )
    );
  };

  const isFormValid = () => {
    return (
      formData &&
      JSON.stringify(formData) !== '{}' &&
      Object.values(formData).every((obj) => obj.error === '')
    );
  };

  console.log({ formData });

  return (
    <FormContext.Provider value={{ formData, onFieldValueChange, handleSubmit, isFormValid }}>
      <form className='trc-form'>{children}</form>
    </FormContext.Provider>
  );
};

Form.Field = FormField;
Form.FieldLabel = FormFieldLabel;
Form.FieldControl = FormFieldControl;
Form.FieldMessage = FormFieldMessage;
Form.Actions = FormActions;
Form.Row = FormRow;
