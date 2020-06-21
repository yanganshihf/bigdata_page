var data_random1,data_random2,data_random3,data_random40,data_random41,data_random5;

function getValues(){
	debugger;
	var start = Math.random()*60
	data_random0 = [start, start+1, start+3, start+6, start+12, start+14, start+15];
	var start2 = Math.random()*4000
	data_random1 = [start2, start2+300, start2+400, start2+450, start2+650, start2+850, start2+1050,];
	data_random2 = [Math.random()*30, Math.random()*30, Math.random()*30, Math.random()*30, Math.random()*30, Math.random()*30, Math.random()*30];
	data_random3 =  [{
					value: Math.floor(Math.random()*50+100),
					name: '有林地'
				},
				{
					value: Math.floor(Math.random()*34+40),
					name: '疏林地'
				},
				{
					value: Math.floor(Math.random()*30+20),
					name: '灌木林地'
				},
				{
					value: Math.floor(Math.random()*30+5),
					name: '未成林地'
				},
				{
					value: Math.floor(Math.random()*20+3),
					name: '苗圃林地'
				},
				{
					value: Math.floor(Math.random()*10+2),
					name: '宜林地'
				},
				{
					value: Math.floor(Math.random()*7+1),
					name: '农业辅助生产林地'
				}
			]
			
	var fenzi = Math.random()*100;
	var fenmu = Math.random()*100+110;
	var start3 = (fenmu-fenzi)/fenmu;
	data_random40 = [start3, start3-0.1, start3-0.2, start3-0.3];
	data_random41 = [{
			value: fenzi,
			name: '人工'
		},
		{
			value: fenmu,
			name: '天然'
		}
	]
	
	data_random5 = [{
			value: Math.floor(Math.random()*150),
			name: '国家公益林'
		},
		{
			value: Math.floor(Math.random()*150),
			name: '其他公益林'
		},
		{
			value: Math.floor(Math.random()*150),
			name: '商品林'
		}
	]
	
}
