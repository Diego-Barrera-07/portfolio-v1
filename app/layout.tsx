import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const raleway = Raleway({
  subsets: ["latin"],
  variable: '--font-raleway'
})

export const metadata: Metadata = {
  title: "John Doe | Front-end developer",
  description: "John Doe is a Front-end Developer and Freelancer. Let's make your ideal website.",
  keywords: "John Doe, Front-end developer, Freelancer, website, portfolio",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${raleway.variable}`}>{children}</body>
    </html>
  );
}
