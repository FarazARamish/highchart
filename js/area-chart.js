function areaChartBasic() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area'
        },
        accessibility: {
            description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
        },
        title: {
            text: 'US and USSR nuclear stockpiles - Demo Data'
        },
        subtitle: {
            text: 'Area chart basic sample'
        },
        xAxis: {
            allowDecimals: false,
            accessibility: {
                rangeDescription: 'Range: 1940 to 2017.'
            }
        },
        yAxis: {
            title: {
                text: 'Nuclear weapon states'
            }
        },
        tooltip: {
            pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
        },
        plotOptions: {
            area: {
                pointStart: 1940,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 2,
                    states: {
                        hover: {
                            enabled: true
                        }
                    }
                }
            }
        },
        series: [{
            name: 'USA',
            data: [
                null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
                1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
                28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
                26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
                23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
                21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
                10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
                5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
                3750, 3708, 3708
            ]
        }, {
            name: 'USSR/Russia',
            data: [null, null, null, null, null, null, null, null, null,
                1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
                3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
                14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
                32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
                32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
                13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
                5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
                4310, 4495, 4477
            ]
        }]
    });

    loadGist('b15d9eab17fa7149efd76059c567ce52');
}

function areaChartRange() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    (async () => {
        const data = [
            [1483232400000, 1.4, 4.7],
            [1483318800000, -1.3, 1.9],
            [1483405200000, -0.7, 4.3],
            [1483491600000, -5.5, 3.2],
            [1483578000000, -9.9, -6.6],
            [1483664400000, -9.6, 0.1],
            [1483750800000, -0.9, 4.0],
            [1483837200000, -2.2, 2.9],
            [1483923600000, 1.3, 2.3],
            [1484010000000, -0.3, 2.9],
            [1484096400000, 1.1, 3.8],
            [1484182800000, 0.6, 2.1],
            [1484269200000, -3.4, 2.5],
            [1484355600000, -2.9, 2.0],
            [1484442000000, -5.7, -2.6],
            [1484528400000, -8.7, -3.3],
            [1484614800000, -3.5, -0.3],
            [1484701200000, -0.2, 7.0],
            [1484787600000, 2.3, 8.5],
            [1484874000000, 5.6, 9.5],
            [1484960400000, 0.4, 5.8],
            [1485046800000, 0.1, 3.1],
            [1485133200000, 1.5, 4.1],
            [1485219600000, -0.2, 2.8],
            [1485306000000, 2.3, 10.3],
            [1485392400000, -0.8, 9.4],
            [1485478800000, -1.3, 4.6],
            [1485565200000, -0.6, 5.3],
            [1485651600000, 1.4, 5.8],
            [1485738000000, -3.6, 0.9],
            [1485824400000, -5.4, -2.6],
            [1485910800000, -5.5, 0.8],
            [1485997200000, -0.8, 2.5],
            [1486083600000, 1.6, 4.1],
            [1486170000000, 1.3, 4.8],
            [1486256400000, 0.7, 4.6],
            [1486342800000, -1.1, 4.5],
            [1486429200000, -5.5, -0.9],
            [1486515600000, -8.6, -4.2],
            [1486602000000, -8.3, -1.6],
            [1486688400000, -4.0, 0.9],
            [1486774800000, -5.3, -0.5],
            [1486861200000, -5.8, 0.4],
            [1486947600000, -4.4, 0.4],
            [1487034000000, -4.3, 0.6],
            [1487120400000, -4.6, 2.7],
            [1487206800000, 1.6, 3.2],
            [1487293200000, 2.3, 6.2],
            [1487379600000, 2.4, 4.1],
            [1487466000000, 2.3, 8.5],
            [1487552400000, 3.8, 6.8],
            [1487638800000, 2.4, 4.9],
            [1487725200000, 0.4, 4.5],
            [1487811600000, -5.9, 4.0],
            [1487898000000, -5.9, 1.5],
            [1487984400000, -6.2, -1.7],
            [1488070800000, -4.5, 2.3],
            [1488157200000, 0.9, 5.6],
            [1488243600000, 1.6, 4.9],
            [1488330000000, -0.2, 5.5],
            [1488416400000, -1.8, 4.4],
            [1488502800000, -1.9, 3.3],
            [1488589200000, -4.4, 2.5],
            [1488675600000, 0.7, 4.1],
            [1488762000000, -6.0, 2.7],
            [1488848400000, -8.1, -0.1],
            [1488934800000, -10.2, -0.5],
            [1489021200000, -2.3, 3.7],
            [1489107600000, 0.3, 4.7],
            [1489194000000, -1.9, 5.2],
            [1489280400000, 1.1, 3.1],
            [1489366800000, 2.3, 7.0],
            [1489453200000, 3.1, 7.7],
            [1489539600000, 2.8, 6.3],
            [1489626000000, 1.9, 8.9],
            [1489712400000, 0.8, 5.5],
            [1489798800000, -1.6, 4.3],
            [1489885200000, -1.9, 3.3],
            [1489971600000, 0.5, 4.4],
            [1490058000000, 1.7, 6.6],
            [1490144400000, 0.4, 5.1],
            [1490230800000, -1.2, 3.5],
            [1490317200000, 0.9, 7.4],
            [1490403600000, 3.3, 8.4],
            [1490490000000, 4.6, 10.1],
            [1490572800000, 3.9, 11.8],
            [1490659200000, 1.3, 8.9],
            [1490745600000, 1.4, 9.8],
            [1490832000000, -0.1, 2.4],
            [1490918400000, 1.9, 6.8],
            [1491004800000, 4.3, 12.2],
            [1491091200000, 5.4, 9.3],
            [1491177600000, 2.5, 11.1],
            [1491264000000, 5.6, 10.2],
            [1491350400000, 3.7, 7.6],
            [1491436800000, 3.3, 7.4],
            [1491523200000, 6.9, 12.0],
            [1491609600000, 5.8, 10.9],
            [1491696000000, 7.5, 12.1],
            [1491782400000, 2.3, 9.7],
            [1491868800000, 2.1, 7.1],
            [1491955200000, 0.4, 6.9],
            [1492041600000, 3.0, 7.0],
            [1492128000000, -1.2, 8.9],
            [1492214400000, 0.4, 7.5],
            [1492300800000, 0.9, 4.4],
            [1492387200000, -0.9, 8.2],
            [1492473600000, -1.7, 9.6],
            [1492560000000, 2.2, 7.5],
            [1492646400000, 3.9, 9.1],
            [1492732800000, 2.3, 6.5],
            [1492819200000, 2.0, 7.4],
            [1492905600000, 1.6, 6.9],
            [1492992000000, 1.4, 4.7],
            [1493078400000, -0.9, 9.7],
            [1493164800000, 1.8, 7.9],
            [1493251200000, 0.5, 10.6],
            [1493337600000, 0.8, 11.0],
            [1493424000000, 4.3, 11.6],
            [1493510400000, -1.6, 11.7],
            [1493596800000, -0.6, 14.3],
            [1493683200000, 1.1, 16.1],
            [1493769600000, 1.7, 17.1],
            [1493856000000, 3.1, 17.6],
            [1493942400000, 5.3, 19.2],
            [1494028800000, 5.6, 20.3],
            [1494115200000, 5.4, 18.0],
            [1494201600000, 2.9, 12.1],
            [1494288000000, 0.9, 8.6],
            [1494374400000, 1.2, 7.7],
            [1494460800000, 3.3, 10.1],
            [1494547200000, 2.7, 14.1],
            [1494633600000, 2.5, 16.6],
            [1494720000000, 9.0, 12.7],
            [1494806400000, 8.2, 17.0],
            [1494892800000, 9.0, 11.8],
            [1494979200000, 9.3, 16.9],
            [1495065600000, 10.2, 12.1],
            [1495152000000, 9.9, 20.3],
            [1495238400000, 9.0, 23.1],
            [1495324800000, 9.9, 16.9],
            [1495411200000, 7.2, 12.5],
            [1495497600000, 3.3, 18.1],
            [1495584000000, 8.3, 12.9],
            [1495670400000, 8.5, 13.1],
            [1495756800000, 10.5, 16.1],
            [1495843200000, 10.3, 22.3],
            [1495929600000, 9.0, 18.2],
            [1496016000000, 12.3, 15.6],
            [1496102400000, 12.5, 16.3],
            [1496188800000, 9.9, 13.6],
            [1496275200000, 3.7, 14.8],
            [1496361600000, 8.6, 14.3],
            [1496448000000, 10.0, 18.3],
            [1496534400000, 9.7, 13.0],
            [1496620800000, 9.0, 14.3],
            [1496707200000, 8.3, 14.3],
            [1496793600000, 11.1, 18.4],
            [1496880000000, 10.7, 16.6],
            [1496966400000, 7.2, 16.3],
            [1497052800000, 11.5, 15.3],
            [1497139200000, 11.1, 15.1],
            [1497225600000, 10.4, 16.5],
            [1497312000000, 11.3, 14.6],
            [1497398400000, 9.1, 17.6],
            [1497484800000, 9.9, 15.5],
            [1497571200000, 12.3, 14.9],
            [1497657600000, 10.5, 15.1],
            [1497744000000, 11.4, 18.0],
            [1497830400000, 9.9, 14.8],
            [1497916800000, 8.1, 12.4],
            [1498003200000, 8.6, 15.5],
            [1498089600000, 9.4, 13.0],
            [1498176000000, 11.2, 13.0],
            [1498262400000, 9.0, 15.3],
            [1498348800000, 7.7, 13.6],
            [1498435200000, 10.3, 13.6],
            [1498521600000, 6.3, 18.0],
            [1498608000000, 5.5, 21.7],
            [1498694400000, 9.1, 23.2],
            [1498780800000, 12.6, 25.4],
            [1498867200000, 10.6, 19.6],
            [1498953600000, 11.3, 14.5],
            [1499040000000, 9.2, 16.1],
            [1499126400000, 8.7, 17.9],
            [1499212800000, 6.9, 19.5],
            [1499299200000, 6.6, 20.0],
            [1499385600000, 9.7, 15.7],
            [1499472000000, 11.9, 14.2],
            [1499558400000, 8.7, 14.2],
            [1499644800000, 9.7, 18.4],
            [1499731200000, 10.3, 16.8],
            [1499817600000, 10.9, 15.5],
            [1499904000000, 10.2, 16.8],
            [1499990400000, 6.0, 18.9],
            [1500076800000, 9.1, 19.1],
            [1500163200000, 11.6, 15.7],
            [1500249600000, 8.8, 12.4],
            [1500336000000, 9.2, 16.3],
            [1500422400000, 6.2, 23.0],
            [1500508800000, 8.2, 26.2],
            [1500595200000, 11.7, 20.3],
            [1500681600000, 13.6, 24.1],
            [1500768000000, 13.8, 25.3],
            [1500854400000, 13.7, 18.6],
            [1500940800000, 12.9, 20.8],
            [1501027200000, 12.9, 20.5],
            [1501113600000, 13.6, 18.2],
            [1501200000000, 12.3, 17.5],
            [1501286400000, 10.4, 17.0],
            [1501372800000, 12.6, 19.0],
            [1501459200000, 12.3, 18.1],
            [1501545600000, 11.3, 14.4],
            [1501632000000, 11.3, 17.2],
            [1501718400000, 10.7, 21.4],
            [1501804800000, 12.1, 15.2],
            [1501891200000, 12.3, 17.0],
            [1501977600000, 12.4, 18.7],
            [1502064000000, 11.7, 16.3],
            [1502150400000, 10.0, 15.2],
            [1502236800000, 8.1, 19.3],
            [1502323200000, 11.9, 17.5],
            [1502409600000, 15.3, 17.6],
            [1502496000000, 12.7, 15.8],
            [1502582400000, 9.4, 14.8],
            [1502668800000, 9.3, 15.2],
            [1502755200000, 10.6, 13.6],
            [1502841600000, 10.8, 15.6],
            [1502928000000, 10.2, 15.8],
            [1503014400000, 12.3, 18.2],
            [1503100800000, 11.7, 18.0],
            [1503187200000, 11.5, 16.9],
            [1503273600000, 11.5, 17.7],
            [1503360000000, 7.6, 18.5],
            [1503446400000, 6.7, 19.8],
            [1503532800000, 8.3, 17.2],
            [1503619200000, 7.7, 20.5],
            [1503705600000, 8.1, 19.4],
            [1503792000000, 6.7, 17.9],
            [1503878400000, 12.6, 15.8],
            [1503964800000, 9.0, 16.5],
            [1504051200000, 10.3, 16.7],
            [1504137600000, 9.2, 17.3],
            [1504224000000, 10.3, 14.8],
            [1504310400000, 5.3, 17.6],
            [1504396800000, 5.2, 16.7],
            [1504483200000, 7.1, 19.2],
            [1504569600000, 10.3, 14.0],
            [1504656000000, 11.9, 15.1],
            [1504742400000, 11.9, 14.2],
            [1504828800000, 9.6, 15.9],
            [1504915200000, 9.1, 14.0],
            [1505001600000, 8.3, 13.7],
            [1505088000000, 6.8, 15.0],
            [1505174400000, 6.8, 14.3],
            [1505260800000, 7.1, 15.5],
            [1505347200000, 5.1, 15.3],
            [1505433600000, 6.7, 16.8],
            [1505520000000, 4.0, 16.1],
            [1505606400000, 3.5, 15.8],
            [1505692800000, 8.1, 12.7],
            [1505779200000, 10.4, 13.4],
            [1505865600000, 7.4, 11.8],
            [1505952000000, 4.6, 11.6],
            [1506038400000, 9.4, 13.3],
            [1506124800000, 7.2, 16.0],
            [1506211200000, 6.2, 13.7],
            [1506297600000, 6.7, 19.5],
            [1506384000000, 7.8, 17.1],
            [1506470400000, 10.3, 16.9],
            [1506556800000, 11.9, 18.2],
            [1506643200000, 10.0, 18.9],
            [1506729600000, 9.8, 13.5],
            [1506816000000, 9.1, 16.0],
            [1506902400000, 9.8, 15.9],
            [1506988800000, 8.6, 9.7],
            [1507075200000, 6.3, 11.2],
            [1507161600000, 6.0, 9.5],
            [1507248000000, 8.3, 11.9],
            [1507334400000, 5.6, 10.0],
            [1507420800000, 0.7, 10.0],
            [1507507200000, -0.8, 8.9],
            [1507593600000, 1.2, 7.7],
            [1507680000000, 5.3, 7.1],
            [1507766400000, 5.8, 9.6],
            [1507852800000, 4.8, 8.1],
            [1507939200000, 7.5, 12.7],
            [1508025600000, 7.9, 14.7],
            [1508112000000, 7.6, 15.7],
            [1508198400000, 6.2, 8.0],
            [1508284800000, 0.5, 6.6],
            [1508371200000, -1.3, 5.6],
            [1508457600000, 3.8, 10.9],
            [1508544000000, 6.8, 11.2],
            [1508630400000, 7.2, 11.0],
            [1508716800000, 3.4, 9.8],
            [1508803200000, 4.8, 7.4],
            [1508889600000, 4.9, 6.5],
            [1508976000000, 2.6, 6.8],
            [1509062400000, 4.1, 9.2],
            [1509148800000, 3.5, 10.2],
            [1509235200000, 4.0, 6.8],
            [1509325200000, 3.2, 5.1],
            [1509411600000, 3.1, 5.2],
            [1509498000000, 5.2, 6.7],
            [1509584400000, 1.4, 9.4],
            [1509670800000, 1.3, 6.3],
            [1509757200000, 4.3, 7.4],
            [1509843600000, 4.8, 6.9],
            [1509930000000, 0.9, 6.8],
            [1510016400000, 2.9, 6.9],
            [1510102800000, 4.6, 8.7],
            [1510189200000, 3.9, 9.2],
            [1510275600000, 1.2, 4.7],
            [1510362000000, 1.0, 3.9],
            [1510448400000, 2.9, 6.5],
            [1510534800000, -0.6, 5.7],
            [1510621200000, 0.1, 1.8],
            [1510707600000, 1.8, 5.2],
            [1510794000000, 1.7, 5.2],
            [1510880400000, 2.7, 6.8],
            [1510966800000, 1.1, 5.2],
            [1511053200000, -0.1, 3.6],
            [1511139600000, 0.9, 2.7],
            [1511226000000, -4.1, 0.8],
            [1511312400000, -3.8, -0.3],
            [1511398800000, -1.0, 5.4],
            [1511485200000, 2.4, 4.5],
            [1511571600000, 1.3, 3.9],
            [1511658000000, -3.3, 2.8],
            [1511744400000, -3.9, -0.7],
            [1511830800000, -5.3, -0.6],
            [1511917200000, -8.4, -5.1],
            [1512003600000, -8.7, -5.4],
            [1512090000000, -8.2, -2.8],
            [1512176400000, -2.6, 3.8],
            [1512262800000, 1.8, 4.3],
            [1512349200000, 0.9, 3.8],
            [1512435600000, 0.8, 5.9],
            [1512522000000, 1.5, 3.0],
            [1512608400000, 2.5, 7.3],
            [1512694800000, 2.0, 4.9],
            [1512781200000, -0.8, 2.6],
            [1512867600000, -1.4, 0.2],
            [1512954000000, -2.3, -0.9],
            [1513040400000, -9.0, -2.2],
            [1513126800000, -8.8, -2.6],
            [1513213200000, -7.0, -3.9],
            [1513299600000, -8.1, -5.5],
            [1513386000000, -7.5, -3.4],
            [1513472400000, -8.1, -1.8],
            [1513558800000, -1.5, 1.9],
            [1513645200000, 1.3, 2.2],
            [1513731600000, 2.1, 6.0],
            [1513818000000, 2.2, 7.1],
            [1513904400000, 2.7, 5.9],
            [1513990800000, 2.5, 8.6],
            [1514077200000, 1.8, 5.6],
            [1514163600000, 1.0, 3.1],
            [1514250000000, 1.3, 1.6],
            [1514336400000, 0.8, 1.3],
            [1514422800000, -3.3, -1.4],
            [1514509200000, -1.5, -0.2],
            [1514595600000, -2.7, -1.0],
            [1514682000000, -2.8, 0.3]
        ];
        chart = Highcharts.chart('chart-demo', {
            chart: {
                type: 'arearange',
                zoomType: 'x',
                scrollablePlotArea: {
                    minWidth: 600,
                    scrollPositionX: 1
                }
            },
            title: {
                text: 'Temperature variation by day - Demo Data'
            },
            xAxis: {
                type: 'datetime',
                accessibility: {
                    rangeDescription: 'Range: Jan 1st 2017 to Dec 31 2017.'
                }
            },
            yAxis: {
                title: {
                    text: null
                }
            },
            tooltip: {
                crosshairs: true,
                shared: true,
                valueSuffix: '°C',
                xDateFormat: '%A, %b %e'
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Temperatures',
                data: data,
                color: {
                    linearGradient: {
                        x1: 0,
                        x2: 0,
                        y1: 0,
                        y2: 1
                    },
                    stops: [
                        [0, '#ff0000'],
                        [1, '#0000ff']
                    ]
                }
            }]
        });
    })();

    loadGist('11a10d4bdc0cb7ce9b46af08f10329ee');
}

