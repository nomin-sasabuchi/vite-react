import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DSN,
});



const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />)
}