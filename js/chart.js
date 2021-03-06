"use strict";

/*-------------------------------------------
Make Amount Chart
------------------------------------------*/

let amountChart = document.querySelector("#amountChart").getContext("2d");

let amountChartData;
let beerlevel = [];

function displayKegLevel() {
  let amountChartData = new Chart(amountChart, {
    type: "bar",
    height: 100,
    data: {
      labels: [
        "El Hefe",
        "Fairy Tale Ale",
        "GitHop",
        "Hollaback Lager",
        "Hoppily Ever After",
        "Mowintime",
        "Row 26",
        "Ruined Childhood",
        "Sleighride",
        "Steampunk"
      ],
      datasets: [
        {
          label: "Amount sold",
          data: [0, 10, 5, 2, 20, 30, 45, 89, 12, 19],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 2500,
              stepSize: 250
            }
          }
        ]
      }
    }
  });


}

//get new data

function updateAmountGraphData() {
  //console.log(data);
  beerlevel = [];
  data.taps.forEach(keg => {
    let beer = {
      name: keg.beer,
      level: keg.level
    };

    beerlevel.push(beer);
  });

  //console.log(beerlevel);

  //if beer serving is equal to beer name - add one

  //if: serving.values.order.values == "Row 26" add one to datasets.data[6]
  updateAmountGraph();

};


//put the new data into the graph
function updateAmountGraph() {
  amountChartData.data.datasets[0].data = [];

  amountChartData.data.datasets[0].data.push(keg.level);

  amountChartData.update();

  console.log(amountChartData);
}




/*-------------------------------------------
Make Clock Chart
------------------------------------------*/

let cdc = document.querySelector("#clockChart");
let clockChart = new Chart(cdc, {
  type: "doughnut",
  tooltipFillColor: "rgba(51, 51, 51, 0.55)",
  data: {
    labels: ["Time open", "Time until close"],
    datasets: [
      {
        data: [15, 50],
        backgroundColor: ["#78cedb", "#d8d8d8"],
        hoverBackgroundColor: ["#218F9B", "#A5A4A2"]
      }
    ]
  },
  options: { responsive: true, cutoutPercentage: 80 }
});
