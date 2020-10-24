import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

import { mapState } from "@/recoil/atom/kurekosenmap";
import { useSetRecoilState } from "recoil";
import { mapOptions } from "@/mapbox";

export const KureKosenMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const setMap = useSetRecoilState(mapState);

  useEffect(() => {
    if (ref.current) {
      const newMap = new mapboxgl.Map({
        ...mapOptions,
        container: ref.current,
      });
      newMap.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true,
        })
      );
      newMap.on("zoomend", function () {
        console.log(newMap.getZoom());
      });
      setMap(newMap);
    }
  }, []);

  return <div ref={ref} className="w-full h-full" />;
};
