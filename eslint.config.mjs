import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "@next/next/no-img-element": "warn",
    },
  },
  {
    ignores: [
      "node_modules/**",
      "**/node_modules/**",
      "backend/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
