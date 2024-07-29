import { html } from '@microsoft/fast-element';
import { IconTooltip } from './icon-tooltip';

export const iconTooltipTemplate = html<IconTooltip>`
  <rapid-icon id="${(x) => x.id}" name="question-circle" size="md" variant="regular"></rapid-icon>
  <rapid-tooltip part="tooltip" show anchor="${(x) => x.id}">
    ${(x) => html`
      ${x.tooltipText}
    `}
  </rapid-tooltip>
`;
