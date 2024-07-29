import { html, repeat, Route } from '@genesislcap/web-core';
import type { Home } from './home';

export const HomeTemplate = html<Home>`
  <!-- insert template code here -->
  <h1>Foundation Form Examples</h1>
  <div class="example-container">
    ${repeat(x => x.exampleCards, html`
        <rapid-card>
          <h3>${x => x.title}</h3>
          <p>${x => x.description}</p>
          <rapid-button @click="${x => Route.path.push(x.path)}">View ${x => x.title}</rapid-button></a>
        </rapid-card>
    `)}
  </div>
`;
