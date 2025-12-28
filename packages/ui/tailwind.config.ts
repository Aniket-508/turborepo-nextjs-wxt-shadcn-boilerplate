import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: [...sharedConfig.content, "./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
} satisfies Config;
