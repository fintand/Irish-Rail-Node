import { Router } from 'express';
import trains from './trains';
import buses from './buses';

export default () => {
	let api = Router();

	api.use('/trains', trains());
  api.use('/buses', buses());

	return api;
}
