import * as React from 'react';
import { FormContext } from './formContext';
import { useEffect, useMemo } from 'react';
import { getFieldErrorMessage } from './validator';
import { FormField } from './FormField';
import { FormFieldLabel } from './FormFieldLabel';
import { FormFieldControl } from './FormFieldControl';
import { FormFieldMessage } from './FormFieldMessage';
import { FormActions } from './FormActions';
import { FormRow } from './FormRow';
import { FormFieldTooltip } from './FormFieldTooltip';

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

export type Data = { [key: string]: FieldValue };
export interface FormProps {
  schema: {
    fields: Field[];
  };
  initialData: Data;
  onSubmit?: (data: Data) => void;
  onChange?: (data: Data) => void;
  validateOnMount?: boolean;
  clearOnSubmit?: boolean;
  children: React.ReactNode;
}

export type FieldData = { value: FieldValue; error?: string; isValid: boolean };
export type FormData = { [key: string]: FieldData };

export const Form = ({
  schema,
  initialData,
  onSubmit,
  onChange,
  validateOnMount = false,
  clearOnSubmit = false,
  children
}: FormProps) => {
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
        .map(([key, value]) => {
          const errorMsg = getFieldErrorMessage(
            schema.fields.find((f) => f.name === key),
            key,
            value
          );

          return [
            key,
            {
              value: String(value), // FieldValue accepts only string
              isValid: !errorMsg /* even if validateOnMount is false, calculate field validity */,
              error: validateOnMount ? errorMsg : ''
            }
          ];
        })
    );
  }, [initialData]);

  const [formData, setFormData] = React.useState<FormData>(defaultData);

  const mapFormDataToData = (input: FormData): Data => {
    return Object.fromEntries(
      Object.entries(input).map(([fieldName, data]) => [fieldName, data.value])
    );
  };

  const handleFieldValueChange = (name: string, value: string) => {
    const errorMsg = getFieldErrorMessage(
      schema.fields.find((f) => f.name === name),
      name,
      value
    );

    const updatedData: FormData = {
      ...formData,
      [name]: {
        value: value,
        isValid: !errorMsg,
        error: errorMsg
      }
    };
    setFormData(updatedData);

    if (onChange) {
      onChange(mapFormDataToData(updatedData));
    }
  };

  const handleSubmit = () => {
    // remove all properties from formData except for value
    if (onSubmit) {
      onSubmit(mapFormDataToData(formData));
    }

    if (clearOnSubmit) {
      setFormData(defaultData);
    }
  };

  const isFormValid = () => {
    return (
      formData &&
      JSON.stringify(formData) !== '{}' &&
      Object.values(formData).every((obj) => obj.isValid)
    );
  };

  useEffect(() => {
    if (onChange) {
      onChange(initialData);
    }
  }, []);

  return (
    <FormContext.Provider
      value={{ schema, formData, handleFieldValueChange, handleSubmit, isFormValid }}
    >
      <form className='trc-form'>{children}</form>
    </FormContext.Provider>
  );
};

Form.Field = FormField;
Form.FieldLabel = FormFieldLabel;
Form.FieldControl = FormFieldControl;
Form.FieldMessage = FormFieldMessage;
Form.FieldTooltip = FormFieldTooltip;
Form.Actions = FormActions;
Form.Row = FormRow;
