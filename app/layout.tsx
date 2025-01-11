import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#ffffff'
};

export const metadata: Metadata = {
  title: "Basketball Stars Unblocked - Free Online Basketball Games",
  description: "Play Basketball Stars unblocked games online for free. Experience fast-paced basketball action with multiplayer support, no downloads required. Play anywhere, anytime!",
  alternates: {
    canonical: "https://basketballstarsunblocked.org"
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Basketball Stars Unblocked'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🏀</span>
              <span className="font-bold text-lg">Basketball Stars</span>
            </Link>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/games/basketball-stars" className="text-gray-700 hover:text-blue-600 transition-colors whitespace-nowrap">
                Basketball Stars Unblocked Games
              </Link>
              <Link href="/popular" className="text-gray-700 hover:text-blue-600 transition-colors">
                Popular Games
              </Link>
              <Link href="/new" className="text-gray-700 hover:text-blue-600 transition-colors">
                New Games
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-white border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex space-x-6 text-sm text-gray-500">
                <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </div>
              <div className="flex space-x-6 text-sm text-gray-500">
                <span>Friends:</span>
                <a href="https://dokeyai.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  DokeyAI
                </a>
              </div>
              <p className="text-center text-gray-500 text-sm">
                © 2025 Basketball Stars Unblocked Games. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
