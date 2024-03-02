import type { Metadata } from "next";
import StylingProvider from "@/styling";
import AppNavbar from "@/components/AppNavbar";

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
        <StylingProvider>
          <AppNavbar />
          {children}
        </StylingProvider>
      </body>
    </html>
  );
}
