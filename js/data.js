var myChart0 = echarts.init(document.getElementById('main0'), 'walden');
var option0 = {
	
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b}: {c} ({d}%)'
	},
	series: [{
		name: '灾害类型',
		type: 'pie',
		radius: ['50%', '65%'],
		avoidLabelOverlap: false,
		label: {
			formatter: '{b}：\n{d}%',
		},
		/*labelLine: {
			normal: {
				show: false
			}
		},*/
		data: [{
				value: 33,
				name: '大疆',
				label: {
					normal: {
						show: true, //省份名称  
						position: 'center',
						fontWeight: 'bold',
						fontSize: 18,
						color: '#fff',
						formatter: '181GB'
					}
				}
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
var myChart1 = echarts.init(document.getElementById('main1'), 'walden');
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

xmgkvm = new Vue({
	el:'#gaikuang',
	data:{
		info : {}
	}
})
/* 项目概况数据 */
$.get('json/xmgk.json',{},function(res){
	xmgkvm.info = res[0].data;
},'json')

var myChart2 = echarts.init(document.getElementById('main2'), 'walden');
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
		data: [82, 133, 90, 93, 129, 65, 132],
		type: 'line',
		label: {
			show: true,
			position: 'top',
			textStyle: {
				color: '#FFFFFF',
				fontSize: 15
			}
		},
	}]
};
myChart2.setOption(option2);

var myChart3 = echarts.init(document.getElementById('main3'), 'walden');
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

var myChart4 = echarts.init(document.getElementById('main4'), 'walden');
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
