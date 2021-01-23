import { PanoramFeatureProperties } from "./../../mapbox/layers";
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

const panoramaFileState = atom<PanoramFeatureProperties>({
  key: "360ImageFileState",
  default: {
    placename: "",
    filename: "",
  },
});

export const usePanoramaFileValue = () => {
  return useRecoilValue(panoramaFileState);
};

export const setPanoramaFile = () => {
  const setter = useSetRecoilState(panoramaFileState);
  return (data: PanoramFeatureProperties) => setter(data);
};
