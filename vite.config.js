import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Check for the environment, either GitHub Pages or Netlify
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/my-portfolio/" : "/",
  build: {
    outDir: "dist",
  },
});
