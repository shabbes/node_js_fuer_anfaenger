import CoreModule from './core/core.module.js';
import UIModule from './ui/ui.module.js';
import BookModule from './book/book.module.js';
import StartpageModule from './startpage/startpage.module.js';
import AuthorModule from './author/author.module.js';
import ErrorModule from './error/error.module.js';
import UserModule from './user/user.module.js';
import AdminModule from './admin/admin.module.js';

export default class AppModule {
  static register() {
    return [
      CoreModule,
      UIModule,
      BookModule,
      StartpageModule,
      AuthorModule,
      ErrorModule,
      UserModule,
      AdminModule,
    ];
  }
}
