import React from "react";
import { KureKosenMap } from "@/components/KureKosenMap";
import { useRecoilValue } from "recoil";
import { mapState } from "@/recoil/atom/kurekosenmap";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
];

function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <a className="text-blue-500 no-underline">Home</a>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded no-underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}

export default function TopPage() {
  const map = useRecoilValue(mapState);
  return (
    <div>
      <Nav />
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
      <div>
        <button
          className="h-8 w-40 rounded bg-green-200 mx-10"
          onClick={(_e) => {
            map?.mapbox?.zoomIn();
          }}
        >
          zoom +
        </button>

        <button
          className="h-8 w-40 rounded bg-green-200 mx-10"
          onClick={(_e) => {
            map?.mapbox?.zoomOut();
          }}
        >
          zoom -
        </button>
      </div>
      <KureKosenMap />
    </div>
  );
}
