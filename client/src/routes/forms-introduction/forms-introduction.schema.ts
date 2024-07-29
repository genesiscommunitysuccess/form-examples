import { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@genesislcap/foundation-forms';

export const sampleJsonSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    ISSUER_NAME: {
      type: 'string',
      minLength: 3,
      description: 'kotlin.String',
    },
    PRICE: {
      type: 'number',
      description: 'kotlin.Double',
    },
    MAIN_CONTACT: {
      type: 'string',
      pattern: '^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$',
      description: 'kotlin.String',
    },
    PASSWORD: {
      type: 'string',
      description: 'kotlin.String',
    },
  },
  additionalProperties: false,
  required: ['ISSUER_NAME', 'MAIN_CONTACT'],
};

export const sampleUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Issuer Name',
      scope: '#/properties/ISSUER_NAME',
    },
    {
      type: 'Control',
      label: 'Phone',
      scope: '#/properties/MAIN_CONTACT',
    },
    {
      type: 'Control',
      label: 'Price',
      scope: '#/properties/PRICE',
    },
    {
      type: 'Control',
      label: 'Password',
      scope: '#/properties/PASSWORD',
      options: {
        isPassword: true,
      },
    },
  ],
};

export const sampleTradeSchema: UiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/QUANTITY",
      label: "Quantity",
    },
    {
      type: "Control",
      scope: "#/properties/SIDE",
      label: "Side",
    },
  ],
};
