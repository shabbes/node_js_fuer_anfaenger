import startpageRoutes from './routes/startpage.routes.js';
import StartpageController from './controllers/startpage.controller.js';

export default class StartpageModule {
  static register() {
    return {
      name: 'startpage',
      controllers: [
        {
          controller: StartpageController,
          injects: ['book:BookService'],
          path: '/',
          router: startpageRoutes,
        },
      ],
    };
  }
}
