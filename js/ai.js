// ==========================
// ai.js
// AI Decision Engine v1
// ==========================

const AIEngine = {

  analyze(market) {

    let score = 50;

    if (market.vix < 15) score += 10;
    if (market.dow.includes("+")) score += 10;
    if (market.nasdaq.includes("+")) score += 10;
    if (market.gift.includes("🟢")) score += 10;

    let signal = "NO TRADE";

    if (score >= 80) signal = "BUY CE";
    else if (score <= 40) signal = "BUY PE";

    return {
      score: score,
      signal: signal,
      confidence: score
    };

  }

};