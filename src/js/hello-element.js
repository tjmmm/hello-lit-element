import { LitElement, html } from "lit-element";

export class HelloElement extends LitElement {
  constructor() {
    super();
    this.message = "Hello! This is a default message!";
  }

  render() {
    return html`
      <p>${this.message}</p>
    `;
  }

  static get properties() {
    return {
      message: { type: String }
    };
  }
}
