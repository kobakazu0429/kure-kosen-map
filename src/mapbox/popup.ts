import mapboxgl, { Map } from "mapbox-gl";
import { MapWrapper } from "./hooks";
import { panorama, popuppableLayerIds } from "./layers";

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

export function register360ImagePopups(
  map: MapWrapper,
  displayPanoramaFunc: any
) {
  map.initialize.on((mapbox) => {
    const layerId = panorama.id;

    mapbox.on("mouseenter", layerId, () => {
      mapbox.getCanvas().style.cursor = "pointer";
    });

    mapbox.on("mouseleave", layerId, () => {
      mapbox.getCanvas().style.cursor = "";
    });

    mapbox.on("click", layerId, () => {
      displayPanoramaFunc();
    });
  });
}
