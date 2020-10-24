import { atom } from "recoil";

export const mapState = atom<mapboxgl.Map>({
  key: "mapState",
  default: {} as mapboxgl.Map,
  dangerouslyAllowMutability: true,
});
