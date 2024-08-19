import { createContext, useContext } from 'react';
import { Field, FieldData, FormData } from './Form';

export interface FormContextData {
  schema?: {
    fields: Field[];
  };
  formData: FormData;
  handleFieldValueChange?: (name: string, value: string) => void;
  handleSubmit?: () => void;
  isFormValid?: () => boolean;
}

export interface FormFieldContextData {
  fieldName: string;
  fieldData: FieldData;
  fieldDefinition?: Field;
}

/*
 ------ Form  ------
*/

export const FormContext = createContext<FormContextData>({ formData: {} });

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormContextProvider');
  }
  return context;
};

/*
 ------ Form Field ------
*/

export const FormFieldContext = createContext<FormFieldContextData>({
  fieldName: '',
  fieldData: { value: '', error: '', isValid: false }
});

export const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormFieldContext');
  }
  return context;
};
