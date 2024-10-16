import { MapWrapper } from "./hooks";
import { FeatureCollection } from "geojson";
import { 呉高専, popuppableLayers } from "./呉高専";
import 学内写真 from "../geojson/panorama.json";
import { aed, registerAED } from "./呉高専/AED";

export interface PanoramFeatureProperties {
  placename: string;
  filename: string;
}

const iconImage = "camera";

export const panorama: mapboxgl.SymbolLayer & { name: string } = {
  id: "panorama",
  name: "パノラマ画像",
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

const layers = [...呉高専, panorama, aed];
export const popuppableLayerIds = [...popuppableLayers].map(({ id }) => id);
export const toggleableLayerIds = [aed, panorama].map(({ id, name }) => ({
  id,
  name,
}));

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));

    registerAED(mapbox);

    mapbox.loadImage(`icon/${iconImage}.png`, function (
      error: any,
      image: any
    ) {
      if (error) throw error;
      mapbox.addImage(iconImage, image);
    });
  });
}
