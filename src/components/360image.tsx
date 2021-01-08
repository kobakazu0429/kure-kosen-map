import React, { useCallback, useEffect, VFC } from "react";

import { Viewer } from "@/360image";
import { usePanorama } from "@/recoil/atom/360image";

const id = "360image";
const filename = "room.jpg";
const width = 800;
const height = 500;

export const PanoramaViewer: VFC = () => {
  const [state, setter] = usePanorama();

  useEffect(() => {
    new Viewer(id, filename, width, height);
  }, [state]);

  const close = useCallback(() => {
    setter(false);
  }, []);

  if (!state) return null;

  return (
    <div
      id={id}
      className="bg-white z-10 border-gray-400 border-2 rounded shadow-lg absolute"
      // style={{ display: state ? "block" : "hidden" }}
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width,
        height,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        className="w-6 h-6 absolute right-0 m-3"
        style={{ fill: "#1a202c" }}
        onClick={close}
      >
        <polygon points="512 52.5 459.5 0 256 203.5 52.5 0 0 52.5 203.5 256 0 459.5 52.5 512 256 308.5 459.5 512 512 459.5 308.5 256 " />
      </svg>
    </div>
  );
};
