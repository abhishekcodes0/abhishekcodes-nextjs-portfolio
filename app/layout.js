import "./globals.css";
import NavBar from "./components/NavBar";
import { bebas, montserrat } from "./fonts.js";
import Script from "next/script";

export const metadata = {
  title: "Abhishek Codes",
  description:
    "Passionate Full-Stack Developer with 5+ years of experience, Ready to Take on New Challenges and Opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TN30DD9SK8"
        />
        <Script id="gtag">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-TN30DD9SK8');`}
        </Script>
      </head>
      <body className={montserrat.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
