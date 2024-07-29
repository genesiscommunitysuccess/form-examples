import { RendererEntry } from '@genesislcap/foundation-forms';
import { mapStateToControlProps, rankWith } from '@jsonforms/core';
import { attr, css, customElement, FASTElement, html } from '@microsoft/fast-element';

@customElement({
  name: 'tooltip-form-label',
  template: html<TooltipLabel>`
    <template>
      <span class="label">
        ${(x) => x.label}
        <icon-tooltip
          tooltip-id="${(x) => x.label}-id"
          tooltip-text="${(x) => x.tooltipText}"
        ></icon-tooltip>
      </span>
    </template>
  `,
  styles: css`
    span {
      color: var(--neutral-foreground-hint);
      margin-bottom: calc(var(--design-unit) * 1px);
    }
  `,
})
export class TooltipLabel extends FASTElement {
  @attr label: string;
  @attr tooltipText: string;
  @attr left: string;
  @attr right: string;
}

export const RapidTooltipLabelFormRendererTemplate = () => html`
  <tooltip-form-label
    tooltipText="${(x) => x.control.uischema.options.tooltip}"
    label="${(x) => x.control.uischema.options.label}"
  ></tooltip-form-label>
`;

const TOOLTIP_RANK = 6;

export const TooltipLabelFormRenderer: RendererEntry = {
  renderer: html`
    ${() => RapidTooltipLabelFormRendererTemplate()}
  `,
  tester: rankWith(TOOLTIP_RANK, (args) => {
    return args.options?.tooltip as any;
  }),
  mapper: mapStateToControlProps,
};
