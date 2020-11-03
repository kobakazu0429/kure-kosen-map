import React from "react";
import mapboxgl from "mapbox-gl";

import { useMap } from "@/mapbox";

export const KureKosenMap = () => {
  const [map, mapContainerRef] = useMap();

  if (map) {
    map.initialize.on((mapbox) => {
      mapbox.addControl(
        new mapboxgl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: true,
        })
      );
      mapbox.addControl(new mapboxgl.FullscreenControl());
    });

    map.initialize.on((mapbox) => {
      mapbox.on("click", "sample", (e) => {
        const description =
          e.features?.[0].properties?.description ?? "no description";

        new mapboxgl.Popup()
          .setLngLat(e.lngLat)
          .setHTML(description)
          .addTo(mapbox);
      });

      mapbox.on("mouseenter", "sample", () => {
        mapbox.getCanvas().style.cursor = "pointer";
      });

      mapbox.on("mouseleave", "sample", () => {
        mapbox.getCanvas().style.cursor = "";
      });
    });
  }

  return (
    <>
      <style jsx global>
        {`
          canvas {
            outline: none;
          }
          .mapboxgl-ctrl button.mapboxgl-ctrl-fullscreen .mapboxgl-ctrl-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 469.333 469.333'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M160,0H10.667C4.771,0,0,4.771,0,10.667V160c0,5.896,4.771,10.667,10.667,10.667H32c5.896,0,10.667-4.771,10.667-10.667 V42.667H160c5.896,0,10.667-4.771,10.667-10.667V10.667C170.667,4.771,165.896,0,160,0z'%3E%3C/path%3E%3Cpath d='M458.667,0H309.333c-5.896,0-10.667,4.771-10.667,10.667V32c0,5.896,4.771,10.667,10.667,10.667h117.333V160 c0,5.896,4.771,10.667,10.667,10.667h21.333c5.896,0,10.667-4.771,10.667-10.667V10.667C469.333,4.771,464.563,0,458.667,0z'%3E%3C/path%3E%3Cpath d='M458.667,298.667h-21.333c-5.896,0-10.667,4.771-10.667,10.667v117.333H309.333c-5.896,0-10.667,4.771-10.667,10.667 v21.333c0,5.896,4.771,10.667,10.667,10.667h149.333c5.896,0,10.667-4.771,10.667-10.667V309.333 C469.333,303.437,464.563,298.667,458.667,298.667z'%3E%3C/path%3E%3Cpath d='M160,426.667H42.667V309.333c0-5.896-4.771-10.667-10.667-10.667H10.667C4.771,298.667,0,303.437,0,309.333v149.333 c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667v-21.333 C170.667,431.438,165.896,426.667,160,426.667z'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            height: 21px;
            width: 21px;
            margin: 4px;
          }
          .mapboxgl-ctrl button.mapboxgl-ctrl-shrink .mapboxgl-ctrl-icon {
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 469.333 469.333'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M160,0c-5.896,0-10.667,4.771-10.667,10.667v138.667H10.667C4.771,149.333,0,154.104,0,160 c0,5.896,4.771,10.667,10.667,10.667H160c5.896,0,10.667-4.771,10.667-10.667V10.667C170.667,4.771,165.896,0,160,0z'%3E%3C/path%3E%3Cpath d='M309.333,170.667h149.333c5.896,0,10.667-4.771,10.667-10.667c0-5.896-4.771-10.667-10.667-10.667H320V10.667 C320,4.771,315.229,0,309.333,0c-5.896,0-10.667,4.771-10.667,10.667V160C298.667,165.896,303.437,170.667,309.333,170.667z'%3E%3C/path%3E%3Cpath d='M458.667,298.667H309.333c-5.896,0-10.667,4.771-10.667,10.667v149.333c0,5.896,4.771,10.667,10.667,10.667 c5.896,0,10.667-4.771,10.667-10.667V320h138.667c5.896,0,10.667-4.771,10.667-10.667 C469.333,303.437,464.563,298.667,458.667,298.667z'%3E%3C/path%3E%3Cpath d='M160,298.667H10.667C4.771,298.667,0,303.437,0,309.333C0,315.229,4.771,320,10.667,320h138.667v138.667 c0,5.896,4.771,10.667,10.667,10.667c5.896,0,10.667-4.771,10.667-10.667V309.333C170.667,303.437,165.896,298.667,160,298.667z' %3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
            height: 21px;
            width: 21px;
            margin: 4px;
          }
        `}
      </style>
      <div
        ref={mapContainerRef}
        className="w-full h-full lg:rounded-3xl outline-none"
      />
    </>
  );
};