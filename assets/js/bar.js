new Chart(document.getElementById("barchart"), {
	type: 'bar',
	data: {
		labels: ['Training RMSE', 'Test RMSE', 'Training MAE', 'Test MAE'],
		datasets: [{
			data: [143.98,166.44,81.51,119.57],
			label: 'AR prediction',
			backgroundColor: "#8B658B",
			borderWidth: 1,
		}, {
			data: [96.63,107.54, 45.59, 49.01],
			label: 'RF prediction',
			backgroundColor: "#000080",
			borderWidth: 1,
		}
		, {
			data: [78.43,82.97, 30.45, 33.23],
			label: 'ANN prediction',
			backgroundColor: "#008000",
			borderWidth: 1,
		}, {
			data: [86.78,89.54, 31.67, 34.01],
			label: 'CNN prediction',
			backgroundColor: "#FFD700",
			borderWidth: 1,
		}]
	},
	options: {
		responsive: true,
		legend: {
			position: 'top',
		},
	}
});


