import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    ignores: [
      ".next/**",
      "**/.next/**",
      "node_modules/**",
      "public/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
      "**/C**",
    ],
  },
]);

export default eslintConfig;
