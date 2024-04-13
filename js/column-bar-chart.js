function barChartBasic() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Historic World Population by Region - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Bar chart basic sample',
            align: 'left'
        },
        xAxis: {
            categories: ['Africa', 'America', 'Asia', 'Europe'],
            title: {
                text: null
            },
            gridLineWidth: 1,
            lineWidth: 0
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            },
            gridLineWidth: 0
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true
                },
                groupPadding: 0.1
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Year 1990',
            data: [631, 727, 3202, 721]
        }, {
            name: 'Year 2000',
            data: [814, 841, 3714, 726]
        }, {
            name: 'Year 2018',
            data: [1276, 1007, 4561, 746]
        }]
    });

    loadGist('fe1a0e9894de271dfc50d907bc062f58');
}

function columnChartBasic() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Corn vs wheat estimated production for 2020 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Column chart basic sample',
            align: 'left'
        },
        xAxis: {
            categories: ['USA', 'China', 'Brazil', 'EU', 'India', 'Russia'],
            crosshair: true,
            accessibility: {
                description: 'Countries'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: '1000 metric tons (MT)'
            }
        },
        tooltip: {
            valueSuffix: ' (1000 MT)'
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
                name: 'Corn',
                data: [406292, 260000, 107000, 68300, 27500, 14500]
            },
            {
                name: 'Wheat',
                data: [51086, 136000, 5500, 141000, 107180, 77000]
            }
        ]
    });

    loadGist('7eef503d56b02d993ca219311e10bfd6');
}

function barChartNegativeStack() {
    Highcharts.Templating.helpers.abs = value => Math.abs(value);
    // Age categories
    const categories = [
        '0-4', '5-9', '10-14', '15-19', '20-24', '25-29', '30-34', '35-40', '40-45',
        '45-49', '50-54', '55-59', '60-64', '65-69', '70-74', '75-79', '80+'
    ];
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Population pyramid for Somalia, 2021 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Bar chart negative stack',
            align: 'left'
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
            }
        },
        xAxis: [{
            categories: categories,
            reversed: false,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Age (male)'
            }
        }, { // mirror axis on right side
            opposite: true,
            reversed: false,
            categories: categories,
            linkedTo: 0,
            labels: {
                step: 1
            },
            accessibility: {
                description: 'Age (female)'
            }
        }],
        yAxis: {
            title: {
                text: null
            },
            labels: {
                format: '{abs value}%'
            },
            accessibility: {
                description: 'Percentage population',
                rangeDescription: 'Range: 0 to 5%'
            }
        },

        plotOptions: {
            series: {
                stacking: 'normal',
                borderRadius: '50%'
            }
        },

        tooltip: {
            format: '<b>{series.name}, age {point.category}</b><br/>' +
                'Population: {(abs point.y):.1f}%'
        },

        series: [{
            name: 'Male',
            data: [
                -8.98, -7.52, -6.65, -5.72, -4.85,
                -3.71, -2.76, -2.07, -1.70, -1.47,
                -1.22, -0.99, -0.81, -0.62, -0.41,
                -0.23, -0.15
            ]
        }, {
            name: 'Female',
            data: [
                8.84, 7.42, 6.57, 5.68, 4.83,
                3.74, 2.80, 2.14, 1.79, 1.59,
                1.34, 1.06, 0.83, 0.63, 0.43,
                0.25, 0.19
            ]
        }]
    });

    loadGist('903701f168d3e3a1fcea10247f1a3ae1');
}

