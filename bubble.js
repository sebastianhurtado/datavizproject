var diameter = 420;
var colors = ['#2AA4A9', '#57B28D','#FBAE4B', '#F16045','#6f9364', '#efcbdb', '#7082c1'];
var color = d3.scale.category10().range(colors);
var bubble = d3.layout.pack()
    .sort(null)
    .size([diameter * 1.4, diameter])
    .padding(10);
var svg = d3.select("body").select("#svg_bubble");
var tooltip = d3.select("body")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("font", "40px PT Calibri")
    .text("tooltip");

var habbits = [
    {category: "Funding", alt: "Funding - 100,291 entries", value: 2.0},
    {category: "SETI", alt: "SETI - 214 entries", value: 0.5},
    {category: "Exoplanets", alt: "Exoplanets - 112 entries", value: 0.1},
    {category: "Funding & SETI", alt: "Funding & SETI - 13 entries", value: 0.08},
    {category: "Funding & Exoplanets", alt: "Funding & Exoplanets - 9 entries", value: 0.05},
    {category: "Exoplanets & SETI", alt: "Exoplanets & SETI - 8 entries", value: 0.05},
    {category: "Funding, Exoplanets & SETI", alt: "Funding,Exoplanets & SETI - ????", value: 0.05},
];

var node = svg.selectAll(".node")
    .data(bubble.nodes({children:habbits}).filter(function(d) { return !d.children; }))
  .enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
node.append("circle")
    .attr("r", function(d) { return d.r; })
    .style("fill", function(d) { return color(d.category); })
    .on("mouseover", function(d) {
            tooltip.text(d.alt);
            tooltip.style("visibility", "visible");
    })
    .on("mousemove", function() {
        return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
    })
    .on("mouseout", function(){
        return tooltip.style("visibility", "hidden");
    });

node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .style("pointer-events", "none")
    .text(function(d) { return d.name; });

var legend = d3.select("#bubble").append("svg").attr("id", "legend");
legend.append("rect").attr("id", "legend1")
    .attr("x", "120").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Funding"));
legend.append("text").attr("x", "145").attr("y", "24").attr("font-size", "12px").text("Funding");
legend.append("rect").attr("id", "legend2")
    .attr("x", "250").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("SETI"));
legend.append("text").attr("x", "275").attr("y", "24").attr("font-size", "12px").text("SETI");
legend.append("rect").attr("id", "legend3")
    .attr("x", "370").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Exoplanets"));
legend.append("text").attr("x", "395").attr("y", "24").attr("font-size", "12px").text("Exoplanets");
legend.append("rect").attr("id", "legend4")
    .attr("x", "500").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Funding & SETI"));
legend.append("text").attr("x", "505").attr("y", "24").attr("font-size", "12px").text("Funding & SETI");
legend.append("rect").attr("id", "legend5")
    .attr("x", "630").attr("y", "10").attr("width", "20").attr("height", "20").attr("fill", color("Funding & Exoplanets"));
legend.append("text").attr("x", "605").attr("y", "24").attr("font-size", "12px").text("Funding & Exoplanets");
legend.append("rect").attr("id", "legend6")
    .attr("x", "180").attr("y", "50").attr("width", "20").attr("height", "20").attr("fill", color("Exoplanets & SETI"));
legend.append("text").attr("x", "695").attr("y", "24").attr("font-size", "12px").text("Exoplanets & SETI");
legend.append("rect").attr("id", "legend7")
    .attr("x", "310").attr("y", "50").attr("width", "20").attr("height", "20").attr("fill", color("Funding, Exoplanets & SETI"));
legend.append("text").attr("x", "775").attr("y", "24").attr("font-size", "12px").text("Funding, Exoplanets & SETI");


function filter(category){
    d3.select(".dropbtn").select("#cat").text(category);
    switch(category){
        case 'all':
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", 1);
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", 1);
            break;
        default:
            svg.selectAll(".node")
               .select("circle")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            svg.selectAll(".node")
               .select("text")
               .attr("opacity", function(d){ return d.category == category? 1:0;});
            break;
    }
}
