module.exports = {
  // Run type-check on changes to TypeScript files
  "**/*.ts?(x)": () => "npm run type-check",
  // Lint & Prettify TS and JS files
  "**/*.(ts|tsx)": (filenames) => [
  `npm run lint:fix . ${filenames.join(" ")}`,
  `npm run prettier --write ${filenames.join(" ")}`,
  ],
};