function columnChartRange() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'columnrange',
            inverted: true
        },
        accessibility: {
            description: 'Image description: A column range chart compares the monthly temperature variations throughout 2021 in Vik i Sogn, Norway. The chart is interactive and displays the temperature range for each month when hovering over the data. The temperature is measured in degrees Celsius on the X-axis and the months are plotted on the Y-axis. The lowest temperature is recorded in February at minus 16.7 Celsius. The lowest range of temperatures is found in March ranging from a low of minus 4.7 to a high of 11.6 Celsius. The highest temperature is found in June at 29.4 Celsius. May has the highest range of temperatures from minus 2.5 to 27.2 Celsius. The broadest range of temperatures is also found in May ranging from a low of minus 2.1 to a high of 27.2 Celsius.'
        },
        title: {
            text: 'Temperature variation by month - Demo Data'
        },
        subtitle: {
            text: 'Column chart range sample'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ]
        },
        yAxis: {
            title: {
                text: 'Temperature ( °C )'
            }
        },
        tooltip: {
            valueSuffix: '°C'
        },
        plotOptions: {
            columnrange: {
                borderRadius: '50%',
                dataLabels: {
                    enabled: true,
                    format: '{y}°C'
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Temperatures',
            data: [
                [-13.9, 5.2],
                [-16.7, 10.6],
                [-4.7, 11.6],
                [-4.4, 16.8],
                [-2.1, 27.2],
                [5.9, 29.4],
                [6.5, 29.1],
                [4.7, 25.4],
                [4.3, 21.6],
                [-3.5, 15.1],
                [-9.8, 12.5],
                [-11.5, 8.4]
            ]
        }]
    });

    loadGist('f200602f461150e2087125ea592dbe6d');
}

function columnChartDrilDown() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            align: 'left',
            text: 'Browser market shares. January, 2022 - Demo Data'
        },
        subtitle: {
            align: 'left',
            text: 'Column chart drill down sample'
        },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y:.1f}%'
                }
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
                    y: 63.06,
                    drilldown: 'Chrome'
                },
                {
                    name: 'Safari',
                    y: 19.84,
                    drilldown: 'Safari'
                },
                {
                    name: 'Firefox',
                    y: 4.18,
                    drilldown: 'Firefox'
                },
                {
                    name: 'Edge',
                    y: 4.12,
                    drilldown: 'Edge'
                },
                {
                    name: 'Opera',
                    y: 2.33,
                    drilldown: 'Opera'
                },
                {
                    name: 'Internet Explorer',
                    y: 0.45,
                    drilldown: 'Internet Explorer'
                },
                {
                    name: 'Other',
                    y: 1.582,
                    drilldown: null
                }
            ]
        }],
        drilldown: {
            breadcrumbs: {
                position: {
                    align: 'right'
                }
            },
            series: [{
                    name: 'Chrome',
                    id: 'Chrome',
                    data: [
                        [
                            'v65.0',
                            0.1
                        ],
                        [
                            'v64.0',
                            1.3
                        ],
                        [
                            'v63.0',
                            53.02
                        ],
                        [
                            'v62.0',
                            1.4
                        ],
                        [
                            'v61.0',
                            0.88
                        ],
                        [
                            'v60.0',
                            0.56
                        ],
                        [
                            'v59.0',
                            0.45
                        ],
                        [
                            'v58.0',
                            0.49
                        ],
                        [
                            'v57.0',
                            0.32
                        ],
                        [
                            'v56.0',
                            0.29
                        ],
                        [
                            'v55.0',
                            0.79
                        ],
                        [
                            'v54.0',
                            0.18
                        ],
                        [
                            'v51.0',
                            0.13
                        ],
                        [
                            'v49.0',
                            2.16
                        ],
                        [
                            'v48.0',
                            0.13
                        ],
                        [
                            'v47.0',
                            0.11
                        ],
                        [
                            'v43.0',
                            0.17
                        ],
                        [
                            'v29.0',
                            0.26
                        ]
                    ]
                },
                {
                    name: 'Firefox',
                    id: 'Firefox',
                    data: [
                        [
                            'v58.0',
                            1.02
                        ],
                        [
                            'v57.0',
                            7.36
                        ],
                        [
                            'v56.0',
                            0.35
                        ],
                        [
                            'v55.0',
                            0.11
                        ],
                        [
                            'v54.0',
                            0.1
                        ],
                        [
                            'v52.0',
                            0.95
                        ],
                        [
                            'v51.0',
                            0.15
                        ],
                        [
                            'v50.0',
                            0.1
                        ],
                        [
                            'v48.0',
                            0.31
                        ],
                        [
                            'v47.0',
                            0.12
                        ]
                    ]
                },
                {
                    name: 'Internet Explorer',
                    id: 'Internet Explorer',
                    data: [
                        [
                            'v11.0',
                            6.2
                        ],
                        [
                            'v10.0',
                            0.29
                        ],
                        [
                            'v9.0',
                            0.27
                        ],
                        [
                            'v8.0',
                            0.47
                        ]
                    ]
                },
                {
                    name: 'Safari',
                    id: 'Safari',
                    data: [
                        [
                            'v11.0',
                            3.39
                        ],
                        [
                            'v10.1',
                            0.96
                        ],
                        [
                            'v10.0',
                            0.36
                        ],
                        [
                            'v9.1',
                            0.54
                        ],
                        [
                            'v9.0',
                            0.13
                        ],
                        [
                            'v5.1',
                            0.2
                        ]
                    ]
                },
                {
                    name: 'Edge',
                    id: 'Edge',
                    data: [
                        [
                            'v16',
                            2.6
                        ],
                        [
                            'v15',
                            0.92
                        ],
                        [
                            'v14',
                            0.4
                        ],
                        [
                            'v13',
                            0.1
                        ]
                    ]
                },
                {
                    name: 'Opera',
                    id: 'Opera',
                    data: [
                        [
                            'v50.0',
                            0.96
                        ],
                        [
                            'v49.0',
                            0.82
                        ],
                        [
                            'v12.1',
                            0.14
                        ]
                    ]
                }
            ]
        }
    });

    loadGist('19a199c9a38e5eedba59fb480652df80');
}

