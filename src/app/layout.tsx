import type { Metadata } from "next";
import {Space_Grotesk} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import FloatingContact from "@/components/FloatingContact";

const spaceGrotesk = Space_Grotesk({subsets: ["latin"]});



export const metadata: Metadata = {
  title: "Oymor Coaching",
  description: "Best Coaching for your success",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} dark `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FloatingContact />
        </ThemeProvider>
      </body>
    </html>
  );
}
