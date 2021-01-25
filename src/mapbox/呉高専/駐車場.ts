import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-駐車場.json";

export const 駐車場: mapboxgl.Layer[] = [
  {
    id: "駐車場",
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
  // {
  //   id: "駐車場2",
  //   type: "line",
  //   source: {
  //     type: "geojson",
  //     data: data as FeatureCollection,
  //   },
  //   paint: {
  //     "line-color": ["get", "stroke"],
  //     "line-width": 1,
  //   },
  //   layout: {
  //     visibility: "visible",
  //   },
  // },
];
