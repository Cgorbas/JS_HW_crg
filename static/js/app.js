
// get data from data.js
var tableData = data;

// YOUR CODE HERE!
//filter
// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
 d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

 //  the filtered data is working but I can't seem to clear the old data.  I googled/
 //stack flowed for a few hours but was not successful!
  console.log("filteredData");

});

//table goodness
var tbody = d3.select("tbody");

  data.forEach((filteredData) => {
  var row = tbody.append("tr");
  Object.entries(filteredData).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});



