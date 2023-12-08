import type { Config } from 'tailwindcss'

// function withOpacity(variableName) {
//   return ({ opacity }) => {
//     if (opacity !== undefined) {
//       return `rgba(var(${variableName}), ${opacity})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      textColor: {}
    }
  },
  plugins: []
}
export default config
