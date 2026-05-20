// ============================================================
// MAIN ENTRY POINT — src/main.tsx
//
// This is the first file that runs when the app loads.
// The order of operations here matters:
// 1. Inject brand tokens (CSS variables) before anything renders
// 2. Mount the React app into the DOM
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Import our single global stylesheet
import "@/styles/global.css";

// Import brand token injection — must run before render
import { injectBrandTokens } from "@/config/brand";

import App from "./App";

// Apply brand CSS variables to the document root
// This runs synchronously before React renders anything,
// preventing a flash of unstyled/wrong-brand content
injectBrandTokens();

// document.getElementById("root") finds the <div id="root">
// in index.html — the mount point for the entire React app.
// The "!" tells TypeScript we're certain it won't be null.
const rootElement = document.getElementById("root")!;

createRoot(rootElement).render(
  // StrictMode is a development tool that helps catch bugs
  // by intentionally double-rendering components.
  // It has no effect in production builds.
  <StrictMode>
    <App />
  </StrictMode>
);