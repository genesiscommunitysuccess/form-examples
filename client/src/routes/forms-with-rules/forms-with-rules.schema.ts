import { JSONSchema7 } from 'json-schema';
import { UiSchema } from '@genesislcap/foundation-forms';
import { RuleEffect } from '@jsonforms/core';

export const formsWithRulesJsonSchema: JSONSchema7 = {
  properties: {
    withLimit: {
      type: 'boolean',
    },
    limitPrice: {
      type: 'number',
    },
    country: {
      type: 'string',
      enum: [
        'United Kingdom',
        'United States',
        'Canada',
      ]
    }
  }
};

export const formsWithRulesUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/withLimit',
      label: 'Add limit price?',
    },
    {
      type: 'Control',
      scope: '#/properties/limitPrice',
      rule: {
        effect: RuleEffect.ENABLE,
        condition: {
          scope: '#/properties/withLimit',
          schema: { const: true }
        }
      }
    },
    {
      type: 'Control',
      scope: '#/properties/country',
      label: 'Country',
    },
    {
      type: 'Control',
      scope: '#/properties/zipCode',
      rule: {
        effect: RuleEffect.HIDE,
        condition: {
          scope: '#/properties/country',
          schema: { enum: ['United Kingdom', 'Canada'] }
        }
      }
    },
    {
      type: 'Control',
      scope: '#/properties/postalCode',
      rule: {
        effect: RuleEffect.SHOW,
        condition: {
          scope: '#/properties/country',
          schema: { enum: ['United Kingdom', 'Canada'] }
        }
      }
    },
  ]
}
