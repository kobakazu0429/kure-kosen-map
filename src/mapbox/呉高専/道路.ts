import { FeatureCollection } from "geojson";

import data from "../../geojson/edited-道路.json";

export const 道路: mapboxgl.FillLayer = {
  id: "道路",
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
