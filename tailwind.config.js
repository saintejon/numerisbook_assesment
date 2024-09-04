/** @type {import('tailwindcss').Config} */
export default {
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
            extend: {
                  colors: {
                        primary: {
                              DEFAULT: "#003eff",
                              50: "#e8f6ff",
                              100: "#d5eeff",
                              200: "#b3deff",
                              300: "#85c6ff",
                              400: "#569fff",
                              500: "#2f77ff",
                              600: "#0c49ff",
                              700: "#003eff",
                              800: "#0639cd",
                              900: "#10399f",
                              950: "#0a1f5c",
                        },
                  },
                  fontFamily: {
                        Neue: ["NeueHaasDisplay", "sans-serif"],
                  },
            },
      },
      plugins: [],
};
