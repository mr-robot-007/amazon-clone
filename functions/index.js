const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// const { response } = require("express");

const stripe = require("stripe")(
    // eslint-disable-next-line max-len
    "sk_test_51LxoTESBVmigZKOxcYU3brBUOKQQnPdjMVGawxN7GcBDQS7cjhKfUUW4F1O3StnIl4Yn1LftIlSWQ1XxZN60wxoI00gug5zy0e",
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment request recieved >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // this was in subunits of currency
    currency: "inr",
  });
  // OK -created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// api end point - http://127.0.0.1:5001/clone-d8d62/us-central1/api/
