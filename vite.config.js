import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.NETLIFY ? "/my-portfolio/" : "/", // Dynamically set base path
  build: {
    outDir: "dist",
  },
});
