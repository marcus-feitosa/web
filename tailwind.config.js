module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors:{
        brand:{
          300:'#996DFE'
        }
      },
      borderRadius:{

      }
    },
  },
  plugins: [ require('@tailwindcss/forms'),
  require('tailwind-scrollbar'),
],
}
