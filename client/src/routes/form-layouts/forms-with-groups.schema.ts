import { UiSchema } from '@genesislcap/foundation-forms';
import { JSONSchema7 } from 'json-schema';

export const groupUISchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Group',
      scope: '#/properties/basic',
      label: 'Personal information',
      options: {
        childElements: [
          {
            type: 'HorizontalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/basic/properties/title',
              },
              {
                type: 'Control',
                scope: '#/properties/basic/properties/firstName',
              },
              {
                type: 'Control',
                scope: '#/properties/basic/properties/secondName',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'Group',
      label: 'Address',
      scope: '#/properties/address',
      options: {
        childElements: [
          {
            type: 'VerticalLayout',
            elements: [
              {
                type: 'Control',
                scope: '#/properties/address/properties/street',
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/streetNumber',
              },
              {
                type: 'Control',
                scope: '#/properties/address/properties/country',
              }
            ],
          },
        ],
      },
    },
  ],
};

export const horizontalGroupUISchema = { ... groupUISchema, type: 'HorizontalLayout' };

export const groupJsonSchema: JSONSchema7 = {

  properties: {
    basic: {
      properties: {
        title: {
          type: 'string',
          enum: [
            'Mr',
            'Mrs',
            'Ms',
            'Mster',
          ]
        },
        firstName: {
          type: 'string'
        },
        secondName: {
          type: 'string'
        }
      }
    },
    address: {
      properties: {
        street: {
          type: 'string'
        },
        streetNumber: {
          type: 'number'
        },
        country: {
          type: 'string',
          enum: [
            'United Kingdom',
            'Germany',
            'Italy',
            'Japan',
            'Ireland',
            'France',
            'Other'
          ]
        },
      }
    },
  }
}
