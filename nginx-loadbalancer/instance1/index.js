import express from 'express';

const app = express();

app.get('/api/status', (req, res) => {
  return res.status(200).json({
    msg: "ok from instance 1",
  });
});

app.listen(3000, () => {
  console.log(`App is running on server ${3000}`);
});
