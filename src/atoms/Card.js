import { LitElement, html, css } from '../../static/lit-core.min.js';

export class Row extends LitElement {
  static properties = {
    title: { type: String },
    mode: { type: String },
  }

  static styles = css`
    .card {
      position: relative;
      display: block;
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      white-space: prewrap;
    }

    .children {
      box-shadow:
        inset 2px 0 0 0 var(--theme-text),
        inset -2px 0 0 0 var(--theme-text),
        inset 0 -2px 0 0 var(--theme-text);
      display: block;
      padding-top: calc(var(--theme-line-height-base) * 0.5rem);
      padding-left: 2ch;
      padding-right: 2ch;
      padding-bottom: calc(var(--theme-line-height-base) * 1rem);
      overflow-x: auto;
      overflow-y: hidden;

      &::-webkit-scrollbar {
        display: none;
      }

      scrollbar-width: none;
    }

    .action {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }

    .left {
      min-width: 10%;
      width: 100%;
      box-shadow:
        inset 2px 0 0 0 var(--theme-text),
        inset 0 2px 0 0 var(--theme-text);
      padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 2ch 0px 1ch;
    }

    .leftCorner {
      flex-shrink: 0;
      box-shadow:
        inset 2px 0 0 0 var(--theme-text),
        inset 0 2px 0 0 var(--theme-text);
      padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 1ch 0px 1ch;
    }

    .right {
      min-width: 10%;
      width: 100%;
      box-shadow:
        inset -2px 0 0 0 var(--theme-text),
        inset 0 2px 0 0 var(--theme-text);
      padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 2ch 0px 1ch;
    }

    .rightCorner {
      flex-shrink: 0;
      box-shadow:
        inset -2px 0 0 0 var(--theme-text),
        inset 0 2px 0 0 var(--theme-text);
      padding: calc((var(--font-size) * 0.5) * var(--theme-line-height-base)) 1ch 0px 1ch;
    }

    .title {
      flex-shrink: 0;
      padding: 0 1ch 0 1ch;
      font-size: var(--font-size);
      font-weight: 400;
    }
  `;

  render() {
    let titleElement = html`
      <header class="action">
        <div class="left" aria-hidden="true"></div>
        ${this.title
        ? html`<h2 class="title">${title}</h2>`
        : null}
        <div class="right" aria-hidden="true"></div>
      </header>
    `;

    if (this.mode === 'left') {
      titleElement = html`
        <header class="action">
          <div class="leftCorner" aria-hidden="true"></div>
          <h2 class="title">${this.title}</h2>
          <div class="right" aria-hidden="true"></div>
        </header>
      `;
    }

    if (this.mode === 'right') {
      titleElement = html`
        <header class="action">
          <div class="left" aria-hidden="true"></div>
          <h2 class="title">${this.title}</h2>
          <div class="rightCorner" aria-hidden="true"></div>
        </header>
      `;
    }

    return html`
      <article class="card">
        ${titleElement}
        <section class="children">
          <slot></slot>
        </section>
      </article>
    `;
  }
}

customElements.define('srcl-card', Card);
