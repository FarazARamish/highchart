function threeDChartArea() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 30,
                depth: 200
            }
        },
        title: {
            text: 'Visual comparison of Mountains Panorama - Demo Data',
            align: 'left'
        },
        accessibility: {
            description: 'The chart is showing the shapes of three mountain ranges as three area line series laid out in 3D behind each other.',
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            }
        },
        lang: {
            accessibility: {
                axis: {
                    xAxisDescriptionPlural: 'The chart has 3 unlabelled X axes, one for each series.'
                }
            }
        },
        yAxis: {
            title: {
                text: 'Height Above Sea Level',
                x: -40
            },
            labels: {
                format: '{value:,.0f} MAMSL'
            },
            gridLineDashStyle: 'Dash'
        },
        xAxis: [{
            visible: false
        }, {
            visible: false
        }, {
            visible: false
        }],
        plotOptions: {
            area: {
                depth: 100,
                marker: {
                    enabled: false
                },
                states: {
                    inactive: {
                        enabled: false
                    }
                }
            }
        },
        tooltip: {
            valueSuffix: ' MAMSL'
        },
        series: [{
            name: '',
            lineColor: 'rgb(180,90,50)',
            color: 'rgb(200,110,50)',
            fillColor: 'rgb(200,110,50)',
            data: [
                ['Murań', 1890],
                ['Nowy Wierch', 2009],
                ['Hawrań', 2152],
                ['Płaczliwa Skała', 2142],
                ['Szalony Wierch', 2061],
                ['Karczmarski Wierch', 1438],
                ['Jagnięcy Szczyt', 2230],
                ['Czerwona Turnia', 2284],
                ['Kołowy Szczyt', 2418],
                ['Czarny Szczyt', 2429],
                ['Baranie Rogi', 2526],
                ['Śnieżny Szczyt', 2465],
                ['Lodowy Szczyt', 2627],
                ['Lodowa Kopa', 2602],
                ['Szeroka Jaworzyńska', 2210],
                ['Horwacki Wierch', 1902],
                ['Spismichałowa Czuba', 2012],
                ['Zielona Czuba', 2130],
                ['Wielicki Szczyt', 2318],
                ['Gerlach', 2655],
                ['Batyżowiecki Szczyt', 2448],
                ['Kaczy Szczyt', 2395],
                ['Zmarzły Szczyt', 2390],
                ['Kończysta', 2538],
                ['Młynarz', 2170],
                ['Ganek', 2462],
                ['Wysoka', 2547],
                ['Ciężki Szczyt', 2520],
                ['Rysy', 2503],
                ['Żabi Mnich', 2146],
                ['Żabi Koń', 2291],
                ['Żabia Turnia Mięguszowiecka', 2335],
                ['Wołowa Turnia', 2373]
            ]
        }, {
            xAxis: 1,
            lineColor: 'rgb(120,160,180)',
            color: 'rgb(140,180,200)',
            fillColor: 'rgb(140,180,200)',
            name: '',
            data: [
                ['Kufstein', 2049],
                ['Hohe Wildstelle', 2746],
                ['Kleiner Miesberg', 2173],
                ['Großer Miesberg', 2202],
                ['Hochstein', 2543],
                ['Lackner Miesberg', 2232],
                ['Wasenspitze', 2257],
                ['Sinabell', 2349],
                ['Feister Scharte', 2198],
                ['Eselstein', 2556],
                ['Landfriedstein', 2536],
                ['Scheichenspitz', 2667],
                ['Schmiedstock', 2634],
                ['Gamsfeldspitze', 2611],
                ['Edelgriess', 2305],
                ['Koppenkarstein', 2863],
                ['Niederer Gjaidstein', 2483],
                ['Hoher Gjaidstein', 2794],
                ['Hoher Dachstein', 2995],
                ['Niederer Dachstein', 2934],
                ['Hohes Kreuz', 2837],
                ['Hoher Ochsenkogel', 2513]
            ]
        }, {
            xAxis: 2,
            lineColor: 'rgb(200, 190, 140)',
            color: 'rgb(200, 190, 140)',
            fillColor: 'rgb(230, 220, 180)',
            name: '',
            data: [
                ['Combin de la Tsessette', 4141],
                ['Grand Combin de Grafeneire', 4314],
                ['Combin de Corbassière', 3716],
                ['Petit Combin', 3672],
                ['Pointe de Boveire', 3212],
                ['Grand Aget', 3133],
                ['Mont Rogneux', 3084],
                ['Dents du Grand Lé', 2884],
                ['Monts Telliers', 2951],
                ['Grand Golliat', 3238],
                ['Mont Grande Rochère', 3326],
                ['Mont de la Fouly', 2871],
                ['Tête de la Payanne', 2452],
                ['Pointe Allobrogia', 3172],
                ['Six Blanc', 2334],
                ['Mont Dolent', 3820],
                ['Aiguille de Triolet', 3870],
                ['Le Tour Noir', 3836],
                ['Aiguille de l\'A Neuve', 3753],
                ['Aiguille d\'Argentière', 3900],
                ['Aiguille du Chardonnet', 3824],
                ['Aiguille du Tour', 3540],
                ['Aiguille du Pissoir', 3440],
                ['Le Catogne', 2598],
                ['Pointe de Prosom', 2762],
                ['Pointe Ronde', 2700],
                ['Mont Buet', 3096],
                ['Le Cheval Blanc', 2831],
                ['Pointe de la Finive', 2838],
                ['Pic de Tenneverge', 2985],
                ['Pointe d\'Aboillon', 2819],
                ['Tour Sallière', 3220],
                ['Le Dôme', 3138],
                ['Haute Cime', 3257],
                ['Pierre Avoi', 2473],
                ['Cime de l\'Est', 3178]
            ]
        }]
    });

    loadGist('5f3983457b4cb16d219af1bcf861ca34');
}

