import winston from 'winston';

export default class LoggingService {
  constructor() {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
      ],
    });
  }

  log(message) {
    this.logger.info(message);
  }

  warn(message) {
    this.logger.warn(message);
  }

  debug(message) {
    this.logger.debug(message);
  }

  error(message) {
    this.logger.error(message);
  }

  fatal(message) {
    this.logger.fatal(message);
  }
}
