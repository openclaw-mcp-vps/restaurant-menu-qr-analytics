import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MenuScan Analytics – QR Code Menu Analytics for Restaurants",
  description: "Track which menu items get viewed most, dwell time, and ordering patterns from QR menu scans. Grow your restaurant revenue with data.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90787a7f-8df6-4087-84b7-93510285f31e"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
