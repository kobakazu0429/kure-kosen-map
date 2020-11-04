import mapboxgl, { Map } from "mapbox-gl";

export const popupMap = (map: Map, layerId: string) => {
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
