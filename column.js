document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'column'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Column Chart with Stacked and Grouped Series'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Bananas']
        },
        yAxis: {
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true
            }
        },
        legend: {
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                grouping: false
            }
        },
        series: [
            {
                name: 'John',
                data: [5, 3, 4],
                stack: 'male'
            },
            {
                name: 'Jane',
                data: [2, 2, 3],
                stack: 'female'
            },
            {
                name: 'Joe',
                data: [3, 4, 4],
                stack: 'male'
            },
            {
                name: 'Janet',
                data: [1, 5, 2],
                stack: 'female'
            }
        ]
    });
})