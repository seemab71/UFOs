// import the data from data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");
// Simple JavaScript console.log statement
function printHello();
// Simple JavaScript console.log statement
function printHello() {
    console.log("Hello there!");
  }
  // Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }
  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  // Original doubleAddition function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }
  doubleAddition = (c, d)
  => addition(c, d) * 2;
  let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
  function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
 for (var i = 0; i < vegetables.length; i++) {
}
var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }
 function buildTable(data) {

 }
 function buildTable(data) {
    tbody.html("");
  }
  data.forEach((dataRow) => {

  });
  let row = tbody.append("tr");
  Object.values(dataRow).forEach((val) => {
});
let cell = row.append("td");
cell.text(val);
}
);
});
{
    datetime: "1/1/2010",
    city: "benton",
    state: "ar",
    country: "us",
    shape: "circle",
    durationMinutes: "5 mins.",
    comments: "4 bright green circles high in the sky going in circles then one bright green light at my front door."
  },
  function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };
  d3.selectAll("#filter-btn").on("click", handleClick);
  buildTable(tableData);
  <script src="static/js/app.js"></script>