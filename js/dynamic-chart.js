function dynamicChartClickToAddPoint() {
    Highcharts.addEvent(Highcharts.Series, 'addPoint', e => {
        const point = e.point,
            series = e.target;
        if (!series.pulse) {
            series.pulse = series.chart.renderer.circle()
                .add(series.markerGroup);
        }
        setTimeout(() => {
            series.pulse
                .attr({
                    x: series.xAxis.toPixels(point.x, true),
                    y: series.yAxis.toPixels(point.y, true),
                    r: series.options.marker.radius,
                    opacity: 1,
                    fill: series.color
                })
                .animate({
                    r: 20,
                    opacity: 0
                }, {
                    duration: 1000
                });
        }, 1);
    });
    addChartUI();    

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'scatter',
            margin: [70, 50, 60, 80],
            events: {
                click: function(e) {
                    const x = Math.round(e.xAxis[0].value),
                        y = Math.round(e.yAxis[0].value),
                        series = this.series[0];
                    series.addPoint([x, y]);
                }
            }
        },
        title: {
            text: 'User supplied data - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Dynamic chart click to add point sapmle',
            align: 'left'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            gridLineWidth: 1,
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 60
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            minPadding: 0.2,
            maxPadding: 0.2,
            maxZoom: 60,
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        plotOptions: {
            series: {
                stickyTracking: false,
                lineWidth: 3,
                point: {
                    events: {
                        click: function() {
                            if (this.series.data.length > 1) {
                                this.remove();
                            }
                        }
                    }
                }
            }
        },
        series: [{
            data: [
                [20, 20],
                [80, 80]
            ],
            color: Highcharts.getOptions().colors[3],
            marker: {
                lineWidth: 2,
                radius: 6
            }
        }]
    });

    loadGist('a5df17d692b4ba1c9da209be36263a0d');
}

function dynamicChartUpdate() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        title: {
            text: 'Unemployment rates in engineering and ICT subjects, 2021 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Dynamic chart update sample',
            align: 'left'
        },
        colors: [
            '#4caefe',
            '#3fbdf3',
            '#35c3e8',
            '#2bc9dc',
            '#20cfe1',
            '#16d4e6',
            '#0dd9db',
            '#03dfd0',
            '#00e4c5',
            '#00e9ba',
            '#00eeaf',
            '#23e274'
        ],
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        series: [{
            type: 'column',
            name: 'Unemployed',
            borderRadius: 5,
            colorByPoint: true,
            data: [5412, 4977, 4730, 4437, 3947, 3707, 4143, 3609,
                3311, 3072, 2899, 2887
            ],
            showInLegend: false
        }]
    });

    const row = document.createElement('div');
    row.classList.add('my-3');
    row.classList.add('d-flex');
    row.classList.add('justify-content-center');
    const plain = document.createElement('button');
    plain.classList.add('btn');
    plain.classList.add('btn-outline-info');
    plain.classList.add('mr-3');
    plain.id = 'plane';
    plain.innerText = 'Plain';
    row.appendChild(plain);
    const inverted = document.createElement('button');
    inverted.classList.add('btn');
    inverted.classList.add('btn-outline-info');
    inverted.classList.add('mr-3');
    inverted.id = 'inverted';
    inverted.innerText = 'Inverted';
    row.appendChild(inverted);
    const polar = document.createElement('button');
    polar.classList.add('btn');
    polar.classList.add('btn-outline-info');
    polar.classList.add('mr-3');
    polar.id = 'polar';
    polar.innerText = 'Polar';
    row.appendChild(polar);

    document.getElementById('chart-actions').appendChild(row);

    plain.addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: false,
                polar: false
            },
            subtitle: {
                text: 'Dynamic chart update plane sample'
            }
        });
    });

    inverted.addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: true,
                polar: false
            },
            subtitle: {
                text: 'Dynamic chart update inverted sample'
            }
        });
    });

    polar.addEventListener('click', () => {
        chart.update({
            chart: {
                inverted: false,
                polar: true
            },
            subtitle: {
                text: 'Dynamic chart update polar sample'
            }
        });
    });

    loadGist('6d3bccfdb5dd12246fdfbc4201583e12');
}