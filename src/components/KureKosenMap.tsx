import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

const style: mapboxgl.Style = {
  version: 8,
  sources: {
    m_streets: {
      type: "raster",
      tiles: [
        `https://api.maptiler.com/maps/jp-mierune-streets/{z}/{x}/{y}@2x.png?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      ],
      tileSize: 512,
      attribution:
        '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: "mierunemap",
      type: "raster",
      source: "m_streets",
      minzoom: 0,
      maxzoom: 18,
    },
  ],
};

const mapOptions: Omit<mapboxgl.MapboxOptions, "container"> = {
  center: [132.601271, 34.232102],
  zoom: 16,
  bearing: 21.148851039999840395,
  // hash: true,
  style,
  // style: `https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
};

export const KureKosenMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const map = new mapboxgl.Map({ ...mapOptions, container: ref.current });
      map.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true,
        })
      );
      map.on("zoomend", function () {
        console.log(map.getZoom());
      });
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "100vw",
        height: "800px",
      }}
    ></div>
  );
};
