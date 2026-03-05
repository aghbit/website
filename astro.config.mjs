// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "http://knbit.edu.pl/website/",
  vite: {
    plugins: [tailwindcss()],
  },
});
