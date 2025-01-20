import { LitElement, html, css } from '../../static/lit-core.min.js';

export class Badge extends LitElement {
  static styles = css`
    .root {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      font-weight: 400;
      margin: 0;
      outline: 0;
      border: 0;
      font-family: var(--font-family-mono);
      font-size: 10px;
      min-height: calc(var(--theme-line-height-base) * var(--font-size));
      text-transform: uppercase;
      transition: 200ms ease all;
      background: var(--theme-border);
      padding: 0 1ch 0 1ch;
    }
`;

  render() {
    return html``;
  }
}

customElements.define('srcl-badge', Badge);
