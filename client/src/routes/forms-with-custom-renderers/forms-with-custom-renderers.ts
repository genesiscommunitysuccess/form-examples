import { customElement, FASTElement, observable } from '@genesislcap/web-core';
import { FormsWithCustomRenderersTemplate as template } from './forms-with-custom-renderers.template';

@customElement({
  name: 'forms-with-custom-renderers',
  template
})
export class FormsWithCustomRenderers extends FASTElement {

  @observable formData;

  handleFormSubmit(e: CustomEvent): void {
    this.formData = JSON.stringify(e.detail);
  }
}
