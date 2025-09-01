import LoggingService from './services/logging.service.js';

export default class CoreModule {
  static register() {
    return {
      name: 'core',
      views: false,
      services: [LoggingService],
    };
  }
}
