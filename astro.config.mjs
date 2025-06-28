import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: "https://example.com",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  base: "/astro-launch-ui/",
});
