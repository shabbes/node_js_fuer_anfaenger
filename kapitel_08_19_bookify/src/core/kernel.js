// src/core/kernel.js

import express from 'express';
import bodyParser from 'body-parser';
import RouterSetup from './setups/router.setup.js';
import TemplateEngineSetup from './setups/template-engine.setup.js';
import ModuleSetup from './setups/module.setup.js';
import ModelSetup from './setups/model.setup.js';
import sequelize from './database/connection.js';
import methodOverride from 'method-override';
import errorHandler from '../error/middlewares/error-handler.middleware.js';
import SessionSetup from './setups/session.setup.js';
import ResponseSetup from './setups/response.setup.js';

export default class Kernel {
  async boot() {
    const app = express();

    SessionSetup.install(app);

    const modules = ModuleSetup.install(app);

    app.use('/uploads', express.static('uploads'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(
      methodOverride((req) => {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
          const method = req.body._method;

          delete req.body._method;

          return method;
        }
      }),
    );

    TemplateEngineSetup.install(app, modules);
    ResponseSetup.install(app);
    RouterSetup.install(app, modules);
    await ModelSetup.install(sequelize, modules);

    app.use(errorHandler);

    return app;
  }
}
