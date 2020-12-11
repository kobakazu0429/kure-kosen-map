import { baseButtonStyle } from "@/styles/button";
import React, { FC } from "react";

const buttonLabels = ["1F", "2F", "3F", "4F", "全体"];

export const LayerSwitcher: FC = () => {
  return (
    <div
      className="rounded overflow-hidden shadow-lg z-10 absolute bg-white px-2 pb-2"
      style={{ marginTop: 10, marginLeft: 10 }}
    >
      {buttonLabels.map((label) => (
        <button className={baseButtonStyle} key={label}>
          {label}
        </button>
      ))}
    </div>
  );
};
