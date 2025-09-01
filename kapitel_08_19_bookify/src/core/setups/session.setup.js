// src/setups/session.setup.js

import session from 'express-session';
import { RedisStore } from 'connect-redis';
import { createClient } from 'redis';
import jwt from 'jsonwebtoken';

export default class SessionSetup {
  static install(app) {
    const redisClient = createClient({
      url: process.env.REDIS_URL,
      legacyMode: false, // Auf true setzen, falls erforderlich, um mit älteren Redis-Versionen zu arbeiten
    });

    redisClient.connect().catch(console.error);

    const redisStore = new RedisStore({
      client: redisClient,
      prefix: 'bookify:',
    });

    app.use(
      session({
        store: redisStore,
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
          sameSite: 'strict',
          maxAge: 1000 * 60 * 60 * 24, // 1 Tag
        },
      }),
    );

    app.use((req, res, next) => {
      if (
        (req.path.startsWith('/api') || req.headers.accept?.includes('application/json')) &&
        req.headers.authorization?.startsWith('Bearer ')
      ) {
        const token = req.headers.authorization.split(' ')[1];

        try {
          const payload = jwt.verify(token, process.env.JWT_SECRET);

          if (payload.userId) {
            req.session = req.session ?? {};
            req.session.userId = payload.userId;
          }
        } catch (err) {
          // Token ungültig oder abgelaufen – einfach ignorieren
        }
      }

      next();
    });
  }
}
