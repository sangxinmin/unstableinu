window.onload = function () {
  var chart = new CanvasJS.Chart("tokenomics-chart", {
    exportEnabled: false,
    animationEnabled: true,
    backgroundColor: "transparent",
    legend:{
      cursor: "pointer",
      itemclick: explodePie
    },
    data: [{
      type: "pie",
      color: "white",
      indexLabelFontColor: "white",
      indexLabelPlacement: "outside",
      showInLegend: false,
      toolTipContent: "{name}: <strong>{y}%</strong>",
      indexLabel: "{name} - {y}%",
      dataPoints: [
        { y: 40, name: "Liquidity", indexLabelFontSize: 16, indexLabelFontWeight: "bold", indexLabelLineThickness: 3, exploded: true, color: "#f5eb26" },
        { y: 60, name: "Private", indexLabelFontSize: 16, indexLabelFontWeight: "bold", indexLabelLineThickness: 3, exploded: true, color: "#78e711" }
      ]
    }]
  });
  chart.render();
}

function explodePie (e) {
  if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
  } else {
    e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
  }
  e.chart.render();

}
