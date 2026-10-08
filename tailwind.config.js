/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E6C86E",
          dark: "#B89628",
          dim: "rgba(212, 175, 55, 0.15)",
          border: "rgba(212, 175, 55, 0.35)",
        },
        dark: {
          DEFAULT: "#1F1F1F",
          surface: "#111111",
          elevated: "#181818",
          border: "#262626",
        },
        muted: {
          DEFAULT: "#6B7280",
          light: "#9CA3AF",
          dark: "#4B5563",
        },
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        editorial: ['"Syne"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        'tight-hero': '-0.03em',
        'tighter-hero': '-0.04em',
        'poster': '-0.02em',
        'widest-tag': '0.22em',
        'ultra-wide': '0.35em',
      },
      lineHeight: {
        'poster': '0.84',
        'poster-tight': '0.80',
        'poster-dense': '0.88',
        'editorial': '0.94',
      },
      maxWidth: {
        'site': '1440px',
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.04) 0%, rgba(0, 0, 0, 0.8) 70%, #000000 100%)',
      },
    },
  },
  plugins: [],
}
