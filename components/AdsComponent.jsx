'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const caPub = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

const AdsComponent = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // Ensure ads are reloaded on route change to avoid layout shifts
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.log(error);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup event listener on component unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  return (
    <div className="container mx-auto text-center" aria-hidden={true} style="position: relative; padding-bottom: 56.25%;">
      <ins
        className="adsbygoogle"
        style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
        data-ad-client={caPub}
        data-ad-slot={565978999}
        data-ad-format="auto"
        data-full-width-responsive="true"
        width="100%"
        height="100%"
      ></ins>
    </div>
  );
};

export default AdsComponent;
