'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const caPub = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

const AdsComponent = () => {
  const router = useRouter();

  useEffect(() => {
    try{
      
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }catch(error){
        console.log(error);
    }
   
  },[]);

  return (
    <div className="container mx-auto text-center" aria-hidden={true}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={caPub}
        data-ad-slot={565978999}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      {/* <script
        dangerouslySetInnerHTML={{
          __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});',
        }}
      ></script> */}
    </div>
  );
};

export default AdsComponent;
