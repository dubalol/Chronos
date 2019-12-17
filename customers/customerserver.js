const express = require('express');

const PORT = 5555;
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const path = require('path');
const controller = require('./CustomerController');


// eslint-disable-next-line max-len
//  ********** I PROBABLY STILL NEED THIS PART FOR CHRONOS TO WORK AND DEBUG MY MICOSERVICE *************
// const mw = require('../mwMongo.js');
//  app.use('/', mw.microCom(path.basename(__filename)));
// mw.microHealth(path.resolve(__filename));


// const mw = require("../mwSQL.js")
// app.use('/', mw.microCom('customers'))
// mw.microHealth('customers');


//  ********** END **********


// Create a new customer
app.post('/createcustomer', controller.createcustomer, (req, res) => {
  res.status(200).json(res.locals.createcustomer);
});

// List all customers
app.get('/getcustomers', controller.getcustomers, (req, res) => {
  res.status(200).json(res.locals.getcustomers);
});

app.delete('/deletecustomer:id?', controller.deletecustomer, (req, res) => {
  res.status(200).json(res.locals.deletecustomer);
});

app.listen(PORT, () => {
  console.log(`Customer server running on port ${PORT}...`);
});

// ******** I DONT THINK THIS PART IS NECESSARY. I'LL JUST LEAVE A COMMENT HERE **********
// Get customer by using their id
// app.get('/customer/:id', (req, res, next) => {
//   Customer.findById(req.params.id)
//     .then((customer) => {
//       if (customer) {
//         res.json(customer);
//         next();
//       } else {
//         Promise.reject(err);
//       }
//     });
// });

// ********* END ********

// Delete a customer by their id
// app.delete('/customer/:id', (req, res, next) => {
//   Customer.findOneAndRemove(req.params.id)
//     .then(() => {
//       res.send('Customer successfully deleted');
//       next();
//     }).catch((err) => {
//       if (err) {
//         throw err;
//       }
//     });
// });


// mongoose.connect('mongodb+srv://numanzor:Nu121692.@microservice-tutorial-hq75f.mongodb.net/customersservice', () => {
//   console.log('Customers database is connected...');
// });
