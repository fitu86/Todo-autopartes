import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://app.todoautopartes.com').with(
rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
);

export default directus;
