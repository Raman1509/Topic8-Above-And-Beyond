document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
          type: 'line'
        },
        credits: {
            enabled: false
        },
        title: {
          text: 'Basic Line Chart'
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
        },
        yAxis: {
          title: {
            text: 'Holidays'
          }
        },
        series: [
          {
            name: 'Month',
            data: [9, 5, 4, 6, 8, 9]
          }
        ]
      });      
})