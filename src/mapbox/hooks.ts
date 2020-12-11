import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import mapboxgl from "mapbox-gl";
import { eventmit, Eventmitter } from "eventmit";

import { mapState } from "@/recoil/atom/kurekosenmap";
import { mapOptions } from "./config";
import { registerLayers } from "./layers";
import { registerControls } from "./controls";
import { registerPopups } from "./popup";

import { searchGeojson } from "@/search";
import * as kurekosen from "@/search/kurekosen.json";

export class MapWrapper {
  constructor() {
    this.initialize = eventmit<mapboxgl.Map>();
  }

  public mapbox?: mapboxgl.Map;
  public initialize: Eventmitter<mapboxgl.Map>;

  public createMapbox(container: HTMLDivElement) {
    this.mapbox = new mapboxgl.Map({
      ...mapOptions,
      container,
    });
  }
}

function register(map: MapWrapper) {
  registerLayers(map);
  registerPopups(map);
  registerControls(map);
}

export function useMapInitialize() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const setMap = useSetRecoilState(mapState);

  useEffect(() => {
    const map = new MapWrapper();
    setMap(map);
    register(map);
    kurekosen.features.forEach((v) => searchGeojson.add(v as any));

    if (mapContainerRef.current) {
      map.createMapbox(mapContainerRef.current);
      map.mapbox?.on("load", (_e) => {
        console.log("[Map]: loaded");
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        map.initialize.emit(map.mapbox!);
      });
    }
  }, []);

  return mapContainerRef;
}

export function useMap() {
  return useRecoilValue(mapState);
}
