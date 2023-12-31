import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(env.SERVICE_ID, env.TEMPLATE_ID, env.EMAIL_PUBLIC_KEY);
  const config = {
    define: {
      "process.env.EMAIL_PUBLIC_KEY": JSON.stringify(env.EMAIL_PUBLIC_KEY),
      "process.env.SERVICE_ID": JSON.stringify(env.SERVICE_ID),
      "process.env.TEMPLATE_ID": JSON.stringify(env.TEMPLATE_ID),
    },
    base: "/ladaland-resume/",
    plugins: [react()],
    resolve: {
      alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
    },
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      testMatch: ["./tests/**/*.test.tsx"],
    },
  };

  return config;
});
