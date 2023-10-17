import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

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
    plugins: [react()],
    base: "/animation-resume/",
  };

  return config;
});
