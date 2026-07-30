// ==========================
// chart.js
// TradingView Chart Module
// ==========================

function loadTradingViewChart() {

    const chart = document.getElementById("tvchart");

    if (!chart) return;

    chart.innerHTML = `
        <iframe
            src="https://s.tradingview.com/widgetembed/?symbol=NSE:NIFTY&interval=5&theme=dark"
            width="100%"
            height="450"
            frameborder="0">
        </iframe>
    `;

}