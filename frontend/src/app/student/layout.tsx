// import "./globals.css";

import NavbarStudent from "@/components/custom/NavbarStudent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarStudent/>
        {children}
      </body>
    </html>
  );
}
