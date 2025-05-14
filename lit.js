import { LitElement, html } from 'lit';

class CarbonDisplay extends LitElement {
  static properties = {
    saved: { type: Number }
  };

  render() {
    return html`
      <div class="impact">
        <h3>Community Impact</h3>
        <p>📚 ${this.saved} books shared</p>
        <p>🌍 ${(this.saved * 2.71).toFixed(2)} kg CO₂ saved</p>
      </div>
    `;
  }
}