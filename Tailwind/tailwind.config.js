/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}, 

tailwind.config = {
  theme: {
    fontFamily: {
        Hanken: '',
      },
    extend: {
      colors: {
        LightRed: "hsl(0, 100%, 67%)",
        OrangeyYellow: "hsl(39, 100%, 56%)",
        GreenTeal: "hsl(166, 100%, 37%)",
        CobaltBlue: "hsl(234, 85%, 45%)",

        White: "hsl(0, 0%, 100%)",
        PaleBlue: "hsl(221, 100%, 96%)",
        LightLavender: "hsl(241, 100%, 89%)",
        DarkGrayBlue: "hsl(224, 30%, 27%)",

        LightSlateBlueBackground: "hsl(252, 100%, 67%)",
        LightRoyalBlueBackground: "hsl(241, 81%, 54%)",
        VioletBlueCircle: "hsla(256, 72%, 46%, 1)",
        PersianBlueCircle: "hsla(241, 72%, 46%, 0)",
      },
    },
  },
};
