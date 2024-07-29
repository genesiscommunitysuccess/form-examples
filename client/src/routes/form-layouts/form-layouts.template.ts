import { html } from '@microsoft/fast-element';
import {
  singleColumnHorizontalUiSchema,
  singleColumnJsonSchema,
  singleColumnVerticalUiSchema,
  verticalTwoColumnUISchema
} from '../home/single-column.schema';
import { groupJsonSchema, groupUISchema } from './forms-with-groups.schema';
import { categoryJsonSchema, categoryUISchema } from './forms-with-categorization.schema';
import { formsWithArraysJsonSchema, formsWithArraysUiSchema } from './forms-with-arrays.schema';
import { jsonSchemaStepper, uiSchemaStepper } from './stepper.schema';

export const formLayoutsTemplate = html`
  <h1>Layouts</h1>
  
  <rapid-tabs>
    <rapid-tab>Vertical</rapid-tab>
    <rapid-tab>Horizontal</rapid-tab>
    <rapid-tab>Vertical Two Column</rapid-tab>
    <rapid-tab>Group</rapid-tab>
    <rapid-tab>Categorization</rapid-tab>
    <rapid-tab>Array</rapid-tab>
    <rapid-tab>Stepper</rapid-tab>
    <rapid-tab-panel>
      <h2>Vertical form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => singleColumnVerticalUiSchema}"
        :jsonSchema="${() => singleColumnJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <h2>Horizontal form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => singleColumnHorizontalUiSchema}"
        :jsonSchema="${() => singleColumnJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <h2>Vertical Two Column form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => verticalTwoColumnUISchema}"
        :jsonSchema="${() => singleColumnJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <h2>Group form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => groupUISchema}"
        :jsonSchema="${() => groupJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <h2>Categoirzation form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => categoryUISchema}"
        :jsonSchema="${() => categoryJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <h2>Array form</h2>
      <foundation-form
        design-system-prefix="rapid"
        :uischema="${() => formsWithArraysUiSchema}"
        :jsonSchema="${() => formsWithArraysJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel style="height:500px;">
      <h2>Stepper form</h2>
      <foundation-form
        design-system-prefix="rapid"
        hide-submit-button="true"
        :uischema="${() => uiSchemaStepper}"
        :jsonSchema="${() => jsonSchemaStepper}">
      </foundation-form>
    </rapid-tab-panel>
  </rapid-tabs>
`
