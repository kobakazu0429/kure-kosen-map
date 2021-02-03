import React, { FC } from "react";
import { toggleSideBar, useSidebar } from "@/recoil/atom/sidebar";

interface Props {
  sideComp: React.ReactNode;
  mainComp: React.ReactNode;
}

const ToggleIcon = () => {
  const visible = useSidebar();
  return (
    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
      {/* hamburger icon */}
      <path
        className={visible ? "hidden" : "block"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
      />

      {/* close icon */}
      <path
        className={visible ? "block" : "hidden"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      />
    </svg>
  );
};

export const SideBarLayout: FC<Props> = (props) => {
  const toggle = toggleSideBar();
  const visible = useSidebar();

  return (
    <div className="lg:flex flex-col lg:flex-row w-full h-full">
      <style jsx>
        {`
          @media (min-width: 1024px) {
            .side-nav {
              max-width: 400px;
            }
          }
        `}
      </style>

      <div className="flex flex-col w-full lg:w-1/4 text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 side-nav">
        <div className="flex-shrink-0 px-8 py-4 flex flex-row items-center justify-between">
          <span className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
            KURE-NCT MAP
          </span>
          <button
            className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            onClick={toggle}
          >
            <ToggleIcon />
          </button>
        </div>
        <nav
          className={`flex-grow lg:block px-4 pb-4 md:pb-0 md:overflow-y-auto ${
            visible ? "block" : "hidden"
          }`}
        >
          {props.sideComp}
        </nav>
      </div>

      <style jsx>
        {`
          @media (max-width: 1024px) {
            .main {
              height: calc(100% - 59px); // 59px is header nav height.
            }
          }
        `}
      </style>
      <div className="w-full main lg:p-8 h-full bg-gray-200 bg-opacity-25 outline-none">
        {" "}
        {props.mainComp}
      </div>
    </div>
  );
};
