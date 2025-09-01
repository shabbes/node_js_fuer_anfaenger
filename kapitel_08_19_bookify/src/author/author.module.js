import AuthorModel from './models/author.model.js';

export default class AuthorModule {
  static register() {
    return {
      name: 'author',
      models: [AuthorModel],
    };
  }
}
