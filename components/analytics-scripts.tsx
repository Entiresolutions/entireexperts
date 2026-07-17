import Script from "next/script";
import { publicEnv } from "@/config/env";

/**
 * Every integration here is opt-in via environment variable. With none set,
 * this component renders nothing and adds zero third-party requests — no
 * placeholder tracking IDs are ever shipped to production by default.
 */
export function AnalyticsScripts() {
  const { NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GTM_ID, NEXT_PUBLIC_CLARITY_PROJECT_ID } = publicEnv;

  return (
    <>
      {NEXT_PUBLIC_GTM_ID ? (
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${NEXT_PUBLIC_GTM_ID}');`}
        </Script>
      ) : null}

      {NEXT_PUBLIC_GA_MEASUREMENT_ID && !NEXT_PUBLIC_GTM_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${NEXT_PUBLIC_GA_MEASUREMENT_ID}', { anonymize_ip: true });
              window.gtag = gtag;`}
          </Script>
        </>
      ) : null}

      {NEXT_PUBLIC_CLARITY_PROJECT_ID ? (
        <Script id="clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${NEXT_PUBLIC_CLARITY_PROJECT_ID}");`}
        </Script>
      ) : null}
    </>
  );
}
