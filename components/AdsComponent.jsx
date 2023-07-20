'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
const caPub = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;


class AdCodeWithoutRouter extends React.Component {
  renderAds() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  componentDidMount() {
    this.renderAds();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.asPath !== prevProps.router.asPath) {
      this.renderAds();
    }
  }

  render() {
    return (
      <div className="container mx-auto text-center" aria-hidden={true}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client={caPub}
          data-ad-slot={5659778999}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script dangerouslySetInnerHTML={{ __html: '(window.adsbygoogle = window.adsbygoogle || []).push({});' }}></script>
      </div>
    );
  }
}

const AdsComponent = () => {
  const router = useRouter();
  return <AdCodeWithoutRouter router={router} />;
};

export default AdsComponent;