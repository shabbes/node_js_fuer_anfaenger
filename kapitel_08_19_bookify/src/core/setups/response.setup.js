// src/core/setups/response.setup.js

export default class ResponseSetup {
  static install(app) {
    app.use((req, res, next) => {
      req.isApi = req.path.startsWith('/api') || req.headers.accept?.includes('application/json');

      res.respond = (view, data) => {
        if (req.isApi) {
          res.json(data);
        } else {
          res.view(view, data);
        }
      };

      next();
    });
  }
}
