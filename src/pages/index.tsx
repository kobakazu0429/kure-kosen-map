import React from "react";
import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

export default function TopPage() {
  return (
    <>
      <Head>
        <title>KURE-NCT MAP</title>
        <style>
          {`
            @media (max-width: 768px) {
              #main {
                position: relative;
              }

              .feature-img {
                height: 120px !important;
              }
            }
          `}
        </style>
      </Head>
      <div className="leading-normal tracking-normal text-gray-800">
        <div className="container pt-6 md:pb-6 pb-16 px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center border-b-2">
          <div
            className="flex flex-col w-full md:w-2/5 justify-center lg:items-start text-center md:text-left"
            id="main"
          >
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
            <style jsx>
              {`
                @media (max-width: 768px) {
                  a {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -260px;
                  }
                }
              `}
            </style>
            <Link href="/map" prefetch={false}>
              <a className="mx-auto hover:underline bg-white font-bold rounded-full my-4 lg:my-8 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                使ってみる
              </a>
            </Link>
          </div>

          <div className="w-full md:w-3/5 text-center">
            {/* <Image
              src="https://cdn.dribbble.com/users/449035/screenshots/5612222/mr_worldwide.gif"
              width={754}
              height={350}
              alt="ヒーローイメージ"
            /> */}
            <video
              className="w-full z-50 object-contain h-48 md:h-350px"
              src="mr_worldwide.mp4"
              autoPlay
              loop
              muted
              playsInline
              width={754}
              height={350}
              disablePictureInPicture={false}
            />
          </div>
        </div>

        <section className="container max-w-5xl mx-auto py-8 lg:mt-8">
          <h2 className="w-full my-2 text-4xl font-bold leading-tight text-center">
            機能の紹介
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto bg-gradient-to-r from-pink-600 to-orange-400 w-64 my-0 py-0 rounded-full"></div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 p-6">
              <h3 className="text-3xl font-bold leading-none mb-3">
                教室や建物の検索機能
              </h3>
              <p className="text-gray-700 mb-8">
                探している場所を入力するだけで候補地のピンの出現します。
                <br />
                どこへでも簡単に行くことができます。
              </p>
            </div>
            <div className="w-full sm:w-1/2 p-6">
              {/* src="https://cdn.dribbble.com/users/363199/screenshots/2654846/cc-ptich-dribble_30fps.gif" */}
              {/* <Image
                alt="機能紹介の画像1"
                className="h-56 w-full object-cover feature-img"
                src="https://cdn.dribbble.com/users/40736/screenshots/2470871/map-pin-.gif"
                width={464}
                height={224}
              /> */}
              <video
                className="h-56 w-full object-cover feature-img"
                src="map-pin-.mp4"
                autoPlay
                loop
                muted
                playsInline
                width={754}
                height={350}
                disablePictureInPicture={false}
              />
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse sm:flex-row">
            <div className="w-full sm:w-1/2 p-6 mt-6">
              {/* <Image
                alt="機能紹介の画像2"
                className="h-56 w-full object-cover feature-img"
                src="https://cdn.dribbble.com/users/2441144/screenshots/6176835/5.sfl_miasto_dribbble.gif"
                width={464}
                height={224}
              /> */}
              <video
                className="h-56 w-full object-cover feature-img"
                src="sfl_miasto_dribbble.mp4"
                autoPlay
                loop
                muted
                playsInline
                width={754}
                height={350}
                disablePictureInPicture={false}
              />
            </div>
            <div className="w-full sm:w-1/2 p-6 mt-6">
              <div className="align-middle">
                <h3 className="text-3xl font-bold leading-none mb-3">
                  360度のパノラマ画像で見学
                </h3>
                <p className="text-gray-700 mb-8">
                  パノラマ画像で呉高専に行かなくても、学校中を見学できます。
                  <br />
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full flex items-center">
          <Link href="/map" prefetch={false}>
            <a className="mx-auto hover:underline bg-white font-bold rounded-full my-4 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              使ってみる
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
