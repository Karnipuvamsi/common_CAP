const cds = require('@sap/cds');

module.exports = async function (srv) {
  const northwind = await cds.connect.to('Northwind'); // external service name from package.json

  srv.on('READ', 'Products', async (req) => {
    return northwind.run(req.query);
  });

  srv.on('READ', 'Categories', async (req) => {
    return northwind.run(req.query);
  });
};
