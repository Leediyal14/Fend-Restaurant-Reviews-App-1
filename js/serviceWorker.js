if (navigator.serviceWorker) {
	navigator.serviceWorker.register('./worker.js')
	.then(function () {
		/* body... */
		console.log('sw Registered');
	})
	.catch(function () {
		/* body... */
		console.log('registeration Failed');
	});
}