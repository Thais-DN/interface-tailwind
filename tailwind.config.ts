import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode:"class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                app: "minmax(18rem, 20rem) 1fr",
                profile: "max-content 1fr min-content",
                form: "minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)"
            },

            colors: {
                violet: {
                    25: "#fcfaff"
                },

                error: {
                    25: '#FFFBFA',
                    50: '#FEF3F2',
                    100: '#FEE4E2',
                    200: '#FECDCA',
                    300: '#FDA29B',
                    400: '#F97066',
                    500: '#F04438',
                    600: '#D92D20',
                    700: '#B42318',
                    800: '#912018',
                    900: '#7A271A',
                  }
            },
            
            maxWidth: {
                6: "6px"
            },

            keyframes: {
                slideDonwAndFade: {
                    from: { opacity: "0", transform: "translateY(-2px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
                // slideUpeAndFade: {
                //     from: { opacity: "1" },
                //     to: { opacity: "0"},
                // },
            },
    
            animation: {
                slideDonwAndFade: "slideDonwAndFade 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                // slideUpeAndFade: "slideUpeAndFade 1s linear" ,
            },
        },
    },
    plugins: [],
};
export default config;
