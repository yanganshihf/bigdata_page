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

var myChart0 = echarts.init(document.getElementById('main0'), 'macarons');
var option0 = {
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)'
	},
	legend: {
		type: 'scroll',
		orient: 'vertical',
		right: 5,
		top: 35,
		bottom: 20,
		data: ["大疆", "御2", "禅思", "EBee", "精灵"]
	},
	series: [{
		name: '灾害类型',
		type: 'pie',
		radius: ['40%', '55%'],
		avoidLabelOverlap: false,
		label: {
			formatter: '{d}%',
		},
		/*labelLine: {
			normal: {
				show: false
			}
		},*/
		data: [{
				value: 33,
				name: '大疆'
			},
			{
				value: 31,
				name: '御2'
			},

			{
				value: 23,
				name: '禅思'
			},
			{
				value: 13,
				name: 'EBee'
			},
			{
				value: 154,
				name: '精灵'
			}
		]
	}]
};
myChart0.setOption(option0);
var myChart1 = echarts.init(document.getElementById('main1'), 'macarons');
// 指定图表的配置项和数据
var option1 = {

	tooltip: {},
	/*legend: {
		data: ['']
	},*/
	xAxis: {
		data: ["大疆", "御2", "精灵", "禅思", "EBee", "精灵4"],
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	yAxis: {
		show: false,
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	series: [{
		name: '',
		type: 'bar',
		itemStyle: barstyle,
		label: {
			show: true,
			position: 'top',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 15
			}
		},
		data: [5, 20, 36, 10, 10, 20]
	}],

};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('main2'), 'macarons');
// 指定图表的配置项和数据
var option2 = {

	xAxis: {
		type: 'category',
		data: ['05', '06', '07', '08', '09', '10', '11'],
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}

	},
	yAxis: {
		show: false,
		type: 'value',
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	series: [{
			name: '邮件营销',
			type: 'line',
			stack: '总量',
			areaStyle: {},
			data: [120, 132, 101, 134, 90, 230, 210]
		},
		{
			name: '联盟广告',
			type: 'line',
			stack: '总量',
			areaStyle: {},
			data: [220, 182, 191, 234, 290, 330, 310]
		},
		{
			name: '视频广告',
			type: 'line',
			stack: '总量',
			areaStyle: {},
			data: [150, 232, 201, 154, 190, 330, 410]
		},
		{
			name: '直接访问',
			type: 'line',
			stack: '总量',
			areaStyle: {},
			data: [320, 332, 301, 334, 390, 330, 320]
		},
		{
			name: '搜索引擎',
			type: 'line',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'top'
				}
			},
			areaStyle: {},
			data: [820, 932, 901, 934, 1290, 1330, 1320]
		}
	]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('main3'), 'macarons');
// 指定图表的配置项和数据
var option3 = {

	tooltip: {},
	/*legend: {
		data: ['']
	},*/
	xAxis: {
		data: ["大疆", "御2", "精灵", "禅思", "EBee", "精灵4"],
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	yAxis: {
		show: false,
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	series: [{
		name: '',
		type: 'bar',
		itemStyle: barstyle,
		label: {
			show: true,
			position: 'top',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 15
			}
		},
		data: [5, 20, 36, 10, 10, 20]
	}],

};
myChart3.setOption(option3);

var myChart4 = echarts.init(document.getElementById('main4'), 'macarons');
// 指定图表的配置项和数据
var option4 = {

	tooltip: {},
	/*legend: {
		data: ['']
	},*/
	xAxis: {
		data: ["大疆", "御2", "精灵", "禅思", "EBee", "精灵4"],
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	yAxis: {
		show: false,
		axisLabel: {
			color: '#fff'
		},
		splitLine: { // 隐藏网格线
			show: false
		}
	},
	series: [{
		name: '',
		type: 'bar',
		itemStyle: barstyle,
		label: {
			show: true,
			position: 'top',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 15
			}
		},
		data: [5, 20, 36, 10, 10, 20]
	}],

};
myChart4.setOption(option4);
