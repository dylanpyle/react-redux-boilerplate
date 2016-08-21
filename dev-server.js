const webpack = require('webpack');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const path = require('path');

const config = require('./webpack.config');

const app = express();
const port = process.env.PORT || 3003;

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on :${port}`);
});
