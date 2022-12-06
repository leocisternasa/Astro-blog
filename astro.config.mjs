import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

// https://astro.build/config

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://maquinasdetatuar.org",
  integrations: [
    tailwind(),
    react(),
    partytown({
      // Adds dataLayer.push as a forwarding-event.
      config: {
        forward: ["dataLayer.push"],
      },
    }),
    sitemap(),
  ],
});
