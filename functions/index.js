const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe");
const { request, response } = require("express");
("sk_test_51ILyFXKN6yGAiToSh6SM6We3J7mxuiS1GkKRYIqTnORmQnBDqEE9EMbE7TP2jKgGz0DVvhDpv3RsTHiFvTKncKlx00IUQg9lV7");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API RUTAS
app.get(("/"(request, response) = res.status(200).send("hello world")));

// Listen command
exports.api = functions.https.onRequest(app);
