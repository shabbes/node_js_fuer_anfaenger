async function loadModule() {
  const module = await import('./module.js');

  module.doSomething();
}

loadModule();