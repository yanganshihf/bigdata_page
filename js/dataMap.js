var data11 = [{
		name: '001',
		value: 20057.34
	},
	{
		name: '002',
		value: 15477.48
	},
	{
		name: '003',
		value: 31686.1
	},
	{
		name: '004',
		value: 6992.6
	},
	{
		name: '005',
		value: 44045.49
	},
	{
		name: '006',
		value: 20057.34
	},
	{
		name: '007',
		value: 15477.48
	},
	{
		name: '008',
		value: 31686.1
	},
	{
		name: '009',
		value: 6992.6
	},
	{
		name: '010',
		value: 44045.49
	},
	{
		name: '011',
		value: 15477.48
	}
]

var chart;
var chart2;
$.get('json/160800.json', function(xb) {
	$.get('json/160800.json', function(xj) {

		echarts.registerMap('xb', xb);
		echarts.registerMap('xj', xj);

		chart = echarts.init(document.getElementById('mymap'));

		var option6 = {
			tooltip: {
				trigger: 'item',
				formatter: '{b}<br/>'
			},
			series: [
				{
					name: '小班',
					type: 'map',
					zoom: 1.2,
					mapType: 'xb', // 自定义扩展图表类型
					label: {
						show: true
					},
					itemStyle: {
						normal: {
							label: {
								show: true, //默认是否显示省份名称
								textStyle: {
									color: 'rgb(244,233,37)'
								}
							},
							borderWidth: 2,
							borderColor: 'rgb(100,245,247)',
							areaColor: 'rgb(26,69,175,0.2)',
							shadowColor: 'rgba(0, 0, 0, 0.5)',
							shadowBlur: 20
						},
						emphasis: {
							label: {
								show: true, //选中状态是否显示省份名称
							},
							areaStyle: {
								color: '#90c31d', //选中状态的地图板块颜色
							},
						},
					},
					data: data11
				}
			]
		}

		// 悬停事件
		chart.on("mouseover", function(params) {
			// 县界不高亮显示
			if (params.seriesName == "县界") {
				chart.dispatchAction({
					type: 'downplay'
				});
			}
		});

		chart.setOption(option6)
		// 单击事件
		chart.on('click', function(params) {
			console.log(params); //此处写点击事件内容
			var clickName = params.name;
			console.log(clickName);
			
			var features;
			var xbclick;
			$.get('json/160800.json', function(xb) {
				xbclick = xb;
				features = xb.features;
				var clickfeatures = [];
				for (i = 0; i < features.length; i++) {
					if (features[i].properties.name == clickName) {
						clickfeatures = [features[i]]
						
						xbclick.features = clickfeatures;
						echarts.registerMap('xbclick', xbclick);
						var option7 = {
							tooltip: {
								trigger: 'item',
								formatter: '{b}<br/>'
							},
							series: [{
								name: '小班',
								type: 'map',
								zoom: 1.2,
								mapType: 'xbclick', // 自定义扩展图表类型
								label: {
									show: true
								},
								roam: true,
								itemStyle: {
									normal: {
										label: {
											show: true, //默认是否显示省份名称
											textStyle: {
												color: 'rgb(244,233,37)'
											}
										},
										borderWidth: 2,
										borderColor: 'rgb(100,245,247)',
										areaColor: 'rgb(26,69,175,0.2)',
										shadowColor: 'rgba(0, 0, 0, 0.5)',
										shadowBlur: 20
									},
									emphasis: {
										label: {
											show: true, //选中状态是否显示省份名称
										},
										areaStyle: {
											color: '#90c31d', //选中状态的地图板块颜色
										},
									},
								},
								data: []
							}]
						}
						
						$("#mymap").hide();
						$("#mymap2").show();
						$("#returnbtn").show();
						
						chart2 = echarts.init(document.getElementById('mymap2'));
						chart2.setOption(option7);
						
						switch (clickName){
							case "兴安林场":
							initdata(data_xa0,data_xa1,data_xa2,data_xa3,data_xa40,data_xa41,data_xa5);
								break;
							default:
							getValues();
							setTimeout(function(){
								initdata(data_random0,data_random1,data_random2,data_random3,data_random40,data_random41,data_random5);
							},500)
							break;
						}
					}
				}
			})
			
			$("#returnbtn").click(function() {
				$("#returnbtn").hide();
				$("#mymap2").hide();
				$("#mymap").show();
				initdata(data0,data1,data2,data3,data40,data41,data5);
			})
		});
	})
});
