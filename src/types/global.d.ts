import { FeatureCollection, Geometry } from "geojson";

declare module "*.geojson" {
  const value: FeatureCollection<Geometry, { title: string }>;
  export = value;
}