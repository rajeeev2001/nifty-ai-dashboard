// Demo Data (बाद में इसे Live Data से बदलेंगे)

document.getElementById("nifty").innerText = "24,250.35 (+0.62%)";
document.getElementById("gift").innerText = "24,285 🟢";
document.getElementById("vix").innerText = "12.50 🟢 Stable";
document.getElementById("fii").innerText = "FII Buying ₹1,250 Cr 🟢";

// हर 5 सेकंड में डेमो डेटा अपडेट
setInterval(() => {
  document.getElementById("nifty").innerText = "24,250.35 (+0.62%)";
}, 5000);
document.getElementById("dow").innerText = "🟢 +0.45%";
document.getElementById("nasdaq").innerText = "🟢 +0.62%";
document.getElementById("nikkei").innerText = "🔴 -0.21%";
document.getElementById("hangseng").innerText = "🟢 +0.38%";
async function updateDashboard(data) {
  document.getElementById("nifty").innerText = data.nifty;
  document.getElementById("gift").innerText = data.giftNifty;
  document.getElementById("vix").innerText = data.vix;
  document.getElementById("fii").innerText = data.fii;
}
document.getElementById("niftyLive").innerText = "24,250.35";
document.getElementById("banknifty").innerText = "55,420.10";
document.getElementById("vixLive").innerText = "11.82";
document.getElementById("trend").innerText = "Bullish 🟢";

document.getElementById("aiSignal").innerText = "BUY CE";
document.getElementById("confidence").innerText = "87%";

document.getElementById("news").innerHTML = `
<li>Global markets closed positive.</li>
<li>Gift Nifty indicates positive opening.</li>
<li>FII buying continues.</li>
`;