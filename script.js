let myColor = "#F8F4EA";
// set the dimensions and margins of the graph
let margin = { top: 10, right: 50, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
let svg = d3.selectAll(".mountain-chart")
    .append("svg")
    .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom))
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");


// set the dimensions and margins of the graph
let margin2 = { top: 10, right: 10, bottom: 10, left: 10 },
    width2 = 300 - margin2.left - margin2.right,
    height2 = 300 - margin2.top - margin2.bottom;

// Read the data
d3.csv("https://assets.dailyprincetonian.com/projects.dailyprincetonian.com/140-years-prince-history/allwordsfreq.csv", function (data) {

// WORK FROM HERE USING BOTTOM CODE AS A REFERENCE
/*
    // Add X axis --> it is a date format
    let x = d3.scaleLinear()
        //.type('category')
        //.labels(['1880s'])
        .domain([new Date(1880), new Date(2010)])
        .range([0, width]);

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickFormat(d3.format('d'))).selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .style("fill", myColor)
        .attr("transform", function (d) {
            return "rotate(-50)";
        });

    // Initialize an Y axis and line, using arbitrary starting scale (the word "the")
    let y = d3.scaleLinear().domain([0, d3.max(data, function (d) {
        return +d.the * 10;
    })]).range([height, 0]);
    let yAxis = d3.axisLeft().scale(y);
    svg.append("g")
        .style("stroke", myColor)
        .attr("class", "myYaxis")
        .call(d3.axisLeft(y));

    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .attr("class", "chart-title")
        .style("text-anchor", "middle")
        .text("Mentions per 100,000 words");


    let line = svg
        .append('g')
        .append("path")
        .datum(data)
        .attr("d", d3.area()
            .x(function (d) { return x(+d.timedecade) })
            .y0(height)
            .y1(function (d) { return y(+d.the * 10) })
        )
        .attr("stroke", function (d) { return myColor })
        .attr("class", "line")
        .style("stroke-width", 2)
        .style("fill", myColor)

    // A function that update the chart
    function update(button, selectedGroup, selectedDecade) {
        d3.select("#" + selectedDecade).select(".word-cloud").select(".selected").classed("selected",false);
        // selected the right chart elements for the decade
        let selectedSvg = d3.select("#" + selectedDecade).select(".mountain-chart svg g");
        let selectedLine = selectedSvg.select(".line");

        // Create new data with the selection?
        let dataFilter = data.map(function (d) { return { time: d.timedecade, value: d[selectedGroup] } })

        if(typeof dataFilter[0]['value'] == 'undefined') {
            d3.select("#" + selectedDecade).select(".error-msg")
            .text("\“" + selectedGroup + "\” was not included in our analysis because it was either not used frequently enough to be included in our analysis or was removed during data cleaning. If you're interested in seeing its usage over time, you can use the Princeton University Library Archive explorer.")
            .style("color", myColor)
            return false;
        }
       
        d3.select("#" + selectedDecade).select(".error-msg")
        .text("")

        y.domain([0, d3.max(data, function (d) {
            return +d[selectedGroup] * 10;
        })]);
        selectedSvg.selectAll(".myYaxis")
            .transition()
            .duration(1000)
            .call(yAxis);

        // Give these new data to update line
        selectedLine
            .datum(dataFilter)
            .transition()
            .duration(1000)
            .attr("d", d3.area()
                .x(function (d) { return x(+d.time) })
                .y0(height)
                .y1(function (d) { return y(+d.value * 10) })
            )
            .attr("stroke", function (d) { return myColor })

        // update the chart header
        d3.select("#" + selectedDecade).select(".chart-header")
            .text("Frequency of \“" + selectedGroup + "\” over time")
            .attr("style", "color: #F8F4EA")
            var axisLabelX = 50;
            var axisLabelY = height / 2;


        // highlight selected group
        button.classList.add("selected")
    }

    // When the button is changed, run the updateChart function
    // or # on change
    d3.selectAll(".selectButton").on("click", function (d) {
        // recover the option that has been chosen
        let selectedWord = d3.select(this).text().toLowerCase().replace(/[^A-Za-z0-9]/g,"");
        // get id of container
        let selectedDecade = this.closest('.graph-block-container').id


        // run the updateChart function with this selected option
        update(this, selectedWord, selectedDecade)
    })

    // VERY HACKY way to intialize all the mountain charts to the first word
    for(let decade in wordCloudDict){
        let word = wordCloudDict[decade][0]['word']
        let element = d3.select("#d" + decade)
                        .select(".word-cloud")
                        .selectAll(".selectButton")
                        .filter(function(){ 
                            return d3.select(this).text() == word
                        })
        update(element.node(), word.toLowerCase(), "d" + decade)
    }
    update(d3.select(".lookupSubmit").node(), "princetonian", "dlookup")
    */
})
