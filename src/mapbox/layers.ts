import { popupMap } from "./popup";
import { MapWrapper } from "./hooks";

export const popuppableLayerIds = ["sample"];

export const toggleableLayerIds = ["contours", "museums"];

const kureKosenPolygons: mapboxgl.AnySourceData = {
  type: "geojson",
  data: {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          description: "建築科棟",
        },
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602195786728913, 34.232621433005995],
              [132.602169253958778, 34.232536821736204],
              [132.602768136484713, 34.232336261349687],
              [132.602806040442061, 34.232417739064324],
              [132.602195786728913, 34.232621433005995],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.603022092998884, 34.232351930147082],
              [132.602987979437273, 34.232286121178419],
              [132.603628556316266, 34.232082426425627],
              [132.603647508294955, 34.232157636853259],
              [132.603022092998884, 34.232351930147082],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602063122878235, 34.232304923746142],
              [132.602029009316624, 34.232229713450053],
              [132.60264305342551, 34.23201348347461],
              [132.602673376591383, 34.232104362807291],
              [132.602063122878235, 34.232304923746142],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602870477169517, 34.232051088727609],
              [132.602821202024984, 34.231969610658197],
              [132.603461778904006, 34.231762781358725],
              [132.603488311674141, 34.231844259628254],
              [132.602870477169517, 34.232051088727609],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602548293532152, 34.231825456957665],
              [132.602480066408958, 34.231706373279785],
              [132.601862231904335, 34.231919470268622],
              [132.601907716653159, 34.232032286103212],
              [132.602548293532152, 34.231825456957665],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602718861340179, 34.231731443541754],
              [132.602673376591383, 34.231618627304123],
              [132.603306372678901, 34.231421198524551],
              [132.603348067031988, 34.231518346077102],
              [132.602718861340179, 34.231731443541754],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602915961918342, 34.231364790216809],
              [132.60286668677378, 34.23125197348795],
              [132.603276049513028, 34.231101550947699],
              [132.603332905449037, 34.23122690308324],
              [132.602915961918342, 34.231364790216809],
            ],
          ],
        },
      },
      {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [
            [
              [132.602836363607935, 34.231418064730676],
              [132.602790878859111, 34.231339719845678],
              [132.602582407093763, 34.231402395759503],
              [132.602624101446821, 34.23150581091533],
              [132.602836363607935, 34.231418064730676],
            ],
          ],
        },
      },
    ],
  },
};

export const kureKosen: mapboxgl.Layer = {
  id: "sample",
  type: "fill",
  source: kureKosenPolygons,
  paint: {
    "fill-color": "#088",
    "fill-opacity": 0.6,
  },
};

export const museums: mapboxgl.Layer = {
  id: "museums",
  type: "circle",
  source: { type: "vector", url: "mapbox://mapbox.2opop9hr" },
  layout: {
    visibility: "visible",
  },
  paint: {
    "circle-radius": 8,
    "circle-color": "rgba(55,148,179,1)",
  },
  "source-layer": "museum-cusco",
};

export const contours: mapboxgl.Layer = {
  id: "contours",
  type: "line",
  source: {
    type: "vector",
    url: "mapbox://mapbox.mapbox-terrain-v2",
  },
  "source-layer": "contour",
  layout: {
    visibility: "visible",
    "line-join": "round",
    "line-cap": "round",
  },
  paint: {
    "line-color": "#877b59",
    "line-width": 1,
  },
};

const layers = [kureKosen, museums, contours];

export function registerLayers(map: MapWrapper) {
  map.initialize.on((mapbox) => {
    layers.forEach((layer) => mapbox.addLayer(layer));
    popuppableLayerIds.forEach((layer) => popupMap(mapbox, layer));
  });
}