function areaChartRangeLine() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }

    const ranges = [
            [13.7, 25.6],
            [13.3, 21.8],
            [11.2, 19.9],
            [7.9, 17.3],
            [4.9, 20.6],
            [5.1, 16.8],
            [9.3, 21.1],
            [11.1, 20.5],
            [8.9, 18.4],
            [4.6, 23.2],
            [11.5, 26.0],
            [8.6, 23.4],
            [9.8, 22.2],
            [8.1, 18.2],
            [5.9, 20.2],
            [4.5, 20.2],
            [8.9, 19.8],
            [11.1, 22.1],
            [7.9, 26.7],
            [15.9, 28.6],
            [14.9, 27.5],
            [9.5, 26.0],
            [11.5, 22.4],
            [8.6, 21.1],
            [12.9, 21.7],
            [13.6, 20.9],
            [9.6, 23.9],
            [8.6, 22.7],
            [7.5, 25.7],
            [5.5, 24.3],
            [10.4, 21.2]
        ],
        averages = [
            [18.1],
            [17.1],
            [15.2],
            [12.7],
            [13.3],
            [10.6],
            [15.6],
            [16.1],
            [14.0],
            [15.3],
            [17.5],
            [17.5],
            [15.3],
            [13.9],
            [13.7],
            [13.8],
            [14.0],
            [15.8],
            [18.6],
            [21.5],
            [19.8],
            [17.6],
            [16.8],
            [15.6],
            [16.7],
            [16.3],
            [17.2],
            [16.0],
            [16.9],
            [16.1],
            [14.5]
        ];
    chart = Highcharts.chart('chart-demo', {
        title: {
            text: 'July temperatures in Nesbyen, 2022 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Area chart range line sapmle',
            align: 'left'
        },
        xAxis: {
            type: 'datetime',
            accessibility: {
                rangeDescription: 'Range: Jul 1st 2022 to Jul 31st 2022.'
            }
        },
        yAxis: {
            title: {
                text: null
            }
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '°C'
        },
        plotOptions: {
            series: {
                pointStart: Date.UTC(2022, 6, 1),
                pointIntervalUnit: 'day'
            }
        },
        series: [{
            name: 'Temperature',
            data: averages,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[0]
            }
        }, {
            name: 'Range',
            data: ranges,
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0,
            marker: {
                enabled: false
            }
        }]
    });

    loadGist('106ec8a5977f3c0d8a7e37908ea5aa1b');
}

