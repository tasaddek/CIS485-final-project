class ImpactDashboard extends LitElement {
  render() {
    return html`
      <div class="dashboard">
        <h2>Our Collective Impact</h2>
        <div class="metrics">
          <metric-card value="127" unit="books" label="Shared Today"></metric-card>
          <metric-card value="344" unit="kg CO₂" label="Offset Today"></metric-card>
        </div>
        <canvas id="impactChart"></canvas>
      </div>
    `;
  }
}