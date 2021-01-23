import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import mapboxgl, { Popup } from "mapbox-gl";
import { eventmit, Eventmitter } from "eventmit";

import { mapState } from "@/recoil/atom/kurekosenmap";
import { displayPanorama, setPanoramaFile } from "./../recoil/atom/360image";
import { mapOptions } from "./config";
import { registerLayers } from "./layers";
import { registerControls } from "./controls";
import { register360ImagePopups, registerPopups } from "./popup";

import { searchGeojson } from "@/search";
import * as kurekosen from "@/geojson/kurekosen.json";

export class MapWrapper {
  constructor() {
    this.initialize = eventmit<mapboxgl.Map>();
  }

  public mapbox?: mapboxgl.Map;
  public initialize: Eventmitter<mapboxgl.Map>;
  public popups: Popup[] = [];

  public createMapbox(container: HTMLDivElement) {
    this.mapbox = new mapboxgl.Map({
      ...mapOptions,
      container,
    });
  }

  public removeAllPopups() {
    this.popups.forEach((popup) => popup.remove());
  }
}

export function useMapInitialize() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const setMap = useSetRecoilState(mapState);

  const display = displayPanorama();
  const setter = setPanoramaFile();

  useEffect(() => {
    const map = new MapWrapper();
    setMap(map);
    registerLayers(map);
    registerPopups(map);
    registerControls(map);
    register360ImagePopups(map, (e) => {
      display();
      const filename = e.features?.map((f) => f.properties?.filename)[0];
      setter(filename);
    });

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
