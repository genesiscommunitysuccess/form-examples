import { html, repeat } from '@genesislcap/web-core';
import { RendererEntry } from '@genesislcap/foundation-forms';
import { rankWith, mapStateToControlProps } from '@jsonforms/core';
import { DispatchRenderer } from '@genesislcap/foundation-forms/dist/dts/jsonforms/renderers/dispatch-renderer';


export const SegmentedControlRendererTemplate= () => html<DispatchRenderer>`
  <template>
    <control-wrapper
      :control=${(x) => x.control}
      :touched=${(x) => x.touched}
      ?submitted=${(x) => x.submitted}
    >
      <rapid-segmented-control
        @change=${(x, c) => {
          x.control.handleChange(
            x.control.path,
            (c.event.target as any).value
          );
          x.onBlur();
        }}
      >
        ${repeat((x, ctx) => x.control.uischema.options.data, html`
          <rapid-segmented-item value="${x => x.value}">${x => x.label}</rapid-segmented-item>
        `)}
      </rapid-segmented-control>
    </control-wrapper>
  </template>
`

const SEGMENTED_CONTROL_RANK = 5;

export const SegmentedControlRenderer: RendererEntry = {
  renderer: html`${SegmentedControlRendererTemplate}`,
  tester: rankWith(SEGMENTED_CONTROL_RANK, (args) => {
    return args.options?.segmented;
  }),
  mapper: mapStateToControlProps,
}
