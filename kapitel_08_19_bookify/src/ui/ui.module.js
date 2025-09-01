export default class UIModule {
  static register() {
    return {
      name: 'ui',
      views: ['layouts', 'partials'],
    };
  }
}
