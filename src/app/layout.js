import localFont from "next/font/local";
import "./globals.css";


const Poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-Poppins-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Splitx",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Poppins.variable} ${Poppins.variable} antialiased  `}
      >
        {children}
      </body>
    </html>
  );
}
