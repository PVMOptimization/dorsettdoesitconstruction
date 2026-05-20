/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0e0e10',
        coal: '#1a1a1c',
        steel: '#2a2a2e',
        concrete: '#9a9a9a',
        bone: '#f5f3ee',
        amber: {
          DEFAULT: '#f5a524',
          dark: '#c97e0a',
        },
      },
      fontFamily: {
        display: ['Oswald', 'Impact', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