function threeDChartCustom() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    const row = document.createElement('div');
    row.classList.add('my-3');
    row.classList.add('row');
    row.id = 'sliders';
    //Alpha
    let div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('col-md-12');
    div.classList.add('col-sm-12');
    let label = document.createElement('label');
    label.for = 'alpha';
    label.innerText = 'Alpha Angle';
    div.appendChild(label);
    let input = document.createElement('input');
    input.type = 'range';
    input.id = 'alpha';
    input.min = '0';
    input.max = '45';
    input.value = '15';
    input.classList.add('form-range');
    input.classList.add('w-75');
    input.classList.add('mr-2');
    div.appendChild(input);
    let span = document.createElement('span');
    span.id = 'alpha-value';
    span.innerText = '15';
    div.appendChild(span);
    row.appendChild(div);
    //Beta
    div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('col-md-12');
    div.classList.add('col-sm-12');
    label = document.createElement('label');
    label.for = 'beta';
    label.innerText = 'Beta Angle';
    div.appendChild(label);
    input = document.createElement('input');
    input.type = 'range';
    input.id = 'beta';
    input.min = '-45';
    input.max = '45';
    input.value = '15';
    input.classList.add('form-range');
    input.classList.add('w-75');
    input.classList.add('mr-2');
    div.appendChild(input);
    span = document.createElement('span');
    span.id = 'beta-value';
    span.innerText = '15';
    div.appendChild(span);
    row.appendChild(div);
    //Depth
    div = document.createElement('div');
    div.classList.add('col-lg-4');
    div.classList.add('col-md-12');
    div.classList.add('col-sm-12');
    label = document.createElement('label');
    label.for = 'depth';
    label.innerText = 'Depth';
    div.appendChild(label);
    input = document.createElement('input');
    input.type = 'range';
    input.id = 'depth';
    input.min = '20';
    input.max = '100';
    input.value = '50';
    input.classList.add('form-range');
    input.classList.add('w-75');
    input.classList.add('mr-2');
    div.appendChild(input);
    span = document.createElement('span');
    span.id = 'depth-value';
    span.innerText = '50';
    div.appendChild(span);
    row.appendChild(div);

    document.getElementById('chart-actions').appendChild(row);

    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart-demo',
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        xAxis: {
            categories: ['Toyota', 'BMW', 'Volvo', 'Audi', 'Peugeot', 'Mercedes-Benz',
                'Volkswagen', 'Polestar', 'Kia', 'Nissan'
            ]
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: 'Cars sold: {point.y}'
        },
        title: {
            text: 'Sold passenger cars in Norway by brand, January 2021 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: '3D Chart customization sample',
            align: 'left'
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        series: [{
            data: [1318, 1073, 1060, 813, 775, 745, 537, 444, 416, 395],
            colorByPoint: true
        }]
    });

    document.querySelectorAll('#sliders input').forEach(input => input.addEventListener('input', e => {
        chart.options.chart.options3d[e.target.id] = parseFloat(e.target.value);
        document.getElementById('alpha-value').innerHTML = chart.options.chart.options3d.alpha;
        document.getElementById('beta-value').innerHTML = chart.options.chart.options3d.beta;
        document.getElementById('depth-value').innerHTML = chart.options.chart.options3d.depth;
        chart.redraw(false);
    }));

    loadGist('4b51897e3d385befccee831b07aaadb0');
}

