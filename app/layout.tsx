import type { Metadata } from "next";
import StylingProvider from "@/styling";

export const metadata: Metadata = {
  title: "Collections app",
  description: "App for collections like rent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StylingProvider>{children}</StylingProvider>
      </body>
    </html>
  );
}
