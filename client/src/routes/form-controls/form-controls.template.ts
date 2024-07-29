import { html } from '@microsoft/fast-element';
import { formControlsJSONSchema, formControlsUISchema } from './form-controls.schema';

export const formControlsTemplate = html`
  <h1>Controls</h1>
  <rapid-card>
    <foundation-form 
      :jsonSchema="${() => formControlsJSONSchema}" 
      :uischema="${() => formControlsUISchema}">
    </foundation-form>
  </rapid-card>
`
