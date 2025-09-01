import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';

const handler = (request) => {
  return new Response('Hello, Deno!', { status: 200 });
};

serve(handler, { port: 8000 });
console.log('HTTP server is running on http://localhost:8000');