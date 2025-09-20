 module.exports = {
 content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],

  extend: {
    colors: {
    accent: '#a855f7', // Purple
    glow: '#22d3ee',  
    }, // Cyan
  animation: {
    'fade-in': 'fadeIn 1s ease-out'
  },
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 }
    }
  }
  },
    slideUp: {
      '0%': { transform: 'translateY(20px)', opacity: 0 },
      '100%': { transform: 'translateY(0)', opacity: 1 }
    }
  };



