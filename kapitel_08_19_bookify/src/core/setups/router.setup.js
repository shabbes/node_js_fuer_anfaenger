// src/core/setups/router.setup.js
import express from 'express';
import ModuleSetup from './module.setup.js';

export default class RouterSetup {
  static install(app, modules) {
    for (const module of modules) {
      if (Array.isArray(module.controllers)) {
        for (const definition of module.controllers) {
          if (typeof definition.path !== 'string' || typeof definition.router !== 'function') {
            continue;
          }

          const controllerName = ModuleSetup.getName(module, definition.controller.prototype);

          app.use(definition.path, this.initializeRouter(definition.router, controllerName));
          app.use(
            `/api${definition.path}`,
            this.initializeRouter(definition.router, controllerName),
          );
        }
      }
    }
  }

  static initializeRouter(moduleRouter, controllerName) {
    const router = express.Router({ mergeParams: true });

    moduleRouter(router, (methodName) => {
      return async (req, res, next) => {
        const controller = req.di.container[controllerName];

        if (typeof controller[methodName] !== 'function') {
          return res.status(500).send(`Methode ${methodName} nicht gefunden`);
        }

        try {
          await controller[methodName](req, res, next);
        } catch (err) {
          next(err);
        }
      };
    });

    return router;
  }
}
