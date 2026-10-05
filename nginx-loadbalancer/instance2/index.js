import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/status', (req, res) => {
  return res.status(200).json({
    msg: 'ok from instance 2',
  });
});

app.listen(3001, () => {
  console.log(`App is running on server ${3001}`);
});