function threeDChartColumnStackingGrouping() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'column',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                viewDistance: 25,
                depth: 40
            }
        },
        title: {
            text: ' Electricity production in countries, grouped by continent',
            align: 'left'
        },
        xAxis: {
            labels: {
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: 'TWh',
                skew3d: true,
                style: {
                    fontSize: '16px'
                }
            }
        },
        tooltip: {
            headerFormat: '<b>{point.key}</b><br>',
            pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
        },
        plotOptions: {
            series: {
                pointStart: 2016
            },
            column: {
                stacking: 'normal',
                depth: 40
            }
        },
        series: [{
            name: 'South Korea',
            data: [563, 567, 590, 582, 571],
            stack: 'Asia'
        }, {
            name: 'Germany',
            data: [650, 654, 643, 612, 572],
            stack: 'Europe'
        }, {
            name: 'Saudi Arabia',
            data: [368, 378, 378, 367, 363],
            stack: 'Asia'
        }, {
            name: 'France',
            data: [564, 562, 582, 571, 533],
            stack: 'Europe'
        }]
    });

    loadGist('94b5b6b81ebf7eda47234ea55693addc');
}

function threeDChartCylinder() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'cylinder',
            options3d: {
                enabled: true,
                alpha: 15,
                beta: 15,
                depth: 50,
                viewDistance: 25
            }
        },
        title: {
            text: 'Number of confirmed COVID-19 - Demo Data'
        },
        subtitle: {
            text: '3D chart cylinder sample'
        },
        xAxis: {
            categories: ['0-9', '10-19', '20-29', '30-39', '40-49', '50-59', '60-69', '70-79', '80-89', '90+'],
            title: {
                text: 'Age groups'
            },
            labels: {
                skew3d: true
            }
        },
        yAxis: {
            title: {
                margin: 20,
                text: 'Reported cases'
            },
            labels: {
                skew3d: true
            }
        },
        tooltip: {
            headerFormat: '<b>Age: {point.x}</b><br>'
        },
        plotOptions: {
            series: {
                depth: 25,
                colorByPoint: true
            }
        },
        series: [{
            data: [95321, 169339, 121105, 136046, 106800, 58041, 26766, 14291,
                7065, 3283
            ],
            name: 'Cases',
            showInLegend: false
        }]
    });

    loadGist('b51cb912b9fb2b3f69ddaecd1310f4ec');
}

function threeDChartPieDonut() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45
            }
        },
        title: {
            text: 'Beijing 2022 gold medals by country - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: '3D donut in Highcharts',
            align: 'left'
        },
        plotOptions: {
            pie: {
                innerSize: 100,
                depth: 45
            }
        },
        series: [{
            name: 'Medals',
            data: [
                ['Norway', 16],
                ['Germany', 12],
                ['USA', 8],
                ['Sweden', 8],
                ['Netherlands', 8],
                ['ROC', 6],
                ['Austria', 7],
                ['Canada', 4],
                ['Japan', 3]
            ]
        }]
    });

    loadGist('fc496b3985ee0e384b66a659e58d0a6a');
}

