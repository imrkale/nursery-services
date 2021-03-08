const functions = require('firebase-functions');
const express = require('express');
const cors=require('cors');
const stripe =require('stripe')('sk_test_51ISbIiHjsrQ2MELrD4nlxDUnaeNxbCSzXUYdBOA0n4sigW6XbLjT9nupeoYGlfFCOW6eEKBkalW1yIQkOrDRGb6000ICv3gIfA')

//API

//AppConfig
const app=express();
//Middlewares
app.use(cors({origin:true}));
app.use(express.json());//this will allow us to pass data
//API route

app.get('/',(req,res)=>res.status(200).send('Hello World'))
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
      description: "My First Card Payment",
    });
  
    // OK - Created
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });
  
  // - Listen command
//   exports.api = functions.https.onRequest(app);
app.listen(5000,()=>console.log("Running on port 5000"))

//api endpoint
//http://localhost:5001/clone-2cc1c/us-central1/api