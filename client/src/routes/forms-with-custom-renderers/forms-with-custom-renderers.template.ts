import { html, when } from '@genesislcap/web-core';
import { FormsWithCustomRenderers } from './forms-with-custom-renderers';
import { customEvent } from '@genesislcap/foundation-events';
import {
  formsWithCustomRenderersJsonSchema,
  formsWithCustomRenderersUISchema
} from './forms-with-custom-renderers.schema';
import { SegmentedControlRenderer } from './segmented-control-renderer';
import { renderers } from '@genesislcap/foundation-forms';
import { SatisfactionControlRenderer } from './satisfaction-control-renderer';
import { TooltipLabelFormRenderer } from './tooltip-label-renderer';

export const FormsWithCustomRenderersTemplate = html<FormsWithCustomRenderers>`
  <h1>Custom Controls</h1>
  <div>
    <rapid-card>
      <foundation-form
        :renderers="${() => [...renderers, SegmentedControlRenderer, SatisfactionControlRenderer, TooltipLabelFormRenderer]}"
        design-system-prefix="rapid"
        @submit="${(x, ctx) => x.handleFormSubmit(customEvent(ctx))}"
        :uischema="${() => formsWithCustomRenderersUISchema}"
        :jsonSchema="${() => formsWithCustomRenderersJsonSchema}"
      >
      </foundation-form>
      ${when(x => x.formData, html<FormsWithCustomRenderers>`
        <p>
          ${x => JSON.stringify(x.formData)}
        </p>
      `)}
    </rapid-card>
  </div>
`
