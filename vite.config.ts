import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ command, mode }) => {
  if (command === "dev") {
    return defineConfig({
      plugins: [reactRefresh()],
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    });
  } else {
    return defineConfig({
      plugins: [reactRefresh()],
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    });
  }
};
