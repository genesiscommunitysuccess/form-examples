import { customElement, FoundationElement, observable } from '@genesislcap/web-core';
import { formsIntroductionTemplate as template } from './forms-introduction.template';
import { css } from '@microsoft/fast-element';

@customElement({
  name: 'forms-introduction',
  template,
  styles: css`
    :host {
      rapid-tab-panel {
        max-height: 700px;
      }
    }
  `
})
export class FormsIntroduction extends FoundationElement {

  @observable existingData = {
    ISSUER_NAME: 'Genesis',
    PRICE: 100,
    MAIN_CONTACT: '555-555-5555',
    PASSWORD: 'secret_password',
  }

  handleFormSubmit(e: CustomEvent) {
    console.log(e.detail);
  }
}
