var time=0;
var period=72;
setInterval(function() {
	if(time<1000-2*period)
	{
		loaddata(time);
		time++;
	}
	else{
		time=0;
	}
  }, 2000)



function loaddata(time){
    fetch("https://cl-su.github.io/data.json")
    .then((response) => {
		// console.log("response",response.json())
        return response.json()
    })
    .then((data) => {	
        // console.log("api data",data.data) 
		ar_predict = data["prediction"][0]["data"].slice(time,time+period);
		linechart.data.datasets[1].data = ar_predict;
		rf_predict = data["prediction"][1]["data"].slice(time,time+period);
		linechart.data.datasets[2].data = rf_predict;
		// ann_predict = data["prediction"][0]["data"].slice(time+period,time+2*period);
		// linechart.data.datasets[3].data = ann_predict;
		// cnn_predict = data["prediction"][1]["data"].slice(time+period,time+2*period);
		// linechart.data.datasets[4].data = cnn_predict;
		// console.log("api data",data) 
		var date = new Array()
		for (var i=0;i<period;i++)
		{ 
			date.push(data["Month"][time+i]+"."+data["Day"][time+i]+"."+data["Hour"][time+i])
		}
		linechart.data.labels = date;
		linechart.data.datasets[0].data = data["Y test"].slice(time,time+period-24)
		linechart.update();
    })
    .catch((err) => {
        console.log(err)
    })
}



var linechart = new Chart(document.getElementById("linechart"), 
{
	type: 'line',
	data: {
		labels: ['y0', 'y1','y2','y3','y4','y5','y6','y7','y8','y9','y10', 'y11','y12','y13','y14','y15','y16','y17','y18','y19','y20','y21','y22','y23',
		// 'y24', 'y25','y26','y27','y28','y29','y30','y31','y32','y33','y34','y35','y36','y37','y38','y39','y40','y41','y42','y43','y44','y45','y46','y47',
		// 'y48','y49','y50','y51','y52','y53','y54','y55','y56','y57','y58','y59','y60','y61','y62','y63','y64','y65','y66','y67','y68','y69','y70','71'
	],
		datasets: [{
			label: 'Real-time data',
			backgroundColor: "rgb(255, 159, 64)",
			borderColor: "rgb(255, 159, 64)",
			data: [40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
			fill: false,
		}, {
			label: 'AR prediction',
			backgroundColor: window.chartColors.purple,
			borderColor: window.chartColors.purple,
			data: [40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
			fill: false,
		}, {
			label: 'RF prediction',
			fill: false,
			backgroundColor: window.chartColors.navy,
			borderColor: window.chartColors.navy,
			data: [10,40,20,35,25,50,10,70,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
		}
		// ,{
		// 	label: 'ANN prediction',
		// 	backgroundColor: "rgb(00, 125, 00)",
		// 	borderColor: "rgb(00, 125, 00)",
		// 	data: [40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
		// 	// data: setTimeout(ar_predict, 1000),
		// 	fill: false,
		// }, {
		// 	label: 'CNN prediction',
		// 	fill: false,
		// 	backgroundColor: "rgb(255, 205, 86)",
		// 	borderColor: "rgb(255, 205, 86)",
		// 	data: [10,40,20,35,25,50,10,70,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
		// }
		]
	},
	options: {
		responsive: true,
		// title: {
		// 	display: true,
		// 	text: 'Chart.js Line Chart'
		// },
		tooltips: {
			mode: 'index',
			// intersect: false,
		},
		// hover: {
		// 	mode: 'nearest',
		// 	intersect: true,
		// },
		scales: {
			xAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Hour'
				}
			}],
			yAxes: [{
				display: true,
				scaleLabel: {
					display: true,
					labelString: 'Value'
				}
			}]
		}
	}
});



