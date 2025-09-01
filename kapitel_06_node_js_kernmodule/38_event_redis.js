import Redis from 'ioredis';

const redis = new Redis();

redis.subscribe('channel', (err, count) => {
  if (err) {
    console.error('Fehler beim Abonnieren:', err);
  } else {
    console.log(`Abonniert auf ${count} Kanäle.`);
  }
});

redis.on('message', (channel, message) => {
  console.log(`Nachricht auf Kanal ${channel}: ${message}`);
});

redis.publish('channel', 'Hallo von Redis!');