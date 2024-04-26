// Sample word data with size and rotation (replace with your own data)
const wordData = [
    { word: "justice", size: 12.86, rotation: 0 },
    { word: "protest", size: 9.4, rotation: 90 },
    { word: "demonstration", size: 6.79, rotation: 90 },
    { word: "activism", size: 6.32, rotation: 0 },
    { word: "referendum", size: 5.07, rotation: 90 },
    { word: "advocacy", size: 4.07, rotation: 90 },
    { word: "apartheid", size: 3.94, rotation: 0 },
    { word: "sit-in", size: 3.8, rotation: 90 },
    { word: "divest", size: 3, rotation: 0 },
  ];
  
function generateWordCloud(data) {
    const container = document.getElementById("wordCloud");

    // Create d3 layout cloud
    d3.layout.cloud()
      .size([container.offsetWidth, container.offsetHeight]) // Set the size of the word cloud
      .words(data.map(d => ({ text: d.word, size: d.size })))
      .padding(5) // Set padding between words
      .rotate(() => [0, 90][Math.floor(Math.random() * 2)]) // Random rotation between 0 and 90 degrees
      .font("Arial") // Set font family
      .fontSize(d =>(d.size * 10)) // Scale font size
      .on("end", draw)
      .start();
  
    // Function to draw word cloud
    function draw(words) {
        container.innerHTML = ""; // Clear previous content
        const maxFontSize = Math.min(container.offsetWidth, container.offsetHeight) * 0.01

        // Append word elements to the container
        d3.select("#wordCloud").append("svg")
            .style("width", "100vw")
            .style("height", "60vh")
          .append("g")
            .style("width", "100vw")
            .style("height", "60vh")
            .attr("transform", `translate(${container.offsetWidth / 2},${container.offsetHeight / 2})`) // Center the word cloud
          .selectAll("text")
            .data(words)
          .enter().append("a")
            .attr("xlink:href", "#") // Set href attribute
            .append("text")
            .style("font-size", d => d.size * (window.innerWidth > 800 ? 1  : 0.75) + "px")
            .style("padding", window.innerWidth > 800 ? 10 : (window.innerWidth > 400 ?  2 : 0) + "px")
            .style("fill", "#54B447")
            .attr("text-anchor", "middle")
            .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + (d.rotate % 360) + ")") // Ensure rotation is within 360 degrees
            .text(d => d.text)
            .on("click", d => {
                var element = document.getElementById('b' + d.text);
                var headerOffset = 45;
                var elementPosition = element.getBoundingClientRect().top;
                var offsetPosition = elementPosition + window.scrollY - headerOffset;
  
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
                
            });
        
            d3.select("#wordCloud").append("svg")
            .attr("class", "word-cloud-svg");
    }
}

// Call the function to generate word cloud
generateWordCloud(wordData);

window.addEventListener("resize", () => {
    generateWordCloud(wordData); // Re-generate the word cloud on resize
  });