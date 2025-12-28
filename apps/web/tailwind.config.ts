import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

export default {
  content: [
    "./app/**/*.tsx",
    // We need to append the path to the ui to the content array so that
    // those classes are included correctly.
    "../../packages/ui/src/**/*.{ts,tsx}"
  ],
  presets: [sharedConfig]
} satisfies Config
