import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { withTwind } from '../util/twind.config.js';

export class Accordion extends LitElement {
  static properties = {
    title: { type: String, attribute: 'title' },
    defaultValue: { type: Boolean, attribute: 'defaultValue' },
    _show: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this._show = this.defaultValue || false;
  }

  _toggle() {
    this._show = !this._show;
  }

  static styles = css`
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &:hover {
        background: var(--theme-focused-foreground);
      }
    }

    .icon {
      flex-shrink: 0;
      user-select: none;
      cursor: pointer;
    }

    .title {
      min-width: 10%;
      width: 100%;
      user-select: none;
      cursor: pointer;
      transition: 200ms ease all;
      transition-property: padding;
      padding-left: 0ch;
    }

    .active {
      .title {
        padding-left: 1ch;
      }
    }

    /* .content {
      padding-left: 1ch;
    } */
    .content {
      padding-left: 1ch;
    }
  `;

  render() {
    return html`
      <srcl-row role="button" @click=${this._toggle}>
        <div class="header ${this._show ? "active" : undefined}">
          <span class="icon"> ${this._show ? '▾' : '▸'}</span >
          <span class="title">${this.title}</span>
        </div>
      </srcl-row>
      ${this._show ? html`
        <div class="content">
          <srcl-row><slot></slot></srcl-row>
        </div>` : null
      }
    `;
  }
}

customElements.define('srcl-accordion', Accordion);
