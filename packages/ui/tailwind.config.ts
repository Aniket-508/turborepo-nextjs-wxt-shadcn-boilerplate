/*
 * This file is not used for any compilation purpose, it is only used
 * for Tailwind Intellisense & Autocompletion in the source files
 */
import sharedConfig from "@repo/tailwind-config";
import type { Config } from "tailwindcss";

export default {
  content: [...sharedConfig.content, "./src/**/*.{ts,tsx}"],
  presets: [sharedConfig],
} satisfies Config;
