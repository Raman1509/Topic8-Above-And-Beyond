document.addEventListener('DOMContentLoaded', () => {
    Highcharts.chart('container', {
        chart: {
            type: 'pie'
        },
        credits: {
            enabled: false
        },
        title: {
            text: 'Pie Chart with Custom Colors and Drilldown'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y}'
                }
            }
        },
        series: [
            {
                name: 'Fruits',
                colorByPoint: true,
                data: [
                    {
                        name: 'Apples',
                        y: 10,
                        color: '#ff8000',
                        drilldown: 'apples'
                    },
                    {
                        name: 'Oranges',
                        y: 5,
                        color: '#ffbf00',
                        drilldown: 'oranges'
                    },
                    {
                        name: 'Bananas',
                        y: 3,
                        color: '#ffff00',
                        drilldown: 'bananas'
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: 'Apples',
                    id: 'apples',
                    data: [['Golden', 3], ['Red', 4], ['Green', 3]]
                },
                {
                    name: 'Oranges',
                    id: 'oranges',
                    data: [['California', 2], ['Florida', 3]]
                },
                {
                    name: 'Bananas',
                    id: 'bananas',
                    data: [['Cavendish', 2], ['Plantain', 1]]
                }
            ]
        }
    });
})