import { defineConfig, Plugin } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default ({ command, mode }) => {
  return defineConfig({
    plugins: [reactRefresh(), myPlugin({ command, mode })],
    esbuild: {
      jsxInject: `import React from 'react'`,
    },
  });
};

function myPlugin(...args): Plugin {
  return {
    name: "build-only-log",
    apply: "build",
    configResolved() {
      console.log("configResolved:", args);
    },
  };
}
