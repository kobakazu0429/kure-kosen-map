import { atom, useRecoilState, useSetRecoilState } from "recoil";

const panoramaState = atom<boolean>({
  key: "360ImageState",
  default: false,
});

export const usePanorama = () => {
  return useRecoilState(panoramaState);
};

export const displayPanorama = () => {
  const setter = useSetRecoilState(panoramaState);
  return () => setter(true);
};

export const closePanorama = () => {
  const setter = useSetRecoilState(panoramaState);
  return () => setter(false);
};
