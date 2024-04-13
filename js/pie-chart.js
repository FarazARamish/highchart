function pieChartBasic() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Egg Yolk Composition - Demo Data'
        },
        tooltip: {
            valueSuffix: '%'
        },
        subtitle: {
            text: 'Pie chart sample'
        },
        plotOptions: {
            series: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [{
            name: 'Percentage',
            colorByPoint: true,
            data: [{
                    name: 'Water',
                    y: 55.02
                },
                {
                    name: 'Fat',
                    sliced: true,
                    selected: true,
                    y: 26.71
                },
                {
                    name: 'Carbohydrates',
                    y: 1.09
                },
                {
                    name: 'Protein',
                    y: 15.5
                },
                {
                    name: 'Ash',
                    y: 1.68
                }
            ]
        }]
    });

    loadGist('4a9f4936c7c01a17aee10ecb3cd8fb79');
}

function pieChartDonut() {
    const colors = Highcharts.getOptions().colors,
        categories = [
            'Chrome',
            'Safari',
            'Edge',
            'Firefox',
            'Other'
        ],
        data = [{
                y: 61.04,
                color: colors[2],
                drilldown: {
                    name: 'Chrome',
                    categories: [
                        'Chrome v97.0',
                        'Chrome v96.0',
                        'Chrome v95.0',
                        'Chrome v94.0',
                        'Chrome v93.0',
                        'Chrome v92.0',
                        'Chrome v91.0',
                        'Chrome v90.0',
                        'Chrome v89.0',
                        'Chrome v88.0',
                        'Chrome v87.0',
                        'Chrome v86.0',
                        'Chrome v85.0',
                        'Chrome v84.0',
                        'Chrome v83.0',
                        'Chrome v81.0',
                        'Chrome v89.0',
                        'Chrome v79.0',
                        'Chrome v78.0',
                        'Chrome v76.0',
                        'Chrome v75.0',
                        'Chrome v72.0',
                        'Chrome v70.0',
                        'Chrome v69.0',
                        'Chrome v56.0',
                        'Chrome v49.0'
                    ],
                    data: [
                        36.89,
                        18.16,
                        0.54,
                        0.7,
                        0.8,
                        0.41,
                        0.31,
                        0.13,
                        0.14,
                        0.1,
                        0.35,
                        0.17,
                        0.18,
                        0.17,
                        0.21,
                        0.1,
                        0.16,
                        0.43,
                        0.11,
                        0.16,
                        0.15,
                        0.14,
                        0.11,
                        0.13,
                        0.12
                    ]
                }
            },
            {
                y: 9.47,
                color: colors[3],
                drilldown: {
                    name: 'Safari',
                    categories: [
                        'Safari v15.3',
                        'Safari v15.2',
                        'Safari v15.1',
                        'Safari v15.0',
                        'Safari v14.1',
                        'Safari v14.0',
                        'Safari v13.1',
                        'Safari v13.0',
                        'Safari v12.1'
                    ],
                    data: [
                        0.1,
                        2.01,
                        2.29,
                        0.49,
                        2.48,
                        0.64,
                        1.17,
                        0.13,
                        0.16
                    ]
                }
            },
            {
                y: 9.32,
                color: colors[5],
                drilldown: {
                    name: 'Edge',
                    categories: [
                        'Edge v97',
                        'Edge v96',
                        'Edge v95'
                    ],
                    data: [
                        6.62,
                        2.55,
                        0.15
                    ]
                }
            },
            {
                y: 8.15,
                color: colors[1],
                drilldown: {
                    name: 'Firefox',
                    categories: [
                        'Firefox v96.0',
                        'Firefox v95.0',
                        'Firefox v94.0',
                        'Firefox v91.0',
                        'Firefox v78.0',
                        'Firefox v52.0'
                    ],
                    data: [
                        4.17,
                        3.33,
                        0.11,
                        0.23,
                        0.16,
                        0.15
                    ]
                }
            },
            {
                y: 11.02,
                color: colors[6],
                drilldown: {
                    name: 'Other',
                    categories: [
                        'Other'
                    ],
                    data: [
                        11.02
                    ]
                }
            }
        ],
        browserData = [],
        versionsData = [],
        dataLen = data.length;
    let i,
        j,
        drillDataLen,
        brightness;
    // Build the data arrays
    for (i = 0; i < dataLen; i += 1) {
        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
        // add version data
        drillDataLen = data[i].drilldown.data.length;
        for (j = 0; j < drillDataLen; j += 1) {
            const name = data[i].drilldown.categories[j];
            brightness = 0.2 - (j / drillDataLen) / 5;
            versionsData.push({
                name,
                y: data[i].drilldown.data[j],
                color: Highcharts.color(data[i].color).brighten(brightness).get(),
                custom: {
                    version: name.split(' ')[1] || name.split(' ')[0]
                }
            });
        }
    }
    // Create the chart
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market share, January, 2022 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Pie chart donut sample',
            align: 'left'
        },
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            }
        },
        tooltip: {
            valueSuffix: '%'
        },
        series: [{
            name: 'Browsers',
            data: browserData,
            size: '45%',
            dataLabels: {
                color: '#ffffff',
                distance: '-50%'
            }
        }, {
            name: 'Versions',
            data: versionsData,
            size: '80%',
            innerSize: '60%',
            dataLabels: {
                format: '<b>{point.name}:</b> <span style="opacity: 0.5">{y}%</span>',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 1
                },
                style: {
                    fontWeight: 'normal'
                }
            },
            id: 'versions'
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 400
                },
                chartOptions: {
                    series: [{}, {
                        id: 'versions',
                        dataLabels: {
                            distance: 10,
                            format: '{point.custom.version}',
                            filter: {
                                property: 'percentage',
                                operator: '>',
                                value: 2
                            }
                        }
                    }]
                }
            }]
        }
    });

    loadGist('81297248331cff7f16b2e563412edc78');
}

