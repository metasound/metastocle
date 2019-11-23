const ServerExpress = require('spreadable/src/server/transports/express')();
const routes = require('./routes');
const routesClient = require('./client/routes');
const routesApi = require('./api/routes');
const routesApiMaster = require('./api/master/routes');
const routesApiSlave = require('./api/slave/routes');
const routesApiNode = require('./api/node/routes');

module.exports = (Parent) => {
  return class ServerExpressMetastocle extends (Parent || ServerExpress) {
    /**
     * @see ServerExpress.prototype.getMainRoutes
     */
    getMainRoutes() {
      return super.getMainRoutes().concat(routes);
    }
  
    /**
     * @see ServerExpress.prototype.getClientRoutes
     */
    getClientRoutes() {
      return super.getClientRoutes().concat(routesClient);
    }
  
    /**
     * @see ServerExpress.prototype.getApiRoutes
     */
    getApiRoutes() {
      return super.getApiRoutes().concat(routesApi);
    }
  
    /**
     * @see ServerExpress.prototype.getApiMasterRoutes
     */
    getApiMasterRoutes() {
     return super.getApiMasterRoutes().concat(routesApiMaster);
    }
  
    /**
     * @see ServerExpress.prototype.getApiSlaveRoutes
     */
    getApiSlaveRoutes() {
      return super.getApiSlaveRoutes().concat(routesApiSlave);
    }

    /**
     * @see ServerExpress.prototype.getApiNodeRoutes
     */
    getApiNodeRoutes() {
      return super.getApiNodeRoutes().concat(routesApiNode);
    }
  }
};