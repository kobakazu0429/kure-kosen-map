import { FeatureCollection } from "geojson";
import { MapWrapper } from "./hooks";
// import kurekosenGeojson from "../geojson/edited-complete13.json";

import 外形 from "../geojson/edited-外形.json";
import 道路 from "../geojson/edited-道路.json";
import 建物 from "../geojson/edited-建物.json";
import 駐車場 from "../geojson/edited-駐車場.json";
import 駐輪場 from "../geojson/edited-駐輪場.json";
import オーバーレイ from "../geojson/edited-オーバーレイ.json";

// @ts-expect-error
const knctLayers: mapboxgl.Layer[] = [
  { id: "外形", data: 外形, "fill-color": "#e7e5d9" },
  {
    id: "道路",
    data: 道路,
    "fill-color": "#fff",
    // "fill-outline-color": "#555",
  },
  { id: "建物", data: 建物, "fill-color": "#dcd3bf" },
  {
    id: "駐車場",
    data: 駐車場,
    "fill-color": "#e7e5d9",
    "fill-outline-color": "#535353",
  },
  { id: "駐輪場", data: 駐輪場, "fill-outline-color": "#535353" },
  {
    id: "オーバーレイ",
    data: オーバーレイ,
    "fill-color": "#e7e5d9",
    "fill-outline-color": "#535353",
  },
].map((v) => {
  const s = {
    id: v.id,
    type: "fill",
    source: {
      type: "geojson",
      data: v.data as FeatureCollection,
    },
    paint: {
      "fill-opacity": 1.0,
    },
    layout: {
      visibility: "visible",
    },
  };
  // @ts-expect-error
  if (v["fill-color"]) s.paint["fill-color"] = v["fill-color"];
  if (v["fill-outline-color"])
    // @ts-expect-error
    s.paint["fill-outline-color"] = v["fill-outline-color"];

  return s;
});

// export const kureKosen: mapboxgl.Layer = {
//   id: "kurekosen",
//   type: "fill",
//   source: {
//     type: "geojson",
//     data: 外形 as FeatureCollection,
//   },
//   paint: {
//     "fill-color": "#e7e5d9",
//     "fill-opacity": 1.0,
//   },
//   layout: {
//     visibility: "visible",
//   },
// };

export interface PanoramFeatureProperties {
  placename: string;
  filename: string;
}

export const panorama: mapboxgl.Layer = {
  id: "panorama",
  type: "circle",
  source: {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {
        placename: "物理実験室",
        filename: "room.jpg",
      },
      geometry: {
        type: "Point",
        coordinates: [132.6027327775955, 34.23139672503266],
      },
    },
  },
  paint: {
    "circle-color": "#f00",
    "circle-radius": 10,
  },
  layout: {
    visibility: "visible",
  },
};

const layers = [...knctLayers, panorama];
export const popuppableLayerIds = [].map(({ id }) => id);
export const toggleableLayerIds = [].map(({ id }) => id);

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));
  });
}
