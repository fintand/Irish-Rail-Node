import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import middleware from './middleware';
import api from './api';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

// 3rd party middleware
app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));



// internal middleware
app.use(middleware({ config }));

// api router
app.use('/api', api({ config }));

const PORT = process.env.PORT || 8080

app.server.listen(PORT);

console.log(`Started on port ${PORT}`);


export default app;
