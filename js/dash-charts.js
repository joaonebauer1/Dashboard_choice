//-------------- CONTRACTS SESSION ---------
function contractInativeChart(dado, resto){    
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'inativos',
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
                { name: 'Porcentagem', y: dado, color: '#fa1d2d' },
                { name: 'Resta', y: resto, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });
}

function contractActiveChart(dado, resto){    
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'ativos',
            margin: [0, 0, 0, 0],
            backgroundColor: null,
            plotBackgroundColor: 'none',

        },

        title: {
            text: null
        },

        tooltip: {
            formatter: function () {
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
                { name: 'Porcentagem', y: dado, color: '#b2c831' },
                { name: 'Resta', y: resto, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });
}
function contractDeniedChart(dado){
    var resto = 100 - parseFloat(dado);
    info = new Highcharts.Chart({
        chart: {
            renderTo: 'impedidos',
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
                { name: 'Porcentagem', y: dado, color: '#fa1d2d' },
                { name: 'Resta', y: resto, color: '#3d3d3d' }
            ],
            dataLabels: {
                enabled: false,
                color: '#000000',
                connectorColor: '#000000'
            }
        }]
    });
}
function contractsInfo() {
    $.ajax({
        url: 'http://localhost:1616/api/GetCompaniesContractsInfo',
        contentType: 'application/json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {            
            contractInativeChart(data.inactiveContracts, data.activeContracts);
            contractActiveChart(data.activeContracts, data.inactiveContracts);
            contractDeniedChart(data.deniedContracts);            
            $('#active-contracts')[0].innerText = data.activeContracts + '%';                    
            $('#inactive-contracts')[0].innerText = data.inactiveContracts + '%';
            $('#denied-contracts')[0].innerText = data.deniedContracts + '%';            
        }
    });
}
//-------------- END CONTRACTS SESSION ---------
//-------------- TICKETS SESSION ---------
function ticketInfo(){    
    $.ajax({
        url: 'http://localhost:1616/api/GetTicketSituationInfo',
        contentType:'application/json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var resto = 100 - parseFloat(data.percentualLateTikets);                       
            info = new Highcharts.Chart({
                chart: {
                    renderTo: 'inadimplentes',
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
                        { name: 'Porcentagem', y: data.percentualLateTikets, color: '#fa1d2d' },
                        { name: 'Resta', y: resto, color: '#3d3d3d' }
                    ],
                    dataLabels: {
                        enabled: false,
                        color: '#000000',
                        connectorColor: '#000000'
                    }
                }]
            });
            $('#percentual-lates')[0].innerText = data.percentualLateTikets + '%';        
            $('#count-paid-tickets')[0].innerText = parseFloat(data.totalCountPaidTickets).toLocaleString("pt-BR", { style: "decimal"}) + ' Pagos';
            $('#amount-paid-tickets')[0].innerText = 'Valor Total: ' + parseFloat(data.totalPaidAmount).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
            $('#count-open-tickets')[0].innerText = parseFloat(data.totalCountOpenTickets).toLocaleString("pt-BR", { style: "decimal"}) + ' Abertos';
            $('#amount-open-tickets')[0].innerText = 'Valor Total: ' + parseFloat(data.totalOpenAmount).toLocaleString("pt-BR", { style: "currency" , currency:"BRL"});
        }               
    });
}
//-------------- END TICKETS SESSION ---------

//-------------- MAIN PROCESS ----------------
$(document).ready(function() {     
    contractsInfo();
    ticketInfo();      
});
//-------------- END MAIN PROCESS ------------

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
                rangeDescription: 'Range: 2018 to 2021'
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
                pointStart: 2018
            }
        },

        series: [{
            name: '',
            data: [25000, 97031, 102501, 137133]
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