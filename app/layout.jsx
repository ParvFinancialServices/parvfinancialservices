import "./globals.css";

export const metadata = {
  title:
    "Parv Financial Services - Helping You Achieve Financial Success & Security",
  description:
    "Parv Financial Services offers flexible loan options, including personal, business, and home loans. Our expert team is dedicated to providing fast, reliable, and affordable financial solutions to help you achieve your goals.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
