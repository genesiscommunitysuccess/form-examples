import { UiSchema } from '@genesislcap/foundation-forms';
import { JSONSchema7 } from 'json-schema';

export const categoryUISchema: UiSchema = {
  type: "Categorization",
  elements: [
    {
      type: "Control",
      scope: "#/properties/basic",
      label: "Personal information",
      options: {
        childElements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/firstName",
              },
              {
                type: "Control",
                scope: "#/properties/secondName",
              },
            ],
          },
        ],
      },
    },
    {
      type: "Control",
      label: "Address",
      scope: "#/properties/address",
      options: {
        childElements: [
          {
            type: "HorizontalLayout",
            elements: [
              {
                type: "Control",
                scope: "#/properties/address/properties/street",
              },
              {
                type: "Control",
                scope: "#/properties/address/properties/streetNumber",
              },
            ],
          },
        ],
      },
    },
  ],
};

export const categoryJsonSchema: JSONSchema7 = {

  properties: {
    basic: {
      properties: {
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
        }
      }
    }
  }
}
