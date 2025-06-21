import sharedConfig from "@repo/tailwind-config"
import type { Config } from "tailwindcss"

const config: Pick<Config, "darkMode" | "content" | "presets"> = {
  darkMode: ["class"],
  content: [
    "./entrypoints/**/*.{html,ts,tsx}",
    "./components/**/*.{html,ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  presets: [sharedConfig]
}

export default config
