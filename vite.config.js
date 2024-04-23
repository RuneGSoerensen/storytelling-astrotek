// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: "/",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
          nested: resolve(__dirname, "pages/404.html")
        }
      }
    }
  };

  if (command !== "serve") {
    config.base = "cederdorff.com/storytelling-astrotek/";
  }

  return config;
});
