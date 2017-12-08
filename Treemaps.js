const economydata = [
  {color: "DarkOliveGreen", parent: "Global Connectedness", id: "Mobility of Data", value: .083333333333333333333},
  {color: "DarkOliveGreen", parent: "Global Connectedness", id: "Mobility of Goods and Services",  value: .083333333333333333333},
  {color: "DarkOliveGreen", parent: "Global Connectedness", id: "Mobility of Financial Flows", value: .083333333333333333333},

  {color: "OliveDrab", parent: "Economic Robustness", id: "Economic Productivity", value: .083333333333333333333},
  {color: "OliveDrab", parent: "Economic Robustness", id: "Economic Diversification",  value: .083333333333333333333},
  {color: "OliveDrab", parent: "Economic Robustness", id: "Economic Stability", value: .083333333333333333333},

  {color: "MediumSeaGreen", parent: "Entrepreneurship", id: "Funding for New Businesses", value: .0625},
  {color: "MediumSeaGreen", parent: "Entrepreneurship", id: "Ease of Starting New Ventures",  value: .0625},
  {color: "MediumSeaGreen", parent: "Entrepreneurship", id: "Vibrancy of Start-Up Environment", value: .125},

  {color: "Green", parent: "Innovation", id: "Innovation Readiness", value: .0625},
  {color: "Green", parent: "Innovation", id: "Investment in Innovation", value: .0625},
  {color: "Green", parent: "Innovation", id: "Innovation Collaboration & Dissemination", value: .0625},
  {color: "Green", parent: "Innovation", id: "Uptake of New Technology", value: .0625},  ];

const peopledata = [
  {color: "DarkRed", parent: "Environment & QoL", id: "Air, Water and Sanitation Quality", value: .075},
  {color: "DarkRed", parent: "Environment & QoL", id: "Health",  value: .075},
  {color: "DarkRed", parent: "Environment & QoL", id: "Work Life Balance", value: .075},
  {color: "DarkRed", parent: "Environment & QoL", id: "Transportation", value: .025},

  {color: "firebrick", parent: "Inclusivity", id: "Labor Market Inclusivity", value: .0625},
  {color: "firebrick", parent: "Inclusivity", id: "Economic Mobility",  value: .0625},
  {color: "firebrick", parent: "Inclusivity", id: "Diversity and Acceptance", value: .0625},
  {color: "firebrick", parent: "Inclusivity", id: "Inclusive Policies", value: .0625},

  {color: "red", parent: "Talent Base", id: "Current Vitals of the Society", value: .0326},
  {color: "red", parent: "Talent Base", id: "Retaining Talent",  value: .2174},
  {color: "Salmon", parent: "Talent Development", id: "Retaining Talent", value: .125},
  {color: "Salmon", parent: "Talent Development", id: "Talent Development", value: .125},  ];

const institutionsdata = [
  {color: "MediumPurple", parent: "Freedoms", id: "General Freedoms", value: .125},
  {color: "MediumPurple", parent: "Freedoms", id: "Online Freedoms",  value: .125},

  {color: "SlateBlue", parent: "Trust", id: "Trust in Technology", value: .125},
  {color: "SlateBlue", parent: "Trust", id: "Government Accountability",  value: .125},

  {color: "Indigo", parent: "Safety & Security", id: "Physical Safety", value: .083333333333333333333},
  {color: "Indigo", parent: "Safety & Security", id: "Cyber Security",  value: .16666666666666666667},

  {color: "Purple", parent: "Public Services", id: "Regulatory Regime", value: .083333333333333333333},
  {color: "Purple", parent: "Public Services", id: "Government Use of Digital", value: .083333333333333333333},
  {color: "Purple", parent: "Public Services", id: "e-ID in Public Services", value: .083333333333333333333},
];

new d3plus.Treemap()
  .data(economydata)
  .groupBy(["parent", "id"])
  .shapeConfig({fill(d) {return d.color; }})
  .select("#treemapboxeconomy")
  .draw();

new d3plus.Treemap()
  .data(peopledata)
  .groupBy(["parent", "id"])
  .shapeConfig({fill(d) {return d.color; }})
  .select("#treemapboxpeople")
  .draw();

new d3plus.Treemap()
  .data(institutionsdata)
  .groupBy(["parent", "id"])
  .shapeConfig({fill(d) {return d.color; }})
  .select("#treemapboxinstitutions")
  .draw();
