import { atom } from "recoil";
import { MapWrapper } from "@/mapbox/hooks";

export const mapState = atom<MapWrapper | null>({
  key: "mapState",
  default: null,
  dangerouslyAllowMutability: true,
});
