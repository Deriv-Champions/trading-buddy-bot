import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | Deriv Champions",
    default: "Deriv Champions | Master the Art of Disciplined Trading",
  },
  description:
    "Deriv Champions is a premier trading education platform. We train serious traders to build the skills, structure, and mental edge needed for consistent performance in Forex and Deriv markets.",
  keywords: ["trading education", "deriv", "forex training", "disciplined trading", "Kenya trading", "Deriv Champions"],
  authors: [{ name: "Deriv Champions" }],
  openGraph: {
    title: "Deriv Champions | Master the Art of Disciplined Trading",
    description: "Professional trading education and mentorship for Forex and Deriv markets.",
    url: "https://derivchampions.com",
    siteName: "Deriv Champions",
    locale: "en_US",
    type: "website",
  },
};

import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