function pieChartDrilldown() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2022 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Pie chart drilldown sample',
            align: 'left'
        },

        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },

        plotOptions: {
            series: {
                borderRadius: 5,
                dataLabels: [{
                    enabled: true,
                    distance: 15,
                    format: '{point.name}'
                }, {
                    enabled: true,
                    distance: '-30%',
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 5
                    },
                    format: '{point.y:.1f}%',
                    style: {
                        fontSize: '0.9em',
                        textOutline: 'none'
                    }
                }]
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },

        series: [{
            name: 'Browsers',
            colorByPoint: true,
            data: [{
                    name: 'Chrome',
                    y: 61.04,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Safari',
                    y: 9.47,
                    drilldown: 'Safari'
                },
                {
                    name: 'Edge',
                    y: 9.32,
                    drilldown: 'Edge'
                },
                {
                    name: 'Firefox',
                    y: 8.15,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Other',
                    y: 11.02,
                    drilldown: null
                }
            ]
        }],
        drilldown: {
            series: [{
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v97.0',
                            36.89
                        ],
                        [
                            'v96.0',
                            18.16
                        ],
                        [
                            'v95.0',
                            0.54
                        ],
                        [
                            'v94.0',
                            0.7
                        ],
                        [
                            'v93.0',
                            0.8
                        ],
                        [
                            'v92.0',
                            0.41
                        ],
                        [
                            'v91.0',
                            0.31
                        ],
                        [
                            'v90.0',
                            0.13
                        ],
                        [
                            'v89.0',
                            0.14
                        ],
                        [
                            'v88.0',
                            0.1
                        ],
                        [
                            'v87.0',
                            0.35
                        ],
                        [
                            'v86.0',
                            0.17
                        ],
                        [
                            'v85.0',
                            0.18
                        ],
                        [
                            'v84.0',
                            0.17
                        ],
                        [
                            'v83.0',
                            0.21
                        ],
                        [
                            'v81.0',
                            0.1
                        ],
                        [
                            'v80.0',
                            0.16
                        ],
                        [
                            'v79.0',
                            0.43
                        ],
                        [
                            'v78.0',
                            0.11
                        ],
                        [
                            'v76.0',
                            0.16
                        ],
                        [
                            'v75.0',
                            0.15
                        ],
                        [
                            'v72.0',
                            0.14
                        ],
                        [
                            'v70.0',
                            0.11
                        ],
                        [
                            'v69.0',
                            0.13
                        ],
                        [
                            'v56.0',
                            0.12
                        ],
                        [
                            'v49.0',
                            0.17
                        ]
                    ]
                },
                {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v15.3',
                            0.1
                        ],
                        [
                            'v15.2',
                            2.01
                        ],
                        [
                            'v15.1',
                            2.29
                        ],
                        [
                            'v15.0',
                            0.49
                        ],
                        [
                            'v14.1',
                            2.48
                        ],
                        [
                            'v14.0',
                            0.64
                        ],
                        [
                            'v13.1',
                            1.17
                        ],
                        [
                            'v13.0',
                            0.13
                        ],
                        [
                            'v12.1',
                            0.16
                        ]
                    ]
                },
                {
                    name: 'Edge',
                    id: 'Edge',
                    data: [
                        [
                            'v97',
                            6.62
                        ],
                        [
                            'v96',
                            2.55
                        ],
                        [
                            'v95',
                            0.15
                        ]
                    ]
                },
                {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v96.0',
                            4.17
                        ],
                        [
                            'v95.0',
                            3.33
                        ],
                        [
                            'v94.0',
                            0.11
                        ],
                        [
                            'v91.0',
                            0.23
                        ],
                        [
                            'v78.0',
                            0.16
                        ],
                        [
                            'v52.0',
                            0.15
                        ]
                    ]
                }
            ]
        }
    });

    loadGist('f34cf5e988154f9cd450b72d08ad53cb');
}

