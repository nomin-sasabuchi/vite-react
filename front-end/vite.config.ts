import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { sentryVitePlugin } from "@sentry/vite-plugin";


export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    base: "./",
    build: {
      sourcemap: true, // Source map generation must be turned on
    },
    plugins: [
      react(),
      // Put the Sentry vite plugin after all other plugins
      sentryVitePlugin({
        org: env.VITE_SENTRY_ORG,
        project:  env.VITE_SENTRY_PROJECT,
        include: "./dist",
        authToken:  env.VITE_SENTRY_AUTH_TOKEN,
        release: env.VITE_SENTRY_RELEASE_VERSION,
      }),
    ],
  }
});