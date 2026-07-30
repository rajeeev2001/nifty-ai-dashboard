// ==========================
// chart.js
// TradingView Widget
// ==========================

function loadTradingViewChart() {

  const chart = document.getElementById("tvchart");

  if (!chart) return;

  chart.innerHTML = `
  <iframe
    src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview&symbol=NSE:NIFTY&interval=5&hidesidetoolbar=1&symboledit=1&saveimage=1&toolbarbg=F1F3F6&studies=[]&theme=dark&style=1&timezone=Asia/Kolkata"
    width="100%"
    height="500"
    frameborder="0"
    allowtransparency="true"
    scrolling="no">
  </iframe>
  `;

}

document.addEventListener("DOMContentLoaded", loadTradingViewChart);