import AppModule from '../../app.module.js';
import Bottle from 'bottlejs';
import { SCOPE } from '../consts/dependency-injection.const.js';
import User from '../../user/models/user.model.js';

export default class ModuleSetup {
  static install(app) {
    const globalDI = new Bottle();
    const modules = AppModule.register().map((module) => module.register());

    ModuleSetup.registerModules(globalDI, SCOPE.SINGLETON, modules);

    app.use(async (req, res, next) => {
      if (req.session && req.session.userId) {
        try {
          const user = await User.findByPk(req.session.userId, {
            attributes: { exclude: ['passwordHash'] },
          });

          req.user = user ?? null;
        } catch (error) {
          console.error('Fehler beim Laden des Benutzers aus der Session:', error);

          req.user = null;
        }
      } else {
        req.user = null;
      }

      const requestDI = new Bottle();

      Object.assign(requestDI.container, globalDI.container);
      requestDI.constant('request:user', req.user);
      ModuleSetup.registerModules(requestDI, SCOPE.REQUEST, modules);
      req.di = requestDI;

      next();
    });

    return modules;
  }

  static registerModules(di, scope, modules) {
    for (const module of modules) {
      if (scope === SCOPE.REQUEST && Array.isArray(module.controllers)) {
        for (const definition of module.controllers) {
          const name = ModuleSetup.getName(module, definition.controller.prototype);

          if (Array.isArray(definition.injects)) {
            di.service(name, definition.controller, ...definition.injects);
          } else {
            di.service(name, definition.controller);
          }
        }
      }

      if (Array.isArray(module.services)) {
        for (const definition of module.services) {
          if (typeof definition === 'object') {
            if (definition.scope !== scope) {
              continue;
            }

            const name = ModuleSetup.getName(module, definition.service.prototype);

            if (Array.isArray(definition.injects)) {
              di.service(name, definition.service, ...definition.injects);
            } else {
              di.service(name, definition.service);
            }
          } else if (scope === SCOPE.SINGLETON) {
            const name = ModuleSetup.getName(module, definition.prototype);

            di.service(name, definition);
          }
        }
      }
    }
  }

  static getName(module, classPrototype) {
    return `${module.name}:${classPrototype.constructor.name}`;
  }
}
