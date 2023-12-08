import express from 'express';
import insuranceRouter from './routes/insuranceRoutes.js';
import cors from 'cors';
 
const app = express();
app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use("/api/insurance", insuranceRouter);

app.get('/', (req, res) => {
  res.send('Hello world!');
}); 

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
export default app;