function areaChartMissing() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Born persons, by boys\' name - Demo Data'
        },
        subtitle: {
            text: '* Missing data for Yasin in 2019 - Area chart missing sample',
            align: 'right',
            verticalAlign: 'bottom'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 60,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        yAxis: {
            title: {
                text: 'Amount'
            }
        },
        plotOptions: {
            series: {
                pointStart: 2014
            },
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Arvid',
            data: [10, 9, 11, 11, 8, 13, 12, 14]
        }, {
            name: 'Yasin',
            data: [13, 9, 10, 10, 8, null, 8, 6]
        }]
    });

    loadGist('59f241503bba009ca75485a913944c86');
}

function areaChartNegative() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Production, consumption and trade surplus of electrical power - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Area chart negative data samples',
            align: 'left'
        },
        xAxis: {
            categories: ['Q1 2019', 'Q2 2019', 'Q3 2019', 'Q4 2019', 'Q1 2020', 'Q2 2020',
                'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021'
            ]
        },
        yAxis: {
            title: {
                text: 'TWh'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Total production',
            data: [37.8, 29.3, 30.8, 36.8, 40.5, 35.3, 34.9, 43.6, 45.7, 35.9, 32.7]
        }, {
            name: 'Gross consumption',
            data: [39.9, 29.9, 26.7, 38.1, 39.3, 30.2, 27.5, 36.7, 42.7, 31.4, 27.5]
        }, {
            name: 'Trade surplus',
            data: [-2.2, -0.6, 4.1, -1.3, 1.2, 5.1, 7.4, 6.9, 2.9, 4.5, 5.2]
        }]
    });

    loadGist('07d3b7a0a7822362bf4acdb4b88789fe');
}

