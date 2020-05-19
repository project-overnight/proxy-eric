require('dotenv').config();
const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

//Photo Banner module
app.use(createProxyMiddleware(`http://${HOST}:9001/api/photos`, { changeOrigin: true }));
//Description module
app.use(createProxyMiddleware(`http://${HOST}:9006/api/description`, { changeOrigin: true }));
app.use(createProxyMiddleware(`http://${HOST}:9006/api/place`, { changeOrigin: true }));
//Reservation module
app.use(createProxyMiddleware(`http://${HOST}:9003/api/room`, { changeOrigin: true }));
//Reviews module
app.use(createProxyMiddleware(`http://${HOST}:9999/api/ratings`, { changeOrigin: true }));
app.use(createProxyMiddleware(`http://${HOST}:9999/api/reviews`, { changeOrigin: true }));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.listen(PORT, () => console.log(`Listening at port ${PORT}...`));
