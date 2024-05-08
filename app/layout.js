import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhishek Codes",
  description:
    "Passionate Front-End Developer with 4 Years of React.js Experience | Aspiring Full-Stack Developer Ready to Take on New Challenges and Opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
