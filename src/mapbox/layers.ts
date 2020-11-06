import { MapWrapper } from "./hooks";

export const kureKosen: mapboxgl.Layer = {
  id: "kurekosen",
  type: "fill",
  source: {
    type: "geojson",
    data: "/geojson/kurekosen.geojson",
  },
  paint: {
    "fill-color": "#088",
    "fill-opacity": 0.6,
  },
  layout: {
    visibility: "visible",
  },
};

const layers = [kureKosen];
export const popuppableLayerIds = [kureKosen].map(({ id }) => id);
export const toggleableLayerIds = [kureKosen].map(({ id }) => id);

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));
  });
}
