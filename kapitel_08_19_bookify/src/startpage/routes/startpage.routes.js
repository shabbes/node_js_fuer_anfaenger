// src/startpage/routes/startpage.routes.js

export default function (router, controllerMethod) {
  router.get('/', controllerMethod('view'));
}
