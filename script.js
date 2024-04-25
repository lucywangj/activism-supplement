// word cloud data
let wordCloudDict = {
    "1880": 
    [
        { word: "bookbinder", size: 22.8/2 },
        { word: "grocers", size: 28.9/2 },
        { word: "tailor", size: 16.9/2 },
        { word: "wholesale", size: 27/2 },
        { word: "Bickham", size: 28.9/2 },
        { word: "Tobacco", size: 23.3/2 },
        { word: "Gentlemen", size: 17.8/2 },
    ],
    "1890": [
        { word: "meals", size: 22.6/2 },
        { word: "advertisments", size: 22.3/2 },
        { word: "lunches", size: 24.3/2 },
        { word: "furniture", size: 18.4/2 },
        { word: "studying", size: 16.6/2 },
        { word: "drug", size: 17.3/2 },
        { word: "bicycle", size: 16.2/2 },
    ],
    "1900": [
        { word: "oclock", size: 22.8/2 },
        { word: "rehearsal", size: 22/2 },
        { word: "Triangle", size: 18.5/2 },
        { word: "Bric-a-brac", size: 16.6/2 },
        { word: "Casino", size: 16/2 },
        { word: "performance", size: 15.7/2 },
        { word: "Blair", size: 15.8/2 },
    ],
    "1910": [
        { word: "Associated", size: 21.9/2 },
        { word: "troops", size: 24.1/2 },
        { word: "Roosevelt", size: 21.2/2 },
        { word: "military", size: 21.2/2 },
        { word: "war", size: 17.7/2 },
        { word: "corps", size: 21.2/2 },
        { word: "training", size: 15/2 },
        { word: "rowing", size: 13/2 },
        { word: "lake", size: 13.4/2 },
    ],
    "1920": [
        { word: "Commons", size: 16.6/1.2 },
        { word: "Speakers", size: 13.6/1.2 },
        { word: "yearlings", size: 12.9/1.2 },
        { word: "orchestra", size: 12.4/1.2 },
        { word: "prom", size: 12.3/1.2 },
        { word: "arts", size: 13.7/1.2 },
    ],
    "1930": [
        { word: "gold", size: 14.3/2 },
        { word: "Roosevelt", size: 18.1/2 },
        { word: "McCarter", size: 16.6/2 },
        { word: "geology", size: 12.4/2 },
        { word: "Crisler", size: 24.9/2 },
        { word: "intramural", size: 14.3/2 },
        { word: "squash", size: 16.4/2 }
    ],
    "1940": [
        { word: "wartime", size: 32.1/2 },
        { word: "civilian", size: 30.4/2 },
        { word: "postwar", size: 26.4/2 },
        { word: "marine", size: 27.3/2 },
        { word: "SPIA", size: 24.4/2 },
        { word: "engineering", size: 13.5/2 },
        { word: "radio", size: 13.2/2 },
        { word: "WPRU", size: 21.9/2 },
    ],
    "1950": [
        { word: "Eisenhower", size: 23.3/2 },
        { word: "Communist", size: 13.9/2 },
        { word: "Bicker", size: 13.6/2 },
        { word: "frosh", size: 15.5/2 },
        { word: "soph", size: 14.4/2 },
        { word: "prayer", size: 21.9/2 },
        { word: "worship", size: 20.2/2 },
        { word: "Episcopal", size: 19/2 },
    ],
    "1960": [
        { word: "coeducation", size: 19/2 },
        { word: "Negro", size: 22.9/2 },
        { word: "UGC", size: 26.5/2 },
        { word: "ICC", size: 19/2 },
        { word: "Vietnam", size: 18.8/2 },
        { word: "SDS", size: 25.7/2 },
        { word: "Wilcox", size: 18.9/2 },
    ],
    "1970": [
        { word: "Nixon", size: 18.6/2 },
        { word: "ROTC", size: 17.3/2 },
        { word: "energy", size: 16.5/2 },
        { word: "oil", size: 15.5/2 },
        { word: "tution", size: 15.5/2 },
        { word: "costs", size: 15.8/2 },
        { word: "budget", size: 13.6/2 },
        { word: "Jones", size: 13/2 },
        { word: "Jadwin", size: 15.8/2 },
    ],
    "1980": [
        { word: "Soviet", size: 17.5/2 },
        { word: "Reagan", size: 27.9/2 },
        { word: "nuclear", size: 17.8/2 },
        { word: "Butler", size: 16.3/2 },
        { word: "residential", size: 13.3/2 },
        { word: "harassment", size: 15.4/2 },
        { word: "USG", size: 14/2 }, 
        { word: "forum", size: 13.2/2 },
        { word: "Frank", size: 14.8/2 },
        { word: "computer", size: 12.2/2 },
    ],
    "1990": [
        { word: "Clinton", size: 23.5/2 },
        { word: "softball", size: 15.3/2 },
        { word: "volleyball", size: 14.9/2 },
        { word: "hockey", size: 14.9/2 },
        { word: "environmental", size: 14.1/2 },
        { word: "AIDS", size: 13.8/2 },
        { word: "television", size: 12.9/2 },
        { word: "machine", size: 17.3/2 },
    ],
    "2000": [
        { word: "Iraq", size: 17.8/2.5 },
        { word: "Frist", size: 18.1/2.5 },
        { word: "Bush", size: 14.4/2.5 },
        { word: "email", size: 13.7/2.5},
        { word: "drinking", size: 13.5/2.5 },
        { word: "aid", size: 10.5/2.5 },
        { word: "Tilghman", size: 18/2.5 },
        { word: "guys", size: 12.9/2.5 },
        { word: "girls", size: 12.9/2.5 },
    ],
    // sizes wrong
    "2010": [
        { word: "Trump", size: 21.4/2 },
        { word: "Obama", size: 13.3/2 },
        { word: "justice", size: 13.2/2 },
        { word: "Asian", size: 14.3/2 },
        { word: "Facebook", size: 14.9/2 },
        { word: "online", size: 12.1/2 },
        { word: "mental", size: 15.9/2 },
        { word: "referendum", size: 14.1/2 },
        { word: "gender", size: 14.4/2 },
        { word: "diversity", size: 13.1/2 },
        { word: "sexual", size: 14.6/2 },
    ]
}

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