function threeDChartFunnelChart() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'funnel3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: 'Highcharts Funnel3D Chart - Demo Data'
        },
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: '<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div>'
            }
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    allowOverlap: true,
                    y: 10
                },
                neckWidth: '30%',
                neckHeight: '25%',
                width: '80%',
                height: '80%'
            }
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits', 15654],
                ['Downloads', 4064],
                ['Requested price list', 1987],
                ['Invoice sent', 976],
                ['Finalized', 846]
            ]
        }]
    });

    loadGist('e068844c07402aef4f8b63c560262b25');
}

function threeDChartPie() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Global smartphone shipments market share, Q1 2022 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: '3D pie chart sample',
            align: 'left'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Share',
            data: [
                ['Samsung', 23],
                ['Apple', 18],
                {
                    name: 'Xiaomi',
                    y: 12,
                    sliced: true,
                    selected: true
                },
                ['Oppo*', 9],
                ['Vivo', 8],
                ['Others', 30]
            ]
        }]
    });

    loadGist('8a5e461bc7069a9e04cb8e59fbcae6e6');
}

function threeDChartPyramid() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    chat = Highcharts.chart('chart-demo', {
        chart: {
            type: 'pyramid3d',
            options3d: {
                enabled: true,
                alpha: 10,
                depth: 50,
                viewDistance: 50
            }
        },
        title: {
            text: 'Highcharts Pyramid3D Chart - Demo Data'
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    allowOverlap: true,
                    x: 10,
                    y: -5
                },
                width: '60%',
                height: '80%',
                center: ['50%', '45%']
            }
        },
        series: [{
            name: 'Unique users',
            data: [
                ['Website visits', 15654],
                ['Downloads', 4064],
                ['Requested price list', 1987],
                ['Invoice sent', 976],
                ['Finalized', 846]
            ]
        }]
    });

    loadGist('f800d1460f76b0c90729151ec1a93cff');
}

