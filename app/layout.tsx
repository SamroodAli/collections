import type { Metadata } from "next";
import StylingProvider from "@/styling";
import NavbarLayout from "@/components/NavbarLayout";

export const metadata: Metadata = {
  title: "Collections app",
  description: "App for collections like rent",
  manifest: "/manifest.json",
  keywords: ["nextjs", "nextjs13", "next13", "pwa", "next-pwa"],
  authors: [{ name: "Samrood Ali", url: "https:samroodali.com" }],
  icons: [
    { rel: "apple-touch-icon", url: "icons/icon_128x128.png" },
    { rel: "icon", url: "icons/icon_128x128.png" },
  ],
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
          <main>
            <NavbarLayout>{children}</NavbarLayout>
          </main>
        </StylingProvider>
      </body>
    </html>
  );
}
