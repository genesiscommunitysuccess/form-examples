import { html, when } from '@genesislcap/web-core';
import { FormsWithRules } from './forms-with-rules';
import { formsWithRulesJsonSchema, formsWithRulesUiSchema } from './forms-with-rules.schema';
import { customEvent } from '@genesislcap/foundation-events';

export const formsWithRulesTemplate = html<FormsWithRules>`
  <h1>Rules</h1>
  <div>
    <h2>Rules on a single field</h2>
    <rapid-card>
      <foundation-form
        design-system-prefix="rapid"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
        :uischema="${() => formsWithRulesUiSchema}"
        :jsonSchema="${() => formsWithRulesJsonSchema}">
      </foundation-form>
      ${when(x => x.formData, html<FormsWithRules>`
        <p>
          ${x => JSON.stringify(x.formData)}
        </p>
      `)}
    </rapid-card>
  </div>
`
