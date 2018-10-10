function addData(data) {
  let dataset = {
    data: []
  };
  let labels = [];

  data.beertypes.forEach(function(beertypes) {
    dataset.data.push(beertypes);
  });

  let cdb = document.querySelector("#myChart").getContext("2d");
  let chartBar = new Chart(cdb, {
    type: "bar",
    data: {
      datasets: [dataset],
      labels: labels
    },
    options: {
      /* insert chart options here */
    }
  });
}
