import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SkipLink } from "@/components/ui/skip-link";
import { JsonLd } from "@/components/ui/json-ld";
import { ChatWidget } from "@/components/features/chatbot/chat-widget";
import { AnalyticsScripts } from "@/components/analytics-scripts";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";
import { siteConfig } from "@/config/site";
import { serverEnv } from "@/config/env";

const bodyFont = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const displayFont = Sora({
  variable: "--font-display-face",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  ...(serverEnv.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: serverEnv.GOOGLE_SITE_VERIFICATION } }
    : {}),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfbfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b12" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <JsonLd data={[organizationSchema(), websiteSchema()]} />
            <SkipLink />
            <ScrollProgress />
            <AnnouncementBar />
            <Header />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <ChatWidget />
          </MotionProvider>
        </ThemeProvider>
        <AnalyticsScripts />
      </body>
    </html>
  );
}