function areaChartSpline() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Moose and deer hunting in Norway, 2000 - 2021 - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Area chart spline sample',
            align: 'left'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 120,
            y: 70,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            plotBands: [{ // Highlight the two last years
                from: 2019,
                to: 2020,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Quantity'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointStart: 2000
            },
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Moose',
            data: [
                38000,
                37300,
                37892,
                38564,
                36770,
                36026,
                34978,
                35657,
                35620,
                35971,
                36409,
                36435,
                34643,
                34956,
                33199,
                31136,
                30835,
                31611,
                30666,
                30319,
                31766
            ]
        }, {
            name: 'Deer',
            data: [
                22534,
                23599,
                24533,
                25195,
                25896,
                27635,
                29173,
                32646,
                35686,
                37709,
                39143,
                36829,
                35031,
                36202,
                35140,
                33718,
                37773,
                42556,
                43820,
                46445,
                50048
            ]
        }]
    });

    loadGist('6c297ef3fc9fbff2b9d41343c0d94e2f');
}

function areaChartFanChart() {
    const colors = Highcharts.getOptions().colors;
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'arearange',
            zoomType: 'x'
        },
        title: {
            text: 'EU GDP - Demo Data'
        },
        subtitle: {
            text: 'Area chart fan chart sample'
        },
        xAxis: {
            type: 'category',
            accessibility: {
                rangeDescription: 'Range: 2022 to 2024.'
            },
            min: 1,
            max: 12,
            endOnTick: false,
            plotBands: [{
                color: 'rgba(255, 75, 66, 0.07)',
                from: 5.5,
                to: 99,
                label: {
                    text: 'Forecast'
                }
            }],
            plotLines: [{
                dashStyle: 'dash',
                color: colors[4],
                width: 2,
                value: 5.5
            }]
        },
        yAxis: {
            opposite: true,
            title: {
                text: 'GDP change<br/>on preceding year'
            },
            labels: {
                format: '{value}%'
            },
            max: 30
        },
        tooltip: {
            crosshairs: true,
            shared: true,
            valueSuffix: '%',
            valuePrefix: '+'
        },
        responsive: {
            rules: [{
                chartOptions: {
                    xAxis: {
                        labels: {
                            staggerLines: 2
                        }
                    }
                },
                condition: {
                    minWidth: 540
                }
            }]
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            },
            arearange: {
                enableMouseTracking: false,
                states: {
                    inactive: {
                        enabled: false
                    }
                },
                color: colors[7],
                fillOpacity: 1 / 3,
                lineWidth: 0
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'EU GDP',
            type: 'line',
            data: [
                ['2021', 5.4],
                ['Q1.2022', 5.7],
                ['Q2.2022', 4.4],
                ['Q3.2022', 2.6],
                ['Q4.2022', 1.7],
                ['Q1.2023', 1.3],
                ['Q2.2023', 0.6],
                ['Q3.2023', 0.6],
                ['Q4.2023', 1.1],
                ['Q1.2024', 1.3],
                ['Q2.2024', 1.5],
                ['Q3.2024', 1.6],
                ['Q4.2024', 1.7],
                ['2025', 1.7]
            ],
            zIndex: 2,
            color: colors[7],
            lineWidth: 4
        }, {
            name: '1σ',
            data: [
                ['Q1.2023', 1.3, 1.3],
                ['Q2.2023', -3.4, 4.6],
                ['Q3.2023', -3.4, 4.6],
                ['Q4.2023', -2.9, 5.1],
                ['Q1.2024', -2.7, 5.3],
                ['Q2.2024', -2.5, 5.5],
                ['Q3.2024', -2.4, 5.6],
                ['Q4.2024', -2.3, 5.7],
                ['2025', -2.3, 5.7]
            ]
        }, {
            name: '2σ',
            data: [
                ['Q1.2023', 1.3, 1.3],
                ['Q2.2023', -7.4, 8.6],
                ['Q3.2023', -7.4, 8.6],
                ['Q4.2023', -6.9, 9.1],
                ['Q1.2024', -6.7, 9.3],
                ['Q2.2024', -6.5, 9.5],
                ['Q3.2024', -6.4, 9.6],
                ['Q4.2024', -6.3, 9.7],
                ['2025', -6.3, 9.7]
            ]
        }, {
            name: '3σ',
            data: [
                ['Q1.2023', 1.3, 1.3],
                ['Q2.2023', -11.4, 12.6],
                ['Q3.2023', -11.4, 12.6],
                ['Q4.2023', -10.9, 13.1],
                ['Q1.2024', -10.7, 13.3],
                ['Q2.2024', -10.5, 13.5],
                ['Q3.2024', -10.4, 13.6],
                ['Q4.2024', -10.3, 13.7],
                ['2025', -10.3, 13.7]
            ]
        }]
    });

    loadGist('e0409702e2696ebd10602317a528a454');
}

