import React, { VFC } from "react";
import { useHowToUseModal } from "@/recoil/atom/how-to-use-modal";
import { event } from "@/gtag";
import { close_from_icon } from "@/gtag/event";

export const HowToUseModal: VFC = () => {
  const [showModal, , closer] = useHowToUseModal();

  if (showModal === false) return null;

  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={closer}
      >
        <div className="relative w-full my-6 mx-auto max-w-2xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-3xl font-semibold text-gray-900">使い方</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-gray-900 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => {
                  closer();
                  event(close_from_icon);
                }}
              >
                <span className="bg-transparent text-gray-900 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto text-gray-900 text-lg leading-relaxed">
              <ul>
                <li>
                  ・カメラアイコンを押すると360度のパノラマ画像を見ることができます。
                </li>
                <li>
                  ・左側(スマホの方は右上の三本線)から検索機能や表示/非表示の切り替えなどができます。
                </li>
                <li>
                  ・今後の改善のためにご意見・ご感想を送ってくださると幸いです。
                </li>
                <li>
                  ※検索機能は実験段階なので正常に動作しない場合があります。ご了承ください。
                </li>
              </ul>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-gray-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
                onClick={closer}
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
