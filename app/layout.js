import "./globals.css";
import NavBar from "./components/NavBar";
import { bebas, montserrat } from "./fonts.js";

export const metadata = {
  title: "Abhishek Codes",
  description:
    "Passionate Front-End Developer with 4 Years of React.js Experience | Aspiring Full-Stack Developer, Ready to Take on New Challenges and Opportunities",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
