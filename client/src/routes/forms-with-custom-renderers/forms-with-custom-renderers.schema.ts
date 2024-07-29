import { ConnectedRenderersOptions, UiSchema, UiSchemaElement } from '@genesislcap/foundation-forms';
import { JSONSchema7 } from 'json-schema';

const optionTypes = [
  { value: 'CallBuy', label: 'Call: Buy' },
  { value: 'CallSell', label: 'Call: Sell' },
  { value: 'PutBuy', label: 'Put: Buy' },
  { value: 'PutSell', label: 'Put: Sell' }
];

export const segmentedControlUIElement: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/optionType',
  options: <ConnectedRenderersOptions>{
    segmented: true,
    data: optionTypes
  }
};

export const satisfactionControlUiElement: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/satisfaction',
  label: 'How satisfied are you with the Genesis Framework?',
  options: <ConnectedRenderersOptions>{
    satisfaction: true,
  }
}

export const formsWithCustomRenderersUISchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    segmentedControlUIElement,
    satisfactionControlUiElement,
    {
      type: 'Control',
      scope: '#/properties/price',
      options: <ConnectedRenderersOptions>{
        tooltip: 'Enter the price that you would like.',
        label: 'Price'
      }
    },
    {
      type: 'Control',
      scope: '#/properties/price',
      label: '',
      hideLabel: true
    } as any
  ]
}

export const formsWithCustomRenderersJsonSchema: JSONSchema7 = {
  properties: {
    optionType: {
      type: 'string'
    },
    price: {
      type: 'string',
      description: 'kotlin.String',
    },
    satisfaction: {
      type: 'string'
    }
  }
}
