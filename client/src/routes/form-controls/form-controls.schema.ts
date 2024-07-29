import { JSONSchema7 } from 'json-schema';
import { ConnectedRenderersOptions, UiSchema, UiSchemaElement } from '@genesislcap/foundation-forms';


// text Input
const textInputJsonSchema: JSONSchema7 = {
  type: 'string',
  description: 'kotlin.String',
}

const textInputUiSchema: UiSchemaElement =     {
  type: 'Control',
  scope: '#/properties/textInput',
};


// number Input
const numberJsonSchema: JSONSchema7 = {
  type: 'number',
  description: 'kotlin.Double'
};

const numberInputUiSchema: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/numberInput'
};


// Boolean Input
const booleanInputJsonSchema: JSONSchema7 = {
  type: 'boolean',
  description: 'kotlin.Boolean'
};

const booleanInputUiSchema: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/booleanInput'
};


// Date time Input
const dateInputJsonSchema: JSONSchema7 = {
  type: 'number',
  description: 'org.joda.time.DateTime',
};

const dateInputUiSchema: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/dateInput'
};


// Select Input
const selectData = ['Miami', 'New York', 'London', 'Dublin', 'São Paulo', 'Bengaluru']

const selectInputJsonSchema: JSONSchema7 = {
  type: 'string',
  description: 'kotlin.String',
  enum: selectData
}

const selectInputUiSchema: UiSchemaElement = {
  type: 'Control',
  scope: '#/properties/selectInput',
  options: <ConnectedRenderersOptions> {
    data: selectData.map(label => ({ label })),
    labelField: 'label',
    valueField: 'label'
  }
}


// Connected Select
const connectedSelectJsonSchema: JSONSchema7 = {
  type: 'string',
  description: 'Kotlin.String',
}

const connectedSelectUISchema: UiSchemaElement = {
  type: 'Control',
  label: 'Connected select',
  scope: '#/properties/connectedSelectInput',
  options: {
    allOptionsResourceName: 'ALL_COUNTERPARTIES',
    valueField: 'COUNTERPARTY_ID',
    labelField: 'NAME',
  }
}


// Connected multi select
const connectedMultiSelectJsonSchema: JSONSchema7 = {
  type: 'array',
  description: 'Kotlin.String',
}

const connectedMultiSelectUISchema: UiSchemaElement = {
  type: 'Control',
  label: 'Connected multi select',
  scope: '#/properties/connectedMultiSelectInput',
  options: {
    allOptionsResourceName: 'ALL_COUNTERPARTIES',
    valueField: 'COUNTERPARTY_ID',
    labelField: 'NAME',
  }
}


// Form Schema
export const formControlsJSONSchema: JSONSchema7 = {
  type: 'object',
  properties: {
    textInput: textInputJsonSchema,
    numberInput: numberJsonSchema,
    booleanInput: booleanInputJsonSchema,
    dateInput: dateInputJsonSchema,
    selectInput: selectInputJsonSchema,
    connectedSelectInput: connectedSelectJsonSchema,
    connectedMultiSelectInput: connectedMultiSelectJsonSchema,
  }
};

export const formControlsUISchema: UiSchema = {
  type: 'VerticalLayout',
  elements: [
    textInputUiSchema,
    numberInputUiSchema,
    booleanInputUiSchema,
    dateInputUiSchema,
    selectInputUiSchema,
    connectedSelectUISchema,
    connectedMultiSelectUISchema,
  ]
}
