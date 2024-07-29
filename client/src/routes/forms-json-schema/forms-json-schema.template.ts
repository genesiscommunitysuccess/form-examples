import { html } from '@microsoft/fast-element';
import { simpleTradeJsonSchema, simpleTradeUiSchema, tradeUISchema } from './form-json-schema.schema';

export const formsJsonSchemaTemplate = html`
    <h1>JSON Schema</h1>
    <rapid-tabs>
      <rapid-tab>Simple Trade - Resource name</rapid-tab>
      <rapid-tab>Simple Trade - Client side schema</rapid-tab>
      <rapid-tab>Simple Trade - Resource name + UI Schema</rapid-tab>
      <rapid-tab>Counterparty</rapid-tab>
      <rapid-tab>Trade</rapid-tab>
      <rapid-tab-panel>
        <div class="flex-container">
          <rapid-card>
            <foundation-form resourceName="EVENT_SIMPLE_TRADE_INSERT">
            </foundation-form>
          </rapid-card>
          <rapid-grid-pro style="height: 300px">
            <grid-pro-genesis-datasource resource-name="ALL_SIMPLE_TRADES"></<grid-pro-genesis-datasource>
          </rapid-grid-pro>
        </div>
      </rapid-tab-panel>
      <rapid-tab-panel>
        <div class="flex-container">
          <rapid-card>
            <foundation-form :jsonSchema="${() => simpleTradeJsonSchema}">
            </foundation-form>
          </rapid-card>
        </div>
      </rapid-tab-panel>
      <rapid-tab-panel>
        <div class="flex-container">
          <foundation-form resourceName="EVENT_SIMPLE_TRADE_INSERT" :uischema="${() => simpleTradeUiSchema}">
          </foundation-form>
          <rapid-grid-pro style="height: 300px">
            <grid-pro-genesis-datasource resource-name="ALL_SIMPLE_TRADES"></<grid-pro-genesis-datasource>
          </rapid-grid-pro>
        </div>
      </rapid-tab-panel>
      <rapid-tab-panel>
        <div class="flex-container">
          <rapid-card>
            <foundation-form resourceName="EVENT_COUNTERPARTY_INSERT">
            </foundation-form>
          </rapid-card>
          <rapid-grid-pro style="height: 300px">
            <grid-pro-genesis-datasource resource-name="ALL_COUNTERPARTIES"></<grid-pro-genesis-datasource>
          </rapid-grid-pro>
        </div>
      </rapid-tab-panel>
      <rapid-tab-panel>
        <div class="flex-container">
          <foundation-form resourceName="EVENT_TRADE_INSERT" :uischema="${() => tradeUISchema}">
          </foundation-form>
          <rapid-grid-pro style="height: 300px">
            <grid-pro-genesis-datasource resource-name="ALL_TRADES"></<grid-pro-genesis-datasource>
          </rapid-grid-pro>
        </div>
      </rapid-tab-panel>
    </rapid-tabs>
`
