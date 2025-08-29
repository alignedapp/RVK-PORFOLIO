import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          heading: "#1C1C1C",    // charcoal
          body:    "#3A3A3A",    // main body copy
          muted:   "#6B6B6B",    // captions / secondary
          accent:  "#A38E7C",    // beige accent
          btn:     "#8B6F5A",    // primary button bg
          btnHover:"#6F5646"     // hover
        }
      },
    },
  },
  plugins: [],
}

export default config