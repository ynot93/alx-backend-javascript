import express from 'express';
import router from './routes/index.js';

const app = express();

app.use('/', router);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
