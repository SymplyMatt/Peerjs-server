const mongoose = require("mongoose");
const ExpressPeerServer = require('peer').ExpressPeerServer;
const peerExpress = require('express');
const peerApp = peerExpress();
const peerServer = require('http').createServer(peerApp);
const options = { debug: true }
const peerPort = 8080;

const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', 
};

peerApp.use('/peerjs', cors(corsOptions), ExpressPeerServer(peerServer, options));

peerServer.listen(peerPort, () => console.log(`Peer server now working on port ${peerPort}`));