function areaChartInverted() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area',
            inverted: true
        },
        title: {
            text: 'Alibaba and Meta (Facebook) revenue - Demo Data',
            align: 'left'
        },
        accessibility: {
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            }
        },
        tooltip: {
            pointFormat: '&#8226; {series.name}: <b>${point.y} B</b>'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        yAxis: {
            labels: {
                format: '${text}'
            },
            title: {
                text: 'Revenue (billions USD)'
            }
        },
        plotOptions: {
            series: {
                pointStart: 2014
            },
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Alibaba',
            data: [11.44, 14.89, 21.40, 34.03, 51.52, 70.49, 94.46, 129.44]
        }, {
            name: 'Meta (Facebook)',
            data: [11.49, 17.08, 26.88, 39.94, 55.01, 69.65, 84.17, 117.93]
        }]
    });

    loadGist('3b7bcbbdf849db8d06cc6589848e8117');
}

function areaChartStacked() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area'
        },
        title: {
            text: 'Greenhouse gases from Norwegian economic activity - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'Area chart stacked sample',
            align: 'left'
        },
        yAxis: {
            title: {
                useHTML: true,
                text: 'Million tonnes CO<sub>2</sub>-equivalents'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
        },
        plotOptions: {
            series: {
                pointStart: 2012
            },
            area: {
                stacking: 'normal',
                lineColor: '#666666',
                lineWidth: 1,
                marker: {
                    lineWidth: 1,
                    lineColor: '#666666'
                }
            }
        },
        series: [{
            name: 'Ocean transport',
            data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16214]
        }, {
            name: 'Households',
            data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]

        }, {
            name: 'Agriculture and hunting',
            data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913]
        }, {
            name: 'Air transport',
            data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550]

        }, {
            name: 'Construction',
            data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186]
        }]
    });

    loadGist('1a5b67830b2f1bdc03c0fb232c82b742');
}

