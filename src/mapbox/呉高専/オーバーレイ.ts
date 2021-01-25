import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-オーバーレイ.json";

export const オーバーレイ: mapboxgl.LineLayer = {
  id: "オーバーレイ",
  type: "line",
  source: {
    type: "geojson",
    data: data as FeatureCollection,
  },
  paint: {
    "line-color": ["get", "stroke"],
    "line-width": 1.5,
  },
  layout: {
    visibility: "visible",
  },
};
