import mapboxgl, { Map } from "mapbox-gl";
import { MapWrapper } from "./hooks";
import { popuppableLayerIds } from "./layers";

const popupMap = (map: Map, layerId: string) => {
  map.on("mouseenter", layerId, () => {
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", layerId, () => {
    map.getCanvas().style.cursor = "";
  });

  map.on("click", layerId, ({ features, lngLat }) => {
    const description =
      features?.[0].properties?.description ?? "no description";

    new mapboxgl.Popup().setLngLat(lngLat).setHTML(description).addTo(map);
  });
};

export function registerPopups(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    popuppableLayerIds.forEach((layer) => popupMap(mapbox, layer));
  });
}