function columnChartNegative() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Column chart with negative values - Demo Data'
        },
        xAxis: {
            categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '25%'
            }
        },
        series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, -2, 5]
        }]
    });

    loadGist('c09f57e925719f59c261a880a681fffa');
}

function barChartPolarRadial() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
        chart: {
            type: 'column',
            inverted: true,
            polar: true
        },
        title: {
            text: 'Winter Olympic medals per existing country (TOP 5) - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Bar chart radial sample',
            align: 'left'
        },
        tooltip: {
            outside: true
        },
        pane: {
            size: '85%',
            innerSize: '20%',
            endAngle: 270
        },
        xAxis: {
            tickInterval: 1,
            labels: {
                align: 'right',
                useHTML: true,
                allowOverlap: true,
                step: 1,
                y: 3,
                style: {
                    fontSize: '13px'
                }
            },
            lineWidth: 0,
            gridLineWidth: 0,
            categories: [
                'Norway <span class="f16"><span id="flag" class="flag no">' +
                '</span></span>',
                'United States <span class="f16"><span id="flag" class="flag us">' +
                '</span></span>',
                'Germany <span class="f16"><span id="flag" class="flag de">' +
                '</span></span>',
                'Austria <span class="f16"><span id="flag" class="flag at">' +
                '</span></span>',
                'Canada <span class="f16"><span id="flag" class="flag ca">' +
                '</span></span>'
            ]
        },
        yAxis: {
            lineWidth: 0,
            tickInterval: 25,
            reversedStacks: false,
            endOnTick: true,
            showLastLabel: true,
            gridLineWidth: 0
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                borderWidth: 0,
                pointPadding: 0,
                groupPadding: 0.15,
                borderRadius: '50%'
            }
        },
        series: [{
            name: 'Gold medals',
            data: [148, 113, 104, 71, 77]
        }, {
            name: 'Silver medals',
            data: [113, 122, 98, 88, 72]
        }, {
            name: 'Bronze medals',
            data: [124, 95, 65, 91, 76]
        }]
    });

    loadGist('399c3ac94a2d41bfea1a9b4c622fe2e0');
}

