import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-建物.json";

export const 建物: mapboxgl.FillLayer = {
  id: "建物",
  type: "fill",
  source: {
    type: "geojson",
    data: data as FeatureCollection,
  },
  paint: {
    "fill-color": ["get", "fill"],
  },
  layout: {
    visibility: "visible",
  },
};
