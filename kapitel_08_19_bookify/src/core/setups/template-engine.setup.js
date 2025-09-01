// src/core/setups/template-engine.setup.js
import nunjucks from 'nunjucks';
import TemplateLoader from '../loaders/template.loader.js';
import path from 'path';
import dayjs from 'dayjs';

export default class TemplateEngineSetup {
  static install(app, modules) {
    const directories = TemplateEngineSetup.getDirectories(modules);
    const loader = new TemplateLoader(directories);
    const env = new nunjucks.Environment(loader, {
      autoescape: true,
      express: app,
    });

    env.addFilter('date', function (value, format = 'DD.MM.YYYY') {
      if (!value) {
        return '';
      }

      return dayjs(value).format(format);
    });

    app.use((req, res, next) => {
      res.view = (template, context = {}) => {
        env.render(template, context, (err, html) => {
          if (err) {
            return res.status(500).send(err.message);
          }

          res.send(html);
        });
      };

      next();
    });
  }

  static getDirectories(modules) {
    // Initialisiert ein leeres Objekt für View-Verzeichnisse
    const directories = {};

    // Iteriert über jedes registrierte Modul
    for (const module of modules) {
      if (typeof module.views === 'boolean' && module.views === false) {
        // Überspringt das Modul, wenn views explizit auf false gesetzt ist
        continue;
      }

      // Wenn views ein Array ist (mehrere View-Verzeichnisse)
      if (Array.isArray(module.views)) {
        for (const view of module.views) {
          // Fügt jeden View-Namen als Schlüssel hinzu, Wert ist der Pfad zum View-Ordner
          directories[view] = path.join('src', module.name, view);
        }
      } else {
        // Standardfall: Verzeichnis ist 'src/<modulename>/views'
        directories[module.name] = path.join('src', module.name, 'views');
      }
    }

    // Gibt das gesammelte Verzeichnisobjekt zurück
    return directories;
  }
}
