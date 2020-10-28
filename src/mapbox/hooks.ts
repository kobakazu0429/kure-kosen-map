import { RefObject, useEffect, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import mapboxgl from "mapbox-gl";

import { mapState } from "@/recoil/atom/kurekosenmap";
import { mapOptions } from "./config";

type Callback = (e: mapboxgl.EventData, map: mapboxgl.Map) => void;

export class Map {
  constructor() {
    this.initializer = [];
  }

  public mapbox?: mapboxgl.Map;
  private initializer: Callback[];

  public createMapbox(container: HTMLDivElement) {
    this.mapbox = new mapboxgl.Map({
      ...mapOptions,
      container,
    });
  }

  public addInitializer(callback: Callback) {
    this.initializer.push(callback);
  }

  public initialize() {
    if (this.mapbox) {
      // throw new Error("not set mapbox");

      this.mapbox.on("load", (e) => {
        this.initializer.forEach((callback) => {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          callback(e, this.mapbox!);
        });
      });
    }
  }
}

export function useMap(): [Map | null, RefObject<HTMLDivElement>] {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useRecoilState(mapState);

  useEffect(() => {
    const _map = new Map();
    setMap(_map);
    if (mapContainerRef.current) {
      _map.createMapbox(mapContainerRef.current);
      _map.initialize();
    }
  }, []);

  return [map, mapContainerRef];
}

export function useMapbox() {
  return useRecoilValue(mapState) as Map;
}
