/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sleep: {
          dark: '#0f172a',
          card: '#1e293b',
          accent: '#6366f1',
          accentHover: '#4f46e5',
          muted: '#94a3b8',
        }
      }
    },
  },
  plugins: [],
}
