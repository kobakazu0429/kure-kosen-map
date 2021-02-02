import React, { useEffect, useRef, VFC } from "react";
import { Viewer } from "@/360image";
import { usePanorama, usePanoramaFileValue } from "@/recoil/atom/360image";

const id = "panorama-container";
const width = 800;
const height = 500;

export const PanoramaViewer: VFC = () => {
  const [state, , closer] = usePanorama();
  const { filename, placename } = usePanoramaFileValue();
  const viewer = useRef<Viewer | null>(null);

  useEffect(() => {
    viewer.current?.dispose();
    viewer.current = new Viewer(id, filename, width, height);
  }, [filename]);

  if (!state) return null;

  return (
    <>
      <style jsx global>{`
        #${id} canvas {
          border-radius: 1.5rem;
          user-select: none;
        }
      `}</style>
      <div
        id={id}
        className="bg-white z-10 rounded-3xl shadow-lg absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width,
          height,
        }}
      >
        <div
          className="h-6 bg-gray-200 bg-opacity-25 absolute w-full rounded-3xl rounded-b-none"
          style={{ height: "45px" }}
        >
          <span
            className="align-middle ml-4 text-lg"
            style={{ lineHeight: "45px" }}
          >
            {placename}
          </span>
          <i
            className="neu-close-circle absolute right-0 text-gray-900 cursor-pointer"
            style={{
              fontSize: "30px",
            }}
            onClick={closer}
          />
        </div>
      </div>
    </>
  );
};
