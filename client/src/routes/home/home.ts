import { User } from '@genesislcap/foundation-user';
import { customElement, GenesisElement, observable } from '@genesislcap/web-core';
import { HomeStyles as styles } from './home.styles';
import { HomeTemplate as template } from './home.template';
import {
  singleColumnHorizontalUiSchema,
  singleColumnJsonSchema,
  singleColumnVerticalUiSchema
} from './single-column.schema';

@customElement({
  name: 'home-route',
  template,
  styles,
})
export class Home extends GenesisElement {

  @observable exampleCards = [
    {
      title: 'Introduction',
      description: 'Introduction to foundation form library.',
      path: 'forms-introduction',
    },
    {
      title: 'JSON/UI Schema',
      description: 'Overview of how to use JSON and UI Schemas with Foundation Forms',
      path: 'forms-json-ui-schema'
    },
    {
      title: 'Layouts',
      description: 'Guide to using the different foundation form layouts',
      path: 'form-layouts'
    },
    {
      title: 'Input Controls',
      description: 'How to use foundation forms input controls',
      path: 'form-controls'
    },
    {
      title: 'Rules',
      description: 'Using rules to dynamically change foundation form control items',
      path: 'forms-with-rules'
    },
    {
      title: 'Validation',
      description: 'Applying validation to data entered into a form',
      path: 'forms-validation'
    },
    {
      title: 'Custom Controls',
      description: 'How to createa custom input controls',
      path: 'forms-with-custom-renderers'
    }
  ]
  @User user: User;
}
