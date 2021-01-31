import React from "react";
import Link from "next/link";

export default function TopPage() {
  return (
    <div className="leading-normal tracking-normal">
      <style jsx>{`
        .gradient {
          background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
        }
      `}</style>

      <div className="container pt-6 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center border-b-2">
        <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
          <p className="uppercase tracking-loose w-full">
            呉高専 電気情報工学科 システム工学
          </p>
          <h1 className="my-4 text-5xl font-bold leading-tight">
            呉高専マップ
          </h1>
          <p className="leading-normal text-xl mb-2">
            学内地図の Web
            化と新型コロナウイルス感染拡大によるオープンキャンパス等の減少に対する解決策の提案
          </p>
          <Link href="/map">
            <a className="mx-auto hover:underline bg-white text-gray-800 font-bold rounded-full my-4 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              使ってみる
            </a>
          </Link>
        </div>

        <div className="w-full md:w-3/5 py-6 text-center">
          <img
            className="w-full z-50 object-contain"
            style={{ height: 350 }}
            height={350}
            src="https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif"
          />
        </div>
      </div>

      <section className=" py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
            機能の紹介
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-5/6 sm:w-1/2 p-6">
              <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                教室や建物の検索機能
              </h3>
              <p className="text-gray-600 mb-8">
                探している場所を入力するだけで候補地のピンの出現します。
                <br />
                どこへでも簡単に行くことができます。
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              {/* src="https://cdn.dribbble.com/users/363199/screenshots/2654846/cc-ptich-dribble_30fps.gif" */}
              <img
                height="14rem"
                alt="機能紹介の画像1"
                className="h-56 w-full object-cover"
                src="https://cdn.dribbble.com/users/40736/screenshots/2470871/map-pin-.gif"
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <img
                alt=""
                src="https://cdn.dribbble.com/users/2441144/screenshots/6176835/5.sfl_miasto_dribbble.gif"
                className="h-56 w-full object-cover"
                height="14rem"
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                  360度のパノラマ画像で見学
                </h3>
                <p className="text-gray-600 mb-8">
                  パノラマ画像で呉高専に行かなくても、学校中を見学できます。
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
