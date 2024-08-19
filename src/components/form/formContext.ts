import { createContext, useContext } from 'react';
import { FieldValue } from './Form';

interface FormContextData {
  formData: { [key: string]: { value: string } };
  onFieldValueChange?: (name: string, value: string) => void;
  handleSubmit?: () => void;
  isFormValid?: () => boolean;
}

interface FormFieldContextData {
  fieldName: string;
  fieldData: { value: FieldValue; error?: string };
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
  fieldData: { value: '', error: '' }
});

export const useFormFieldContext = () => {
  const context = useContext(FormFieldContext);
  if (!context) {
    throw new Error('useFormFieldContext must be used within a FormFieldContext');
  }
  return context;
};
