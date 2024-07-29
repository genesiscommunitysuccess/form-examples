import { css } from '@microsoft/fast-element';

export const iconTooltipStyles = css`
  rapid-icon {
    color: var(--accent-foreground-rest);
  }

  rapid-tooltip {
    position: absolute;
    z-index: 999;
    width: 300px;
    contain: unset;
  }

  rapid-tooltip::part(tooltip) {
    padding: calc(var(--design-unit) * 4px);
    background-color: var(--tooltip-bg-color);
    border: 1px solid var(--neutral-layer-3);
    text-align: left;
    color: var(--neutral-foreground-hint);
    box-shadow: 0 4px 10px rgb(0 0 0 / 35%);
    font-size: var(--type-ramp-minus-1-font-size);
  }

  .tooltip-title {
    color: var(--neutral-fill-strong-hover);
    margin: 0;
  }

  .tooltip-description {
    margin-top: calc(var(--design-unit) * 2px);
    margin-bottom: 0;
    font-size: var(--type-ramp-base-font-size);
  }

  .tooltip-second-title-margin {
    margin-top: calc(var(--design-unit) * 2px);
  }

  .tooltip-list-padding {
    margin: 0;
    padding: 0 0 0 calc(var(--design-unit) * 4px);
  }

  a,
  a:active,
  a:visited {
    color: var(--accent-foreground-rest);
    text-decoration: none;
  }

  .warning {
    background: var(--warning-color);
    color: #000;
  }

  .info {
    margin-top: calc(var(--design-unit) * 2px);
    padding: 20px;
    margin-bottom: 20px;
    height: auto;
    box-sizing: border-box;
  }
`;
