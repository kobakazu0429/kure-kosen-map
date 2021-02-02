import React, { useCallback, useRef } from "react";
import { Popup } from "mapbox-gl";
import TurfCenterOfMass from "@turf/center-of-mass";
import LineToPolygon from "@turf/line-to-polygon";

import { SideBarLayout } from "@/layouts/SideBar";
import { KureKosenMap } from "@/components/KureKosenMap";
import { SearchField } from "@/components/TextField";
import { useMap } from "@/mapbox";
import { toggleableLayerIds } from "@/mapbox/layers";
import { searchGeojson } from "@/search";
import { HowToUseModal } from "@/components/HowToUseModal";
import { openHowToUseModal } from "@/recoil/atom/how-to-use-modal";
import { event } from "@/gtag";
import {
  open_how_to_use_modal,
  search_with_click,
  search_detect_change,
  toggle_layer,
} from "@/gtag/event";

type VisibleStatus = "none" | "visible";

const Nav = () => {
  const searchWord = useRef("");
  const map = useMap();
  const opener = openHowToUseModal();

  const toggle = useCallback(
    (id: string, name: string) => {
      if (!map || !map.mapbox) return;
      const visibility: VisibleStatus = map.mapbox.getLayoutProperty(
        id,
        "visibility"
      );

      if (visibility === "visible") {
        map.mapbox.setLayoutProperty(id, "visibility", "none");
        event({ ...toggle_layer, label: name, value: "hidden" });
      } else {
        map.mapbox.setLayoutProperty(id, "visibility", "visible");
        event({ ...toggle_layer, label: name, value: "visible" });
      }
    },
    [map]
  );

  const suggestion = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      if (!map || !map.mapbox) return;

      const v = (e.target as any).value as string;
      searchWord.current = v;
      event({ ...search_detect_change, value: v });
      searchGeojson.search(v).then((results) => {
        if (results.length === 0) return;
        map.removeAllPopups();

        results.forEach((r) => {
          console.log(r);
          if (r.geometry.type === "LineString") {
            r = {
              ...LineToPolygon(r.geometry),
              properties: { ...r.properties },
            };
          }
          const center = TurfCenterOfMass(r as any).geometry?.coordinates as
            | [number, number]
            | undefined;
          if (!center) return;

          const p = new Popup()
            .setLngLat(center)
            .setHTML(r.properties.title)
            .addTo(map.mapbox!);
          map.popups.push(p);
        });
      });
    },
    [map]
  );

  const search = useCallback(
    (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!map || !map.mapbox || searchWord.current === "") return;

      event({ ...search_with_click, value: searchWord.current });
      searchGeojson.search(searchWord.current).then((results) => {
        if (results.length === 0) return;
        map.removeAllPopups();

        results.forEach((r) => {
          console.log(r);
          if (r.geometry.type === "LineString") {
            r = {
              ...LineToPolygon(r.geometry),
              properties: { ...r.properties },
            };
          }
          const center = TurfCenterOfMass(r as any).geometry?.coordinates as
            | [number, number]
            | undefined;
          if (!center) return;

          const p = new Popup()
            .setLngLat(center)
            .setHTML(r.properties.title)
            .addTo(map.mapbox!);
          map.popups.push(p);
        });
      });
    },
    [map]
  );

  return (
    <>
      <SearchField onChange={suggestion} iconClick={search} />
      {["Blog", "Portfolio", "About", "Contact"].map((v) => (
        <button
          key={v}
          className="block px-4 py-2 mt-2 w-full text-left text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        >
          {v}
        </button>
      ))}
      {toggleableLayerIds.map(({ id, name }) => {
        return (
          <button
            className="block px-4 py-2 mt-2 w-full text-left text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            key={id}
            onClick={() => toggle(id, name)}
          >
            {name}の表示/非表示
          </button>
        );
      })}

      <button
        className="block px-4 py-2 mt-2 w-full text-left text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        onClick={() => {
          opener();
          event(open_how_to_use_modal);
        }}
      >
        使い方
      </button>
    </>
  );
};

export default function MapPage() {
  return (
    <SideBarLayout
      sideComp={<Nav />}
      mainComp={
        <>
          <KureKosenMap />
          <HowToUseModal />
        </>
      }
    />
  );
}
