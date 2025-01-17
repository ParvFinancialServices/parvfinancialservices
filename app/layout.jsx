import localFont from "next/font/local";
import "./globals.css";
// import 'react-quill/dist/quill.snow.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Parv Financial Services - Helping You Achieve Financial Success & Security",
  description: "Parv Financial Services offers flexible loan options, including personal, business, and home loans. Our expert team is dedicated to providing fast, reliable, and affordable financial solutions to help you achieve your goals.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
