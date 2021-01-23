import mapboxgl from "mapbox-gl";
import { MapWrapper } from "./hooks";

export function registerControls(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    const controls = [
      new mapboxgl.NavigationControl({
        showCompass: true,
        showZoom: true,
        visualizePitch: true,
      }),
      // new mapboxgl.FullscreenControl(),
      new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
      new mapboxgl.ScaleControl(),
    ];

    controls.forEach((c) => mapbox.addControl(c));
  });
}
