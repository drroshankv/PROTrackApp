// Vercel Web Analytics initialization
import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// This will automatically track page views when deployed to Vercel
inject({
  mode: 'auto', // automatically detect development vs production
  debug: true   // enable debug logging in development mode
});
