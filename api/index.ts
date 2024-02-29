// import express from 'express';
// import http from 'http';
// import bodyParser from 'body-parser';
// import cookieParser from 'cookie-parser';
// import compression from 'compression';
// import cors from 'cors';
const express = require("express");
import router from '../src/routes';


const app = express();
import { PORT } from '../src/config';

// may or may not need these
// app.use(cors({
//   credentials: true,
// }));
// app.use(compression());
// app.use(cookieParser());
// app.use(bodyParser.json());

app.use(express.json());
app.use('/api/v1/students', router);

// const server = http.createServer(app);

// locally
// app.listen(8080, () => {
//   console.log('Server running on http://localhost:8080/');
// });

// vercel
app.listen(3000, () => {
  console.log('Server running on http://localhost:8080/');
});
