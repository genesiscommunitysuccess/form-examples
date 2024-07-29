import { customElement, FoundationElement, css } from '@genesislcap/web-core';
import { formsValidationTemplate as template } from './forms-validation.template';

@customElement({
  name: 'forms-validation',
  template,
  styles: css`
    :host {
      rapid-card {
        max-height: 600px;
      }
    }
  `
})
export class FormsValidation extends FoundationElement {

}
