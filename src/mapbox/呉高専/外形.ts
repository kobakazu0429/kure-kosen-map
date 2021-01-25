import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-外形.json";

export const 外形: mapboxgl.Layer[] = [
  {
    id: "外形",
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
  },
  {
    id: "外形2",
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
  },
];
