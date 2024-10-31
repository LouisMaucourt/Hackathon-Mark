
import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/assets/Header";
import localfont from '@next/font/local';
import SmoothScoll from "../components/assets/SmoothScoll"
import CustomCursor from "../components/CustomCursor"

const neue = localfont({
  src: [
    { path: './fonts/ppneuemontreal-bold.woff2', weight: 'bold', style: 'normal' },
    { path: './fonts/ppneuemontreal-semibolditalic.woff2', weight: '600', style: 'normal' },
    { path: './fonts/ppneuemontreal-medium.woff2', weight: '500', style: 'italic' },
    { path: './fonts/ppneuemontreal-book.woff2', weight: '300', style: 'normal' },
    { path: './fonts/ppneuemontreal-italic.woff2', weight: '400', style: 'italic' },
    { path: './fonts/ppneuemontreal-thin.woff2', weight: '200', style: 'italic' },
  ],
});
const ibm = localfont({
  src: [
    {
      path: './fonts/IBMPlexMono-SemiBold.woff2',
      weight: '400',
      style: 'normal'
    }
  ],
  variable: '--font-ibm'
});
export const metadata: Metadata = {
  title: "Mark",
  description: "Nothing is more",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${neue.className}${ibm.className}${ibm.variable} antialiased`}>
        < SmoothScoll>
          <Header />
          {children}
        </SmoothScoll>
      </body>
    </html>
  );
}
