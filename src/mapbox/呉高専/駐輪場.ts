import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-駐輪場.json";

export const 駐輪場: mapboxgl.LineLayer = {
  id: "駐輪場",
  type: "line",
  source: {
    type: "geojson",
    data: data as FeatureCollection,
  },
  paint: {
    "line-color": ["get", "stroke"],
    "line-width": 1,
  },
  layout: {
    visibility: "visible",
  },
};
