const cds = require('@sap/cds');
const cov2ap = require('@cap-js-community/odata-v2-adapter');
const express = require("express");
const path = require("path");

cds.on('bootstrap', app => {
  app.use(cov2ap({
    path: '/odata/v2',
    targetPath: '/odata/v4'
  }));

  app.use(
    "/resources/ui5Lib",
    express.static(path.join(__dirname, "static/ui5Lib"))
  );
});

module.exports = cds.server;