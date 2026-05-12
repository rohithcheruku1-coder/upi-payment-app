const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const Payment =
 require('./models/Payment');

const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect(

'mongodb://rohith:Rohithdata123@ac-9gt7l2v-shard-00-00.fh5o0r7.mongodb.net:27017,ac-9gt7l2v-shard-00-01.fh5o0r7.mongodb.net:27017,ac-9gt7l2v-shard-00-02.fh5o0r7.mongodb.net:27017/?ssl=true&replicaSet=atlas-f06c7u-shard-0&authSource=admin&appName=Cluster0'

)

.then(() => {

  console.log('MongoDB Connected');

})

.catch((err) => {

  console.log(err);

});

// SAVE PAYMENT

app.post('/save-payment',
 async (req, res) => {

  try {

    const payment =
      new Payment(req.body);

    await payment.save();

    res.json({

      success: true

    });

  } catch (error) {

    res.status(500).json({

      success: false

    });

  }

});

// TEST ROUTE

app.get('/', (req, res) => {

  res.send('Backend Running');

});

app.listen(5000, () => {

  console.log(
   'Server Running On Port 5000'
  );

});