import React, { useCallback, useState, FC } from "react";

interface Props {
  sideComp: React.ReactNode;
  mainComp: React.ReactNode;
}

const ToggleIcon = (props: { visible: boolean }) => (
  <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
    <path
      className={props.visible ? "block" : "hidden"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    />
    <path
      className={props.visible ? "hidden" : "block"}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
    />
  </svg>
);

export const SideBarLayout: FC<Props> = (props) => {
  const [isOpen, setOpen] = useState(false);

  const toggle = useCallback(() => {
    setOpen((p) => !p);
  }, []);

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
            Flowtrail UI
          </span>
          <button
            className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
            onClick={toggle}
          >
            <ToggleIcon visible={isOpen} />
          </button>
        </div>
        {props.sideComp}
      </div>

      <style jsx>
        {`
          .main {
            height: calc(100% - 59px);
          }

          @media (min-width: 1024px) {
            .main {
              height: 100%;
            }
          }
        `}
      </style>
      <div className="w-full main">{props.mainComp}</div>
    </div>
  );
};
