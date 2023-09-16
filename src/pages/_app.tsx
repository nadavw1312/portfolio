import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";
import { UserSelectedThemeProvider } from "@/context/userSelectedThemeContext";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <UserSelectedThemeProvider>
          <main className={inter.className}>
            <Component {...pageProps} />
            <Analytics />
          </main>
        </UserSelectedThemeProvider>
      </ThemeProvider>
    </NextUIProvider>
  );
}

export default MyApp;
