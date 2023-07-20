import Footer from "@/components/navigation/footer";
import Navbar from "@/components/navigation/navbar";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/Cookie/CookieBanner";
import AdsComponent from "@/components/AdsComponent";
import Script from "next/script";

const siteUrl:any = process.env.NEXT_PUBLIC_DOMAIN_URL;
const ga_id:any= process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "sqlpey",
    template: `%s | sqlpey`,
  },
  description: "Let's Explore SQL and Database.",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9018422630165731"
     crossOrigin="anonymous"
     strategy="lazyOnload" />
      </head>
      <body>
      <GoogleAnalytics GA_MEASUREMENT_ID={ga_id}/>
        <Navbar />
        {/* Padding for Navbar */}
        <div className=" max-h-60 ">
          <AdsComponent />
        </div>

        <div className="pb-20 mt-28">{children}</div>
        <CookieBanner />
        <div className=" max-h-60 ">
          <AdsComponent />
        </div>

        <Footer />
      </body>
    </html>
  );
}
