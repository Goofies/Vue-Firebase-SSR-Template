const functions = require("firebase-functions");
const server = require("./server/server.js");

exports.server = functions.https.onRequest(server.handler);
