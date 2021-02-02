import { atom, useSetRecoilState, useRecoilValue } from "recoil";

const howToUseModalState = atom<boolean>({
  key: "how-to-use-modal",
  default: true,
});

export const useHowToUseModal = () => {
  return [
    useRecoilValue(howToUseModalState),
    openHowToUseModal(),
    closeHowToUseModal(),
  ] as const;
};

export const openHowToUseModal = () => {
  const setter = useSetRecoilState(howToUseModalState);
  return () => setter(true);
};

export const closeHowToUseModal = () => {
  const setter = useSetRecoilState(howToUseModalState);
  return () => setter(false);
};
