import { html } from '@microsoft/fast-element';
import { customEvent } from '@genesislcap/foundation-events';
import { FormsIntroduction } from './forms-introduction';
import { sampleJsonSchema, sampleUiSchema } from './forms-introduction.schema';

export const formsIntroductionTemplate = html<FormsIntroduction>`
  <h1>Introduction</h1>
  <rapid-tabs>
    <rapid-tab>Blank Form - Client side</rapid-tab>
    <rapid-tab>Form with data - Client side</rapid-tab>
    <rapid-tab>Blank Form - Server Side</rapid-tab>
    <rapid-tab>Form with data - Server Side</rapid-tab>
    <rapid-tab-panel>
      <foundation-form
        design-system-prefix="rapid"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
        :uischema="${() => sampleUiSchema}"
        :jsonSchema="${() => sampleJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <foundation-form
        design-system-prefix="rapid"
        :data="${x => x.existingData }"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
        :uischema="${() => sampleUiSchema}"
        :jsonSchema="${() => sampleJsonSchema}">
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <foundation-form
        design-system-prefix="rapid"
        resourceName="EVENT_SIMPLE_TRADE_INSERT"
        :uischema="${() => sampleUiSchema}"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
      >
      </foundation-form>
    </rapid-tab-panel>
    <rapid-tab-panel>
      <foundation-form
        design-system-prefix="rapid"
        :data="${x => x.existingData }"
        resourceName="EVENT_SIMPLE_TRADE_INSERT"
        :uischema="${() => sampleUiSchema}"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
      >
      </foundation-form>
    </rapid-tab-panel>
  </rapid-tabs>

`
