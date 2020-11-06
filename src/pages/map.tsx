import React from "react";
import { SideBarLayout } from "@/layouts/SideBar";
import { KureKosenMap } from "@/components/KureKosenMap";
import { SearchField } from "@/components/TextField";
import { useMap } from "@/mapbox";
import { toggleableLayerIds } from "@/mapbox/layers";

const className =
  "block px-4 py-2 mt-2 w-full text-left text-sm font-semibold text-gray-900 bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline";

type VisibleStatus = "none" | "visible";

const Nav = () => {
  const map = useMap();

  const toggle = (id: string) => {
    if (!map || !map.mapbox) return;
    const visibility: VisibleStatus = map.mapbox.getLayoutProperty(
      id,
      "visibility"
    );

    if (visibility === "visible") {
      map.mapbox.setLayoutProperty(id, "visibility", "none");
    } else {
      map.mapbox.setLayoutProperty(id, "visibility", "visible");
    }
  };

  return (
    <>
      <SearchField />
      <button className={className}>Blog</button>
      <button className={className}>Portfolio</button>
      <button className={className}>About</button>
      <button className={className}>Contact</button>
      {toggleableLayerIds.map((id) => {
        return (
          <button className={className} key={id} onClick={() => toggle(id)}>
            toggle {id}
          </button>
        );
      })}
    </>
  );
};

export default function MapPage() {
  return <SideBarLayout sideComp={<Nav />} mainComp={<KureKosenMap />} />;
}
