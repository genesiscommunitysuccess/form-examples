import { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@genesislcap/foundation-forms';

export const formsWithArraysJsonSchema: JSONSchema7 = {
  properties: {
    swapDates: {
      type: 'array',
      title: 'Swap Schedule',
      items: {
        type: 'object',
        properties: {
          date: {
            type: 'number',
            description: 'org.joda.time.DateTime',
          },
          amount: {
            type: 'number'
          },
          notes: {
            type: 'string'
          }
        },
        required: [ 'date', 'number' ]
      }
    }
  }
}

export const formsWithArraysUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/swapDates'
    }
  ]
}