function threeDChartScatteredDraggable() {
    // Set up the chart
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    Highcharts.setOptions({
        colors: Highcharts.getOptions().colors.map(function(color) {
            return {
                radialGradient: {
                    cx: 0.4,
                    cy: 0.3,
                    r: 0.5
                },
                stops: [
                    [0, color],
                    [1, Highcharts.color(color).brighten(-0.2).get('rgb')]
                ]
            };
        })
    });    

    chart = Highcharts.chart('chart-demo', {
        chart: {
            renderTo: '3d-chart-scattered-draggable',
            margin: 100,
            type: 'scatter3d',
            animation: false,
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 30,
                depth: 250,
                viewDistance: 5,
                fitToPlot: false,
                frame: {
                    bottom: { size: 1, color: 'rgba(0,0,0,0.02)' },
                    back: { size: 1, color: 'rgba(0,0,0,0.04)' },
                    side: { size: 1, color: 'rgba(0,0,0,0.06)' }
                }
            }
        },
        title: {
            text: 'Draggable box'
        },
        subtitle: {
            text: 'Click and drag the plot area to rotate in space'
        },
        plotOptions: {
            scatter: {
                width: 10,
                height: 10,
                depth: 10
            }
        },
        yAxis: {
            min: 0,
            max: 10,
            title: null
        },
        xAxis: {
            min: 0,
            max: 10,
            gridLineWidth: 1
        },
        zAxis: {
            min: 0,
            max: 10,
            showFirstLabel: false
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'Data',
            colorByPoint: true,
            accessibility: {
                exposeAsGroupOnly: true
            },
            data: [
                [1, 6, 5],
                [8, 7, 9],
                [1, 3, 4],
                [4, 6, 8],
                [5, 7, 7],
                [6, 9, 6],
                [7, 0, 5],
                [2, 3, 3],
                [3, 9, 8],
                [3, 6, 5],
                [4, 9, 4],
                [2, 3, 3],
                [6, 9, 9],
                [0, 7, 0],
                [7, 7, 9],
                [7, 2, 9],
                [0, 6, 2],
                [4, 6, 7],
                [3, 7, 7],
                [0, 1, 7],
                [2, 8, 6],
                [2, 3, 7],
                [6, 4, 8],
                [3, 5, 9],
                [7, 9, 5],
                [3, 1, 7],
                [4, 4, 2],
                [3, 6, 2],
                [3, 1, 6],
                [6, 8, 5],
                [6, 6, 7],
                [4, 1, 1],
                [7, 2, 7],
                [7, 7, 0],
                [8, 8, 9],
                [9, 4, 1],
                [8, 3, 4],
                [9, 8, 9],
                [3, 5, 3],
                [0, 2, 4],
                [6, 0, 2],
                [2, 1, 3],
                [5, 8, 9],
                [2, 1, 1],
                [9, 7, 6],
                [3, 0, 2],
                [9, 9, 0],
                [3, 4, 8],
                [2, 6, 1],
                [8, 9, 2],
                [7, 6, 5],
                [6, 3, 1],
                [9, 3, 1],
                [8, 9, 3],
                [9, 1, 0],
                [3, 8, 7],
                [8, 0, 0],
                [4, 9, 7],
                [8, 6, 2],
                [4, 3, 0],
                [2, 3, 5],
                [9, 1, 4],
                [1, 1, 4],
                [6, 0, 2],
                [6, 1, 6],
                [3, 8, 8],
                [8, 8, 7],
                [5, 5, 0],
                [3, 9, 6],
                [5, 4, 3],
                [6, 8, 3],
                [0, 1, 5],
                [6, 7, 3],
                [8, 3, 2],
                [3, 8, 3],
                [2, 1, 6],
                [4, 6, 7],
                [8, 9, 9],
                [5, 4, 2],
                [6, 1, 3],
                [6, 9, 5],
                [4, 8, 2],
                [9, 7, 4],
                [5, 4, 2],
                [9, 6, 1],
                [2, 7, 3],
                [4, 5, 4],
                [6, 8, 1],
                [3, 4, 0],
                [2, 2, 6],
                [5, 1, 2],
                [9, 9, 7],
                [6, 9, 9],
                [8, 4, 3],
                [4, 1, 7],
                [6, 2, 5],
                [0, 4, 9],
                [3, 5, 9],
                [6, 9, 1],
                [1, 9, 2]
            ]
        }]
    });

    // Add mouse and touch events for rotation
    (function(H) {
        function dragStart(eStart) {
            eStart = chart.pointer.normalize(eStart);
            const posX = eStart.chartX,
                posY = eStart.chartY,
                alpha = chart.options.chart.options3d.alpha,
                beta = chart.options.chart.options3d.beta,
                sensitivity = 5, // lower is more sensitive
                handlers = [];
            function drag(e) {
                // Get e.chartX and e.chartY
                e = chart.pointer.normalize(e);
                chart.update({
                    chart: {
                        options3d: {
                            alpha: alpha + (e.chartY - posY) / sensitivity,
                            beta: beta + (posX - e.chartX) / sensitivity
                        }
                    }
                }, undefined, undefined, false);
            }
            function unbindAll() {
                handlers.forEach(function(unbind) {
                    if (unbind) {
                        unbind();
                    }
                });
                handlers.length = 0;
            }
            handlers.push(H.addEvent(document, 'mousemove', drag));
            handlers.push(H.addEvent(document, 'touchmove', drag));
            handlers.push(H.addEvent(document, 'mouseup', unbindAll));
            handlers.push(H.addEvent(document, 'touchend', unbindAll));
        }
        H.addEvent(chart.container, 'mousedown', dragStart);
        H.addEvent(chart.container, 'touchstart', dragStart);
    }(Highcharts));

    loadGist('f668b208b7b8d589c9ff2792afbcc731');
}