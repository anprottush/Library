$(function () {
  /* ChartJS
   * -------
   * Here we will create a few charts using ChartJS
   */

  //-------------
  //- BAR CHART -
  //-------------
  const ctx = document.getElementById('canvas');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Auguest', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Income',
          data: [0,0,0,0,50000,0,70000,0,50000,25000,0,0], // Assuming dashboard_income is defined
          backgroundColor: 'rgba(0,153,0,0.8)',
          borderColor: 'rgba(17,17,17,0.8)',
          borderWidth: 1
        },
        {
          label: 'Expense',
          data: [0,110000,0,50000,0,0,50000,0,80000,40000,0,0], // Assuming dashboard_expense is defined
          backgroundColor: 'rgba(204,0,0,0.8)',
          borderColor: 'rgba(17,17,17,0.8)',
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });







})
