/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
  darkMode: 'class', // This enables class-based dark mode
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1A202C',
        'dark-text': '#F7FAFC',
        'dark-input': '#2D3748',
        // Add other custom dark theme colors here
      },
    },
    
  }
  
}

