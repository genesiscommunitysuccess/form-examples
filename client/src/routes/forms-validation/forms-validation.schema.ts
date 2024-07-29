import { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@genesislcap/foundation-forms';

export const validationMinMaxLengthUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/minLengthInput'
    },
    {
      type: 'Control',
      scope: '#/properties/maxLengthInput'
    }
  ]
}
export const validationMinMaxLengthJsonSchema: JSONSchema7 = {
  properties: {
    minLengthInput: {
      type: 'string',
      minLength: 3,
    },
    maxLengthInput: {
      type: 'string',
      maxLength: 10,
    }
  },
  required: [ 'minLengthInput', 'maxLengthInput']
}

export const validationMinMaxValueUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/minValueInput'
    },
    {
      type: 'Control',
      scope: '#/properties/maxValueInput'
    }
  ]
}

export const validationMinMaxValueJsonSchema: JSONSchema7 = {
  properties: {
    minValueInput: {
      type: 'number',
      minimum: 18,
    },
    maxValueInput: {
      type: 'number',
      maximum: 65,
    }
  },
  required: [ 'minValueInput', 'maxValueInput']
}

export const validationPatternJsonSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    phoneNumber: {
      type: 'string',
      pattern: '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
      description: 'kotlin.String',
    },
    email: {
      type: 'string',
      pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
      description: 'kotlin.String',
    }
  },
  required: ['phoneNumber']
}

export const validationPatternUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/phoneNumber'
    },
    {
      type: 'Control',
      scope: '#/properties/email'
    }
  ],
}
