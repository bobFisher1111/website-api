const express = require("express");
const cors = require('cors');
// const bodyParser = require('body-parser');
import router from '../src/routes/routes';


const app = express();
import { PORT } from '../src/config';

// import express from 'express';
// import http from 'http';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
// import cors from 'cors';

// may or may not need these
// app.use(cors({
//   credentials: true,
// }));
app.use(cors());
// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

app.use(express.json());
app.use('/api/v1/gamersshrine', router);

// const server = http.createServer(app);

// locally
// app.listen(8080, () => {
//   console.log('Server running on http://localhost:8080/');
// });

// vercel
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
