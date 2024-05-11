import { defineConfig } from "vite";

const mimeConfig = {
  mime: {
    "*.ts": "text/javascript",
  },
};

const serverConfig = {
  ...mimeConfig,
  // Other server configuration options
};

export default defineConfig({
  server: serverConfig,
});
