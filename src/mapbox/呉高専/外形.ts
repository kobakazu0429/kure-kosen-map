import { FeatureCollection } from "geojson";
import data from "../../geojson/edited-外形.json";

const 外形1: mapboxgl.FillLayer = {
  id: "外形1",
  type: "fill",
  source: {
    type: "geojson",
    data: data as mapboxgl.GeoJSONSourceOptions["data"],
  },
  paint: {
    "fill-color": ["get", "fill"],
  },
  layout: {
    visibility: "visible",
  },
};

const 外形2: mapboxgl.LineLayer = {
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
};

export const 外形: mapboxgl.AnyLayer[] = [外形1, 外形2];
