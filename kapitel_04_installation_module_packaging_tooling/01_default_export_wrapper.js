// commonjs.js
module.exports = {
  greet: function () {
    console.log('Hello from CommonJS');
  },
};

// esmodule.mjs
import commonjsModule from './commonjs.js';

commonjsModule.greet(); // Ausgabe: Hello from CommonJS