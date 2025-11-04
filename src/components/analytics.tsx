import Script from 'next/script';
import React from 'react';

// IMPORTANT: REPLACE THE PLACEHOLDER VALUES BELOW WITH YOUR ACTUAL TRACKING IDS
const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Your Google Analytics Tracking ID
const META_PIXEL_ID = '1881668555769628'; // Your Meta Pixel ID
const UTMIFY_PIXEL_ID = '69042b89cd934fefaa216dd8'; // Your Utmify Pixel ID

export function Analytics() {
  // Don't render scripts if IDs are placeholders
  const isGaConfigured = GA_TRACKING_ID !== 'G-XXXXXXXXXX';
  const isMetaConfigured = META_PIXEL_ID !== 'YOUR_META_PIXEL_ID';
  const isUtmifyConfigured = UTMIFY_PIXEL_ID !== 'YOUR_UTMIFY_PIXEL_ID';

  return (
    <React.Fragment>
      {isGaConfigured && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      {isMetaConfigured && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </>
      )}

      {isUtmifyConfigured && (
        <>
          <Script id="utmify-pixel-config" strategy="afterInteractive">
            {`window.pixelId = "${UTMIFY_PIXEL_ID}";`}
          </Script>
          <Script
            id="utmify-pixel-script"
            src="https://cdn.utmify.com.br/scripts/pixel/pixel.js"
            strategy="afterInteractive"
            async
            defer
          />
        </>
      )}

      <Script
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck
        data-utmify-prevent-subids
        async
        defer
      ></Script>
    </React.Fragment>
  );
}
