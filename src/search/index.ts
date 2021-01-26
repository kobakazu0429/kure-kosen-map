import Flexsearch, { Index } from "flexsearch";
import { Feature, Geometry } from "geojson";

export type SearchDocument = Feature<Geometry, { title: string }>;

class SearchGeojson {
  constructor() {
    this.index = Flexsearch.create({
      encode: false,
      // eslint-disable-next-line no-control-regex
      tokenize: (str) => str.replace(/[\x00-\x7F]/g, "").split(""),
      cache: true,
      doc: {
        id: "id",
        field: ["properties:title"],
      },
    }) as Index<SearchDocument>;
  }

  private index: Index<SearchDocument>;

  public add(d: SearchDocument) {
    this.index.add(d);
  }
  public async search(query: string): Promise<SearchDocument[]> {
    const results = await this.index.search({
      query,
      limit: 25,
      suggest: true,
      field: ["properties:title"],
    });
    return results;
  }
}

export const searchGeojson = new SearchGeojson();
