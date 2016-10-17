// Dieses package soll auf github gehostet werden
exports.panelsCount = function (roofX, roofY) {
  const panelWidth = 120; // cm
  const panelHeight = 180; // cm
  // Zahl der Panels in der Breite des Daches
  const PanelsX = Math.floor(roofX/panelWidth);
  const PanelsY = Math.floor(roofY/panelHeight);
  const panels = PanelsX*PanelsY;
  console.log("Du brauchst " +  panels + " Panels");
};
