const express = require('express');
const http = require('http');
const https = require('https');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const next = require('next');
const createIframe = require('node-iframe');
// const nextI18NextMiddleware = require('next-i18next/middleware').default;

// const nextI18next = require('./i18n');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


app
  .prepare()
  .then(() => {
    const server = express();


    // server.use(nextI18NextMiddleware(nextI18next));
    server.use(bodyParser.json({limit: '150mb'}));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    server.use(cors());
    // server.use(createIframe);
    // server.get("/iframe", (req, res) => {
    //     res.createIframe({
    //       url: req.query.url,
    //       baseHref: req.query.baseHref, // optional: determine how to control link redirects,
    //       config: { cors: { script: true } }, // optional: determine element cors or inlining #shape src/iframe.ts#L34
    //     });
    // });

    server.all('*', (req, res) => handle(req, res));
    http.createServer(server).listen(process.env.PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
