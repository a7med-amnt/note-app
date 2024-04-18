import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "#rrd": "react-router-dom",
            "#r": "react",
            "#ri18n": "react-i18next",
            "#pages": path.resolve(__dirname, "src", "pages"),
            "#app": path.resolve(__dirname, "src", "app"),
            "#layouts": path.resolve(__dirname, "src", "layouts"),
            "#routes": path.resolve(__dirname, "src", "routes"),
            "#i18n": path.resolve(__dirname, "src", "i18n")
        }
    }
});
