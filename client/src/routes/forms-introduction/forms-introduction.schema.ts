import { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@genesislcap/foundation-forms';

export const sampleJsonSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    SIDE: {
      type: 'string',
      description: 'kotlin.String',
    },
    QUANTITY: {
      type: 'number',
      description: 'kotlin.Double',
    },
    SIMPLE_TRADE_ID: {
      type: 'string',
      description: 'kotlin.String',
    }
  },
};

export const sampleUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Quantity',
      scope: '#/properties/QUANTITY',
    },
    {
      type: 'Control',
      label: 'Side',
      scope: '#/properties/SIDE',
    },
  ],
};
