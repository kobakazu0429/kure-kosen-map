import { atom, useRecoilValue, useSetRecoilState } from "recoil";

const visibleState = atom<boolean>({
  key: "sidebarVisible",
  default: false,
});

export const useSidebar = () => {
  return useRecoilValue(visibleState);
};

export const toggleSideBar = () => {
  const setter = useSetRecoilState(visibleState);
  return () => setter((p) => !p);
};