function areaChartStackedPercentage() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'area'
        },
        title: {
            useHTML: true,
            text: 'Countries/regions with highest Gt CO<sub>2</sub>-emissions - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: 'ARea chart stcked percentage sample',
            align: 'left'
        },
        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.'
            }
        },
        yAxis: {
            labels: {
                format: '{value}%'
            },
            title: {
                enabled: false
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
            split: true
        },
        plotOptions: {
            series: {
                pointStart: 1990
            },
            area: {
                stacking: 'percent',
                marker: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'China',
            data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4,
                3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8,
                10, 10, 9.8, 9.7, 9.9, 10.3, 10.5, 10.7, 10.9
            ]
        }, {
            name: 'USA',
            data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9,
                5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5,
                5.5, 5.4, 5.2, 5.2, 5.4, 5.3, 4.7, 5
            ]
        }, {
            name: 'EU',
            data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7,
                3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3,
                3.1, 3.1, 3.1, 3, 2.9, 2.6, 2.7
            ]
        }, {
            name: 'India',
            data: [0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1, 1,
                1, 1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2,
                2.2, 2.3, 2.4, 2.4, 2.6, 2.6, 2.4, 2.7
            ]
        }]
    });

    loadGist('7d6992116c2aeeaf2708dddefcd44247');
}

