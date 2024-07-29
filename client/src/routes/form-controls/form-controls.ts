import { customElement, FoundationElement } from '@genesislcap/web-core';
import { formControlsTemplate as template } from './form-controls.template';
import { css } from '@microsoft/fast-element';

@customElement({
  name: 'form-controls',
  template,
  styles: css`
    :host {
      rapid-card {
        height: 500px;
      }
    }
  `
})
export class FormControls extends FoundationElement {

}
