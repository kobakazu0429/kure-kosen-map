import { MapWrapper } from "./hooks";
import { FeatureCollection } from "geojson";
import { 呉高専, popuppableLayers } from "./呉高専";
import 学内写真 from "../geojson/panorama.json";

export interface PanoramFeatureProperties {
  placename: string;
  filename: string;
}

const iconImage = "camera";

export const panorama: mapboxgl.Layer = {
  id: "panorama",
  type: "symbol",
  source: {
    type: "geojson",
    data: 学内写真 as FeatureCollection,
  },
  minzoom: 16,
  layout: {
    "icon-image": iconImage,
    "icon-size": 0.9,
    visibility: "visible",
  },
};

const layers = [...呉高専, panorama];
export const popuppableLayerIds = [...popuppableLayers].map(({ id }) => id);
export const toggleableLayerIds = [].map(({ id }) => id);

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));

    mapbox.loadImage(`icon/${iconImage}.png`, function (
      error: any,
      image: any
    ) {
      if (error) throw error;
      mapbox.addImage(iconImage, image);
    });
  });
}
