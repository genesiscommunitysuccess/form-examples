import { FoundationElement, customElement } from "@genesislcap/web-core";
import { formsJsonSchemaTemplate as template } from './forms-json-schema.template';
import { css } from '@microsoft/fast-element';

@customElement({
  name: 'forms-with-event-handlers',
  template,
  styles: css`
    .flex-container {
      display: flex;
      
      > * {
        flex: 1;
        padding: 10px;
      }
    }
  `
})
export class FormsJsonSchema extends FoundationElement {
}
