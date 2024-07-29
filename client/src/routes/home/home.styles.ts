import { css } from '@genesislcap/web-core';

export const HomeStyles = css`
  :host {
    
    .example-container {
      display: flex;
      flex-wrap: wrap;
      
      rapid-card {
        width: 250px;
        margin: 10px;
        height: 300px;
        display: flex;
        flex-direction: column;
        
        rapid-button {
          margin-top: auto;
        }
      }
    }
    /* insert css styles here */
  }
`;
