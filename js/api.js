// =============================
// api.js
// Nifty AI Dashboard v4.0
// Demo API Layer
// बाद में यहाँ Live APIs जोड़ेंगे
// =============================

const MarketAPI = {

  getMarketData() {
    return {
      nifty: "24,250.35 ▲ +0.62%",
      banknifty: "55,420.10 ▲ +0.48%",
      gift: "24,285 🟢",
      vix: "11.82",
      dow: "+0.45%",
      nasdaq: "+0.62%",
      nikkei: "-0.21%",
      hangseng: "+0.38%"
    };
  },

  getTradePlan() {
    return {
      signal: "BUY CE",
      confidence: 87,
      support: "24200",
      resistance: "24400",
      strike: "24250 CE",
      entry: "145-150",
      sl: "130",
      target: "180 / 220"
    };
  }

};

MarketAPI.getOptionChain = function () {

  return {
    pcr: "0.94",
    maxPain: "24200",
    callOI: "1.82 Cr",
    putOI: "2.11 Cr"
  };

};