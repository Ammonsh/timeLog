const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/times', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

// Create a scheme for times
const timeSchema = new mongoose.Schema({
  hours: Number,
});

// Create a model for times
const Time = mongoose.model('times', timeSchema);

app.post('/api/times', async (req, res) => {
    const time = new Time({
      hours: req.body.hours,
    });
    try {
      await time.save();
      res.send(time);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

app.get('/api/times', async (req, res) => {
    try {
        let times = await Time.find();
        res.send(times);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));