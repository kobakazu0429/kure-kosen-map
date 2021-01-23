import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

import "../styles/tailwind.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "neuicons/css/neu.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
