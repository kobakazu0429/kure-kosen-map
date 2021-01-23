import { atom, useSetRecoilState } from "recoil";
import { useRecoilValue } from "recoil";

const panoramaIsOpenState = atom<boolean>({
  key: "360ImageOpenState",
  default: false,
});

export const usePanorama = () => {
  return [
    useRecoilValue(panoramaIsOpenState),
    displayPanorama(),
    closePanorama(),
  ] as const;
};

export const displayPanorama = () => {
  const setter = useSetRecoilState(panoramaIsOpenState);
  return () => setter(true);
};

export const closePanorama = () => {
  const setter = useSetRecoilState(panoramaIsOpenState);
  return () => setter(false);
};

const panoramaFileState = atom({
  key: "360ImageFileState",
  default: "",
});

export const usePanoramaFileValue = () => {
  return useRecoilValue(panoramaFileState);
};

export const setPanoramaFile = () => {
  const setter = useSetRecoilState(panoramaFileState);
  return (filename: string) => setter(filename);
};
