let myColor = "#F8F4EA";
// set the dimensions and margins of the graph
let margin = { top: 10, right: 50, bottom: 80, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
let svg = d3.selectAll(".mountain-chart")
    .append("svg")
    .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Read the data
d3.csv("data.csv", function (error, data) {
    if (error) throw error;
    // WORK FROM HERE USING BOTTOM CODE AS A REFERENCE
    var rowData = Object.keys(data[0]);

    var xValues = Object.keys(data[0]).slice(1);
    // Set up x scale
    var x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(0.1)
      .domain(xValues);

    svg.append("g")
        .attr("transform", "translate(-25," + height + ")")
        .call(d3.axisBottom(x)).selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .style("fill", myColor)
        .attr("transform", function (d) {
            return "rotate(-50)";
        });

    // Initialize an Y axis and line, using arbitrary starting scale (the word "the")
    let y = d3.scaleLinear().domain([0, 1000]).range([height, 0]);
    let yAxis = d3.axisLeft().scale(y);
    svg.append("g")
        .style("stroke", myColor)
        .attr("class", "myYaxis")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "0.75em")
        .attr("class", "chart-title")
        .style("text-anchor", "middle")
        .text("Number of occurrences");


    
    // Define SVG path generator
    var line =  d3.area()
            .x(function (d, i) { /*console.log(x(i)) */
                return i * 24;})
            .y0(height)
            .y1(function (d) { return y(d) })
  
    // Append path to SVG
    svg.append("path")
        .datum(Object.values(data[4]).slice(1))
        .attr("class", "line")
        .attr("d", line)
        .attr("stroke", function (d) { return myColor })
        .style("stroke-width", 2)
        .style("fill", myColor);

    // console.log(Object.values(data[2]).slice(1))
    // var yValues = xValues.map(function(key) {
    //     return rowData[key];
    // });
    // console.log(yValues)
})
