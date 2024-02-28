import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import router from '../routes';


const app = express();

// may or may not need these
app.use(cors({
  credentials: true,
}));
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(express.json());
app.use('/api/v1/students', router);

// const server = http.createServer(app);


app.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});
