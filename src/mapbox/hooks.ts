import { RefObject, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import mapboxgl from "mapbox-gl";
import { eventmit, Eventmitter } from "eventmit";

import { mapState } from "@/recoil/atom/kurekosenmap";
import { mapOptions } from "./config";
import { registerLayers } from "./layers";

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

export function useMap(): [MapWrapper | null, RefObject<HTMLDivElement>] {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useRecoilState(mapState);

  useEffect(() => {
    const _map = new MapWrapper();
    setMap(_map);
    registerLayers(_map);

    if (mapContainerRef.current) {
      _map.createMapbox(mapContainerRef.current);
      _map.mapbox?.on("load", (_e) => {
        console.log("load");
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        _map.initialize.emit(_map.mapbox!);
      });
    }
  }, []);

  return [map, mapContainerRef];
}

export function useMapbox() {
  return useRecoilValue(mapState);
}
