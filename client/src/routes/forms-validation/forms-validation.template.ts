import { html } from '@microsoft/fast-element';
import {
  requiredFieldsJsonSchema,
  singleColumnVerticalUiSchema
} from '../home/single-column.schema';
import {
  validationMinMaxLengthJsonSchema,
  validationMinMaxLengthUiSchema,
  validationMinMaxValueJsonSchema,
  validationMinMaxValueUiSchema, validationPatternJsonSchema, validationPatternUiSchema
} from './forms-validation.schema';

export const formsValidationTemplate = html`
  <h1>Validation</h1>
  <rapid-tabs>
    <rapid-tab>Required fields</rapid-tab>
    <rapid-tab>Min/Max Length</rapid-tab>
    <rapid-tab>Min/Max value</rapid-tab>
    <rapid-tab>Pattern</rapid-tab>
    <rapid-tab-panel>
      <rapid-card>
        <h2>Required fields</h2>
        <foundation-form
          :uischema="${() => singleColumnVerticalUiSchema}"
          :jsonSchema="${() => requiredFieldsJsonSchema}">
        </foundation-form>
      </rapid-card>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <rapid-card>
        <h2>Min/Max Length</h2>
        <foundation-form
          :uischema="${() => validationMinMaxLengthUiSchema}"
          :jsonSchema="${() => validationMinMaxLengthJsonSchema}">
        </foundation-form>
      </rapid-card>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <rapid-card>
        <h2>Min/Max value</h2>
        <foundation-form
          :uischema="${() => validationMinMaxValueUiSchema}"
          :jsonSchema="${() => validationMinMaxValueJsonSchema}">
        </foundation-form>
      </rapid-card>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <rapid-card>
        <h2>Pattern</h2>
        <foundation-form
          :uischema="${() => validationPatternUiSchema}"
          :jsonSchema="${() => validationPatternJsonSchema}">
        </foundation-form>
      </rapid-card>
    </rapid-tab-panel>
  </rapid-tabs>


`
