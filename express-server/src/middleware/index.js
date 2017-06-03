import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	process.on('uncaughtException', function (error) {
	   console.log(error.stack);
	});

	return routes;
}
