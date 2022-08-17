import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    env: {
      loginEmail: 'test@test.com',
      loginPassword: '123456',
    },
  },
});
