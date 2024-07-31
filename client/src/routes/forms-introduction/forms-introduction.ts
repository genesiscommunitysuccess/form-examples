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
    SIDE: 'BUY',
    QUANTITY: 100,
  }

  handleFormSubmit(e: CustomEvent) {
    console.log(e.detail);
  }
}
