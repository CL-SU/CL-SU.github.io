
function loaddata(url){
    fetch(url)
    .then((response) => {
		// console.log("response",response.json())
        return response.json()
    })
    .then((data) => {	
        // console.log("api data",data.data) 
		if (data.name=="AR prediction")
		{
			ar_predict = data.data.slice(time,time+24);
			linechart.data.datasets[0].data = ar_predict;
			linechart.update();
		}
		else
		{
			rf_predict = data.data.slice(time,time+24);
			linechart.data.datasets[1].data = rf_predict;
			linechart.update();
		}
		console.log("api data",data) 
		
    })
    .catch((err) => {
        console.log(err)
    })
}

// const sleep = (timeout= 1000)=>new Promise((resolve, reject)=>{
//     setTimeout(resolve, timeout);
// });


// let timer = async(timeout) => {
//     for(let i = 0; i< timeout; i++) {
//         await sleep(1000);
//         console.log(i+1);
//     }
// }

setInterval(function() {
	if(time<976)
	{
		loaddata("https://cl-su.github.io/ar_predict.json",time);
		loaddata("https://cl-su.github.io/rf_predict.json",time);
		time++;
	}
	else{
		time=0
	}
  }, 1000)

var time=0;
// while (time<993)
// {
// 	loaddata("https://cl-su.github.io/ar_predict.json",time);
// 	loaddata("https://cl-su.github.io/rf_predict.json",time);
// 	timer(1);
// 	time++;
// }

var linechart = new Chart(document.getElementById("linechart"), 
{
	type: 'line',
	data: {
		labels: ['y0', 'y1','y2','y3','y4','y5','y6','y7','y8','y9','y10', 'y11','y12','y13','y14','y15','y16','y17','y18','y19','y20','y21','y22','y23'],
		datasets: [{
			label: 'AR prediction',
			backgroundColor: window.chartColors.navy,
			borderColor: window.chartColors.navy,
			data: [40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
			// data: setTimeout(ar_predict, 1000),
			fill: false,
		}, {
			label: 'RF prediction',
			fill: false,
			backgroundColor: window.chartColors.purple,
			borderColor: window.chartColors.purple,
			data: [10,40,20,35,25,50,10,70,40,20,35,25,50,10,70,10,40,20,35,25,50,10,70,10],
		}]
	},
	options: {
		responsive: true,
		// title: {
		// 	display: true,
		// 	text: 'Chart.js Line Chart'
		// },
		tooltips: {
			mode: 'index',
			intersect: false,
		},
		hover: {
			mode: 'nearest',
			intersect: true,
		},
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



