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
    .style("z-index", "100")
    .style("visibility", "hidden")
    .style("font", "30px PT Calibri")
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
