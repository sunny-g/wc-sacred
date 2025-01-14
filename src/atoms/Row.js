import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { withTwind } from '../util/twind.config.js';

export class Row extends LitElement {
  static styles = css`
    .row {
      display: block;
      outline: 0;
      border: 0;
      transition: 200ms ease background;

      &:focus {
        background: var(--theme-focused-foreground);
      }
    }
  `;

  render() {
    return html`
      <section class="row">
        <slot></slot>
      </section>
    `;
  }
}

customElements.define('srcl-row', Row);
