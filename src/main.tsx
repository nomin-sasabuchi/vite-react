import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import './index.css'
import * as Sentry from "@sentry/react";
import App from "./App";

Sentry.init({
  dsn: "https://ba0352ba1c3040c3931bad124db031a0@o4504954186563584.ingest.sentry.io/4504954189643776",
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />)
}