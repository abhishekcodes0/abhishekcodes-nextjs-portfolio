import { Inter } from "next/font/google";
import "./globals.css";
import { Bebas_Neue } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const bebas_Neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Abhishek Codes",
  description:
    "Passionate Front-End Developer with 4 Years of React.js Experience | Aspiring Full-Stack Developer Ready to Take on New Challenges and Opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bebas_Neue.className}>{children}</body>
    </html>
  );
}
