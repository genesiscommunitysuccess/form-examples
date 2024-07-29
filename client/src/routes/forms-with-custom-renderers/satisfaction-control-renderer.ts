import { ExecutionContext, html, repeat } from '@genesislcap/web-core';
import { RendererEntry } from '@genesislcap/foundation-forms';
import { mapStateToControlProps, rankWith } from '@jsonforms/core';
import { DispatchRenderer } from '@genesislcap/foundation-forms/dist/dts/jsonforms/renderers/dispatch-renderer';


interface SatisfactionIcon {
  icon: string;
  label: string;
  value: number;
  color: string;
}

const satisfactionConfig: SatisfactionIcon[] = [
  { icon: 'face-angry', label: 'Very unhappy', value: 1, color: 'red' },
  { icon: 'face-frown', label: 'Unhappy', value: 2, color: 'orange' },
  { icon: 'face-meh', label: 'Ambivalent', value: 3, color: 'yellow', },
  { icon: 'face-smile', label: 'Happy', value: 4, color: 'lightgreen' },
  { icon: 'face-smile-beam', label: 'Very Happy', value: 5, color: 'green' }
]

export const SatisfactionControlRendererTemplate = () => html<DispatchRenderer>`
  <template>
    <span class="label" style="
        color: var(--neutral-foreground-hint);
        margin-bottom: calc(var(--design-unit) * 1px);
    ">
      ${(x) => x.control?.label}
    </span>
    <div class="satisfaction-container" style="display: flex; cursor: pointer; text-align: center; margin-bottom: 10px;">
      ${repeat(() => satisfactionConfig, html<SatisfactionIcon>`
        <div
          @click=${(x, c: ExecutionContext<DispatchRenderer>) => {
              c.parent.control.handleChange(
                c.parent.control.path,
                x.value
              );
              c.parent.onBlur();
            }
          }
          class="satisfaction-container-item" 
          style="padding: 10px; color: ${(x, c: ExecutionContext<DispatchRenderer>) => {
            return c.parent.control.data === x.value ? x.color : 'inherit';
          }}">
          <rapid-icon variant="solid" size="xl" name="${x => x.icon}"></rapid-icon>
          <div style="font-size: 10px; margin-top: 5px;">${x => x.label}</div>
        </div>
      `)}
    </div>
  </template>
`

const SATISFACTION_CONTROL_RANK = 5;

export const SatisfactionControlRenderer: RendererEntry = {
  renderer: html`${SatisfactionControlRendererTemplate()}`,
  tester: rankWith(SATISFACTION_CONTROL_RANK, (args) => {
    return args.options?.satisfaction;
  }),
  mapper: mapStateToControlProps
}