function pieChartLegend() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Browser market shares in March, 2022 - Demo Data',
            align: 'left'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Chrome',
                y: 74.77,
                sliced: true,
                selected: true
            }, {
                name: 'Edge',
                y: 12.82
            }, {
                name: 'Firefox',
                y: 4.63
            }, {
                name: 'Safari',
                y: 2.44
            }, {
                name: 'Internet Explorer',
                y: 2.02
            }, {
                name: 'Other',
                y: 3.28
            }]
        }]
    });

    loadGist('60acfa881464eb3804febcaf248c5b88');
}

function pieChartSemiCircle() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false
        },
        title: {
            text: 'Browser<br>shares<br>January<br>2022 - Demo Data',
            align: 'center',
            verticalAlign: 'middle',
            y: 60,
            style: {
                fontSize: '1.1em'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'white'
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '75%'],
                size: '110%'
            }
        },
        series: [{
            type: 'pie',
            name: 'Browser share',
            innerSize: '50%',
            data: [
                ['Chrome', 73.86],
                ['Edge', 11.97],
                ['Firefox', 5.52],
                ['Safari', 2.98],
                ['Internet Explorer', 1.90],
                ['Other', 3.77]
            ]
        }]
    });

    loadGist('b17a3517ae90dede545aab310131830c');
}

function pieChartVariableRadius() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'variablepie'
        },
        title: {
            text: 'Countries compared by population density and total area, 2022 - Demo Data',
            align: 'left'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'Area (square km): <b>{point.y}</b><br/>' +
                'Population density (people per square km): <b>{point.z}</b><br/>'
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            borderRadius: 5,
            data: [{
                name: 'Spain',
                y: 505992,
                z: 92
            }, {
                name: 'France',
                y: 551695,
                z: 119
            }, {
                name: 'Poland',
                y: 312679,
                z: 121
            }, {
                name: 'Czech Republic',
                y: 78865,
                z: 136
            }, {
                name: 'Italy',
                y: 301336,
                z: 200
            }, {
                name: 'Switzerland',
                y: 41284,
                z: 213
            }, {
                name: 'Germany',
                y: 357114,
                z: 235
            }],
            colors: [
                '#4caefe',
                '#3dc3e8',
                '#2dd9db',
                '#1feeaf',
                '#0ff3a0',
                '#00e887',
                '#23e274'
            ]
        }]
    });

    loadGist('be8c59d3f02400791af0952c65290cc1');
}