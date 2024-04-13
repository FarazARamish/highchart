let chart;
(function($) {
    'use strict';
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function() {
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    fullHeight();
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
    });
})(jQuery);


function changeContent(element) {
    $('.side-menu').removeClass('active');
    element.parentNode.classList.add('active');
    switch (element.dataset.target) {
        case 'home':
            showHome();
            break;
        case 'line':
            showLineCharts();
            backToChartOptions();
            break;
        case 'area':
            showAreaCharts();
            backToChartOptions();
            break;
        case 'column-and-bar':
            showColumnAndBarCharts();
            backToChartOptions();
            break;
        case 'pie':
            showPieCharts();
            backToChartOptions();
            break;
        case 'scatter-and-bubble':
            showScatterAndBubbleCharts();
            backToChartOptions();
            break;
        case 'dynamic':
            showDynamicCharts();
            backToChartOptions();
            break;
        case '3d':
            show3DCharts();
            backToChartOptions();
            break;
    }
}

function loadGist(gistID) {
    $.getGist(gistID).done(
        function(gist) {
            $('#chart-code').empty();
            var ordered = gist.ordered;
            for (var i = 0; i < ordered.length; i++) {
                $('#chart-code').append(ordered[i].content);
            }
        });
}

function addChartUI() {
    $('#chart-options').addClass('hide');
    $('#content-section').removeClass('hide');
    $('#content-section').empty();
    $('#content-section').html('<div class="row"><div class="col-12 fs-6"><a href="javascript:void(0);" onclick="backToChartOptions();"><i class="fa fa-arrow-left mr-2"></i> Back to chart options</a></div><div class="col-12 card-body"><h5>Demo</h5><div id="chart-demo"></div><div id="chart-actions"></div></div><div class="col-12 chart-code card-body"><h5>Code Snippet</h5><div id="chart-code"></div></div></div>');
}

function backToChartOptions() {
    $('#chart-options').removeClass('hide');
    $('#content-section').addClass('hide');
}

function showChartVariance(title, data) {
    if (data && data.length > 0) {
        $('#chart-options').empty();
        $('#content-section').empty();
        const row = document.createElement('div');
        row.classList.add('row');
        row.classList.add('gap-4');
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('col-12');
        titleDiv.innerText = title;
        row.appendChild(titleDiv);
        for (var i = 0; i < data.length; i++) {
            const col = document.createElement('div');
            col.classList.add('col-lg-2');
            col.classList.add('col-md-4');
            col.classList.add('col-sm-6');
            col.classList.add('text-center');
            col.classList.add('card');
            col.classList.add('chart-selection');
            col.classList.add('pb-2');
            const anchor = document.createElement('a');
            anchor.href = 'javascript:void(0);';
            anchor.addEventListener('click', data[i].action);
            const image = document.createElement('img');
            image.src = data[i].icon;
            anchor.appendChild(image);
            const label = document.createElement('span');
            label.innerText = data[i].name;
            anchor.appendChild(label);
            col.appendChild(anchor);
            row.appendChild(col);
        }
        document.getElementById('chart-options').appendChild(row);
    }
}

function showHome() {
    $('#chart-options').empty();
    $('#content-section').empty();
    
}

function showLineCharts() {
    const data = [
        { name: 'Basic Line Chart', icon: './img/l-c-1.png', action: lineChartBasic },
        { name: 'Boost Line Chart', icon: './img/l-c-2.png', action: lineChartBoost },
        { name: 'Line Chart With Logarithmic Axis', icon: './img/l-c-3.png', action: lineChartWithLogarithmicAxis },
        { name: 'Spline Inverted', icon: './img/l-c-4.png', action: lineChartSplineInverted },
        { name: 'Spline Plot Band', icon: './img/l-c-5.png', action: lineChartSplinePlotBand },
        { name: 'Spline Symbols', icon: './img/l-c-6.png', action: lineChartSplineSymboyls },
        { name: 'Spline Irregular Time Interval', icon: './img/l-c-7.png', action: lineChartSplineIrregularTimeInterval },
        { name: 'Time Serise', icon: './img/l-c-8.png', action: lineChartTimeSeries },
        { name: 'Line Chart With Data Labels', icon: './img/l-c-9.png', action: lineChartWithDataLabel }
    ];
    showChartVariance('Line Chart', data);
}

function showAreaCharts() {
    const data = [
        { name: 'Basic Area Chart', icon: './img/a-c-1.png', action: areaChartBasic },
        { name: 'Range Area Chart', icon: './img/a-c-2.png', action: areaChartRange },
        { name: 'Range Line Area', icon: './img/a-c-3.png', action: areaChartRangeLine },
        { name: 'Missing Data Area', icon: './img/a-c-4.png', action: areaChartMissing },
        { name: 'Negative Data Area', icon: './img/a-c-5.png', action: areaChartNegative },
        { name: 'Spline Area', icon: './img/a-c-6.png', action: areaChartSpline },
        { name: 'Fan Area Chart', icon: './img/a-c-7.png', action: areaChartFanChart },
        { name: 'Inverted Area', icon: './img/a-c-8.png', action: areaChartInverted },
        { name: 'Stacked Area', icon: './img/a-c-9.png', action: areaChartStacked },
        { name: 'Stacked Percentage Area', icon: './img/a-c-10.png', action: areaChartStackedPercentage },
        { name: 'Stacked Inverted Area', icon: './img/a-c-11.png', action: areaChartStackedInverted },
        { name: 'Stream Graph Area', icon: './img/a-c-12.png', action: areaChartStreamGraph },
    ];
    showChartVariance('Area Chart', data);
}

