var data = [
    [
      {value:".65", color: "MediumSeaGreen", label: "Innovation"},
      {value:".44", color: "MediumSeaGreen", label: "Entrepreneurship"},
      {value:".35", color: "MediumSeaGreen", label: "Economic Robustness"},
      {value:".44", color: "MediumSeaGreen", label: "Global Connectedness"},
      {value:"2", color: "white",},
      {value:".77", color: "SlateBlue", label: "Public Services"},
      {value:".61", color: "SlateBlue", label: "Safety & Security"},
      {value:".71", color: "SlateBlue", label: "Trust"},
      {value:".92", color: "SlateBlue", label: "Freedoms"},
      {value:"2", color: "white",},
      {value:".58", color: "firebrick", label: "Talent Development"},
      {value:".57", color: "firebrick", label: "Human Condition"},
      {value:".64", color: "firebrick", label: "Inclusivity"},
      {value:".75", color: "firebrick", label: "Environment & Qlty. of Life"}
  ],
  [
    {value:".76", color: "MediumSeaGreen", label: "Innovation"},
    {value:".60", color: "MediumSeaGreen", label: "Entrepreneurship"},
    {value:".70", color: "MediumSeaGreen", label: "Economic Robustness"},
    {value:".54", color: "MediumSeaGreen", label: "Global Connectedness"},
    {value:"2", color: "white",},
    {value:".46", color: "SlateBlue", label: "Public Services"},
    {value:".38", color: "SlateBlue", label: "Safety & Security"},
    {value:".59", color: "SlateBlue", label: "Trust"},
    {value:".37", color: "SlateBlue", label: "Freedoms"},
    {value:"2", color: "white",},
    {value:".52", color: "firebrick", label: "Talent Development"},
    {value:".60", color: "firebrick", label: "Human Condition"},
    {value:".53", color: "firebrick", label: "Inclusivity"},
    {value:".65", color: "firebrick", label: "Environment & Qlty. of Life"}
  ],
  [
    {value:".62", color: "MediumSeaGreen", label: "Innovation"},
    {value:".58", color: "MediumSeaGreen", label: "Entrepreneurship"},
    {value:".53", color: "MediumSeaGreen", label: "Economic Robustness"},
    {value:".34", color: "MediumSeaGreen", label: "Global Connectedness"},
    {value:"2", color: "white",},
    {value:".61", color: "SlateBlue", label: "Public Services"},
    {value:".63", color: "SlateBlue", label: "Safety & Security"},
    {value:".85", color: "SlateBlue", label: "Trust"},
    {value:".80", color: "SlateBlue", label: "Freedoms"},
    {value:"2", color: "white",},
    {value:".65", color: "firebrick", label: "Talent Development"},
    {value:".84", color: "firebrick", label: "Human Condition"},
    {value:".78", color: "firebrick", label: "Inclusivity"},
    {value:".83", color: "firebrick", label: "Environment & Qlty. of Life"}
  ],
  [
    {value:".65", color: "MediumSeaGreen", label: "Innovation"},
    {value:".39", color: "MediumSeaGreen", label: "Entrepreneurship"},
    {value:".72", color: "MediumSeaGreen", label: "Economic Robustness"},
    {value:".56", color: "MediumSeaGreen", label: "Global Connectedness"},
    {value:"2", color: "white",},
    {value:".79", color: "SlateBlue", label: "Public Services"},
    {value:".53", color: "SlateBlue", label: "Safety & Security"},
    {value:".62", color: "SlateBlue", label: "Trust"},
    {value:".41", color: "SlateBlue", label: "Freedoms"},
    {value:"12", color: "white",},
    {value:".63", color: "firebrick", label: "Talent Development"},
    {value:".62", color: "firebrick", label: "Human Condition"},
    {value:".51", color: "firebrick", label: "Inclusivity"},
    {value:".58", color: "firebrick", label: "Environment & Qlty. of Life"}
  ],
  [
    {value:".78", color: "MediumSeaGreen", label: "Innovation"},
    {value:".72", color: "MediumSeaGreen", label: "Entrepreneurship"},
    {value:".85", color: "MediumSeaGreen", label: "Economic Robustness"},
    {value:".77", color: "MediumSeaGreen", label: "Global Connectedness"},
    {value:"2", color: "white",},
    {value:".69", color: "SlateBlue", label: "Public Services"},
    {value:".53", color: "SlateBlue", label: "Safety & Security"},
    {value:".76", color: "SlateBlue", label: "Trust"},
    {value:".55", color: "SlateBlue", label: "Freedoms"},
    {value:"2", color: "white",},
    {value:".68", color: "firebrick", label: "Talent Development"},
    {value:".76", color: "firebrick", label: "Human Condition"},
    {value:".74", color: "firebrick", label: "Inclusivity"},
    {value:".80", color: "firebrick", label: "Environment & Qlty. of Life"}
  ]
];

var width = 750;
var barHeight = 20;

window.onload=drawChart(0);

function drawChart(chosenDataIndex) {
  console.log("Starting")
  // Clear everything first
  d3.select("#ESTbar").selectAll("*").remove()
  // Start drawing
  var chart2 = d3.select("#ESTbar")
      .attr("width", width+190)
      .attr("height", barHeight * data[chosenDataIndex].length)
      .attr("class", "chart");

  var bar2 = chart2.selectAll("g")
    .data(data[chosenDataIndex])
    .enter().append("g")
    .attr("transform", function(d, i) { return "translate(210," + i * barHeight + ")"; });

  bar2.append("rect")
    .attr("width", function(d,i) { return d.value*width})
    .attr("height", barHeight - 4)
    .style("fill", function(d,i) { return d.color});

  bar2.append("text")
      .attr("x", function(d) { return d.value*width + 0.; })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.value*100 + "%"; });

  bar2.append("text")
      .attr("x", -205)
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) { return d.label; });
}
