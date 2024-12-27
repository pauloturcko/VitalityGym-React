export const media = {
  xs: (styles) => `@media (max-width: ${styles.theme.breakpoints.xs}) { ${styles} }`,
  sm: (styles) => `@media (max-width: ${styles.theme.breakpoints.sm}) { ${styles} }`,
  md: (styles) => `@media (max-width: ${styles.theme.breakpoints.md}) { ${styles} }`,
  lg: (styles) => `@media (max-width: ${styles.theme.breakpoints.lg}) { ${styles} }`,
};
