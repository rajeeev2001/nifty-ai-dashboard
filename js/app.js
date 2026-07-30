// ===============================
// Nifty AI Dashboard v3.0
// Demo Data (Live API बाद में जोड़ेंगे)
// ===============================

const market = {
  nifty: "24,250.35 ▲ +0.62%",
  banknifty: "55,420.10 ▲ +0.48%",
  vix: "11.82 🟢",
  gift: "24,285 🟢",
  dow: "+0.45%",
  nasdaq: "+0.62%",
  nikkei: "-0.21%",
  hangseng: "+0.38%"
};

// Live Market
document.getElementById("nifty").innerHTML = market.nifty;
document.getElementById("banknifty").innerHTML = market.banknifty;
document.getElementById("vix").innerHTML = market.vix;
document.getElementById("gift").innerHTML = market.gift;

// Global Markets
document.getElementById("dow").innerHTML = "🟢 " + market.dow;
document.getElementById("nasdaq").innerHTML = "🟢 " + market.nasdaq;
document.getElementById("nikkei").innerHTML = "🔴 " + market.nikkei;
document.getElementById("hangseng").innerHTML = "🟢 " + market.hangseng;

// AI Score
document.getElementById("score").innerHTML = "84/100";
document.getElementById("aiscore").innerHTML = "84";
document.getElementById("progress").value = 84;

// Signal
document.getElementById("signal").innerHTML = "BUY CE 🟢";
document.getElementById("confidence").innerHTML = "87%";
document.getElementById("marketStatus").innerHTML = "Bullish 🟢";

// Support & Resistance
document.getElementById("support").innerHTML = "24200";
document.getElementById("resistance").innerHTML = "24400";
document.getElementById("trend").innerHTML = "Bullish 🟢";

// News
document.getElementById("news").innerHTML = `
<li>Global markets closed positive.</li>
<li>Gift Nifty indicates positive opening.</li>
<li>India VIX remains stable.</li>
<li>FII buying continues.</li>
<li>Watch 24200 support today.</li>
`;

// Clock
function updateTime() {
  document.getElementById("time").innerHTML =
    new Date().toLocaleString();
}

updateTime();
setInterval(updateTime, 1000);

// Auto Refresh every 60 sec
setInterval(() => {
  console.log("Refreshing dashboard...");
}, 60000);

loadTradingViewChart();
// Dashboard Start
document.addEventListener("DOMContentLoaded", () => {

  if (typeof loadTradingViewChart === "function") {
    loadTradingViewChart();
  }

});
// ==========================
// Market Status
// ==========================

function updateMarketStatus() {

  const now = new Date();

  const hour = now.getHours();
  const minute = now.getMinutes();

  let status = "🔴 Market Closed";

  if (
    (hour > 9 || (hour === 9 && minute >= 15)) &&
    (hour < 15 || (hour === 15 && minute <= 30))
  ) {
    status = "🟢 Market Open";
  }

  const marketStatus = document.getElementById("marketStatus");

  if (marketStatus) {
    marketStatus.innerHTML = status;
  }
}

updateMarketStatus();
setInterval(updateMarketStatus, 60000);
document.addEventListener("DOMContentLoaded",()=>{

runAI();

});

function loadOptionChain() {

  const option = MarketAPI.getOptionChain();

  document.getElementById("pcr").innerHTML = option.pcr;
  document.getElementById("maxpain").innerHTML = option.maxPain;
  document.getElementById("calloi").innerHTML = option.callOI;
  document.getElementById("putoi").innerHTML = option.putOI;

}

loadOptionChain();