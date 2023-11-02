const mongoose = require("mongoose");
const ExpressPeerServer = require('peer').ExpressPeerServer;
const peerExpress = require('express');
const peerApp = peerExpress();
const peerServer = require('http').createServer(peerApp);
const options = { debug: true }
const peerPort = 8080;

// Import the 'cors' library
const cors = require('cors');

// Set up CORS middleware to allow requests from your React app's origin
peerApp.use(cors());

peerApp.use('/peerjs', ExpressPeerServer(peerServer, options));

peerServer.listen(peerPort, () => console.log(`Peer server now working on port ${peerPort}`));
