import { atom } from "recoil";
import { Map } from "@/mapbox/hooks";

export const mapState = atom<Map | null>({
  key: "mapState",
  default: null,
  dangerouslyAllowMutability: true,
});
