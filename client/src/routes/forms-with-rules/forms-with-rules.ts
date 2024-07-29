import { customElement, FoundationElement, observable } from '@genesislcap/web-core';
import { formsWithRulesTemplate as template } from './forms-with-rules.template';

@customElement({
  name: 'forms-with-rules',
  template
})
export class FormsWithRules extends FoundationElement {

  @observable formData;

  handleFormSubmit(e: CustomEvent) {
    this.formData = e.detail;
  }
}
