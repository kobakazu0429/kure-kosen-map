import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

export { mapOptions } from "./config";
