import { version } from '../../package.json';
import { Router } from 'express';
import v1 from './v1/index';

const secret = process.env.SECRET;

export default ({ config, db }) => {
	let api = Router();

	// simple middleware for 'secret'
	api.use((req, res, next) => {
		if(req.get('secret') === secret) {
			next();
		} else {
			res.status(401).send({error: true})
		}
	})

	// realtime info
	api.use('/v1', v1());


	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
