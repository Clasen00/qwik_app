import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react";
import { partytownVite } from "@builder.io/partytown/utils";
import { join } from "path";

export default defineConfig(() => {
  return {
    ssr: { target: "node", format: "cjs" },
    build: {
      target: 'esnext',
      module: 'esnext'
    },
    plugins: [
      qwikCity(),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
      partytownVite({ dest: join(__dirname, "public", "~partytown") }),
    ],
  };
});
