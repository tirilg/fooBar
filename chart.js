let cdb = document.querySelector("#myChart").getContext("2d");
let myChart = new Chart(cdb, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 6, 3, 5, 2, 3],
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
            beginAtZero: true
          }
        }
      ]
    }
  }
});
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
        hoverBackgroundColor: ["#49A9EA", "#B370CF", "#E95E4F", "#36CAAB"]
      }
    ]
  },
  options: { responsive: true, cutoutPercentage: 80 }
});