function areaChartStackedInverted() {
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'areaspline',
            inverted: true
        },
        title: {
            text: 'MSIS atmospheric composition by height - Demo Data',
            align: 'left'
        },
        subtitle: {
            text: `Area chart stacked inverted sample`,
            align: 'left'
        },
        xAxis: {
            tickmarkPlacement: 'on',
            title: {
                text: 'Height (km)'
            },
            opposite: 'true',
            reversed: false,
            crosshair: true
        },
        yAxis: {
            title: {
                text: 'Volume fraction'
            },
            labels: {
                format: '{value} %'
            },
            reversedStacks: false
        },
        tooltip: {
            shared: true,
            headerFormat: '<table>',
            pointFormat: `<tr>
            <td><span style="color:{series.color};">\u2b24</span></td>
            <td>{series.name}</td>
            <td style="text-align: right"><b>{point.y} %</b></td>
        </tr>`,
            footerFormat: '</table>',
            useHTML: true
        },
        plotOptions: {
            areaspline: {
                stacking: 'percent',
                lineColor: '#666666',
                pointInterval: 100,
                lineWidth: 1,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#666666',
                    lineColor: '#666666',
                    radius: 1
                },
                label: {
                    style: {
                        fontSize: '16px'
                    }
                },
                states: {
                    hover: {
                        halo: {
                            size: 0
                        }
                    }
                }
            }
        },
        series: [{
                name: 'N2',
                data: [78, 76, 38, 10, 2.5, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'O2',
                data: [21, 20, 2, 0.5, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'O',
                data: [0, 3, 59, 84, 70, 32, 8, 3, 1, 0, 0]
            },
            {
                name: 'Ar',
                data: [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name: 'He',
                data: [0, 0, 1, 5, 25, 62, 82, 82, 78, 71, 62]
            },
            {
                name: 'H',
                data: [0, 0, 0, 0.5, 2.5, 6, 10, 15, 21, 29, 38]
            }
        ]
    });

    loadGist('6e35431a50231ca0d8affb15798a99bf');
}

