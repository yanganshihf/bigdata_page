var barstyle = {
	color: new echarts.graphic.LinearGradient(
		0, 0, 0, 1,
		[{
				offset: 0,
				color: '#83bff6'
			},
			{
				offset: 0.5,
				color: '#188df0'
			},
			{
				offset: 1,
				color: '#188df0'
			}
		]
	)
}

/* 初始化数据 */
var myChart0, myChart1, myChart2, myChart3, myChart4, myChart5;
initdata(data0, data1, data2, data3, data40, data41, data5);

function initdata(data0, data1, data2, data3, data40, data41, data5) {
	init0(data0);
	init1(data1);
	init2(data2)
	init3(data3)
	init4(data40, data41)
	init5(data5)
}

function init0(data0) {
	myChart0 = echarts.init(document.getElementById('qushi'));
	var option0 = {
		grid: {
			left: '12.5%',
			right: '9%',
			top: '15.5%',
			bottom: '12%'
		},
		xAxis: {
			axisLabel: {
				color: '#91baff'
			},
			type: 'category',
			boundaryGap: false,
			data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
		},
		yAxis: [{
			/* name: '覆盖率(%)',
			nameTextStyle: {
				color: '#91baff'
			}, */
			type: 'value',
			axisLabel: {
				color: '#91baff'
			},
			splitLine: { //隐藏分割线
				show: false
			}
		}],
		series: [{
			data: data0,
			type: 'line',
			itemStyle: {
				color: 'rgb(255,216,0)'
			},
			areaStyle: {
				color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
					offset: 0,
					color: 'rgb(255,216,0)'
				}, {
					offset: 1,
					color: 'rgb(255,216,0,0.2)'
				}])
			},
			smooth: true, // 折线图圆角
			yAxisIndex: 0,
		}]
	};
	myChart0.setOption(option0)
}

function init1(data1) {
	myChart1 = echarts.init(document.getElementById('gongcheng'));
	var option1 = {
		grid: {
			left: '12.5%',
			right: '9%',
			top: '17.5%',
			bottom: '12%'
		},
		xAxis: {
			axisLabel: {
				color: '#91baff'
			},
			type: 'category',
			boundaryGap: false,
			data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
		},
		yAxis: [{
			/* name: '蓄积量(立方米)',
			nameTextStyle: {
				color: '#91baff'
			}, */
			type: 'value',
			axisLabel: {
				color: '#91baff'
			},
			splitLine: { //隐藏分割线
				show: false
			}
		}],
		lineStyle : {
			width : 2
		},
		series: [{
			data: data1,
			type: 'line',
			itemStyle: {
				color: ' #42C3FF'
			},
			smooth: true, // 折线图圆角
			yAxisIndex: 0,
		}]
	};
	myChart1.setOption(option1)
}


function init2(data2) {
	myChart2 = echarts.init(document.getElementById('shijian'), 'westeros');
	var option2 = {
		grid: {
			left: '10%',
			right: '5%',
			top: '15%',
			bottom: '10%'
		},
		xAxis: {

			axisLabel: {
				color: '#91baff'
			},
			type: 'category',
			data: ['飞播', '人工', '封山', '退耕', '还林', '还草', '其他']
		},
		yAxis: {
			/* name: '面积(公顷)',
			nameTextStyle: {
				color: '#91baff'
			}, */
			axisLabel: {
				color: '#91baff'
			},
			type: 'value',
			splitLine: { //隐藏分割线
				show: false
			}
		},
		series: [{
			itemStyle: barstyle,
			data: data2,
			type: 'bar',
			barWidth : 20
		}]
	};
	myChart2.setOption(option2);
}


function init3(data3) {
	myChart3 = echarts.init(document.getElementById('goucheng'), 'westeros');
	var option3 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			type: 'scroll',
			orient: 'vertical',
			right: 5,
			top: 55,
			bottom: 20,
			width : 60,
			textStyle: {
				color: '#91baff',
				fontSize: 12
			},
			pageIconColor : '#91baff',
			pageIconInactiveColor : '#91baff',
			pageTextStyle : {
				color : '#91baff'
			},
			data: ["有林地", "疏林地", "灌木林地", "未成林地", "苗圃林地", "宜林地", "农业辅助生产林地"]
		},
		series: [{
			name: '林地土地构成',
			type: 'pie',
			/*roseType: 'radius',*/
			radius: ['40%', '55%'],
			center: ['33%', '50%'],
			avoidLabelOverlap: false,
			label: {
				show : false,
				formatter: '{d}%',
			},

			/*labelLine: {
				normal: {
					show: false
				}
			},*/
			data: data3
		}]
	};
	myChart3.setOption(option3);

}


function init4(data40, data41) {
	myChart4 = echarts.init(document.getElementById('qiyuan'), 'westeros');
	var option4 = {
		/* tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		}, */
		legend: {
			type: 'scroll',
			orient: 'vertical',
			right: 38,
			top: 65,
			bottom: 20,
			textStyle: {
				color: '#91baff'
			},
			data: ["人工", "天然"]
		},
		series: [{
				type: 'liquidFill',
				label: {
				normal: {
						// textStyle: {
						color: '#0feeff',
						insideColor: 'white',
						fontSize: 12
						// }
					}
				},
				data: data40,
				animationDuration: 0,
				center: ['33%', '50%'],
				animationDurationUpdate: 1500,
				animationEasingUpdate: 'cubicOut'
			},
			{
				name: '起源结构',
				type: 'pie',
				/*roseType: 'radius',*/
				radius: ['43%', '60%'],
				center: ['33%', '50%'],
				avoidLabelOverlap: false,

				data: data41
			}
		]
	};
	myChart4.setOption(option4);
}


function init5(data5) {
	myChart5 = echarts.init(document.getElementById('leibie'), 'westeros');
	var option5 = {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)'
		},
		legend: {
			type: 'scroll',
			orient: 'vertical',
			right: 5,
			top: 55,
			bottom: 20,
			textStyle: {
				color: '#91baff'
			},
			data: ["国家公益林", "其他公益林", "商品林"]
		},
		series: [{
			name: '森林类别',
			type: 'pie',
			roseType: 'radius',
			radius: [35, 50],
			center: ['33%', '53%'],
			avoidLabelOverlap: false,
			label: {
				formatter: '{d}%',
				fontSize : 12
			},
			/*labelLine: {
				normal: {
					show: false
				}
			},*/
			data: data5
		}]
	};
	myChart5.setOption(option5);
}
