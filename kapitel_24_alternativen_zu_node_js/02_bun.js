import { serve } from 'bun';

const handler = (req) => {
  return new Response('Hello, Bun!', { status: 200 });
};

serve({
  fetch: handler,
  port: 8000,
});

console.log('HTTP server is running on http://localhost:8000');