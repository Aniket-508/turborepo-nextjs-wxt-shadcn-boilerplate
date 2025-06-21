import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "darkMode" | "content" | "presets"> = {
  darkMode: ["class"],
  content: [
    "./app/**/*.tsx",
    "./components/**/*.tsx",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig]
}

export default config