// initialize the word clouds, there's probably a way to do this without a for loop
for (let word in wordCloudDict) {
    // append the svg object to the body of the page
    let cloud = d3.select("#d" + word).select(".word-cloud").append("svg")
        .attr("viewBox", "0 0 " + (width2 + margin2.left + margin2.right) + " " + (height2 + margin2.top + margin2.bottom))
        .append("g")
        .attr("transform",
            "translate(" + margin2.left + "," + margin2.top + ")");

    // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
    // Wordcloud features that are different from one word to the other must be here
    let layout = d3.layout.cloud()
        .size([width2, height2])
        .words(wordCloudDict[word].map(function (d) { return { text: d.word, size: d.size * 2 }; }))
        .padding(10)        //space between words
        .rotate(0)       // rotation angle in degrees
        .fontSize(function (d) { return d.size; })      // font size of words
        .on("end", function (d) {
            draw(d, cloud);
        });
    layout.start();

    // This function takes the output of 'layout' above and draw the words
    // Wordcloud featurt are THE SAME from one word to the other can be here
    function draw(words) {
        cloud
            .append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size; })
            .attr("text-anchor", "middle")
            .attr("class", "selectButton")
            .style("fill", myColor)
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function (d) { return d.text; });
    }
}
//Read the data
d3.csv("https://assets.dailyprincetonian.com/projects.dailyprincetonian.com/140-years-prince-history/allwordsfreq.csv", function (data) {


    // Add X axis --> it is a date format
    let x = d3.scaleLinear()
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
            .x(function (d) { return x(+d.timeword) })
            .y0(height)
            .y1(function (d) { return y(+d.the * 10) })
        )
        .attr("stroke", function (d) { return myColor })
        .attr("class", "line")
        .style("stroke-width", 2)
        .style("fill", myColor)

    // A function that update the chart
    function update(button, selectedGroup, selectedword) {
        d3.select("#" + selectedword).select(".word-cloud").select(".selected").classed("selected",false);
        // selected the right chart elements for the word
        let selectedSvg = d3.select("#" + selectedword).select(".mountain-chart svg g");
        let selectedLine = selectedSvg.select(".line");

        // Create new data with the selection?
        let dataFilter = data.map(function (d) { return { time: d.timeword, value: d[selectedGroup] } })

    
        if(typeof dataFilter[0]['value'] == 'undefined') {
            d3.select("#" + selectedword).select(".error-msg")
            .text("\“" + selectedGroup + "\” was not included in our analysis because it was either not used frequently enough to be included in our analysis or was removed during data cleaning. If you're interested in seeing its usage over time, you can use the Princeton University Library Archive explorer.")
            .style("color", myColor)
            return false;
        }
       
        d3.select("#" + selectedword).select(".error-msg")
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
        d3.select("#" + selectedword).select(".chart-header")
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
        let selectedword = this.closest('.graph-block-container').id


        // run the updateChart function with this selected option
        update(this, selectedWord, selectedword)
    })

    d3.select(".lookupSubmit").on("click", function (d) {
        // recover the option that has been chosen
        d3.event.preventDefault();

        let selectedWord = d3.select(".lookupText").property("value").toLowerCase().replace(/[^A-Za-z0-9]/g,"");
        // get id of container
        let selectedword = this.closest('.graph-block-container').id
        // run the updateChart function with this selected option
        update(this, selectedWord, selectedword)
    })

    // VERY HACKY way to intialize all the mountain charts to the first word
    for(let word in wordCloudDict){
        let word = wordCloudDict[word][0]['word']
        let element = d3.select("#d" + word)
                        .select(".word-cloud")
                        .selectAll(".selectButton")
                        .filter(function(){ 
                            return d3.select(this).text() == word
                        })
        update(element.node(), word.toLowerCase(), "d" + word)
    }
    update(d3.select(".lookupSubmit").node(), "princetonian", "dlookup")
})
