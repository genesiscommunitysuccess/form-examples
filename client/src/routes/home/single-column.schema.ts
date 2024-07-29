import { ConnectedRenderersOptions, UiSchema } from '@genesislcap/foundation-forms';
import { JSONSchema7 } from 'json-schema';
import { stockSymbols } from '../../data/stock-symbols';

export const buySell = [
  { label: 'Buy', value: 'BUY'},
  { label: 'Sell', value: 'SELL'}
];

export const singleColumnVerticalUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      label: 'Side',
      scope: '#/properties/side',
      options: <ConnectedRenderersOptions>{
        data: buySell,
        valueField: 'value',
        labelField: 'label',
        autocomplete: false
      },
    },
    {
      type: 'Control',
      scope: '#/properties/stockSymbol',
      label: 'Stock symbol',
      options: <ConnectedRenderersOptions>{
        data: stockSymbols.map(label => ({ label })),
        valueField: 'label',
        labelField: 'label',
      }
    },
    {
      type: 'Control',
      scope: '#/properties/notes',
      options: {
        textarea: true,
      },
    },
    {
      type: 'Control',
      scope: '#/properties/quantity',
      label: 'Quantity'
    },
    {
      type: 'Control',
      scope: '#/properties/price',
      label: 'Price'
    },
  ],
};

export const singleColumnHorizontalUiSchema: UiSchema = {
  ...singleColumnVerticalUiSchema,
  type: 'HorizontalLayout',
}

export const singleColumnJsonSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    side: {
      type: 'string',
      enum: [
        'BUY', 'SELL'
      ],
    },
    stockSymbol: {
      type: 'string',
      minLength: 1,
      maxLength: 5,
      enum: stockSymbols
    },
    notes: {
      type: 'string',
    },
    quantity: {
      type: 'number',
      minimum: 1,
      maximum: 10
    },
    price: {
      type: 'number',
      minimum: 0.01,
    }
  },
}

export const requiredFieldsJsonSchema: JSONSchema7 = {
  ...singleColumnJsonSchema,
  required: [ 'side', 'stockSymbol', 'quantity', 'price']
}

export const verticalTwoColumnUISchema: UiSchema = {
  ...singleColumnVerticalUiSchema,
  type: 'LayoutVertical2Columns',
}