function areaChartStreamGraph() {
    const colors = Highcharts.getOptions().colors;
    addChartUI();

    if (chart) {
        chart.destroy();
    }
    chart = Highcharts.chart('chart-demo', {
        chart: {
            type: 'streamgraph',
            marginBottom: 30,
            zoomType: 'x'
        },
        // Make sure connected countries have similar colors
        colors: [
            colors[0],
            colors[1],
            colors[2],
            colors[3],
            colors[4],
            // East Germany, West Germany and Germany
            Highcharts.color(colors[5]).brighten(0.2).get(),
            Highcharts.color(colors[5]).brighten(0.1).get(),

            colors[5],
            colors[6],
            colors[7],
            colors[8],
            colors[9],
            colors[0],
            colors[1],
            colors[3],
            // Soviet Union, Russia
            Highcharts.color(colors[2]).brighten(-0.1).get(),
            Highcharts.color(colors[2]).brighten(-0.2).get(),
            Highcharts.color(colors[2]).brighten(-0.3).get()
        ],

        title: {
            floating: true,
            align: 'left',
            text: 'Winter Olympic Medal Wins - Demo Data'
        },
        subtitle: {
            floating: true,
            align: 'left',
            y: 30,
            text: 'Area chart stream graph sample'
        },

        xAxis: {
            maxPadding: 0,
            type: 'category',
            crosshair: true,
            categories: [
                '',
                '1924 Chamonix',
                '1928 St. Moritz',
                '1932 Lake Placid',
                '1936 Garmisch-Partenkirchen',
                '1940 <i>Cancelled (Sapporo)</i>',
                '1944 <i>Cancelled (Cortina d\'Ampezzo)</i>',
                '1948 St. Moritz',
                '1952 Oslo',
                '1956 Cortina d\'Ampezzo',
                '1960 Squaw Valley',
                '1964 Innsbruck',
                '1968 Grenoble',
                '1972 Sapporo',
                '1976 Innsbruck',
                '1980 Lake Placid',
                '1984 Sarajevo',
                '1988 Calgary',
                '1992 Albertville',
                '1994 Lillehammer',
                '1998 Nagano',
                '2002 Salt Lake City',
                '2006 Turin',
                '2010 Vancouver',
                '2014 Sochi'
            ],
            labels: {
                align: 'left',
                reserveSpace: false,
                rotation: 270
            },
            lineWidth: 0,
            margin: 20,
            tickWidth: 0
        },

        yAxis: {
            visible: false,
            startOnTick: false,
            endOnTick: false
        },

        legend: {
            enabled: false
        },

        annotations: [{
            labels: [{
                point: {
                    x: 5.5,
                    xAxis: 0,
                    y: 30,
                    yAxis: 0
                },
                text: 'Cancelled<br>during<br>World War II'
            }, {
                point: {
                    x: 18,
                    xAxis: 0,
                    y: 90,
                    yAxis: 0
                },
                text: 'Soviet Union fell,<br>Germany united'
            }],
            labelOptions: {
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderColor: 'silver'
            }
        }],

        plotOptions: {
            series: {
                label: {
                    minFontSize: 5,
                    maxFontSize: 15,
                    style: {
                        color: 'rgba(255,255,255,0.75)'
                    }
                },
                accessibility: {
                    exposeAsGroupOnly: true
                }
            }
        },

        // Data parsed with olympic-medals.node.js
        series: [{
            name: 'Finland',
            data: [
                0, 11, 4, 3, 6, 0, 0, 6, 9, 7, 8, 10, 5, 5, 7, 9, 13, 7,
                7, 6, 12, 7, 9, 5, 5
            ]
        }, {
            name: 'Austria',
            data: [
                0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10,
                21, 9, 17, 17, 23, 16, 17
            ]
        }, {
            name: 'Sweden',
            data: [
                0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4,
                3, 3, 7, 14, 11, 15
            ]
        }, {
            name: 'Norway',
            data: [
                0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10,
                9, 5, 20, 26, 25, 25, 19, 23, 26
            ]
        }, {
            name: 'U.S.',
            data: [
                0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6,
                11, 13, 13, 34, 25, 37, 28
            ]
        }, {
            name: 'East Germany',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25,
                0, 0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'West Germany',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Germany',
            data: [
                0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26,
                24, 29, 36, 29, 30, 19
            ]
        }, {
            name: 'Netherlands',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 9, 9, 6, 4, 0, 7, 4,
                4, 11, 8, 9, 8, 24
            ]
        }, {
            name: 'Italy',
            data: [
                0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 4, 5, 4, 2, 2, 5, 14,
                20, 10, 13, 11, 5, 8
            ]
        }, {
            name: 'Canada',
            data: [
                0, 1, 1, 7, 1, 0, 0, 3, 2, 3, 4, 3, 3, 1, 3, 2, 4, 5, 7,
                13, 15, 17, 24, 26, 25
            ]
        }, {
            name: 'Switzerland',
            data: [
                0, 3, 1, 1, 3, 0, 0, 10, 2, 6, 2, 0, 6, 10, 5, 5, 5, 15,
                3, 9, 7, 11, 14, 9, 11
            ]
        }, {
            name: 'Great Britain',
            data: [
                0, 4, 1, 0, 3, 0, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0,
                2, 1, 2, 1, 1, 4
            ]
        }, {
            name: 'France',
            data: [
                0, 3, 1, 1, 1, 0, 0, 5, 1, 0, 3, 7, 9, 3, 1, 1, 3, 2, 9,
                5, 8, 11, 9, 11, 15
            ]
        }, {
            name: 'Hungary',
            data: [
                0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Unified Team',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Soviet Union',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 21, 25, 13, 16, 27, 22, 25,
                29, 0, 0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Russia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                23, 18, 13, 22, 15, 33
            ]
        }, {
            name: 'Japan',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 1, 1, 7,
                5, 10, 2, 1, 5, 8
            ]
        }, {
            name: 'Czechoslovakia',
            data: [
                0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 3, 1, 1, 6, 3, 3,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Poland',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0,
                0, 0, 2, 2, 6, 6
            ]
        }, {
            name: 'Spain',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'China',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                3, 8, 8, 11, 11, 9
            ]
        }, {
            name: 'South Korea',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
                6, 6, 4, 11, 14, 8
            ]
        }, {
            name: 'Czech Republic',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 3, 3, 4, 6, 8
            ]
        }, {
            name: 'Belarus',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                2, 2, 1, 1, 3, 6
            ]
        }, {
            name: 'Kazakhstan',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                3, 2, 0, 0, 1, 1
            ]
        }, {
            name: 'Bulgaria',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                0, 1, 3, 1, 0, 0
            ]
        }, {
            name: 'Denmark',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0
            ]
        }, {
            name: 'Ukraine',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                2, 1, 0, 2, 0, 2
            ]
        }, {
            name: 'Australia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 2, 2, 3, 3
            ]
        }, {
            name: 'Belgium',
            data: [
                0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0
            ]
        }, {
            name: 'Romania',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Liechtenstein',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Yugoslavia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Luxembourg',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'New Zealand',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'North Korea',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: 'Slovakia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 3, 1
            ]
        }, {
            name: 'Croatia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 4, 3, 3, 1
            ]
        }, {
            name: 'Slovenia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                3, 0, 1, 0, 3, 8
            ]
        }, {
            name: 'Latvia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 2, 4
            ]
        }, {
            name: 'Estonia',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 3, 3, 1, 0
            ]
        }, {
            name: 'Uzbekistan',
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0
            ]
        }],
        exporting: {
            sourceWidth: 800,
            sourceHeight: 600
        }
    });

    loadGist('f93ae07bdd067a3140cae0f87d74c1d1');
}