const cds = require('@sap/cds');
const cov2ap = require('@cap-js-community/odata-v2-adapter');

cds.on('bootstrap', app => {
  app.use(cov2ap({
    path: '/odata/v2',
    targetPath: '/odata/v4'
  }));
});

module.exports = cds.server;