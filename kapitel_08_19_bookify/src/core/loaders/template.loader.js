// src/core/loaders/template.loader.js
import nunjucks from 'nunjucks';
import path from 'path';
import fs from 'fs';

export default class TemplateLoader extends nunjucks.Loader {
  constructor(prefixMap = {}) {
    super();

    this.prefixMap = prefixMap;
    this.searchPaths = Object.values(prefixMap);
    this.async = false;
  }

  getSource(name) {
    const [prefix, template] = name.split(':');
    const basePath = this.prefixMap[prefix];

    if (!basePath) {
      throw new Error(`Präfix '${prefix}' nicht im TemplateLoader gefunden`);
    }

    const fullPath = path.resolve(basePath, template);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    return {
      src: fs.readFileSync(fullPath, 'utf-8'),
      path: fullPath,
      noCache: true,
    };
  }
}
