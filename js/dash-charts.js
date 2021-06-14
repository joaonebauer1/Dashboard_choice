$(document).ready(function() {
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'load',
            margin: [0, 0, 0, 0],
            backgroundColor: null,
            plotBackgroundColor: 'none',

        },

        title: {
            text: null
        },

        tooltip: {
            formatter: function() {
                return this.point.name + ': ' + this.y + ' %';

            }
        },
        series: [{
            borderWidth: 2,
            borderColor: '#F1F3EB',
            shadow: false,
            type: 'pie',
            name: 'Income',
            innerSize: '60%',
            data: [
                { name: 'Porcentagem', y: 45.0, color: '#b2c831' },
                { name: 'Resta', y: 55.0, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });

});

//=======================================================================

$(document).ready(function() {
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'space',
            margin: [0, 0, 0, 0],
            backgroundColor: null,
            plotBackgroundColor: 'none',

        },

        title: {
            text: null
        },

        tooltip: {
            formatter: function() {
                return this.point.name + ': ' + this.y + ' %';

            }
        },
        series: [{
            borderWidth: 2,
            borderColor: '#F1F3EB',
            shadow: false,
            type: 'pie',
            name: 'SiteInfo',
            innerSize: '65%',
            data: [
                { name: 'Porcentagem', y: 50.0, color: '#fa1d2d' },
                { name: 'Resta', y: 50.0, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });

});


//=======================================================================
$(document).ready(function() {
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'inadinplentes',
            margin: [0, 0, 0, 0],
            backgroundColor: null,
            plotBackgroundColor: 'none',

        },

        title: {
            text: null
        },

        tooltip: {
            formatter: function() {
                return this.point.name + ': ' + this.y + ' %';

            }
        },
        series: [{
            borderWidth: 2,
            borderColor: '#F1F3EB',
            shadow: false,
            type: 'pie',
            name: 'SiteInfo',
            innerSize: '65%',
            data: [
                { name: 'Porcentagem', y: 65.0, color: '#fa1d2d' },
                { name: 'Resta', y: 35.0, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });
});

var configd = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                50,
                60,
                20
            ],
            backgroundColor: [
                '#33b35a',
                "#ffce56",
                "#4bc0c0",
                "#CDDC39",
                "#9C27B0",
                "#fb7145",
                "#5971f9"
            ],
            label: 'Energy usage'
        }],
        labels: [
            'E1',
            'E2',
            'E3'
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        legendCallback: function(chart) {
            // Return the HTML string here.
            console.log(chart.data.datasets);
            var text = [];
            text.push('<ul class="' + chart.id + '-legend">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
                text.push('<li><span id="legend-' + i + '-item" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"   onclick="updateDataset(event, ' + '\'' + i + '\'' + ')">');
                if (chart.data.labels[i]) {
                    text.push(chart.data.labels[i]);
                }
                text.push('</span></li>');
            }
            text.push('</ul>');
            return text.join("");
        },
        title: {
            display: false,
            text: 'Chart.js Doughnut Chart'
        },
        animation: {
            animateScale: true,
            animateRotate: true
        },
        tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
                label: function(tooltipItem, data) {
                    let label = data.datasets[tooltipItem.datasetIndex].label + ' - ' + data.labels[tooltipItem.index];
                    let datasetLabel = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                    return label + ': ' + datasetLabel.toLocaleString();
                }
            }
        },
    }
};
//=======================================================================

$(document).ready(function() {
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'pontos',
            margin: [10, 10, 10, 10],
            backgroundColor: null,
            plotBackgroundColor: null,

        },
        title: {
            text: ''
        },

        subtitle: {
            text: ''
        },

        yAxis: {
            title: {
                text: ''
            }
        },

        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2016 to 2021'
            }
        },

        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2016
            }
        },

        series: [{
            name: '',
            data: [177, 25000, 97031, 102501, 137133, 154175]
        }, ],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 350
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });

});

//---------------------------------