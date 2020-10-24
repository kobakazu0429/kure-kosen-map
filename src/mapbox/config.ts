const style: mapboxgl.Style = {
  version: 8,
  sources: {
    m_streets: {
      type: "raster",
      tiles: [
        `https://api.maptiler.com/maps/jp-mierune-streets/{z}/{x}/{y}@2x.png?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
      ],
      tileSize: 512,
      attribution:
        '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    },
  },
  layers: [
    {
      id: "mierunemap",
      type: "raster",
      source: "m_streets",
      minzoom: 0,
      maxzoom: 18,
    },
  ],
};

export const mapOptions: Omit<mapboxgl.MapboxOptions, "container"> = {
  center: [132.601271, 34.232102],
  zoom: 16,
  bearing: 21.148851039999840395,
  // hash: true,
  style,
  // style: `https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=${process.env.NEXT_PUBLIC_MAPTILER_API_KEY}`,
};