function showColumnAndBarCharts() {
    const data = [
        { name: 'Basic Bar Chart', icon: './img/cb-c-1.png', action: barChartBasic },
        { name: 'Basic Column Chart', icon: './img/cb-c-2.png', action: columnChartBasic },
        { name: 'Negative Stack Bar', icon: './img/cb-c-3.png', action: barChartNegativeStack },
        { name: 'Range Column', icon: './img/cb-c-4.png', action: columnChartRange },
        { name: 'Drilled Down Column', icon: './img/cb-c-5.png', action: columnChartDrilDown },
        { name: 'Negative Column', icon: './img/cb-c-6.png', action: columnChartNegative },
        { name: 'Radial Bar', icon: './img/cb-c-7.png', action: barChartPolarRadial },
        { name: 'Stacked & Grouped Column', icon: './img/cb-c-8.png', action: columnChartStackedAndGrouped },
        { name: 'Stacked Bar', icon: './img/cb-c-9.png', action: barChartStacked },
        { name: 'Stacked Column', icon: './img/cb-c-10.png', action: columnChartStacked },
        { name: 'Stacked Percentage Column', icon: './img/cb-c-11.png', action: columnChartStackedPercentage },
        { name: 'Variwide Column', icon: './img/cb-c-12.png', action: columnChartVariwide }
    ];
    showChartVariance('Column & Bar Chart', data);
}

function showPieCharts() {
    const data = [
        { name: 'Basic Pie Chart', icon: './img/p-c-1.png', action: pieChartBasic },
        { name: 'Donut Pie Chart', icon: './img/p-c-2.png', action: pieChartDonut },
        { name: 'Drilldown Pie Chart', icon: './img/p-c-3.png', action: pieChartDrilldown },
        { name: 'Legend Pie Chart', icon: './img/p-c-4.png', action: pieChartLegend },
        { name: 'Semi Circle Pie', icon: './img/p-c-5.png', action: pieChartSemiCircle },
        { name: 'Variable Radius Pie', icon: './img/p-c-6.png', action: pieChartVariableRadius }
    ];
    showChartVariance('Pie Chart', data);
}

function showScatterAndBubbleCharts() {
    const data = [
        { name: 'Basic Scatter & Bubble Chart', icon: './img/sb-c-1.png', action: scatterAndBubbleChartBasic },
        { name: 'Jitter Scatter Chart', icon: './img/sb-c-2.png', action: scatterChartJitter },
        { name: '3D Bubble Chart', icon: './img/sb-c-3.png', action: bubbleChart3D },
        { name: 'Packed Bubble Chart', icon: './img/sb-c-4.png', action: bubbleChartPacked },
        { name: 'Boost Scatter Chart', icon: './img/sb-c-5.png', action: scatterChartBoost },
        { name: 'Packed & Split Bubble Chart', icon: './img/sb-c-6.png', action: bubbleChartPackedSplit }
    ];
    showChartVariance('Scatter & Bubble Chart', data);
}

function showDynamicCharts() {
    const data = [
        { name: 'Click To Points Dynamically', icon: './img/d-c-1.png', action: dynamicChartClickToAddPoint },
        { name: 'Dynamic Chart Update', icon: './img/d-c-2.png', action: dynamicChartUpdate }
    ];
    showChartVariance('Dynamic Chart', data);
}

function show3DCharts() {
    const data = [
        { name: '3D Area Chart', icon: './img/3d-c-1.png', action: threeDChartArea },
        { name: '3D Chart Customization', icon: './img/3d-c-2.png', action: threeDChartCustom },
        { name: '3D Chart Column Stacking Grouping', icon: './img/3d-c-3.png', action: threeDChartColumnStackingGrouping },
        { name: '3D Chart Cylinder', icon: './img/3d-c-4.png', action: threeDChartCylinder },
        { name: '3D Chart Pie Donut', icon: './img/3d-c-5.png', action: threeDChartPieDonut },
        { name: '3D Funnel Chart', icon: './img/3d-c-6.png', action: threeDChartFunnelChart },
        { name: '3D Chart Pie', icon: './img/3d-c-7.png', action: threeDChartPie },
        { name: '3D Pyramid Chart', icon: './img/3d-c-8.png', action: threeDChartPyramid },
        { name: '3D Scattered Draggable Chart', icon: './img/3d-c-9.png', action: threeDChartScatteredDraggable }
    ];
    showChartVariance('3D Chart', data);
}