import mapboxgl from "mapbox-gl";
import { FeatureCollection } from "geojson";
import AED from "../../geojson/AED.json";

export interface PanoramFeatureProperties {
  placename: string;
  filename: string;
}

const iconImage = "AED";

export const aed: mapboxgl.Layer & { name: string } = {
  id: "AED",
  name: "AED",
  type: "symbol",
  source: {
    type: "geojson",
    data: AED as FeatureCollection,
  },
  minzoom: 16,
  layout: {
    "icon-image": iconImage,
    "icon-size": 0.05,
    visibility: "visible",
  },
};

export function registerAED(mapbox: mapboxgl.Map) {
  mapbox.loadImage(`icon/${iconImage}.png`, function (error: any, image: any) {
    console.log(image);

    if (error) throw error;
    mapbox.addImage(iconImage, image);
  });
}
