import mapboxgl, {
  Map,
  EventData,
  MapMouseEvent,
  MapboxGeoJSONFeature,
} from "mapbox-gl";
import { MapWrapper } from "./hooks";
import {
  panorama,
  PanoramFeatureProperties,
  popuppableLayerIds,
} from "./layers";

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

    const classNames = ["text-gray-900", "text-base"];
    const popup = new mapboxgl.Popup()
      .setLngLat(lngLat)
      .setText(description)
      .addTo(map);
    classNames.map((c) => popup.addClassName(c));
  });
};

export function registerPopups(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    popuppableLayerIds.forEach((layer) => popupMap(mapbox, layer));
  });
}

export type ClickListner = (
  e: EventData & {
    features?: Array<
      MapboxGeoJSONFeature & { properties: PanoramFeatureProperties }
    >;
  } & MapMouseEvent
) => void;

export function register360ImagePopups(
  map: MapWrapper,
  clickListner: ClickListner
) {
  map.initialize.on((mapbox) => {
    const layerId = panorama.id;

    mapbox.on("mouseenter", layerId, () => {
      mapbox.getCanvas().style.cursor = "pointer";
    });

    mapbox.on("mouseleave", layerId, () => {
      mapbox.getCanvas().style.cursor = "";
    });

    mapbox.on("click", layerId, (e) => {
      clickListner(e as Parameters<ClickListner>[0]);
    });
  });
}
