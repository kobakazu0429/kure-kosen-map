import React from "react";
import { SideBarLayout } from "@/layouts/SideBar";
import { KureKosenMap } from "@/components/KureKosenMap";
import { SearchField } from "@/components/TextField";
import { useMap } from "@/mapbox";
import { toggleableLayerIds } from "@/mapbox/layers";
import { baseButtonStyle } from "@/styles/button";

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
      {["Blog", "Portfolio", "About", "Contact"].map((label) => (
        <button className={`${baseButtonStyle} text-left`} key={label}>
          {label}
        </button>
      ))}
      {toggleableLayerIds.map((id) => {
        return (
          <button
            className={`${baseButtonStyle} text-left`}
            key={id}
            onClick={() => toggle(id)}
          >
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
