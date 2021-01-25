import { MapWrapper } from "./hooks";
import { 呉高専, popuppableLayers } from "./呉高専";

export interface PanoramFeatureProperties {
  placename: string;
  filename: string;
}

export const panorama: mapboxgl.Layer = {
  id: "panorama",
  type: "circle",
  source: {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {
        placename: "物理実験室",
        filename: "room.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [132.6027327775955, 34.23139672503266],
      },
    },
  },
  paint: {
    "circle-color": "#f00",
    "circle-radius": 10,
  },
  layout: {
    visibility: "visible",
  },
};

const layers = [...呉高専, panorama];
export const popuppableLayerIds = [...popuppableLayers].map(({ id }) => id);
export const toggleableLayerIds = [].map(({ id }) => id);

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));
  });
}
