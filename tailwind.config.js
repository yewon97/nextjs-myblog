/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
	mode: "jit",
  theme: {
    extend: {
			colors: {
        'dark-800': '#24292d',
				'main-color': '#24caac',
				'color-1': '#eaa023',
				'color-2': '#e91e63',
				'dark-700': '#2f363e',
				'white-800': 'rgba(255, 255, 255, 0.8)'
      },
			animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
			spacing: {
        'spin': 'calc(50% - 40px)',
				'm40px' : '-40px'
      }
		},
  },
  plugins: [],
}

