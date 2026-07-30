// ==========================
// AI Engine Version 2
// ==========================

function runAI() {

const data = MarketAPI.getMarketData();

let score = 50;

if(parseFloat(data.vix) < 15) score += 10;

if(data.dow.includes("+")) score += 10;

if(data.nasdaq.includes("+")) score += 10;

if(data.gift.includes("🟢")) score += 15;

let trend="Sideways";
let trade="NO TRADE";
let risk="Medium";

if(score>=80){
trend="Bullish";
trade="BUY CE";
risk="Low";
}
else if(score<=40){
trend="Bearish";
trade="BUY PE";
risk="High";
}

document.getElementById("score").innerHTML=score+"/100";
document.getElementById("aiTrend").innerHTML=trend;
document.getElementById("trade").innerHTML=trade;
document.getElementById("risk").innerHTML=risk;
document.getElementById("probability").innerHTML=score+"%";

}