import { Field, FieldValue } from './Form';

//todo: add i18n
export const getFieldErrorMessage = (definition: Field, name: string, value: FieldValue) => {
  if (!definition) {
    console.error(`Cannot find field definition for field: ${name}`);
    return;
  }
  // check if field is not required and value is empty
  if (!definition.required && !value) {
    return '';
  }

  // Check if the field is required and value is empty
  if (definition.required && !value) {
    return 'Este campo es requerido.';
  }

  // Check minlength
  if (definition.minLength && value.length < definition.minLength) {
    return 'El valor debe tener al menos ' + definition.minLength + ' caracteres.';
  }

  // Check maxlength
  if (definition.maxLength && value.length > definition.maxLength) {
    return 'El valor no debe tener más de ' + definition.maxLength + ' caracteres.';
  }

  // minValue
  if (!isNaN(Number(value)) && Number(value) < definition.minValue) {
    return 'El número no debe ser menor a ' + definition.minValue + '.';
  }

  // maxValue
  if (!isNaN(Number(value)) && Number(value) > definition.maxValue) {
    return 'El número no debe ser mayor a ' + definition.maxValue + '.';
  }

  // Check pattern
  if (!definition.pattern) {
    return '';
  }

  // if (isNaN(Number(value))) {
  if (definition.pattern && !value.match(new RegExp(definition.pattern))) {
    return 'El valor no tiene un formato válido.';
  }
  // } else {
  //   if (!definition.pattern.test(value)) {
  //     return 'El número no tiene un formato válido.';
  //   }
  // }

  // If all checks pass, return "" indicating valid value
  return '';
};
