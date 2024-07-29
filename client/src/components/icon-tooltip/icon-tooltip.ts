import { attr, customElement } from '@microsoft/fast-element';
import { FoundationElement } from '@microsoft/fast-foundation';
import { iconTooltipStyles as styles } from './icon-tooltip.styles';
import { iconTooltipTemplate as template } from './icon-tooltip.template';

@customElement({
  name: 'icon-tooltip',
  template,
  styles,
})
export class IconTooltip extends FoundationElement {
  @attr({ attribute: 'tooltip-id' }) id: string;
  @attr({ attribute: 'tooltip-text' }) tooltipText: string;
}