function columnChartStackedAndGrouped() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Olympic Games all-time medal table, grouped by continent - Demo Data',
            align: 'left'
        },
        xAxis: {
            categories: ['Gold', 'Silver', 'Bronze']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'Count medals'
            }
        },
        tooltip: {
            format: '<b>{key}</b><br/>{series.name}: {y}<br/>' +
                'Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: 'Norway',
            data: [148, 133, 124],
            stack: 'Europe'
        }, {
            name: 'Germany',
            data: [102, 98, 65],
            stack: 'Europe'
        }, {
            name: 'United States',
            data: [113, 122, 95],
            stack: 'North America'
        }, {
            name: 'Canada',
            data: [77, 72, 80],
            stack: 'North America'
        }]
    });

    loadGist('d854f4d1a3bf017baf42bd2920b0299d');
}

function barChartStacked() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'UEFA CL top scorers by season - Demo Data'
        },
        xAxis: {
            categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Goals'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'Cristiano Ronaldo',
            data: [4, 4, 6, 15, 12]
        }, {
            name: 'Lionel Messi',
            data: [5, 3, 12, 6, 11]
        }, {
            name: 'Robert Lewandowski',
            data: [5, 15, 8, 5, 8]
        }]
    });

    loadGist('61ccf284a628d3fc269cb63e0ec4c36a');
}

function columnChartStacked() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Major trophies for some English teams - Demo Data',
            align: 'left'
        },
        xAxis: {
            categories: ['Arsenal', 'Chelsea', 'Liverpool', 'Manchester United']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Count trophies'
            },
            stackLabels: {
                enabled: true
            }
        },
        legend: {
            align: 'left',
            x: 70,
            verticalAlign: 'top',
            y: 70,
            floating: true,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            headerFormat: '<b>{point.x}</b><br/>',
            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true
                }
            }
        },
        series: [{
            name: 'BPL',
            data: [3, 5, 1, 13]
        }, {
            name: 'FA Cup',
            data: [14, 8, 8, 12]
        }, {
            name: 'CL',
            data: [0, 2, 6, 3]
        }]
    });

    loadGist('1db4679e3b5f97b10be3f6c5011f10a5');
}

function columnChartStackedPercentage() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Domestic passenger transport by mode of transport, Norway - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Column chart stacked percentage sample',
            align: 'left'
        },
        xAxis: {
            categories: ['2019', '2020', '2021']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Percent'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.0f}%'
                }
            }
        },
        series: [{
            name: 'Road',
            data: [434, 290, 307]
        }, {
            name: 'Rail',
            data: [272, 153, 156]
        }, {
            name: 'Air',
            data: [13, 7, 8]
        }, {
            name: 'Sea',
            data: [55, 35, 41]
        }]
    });

    loadGist('9e5cfa5bbf41ea1a39e357cb36f20641');
}

function columnChartVariwide() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'variwide'
        },
        title: {
            text: 'Labor Costs in Europe, 2016 - Demo Data'
        },
        subtitle: {
            text: 'Column chart variwide sample'
        },
        xAxis: {
            type: 'category'
        },
        caption: {
            text: 'Column widths are proportional to GDP'
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Labor Costs',
            data: [
                ['Norway', 50.2, 335504],
                ['Denmark', 42, 277339],
                ['Belgium', 39.2, 421611],
                ['Sweden', 38, 462057],
                ['France', 35.6, 2228857],
                ['Netherlands', 34.3, 702641],
                ['Finland', 33.2, 215615],
                ['Germany', 33.0, 3144050],
                ['Austria', 32.7, 349344],
                ['Ireland', 30.4, 275567],
                ['Italy', 27.8, 1672438],
                ['United Kingdom', 26.7, 2366911],
                ['Spain', 21.3, 1113851],
                ['Greece', 14.2, 175887],
                ['Portugal', 13.7, 184933],
                ['Czech Republic', 10.2, 176564],
                ['Poland', 8.6, 424269],
                ['Romania', 5.5, 169578]
            ],
            dataLabels: {
                enabled: true,
                format: '€{point.y:.0f}'
            },
            tooltip: {
                pointFormat: 'Labor Costs: <b>€ {point.y}/h</b><br>' +
                    'GDP: <b>€ {point.z} million</b><br>'
            },
            borderRadius: 3,
            colorByPoint: true
        }]
    });

    loadGist('0be08ff2e54a233cb16e60d33eb95efb');
}