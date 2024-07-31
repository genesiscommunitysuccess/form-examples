import { JSONSchema7 } from 'json-schema';
import { ConnectedRenderersOptions, UiSchema } from '@genesislcap/foundation-forms';

export const simpleTradeJsonSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    QUANTITY: {
      type: 'number',
      description: 'kotlin.Double',
    },
    SIDE: {
      type: 'number',
      description: 'kotlin.String',
    },
  },
};

export const simpleTradeUiSchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/SIMPLE_TRADE_ID',
      options: {
        hidden: true
      }
    },
    {
      type: 'Control',
      scope: '#/properties/QUANTITY',
      label: 'Enter Quantity:'
    },
    {
      type: 'Control',
      scope: '#/properties/SIDE',
      options: <ConnectedRenderersOptions>{
        data: [
          { label: 'Buy', value: 'BUY' },
          { label: 'Sell', value: 'SELL' }
        ],
        valueField: 'value',
        labelField: 'label',
      }
    }
  ]
}

export const tradeUISchema: UiSchema = {
  type: 'Control',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/TRADE_ID',
      options: {
        hidden: true,
      }
    },
    {
      type: 'Control',
      scope: '#/properties/SIDE',
      options: <ConnectedRenderersOptions>{
        data: [
          { label: 'Buy', value: 'BUY' },
          { label: 'Sell', value: 'SELL' }
        ],

        valueField: 'value',
        labelField: 'label',
      }
    },
    {
      type: 'Control',
      scope: '#/properties/PRICE',
      placeholder: 'Enter bid/offer price',
    },
    {
      type: 'Control',
      scope: '#/properties/QUANTITY'
    },

    {
      type: 'Control',
      scope: '#/properties/COUNTERPARTY_ID',
      label: 'Counterparty',
      options: {
        allOptionsResourceName: 'ALL_COUNTERPARTIES',
        valueField: 'COUNTERPARTY_ID',
        labelField: 'NAME',
      }
    },
    {
      type: 'Control',
      scope: '#/properties/NOTES',
      options: {
        textarea: true,
      },
    },
  ]
}
