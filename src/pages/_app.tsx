import React, { useCallback, useEffect } from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { pageview } from "../gtag";

import "../styles/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "neuicons/css/neu.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const handleRouteChange = useCallback((path: string) => {
    pageview(path);
  }, []);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
      return;
    }

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
