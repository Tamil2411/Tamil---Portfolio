import "./globals.css";

export const metadata = {
  title: "Portfolio | Tamil Selvan T",
  description: "Full Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
