import React, { useEffect, useRef, useState, VFC } from "react";
import { Viewer } from "@/360image";
import { usePanorama, usePanoramaFileValue } from "@/recoil/atom/360image";

const id = "panorama-container";

export const PanoramaViewer: VFC = () => {
  const [state, , closer] = usePanorama();
  const [size, setSize] = useState({ width: 0, height: 0 });
  const { filename, placename } = usePanoramaFileValue();
  const viewer = useRef<Viewer | null>(null);

  useEffect(() => {
    const width = Math.min(window.innerWidth, 800);
    const height = Math.min(window.innerHeight, 500);
    setSize({ width, height });
  }, []);

  useEffect(() => {
    viewer.current?.dispose();
    viewer.current = new Viewer(id, filename, size.width, size.height);
  }, [filename]);

  if (!state) return null;

  return (
    <>
      <style jsx global>{`
        #${id} canvas {
          border-radius: 1.5rem;
          user-select: none;
          touch-action: none;
        }
      `}</style>
      <div
        id={id}
        className="bg-white z-10 rounded-3xl shadow-lg absolute"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: size.width,
          height: size.height,
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
