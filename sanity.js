globalThis.PROJECT_ID = "o6vg3c2q";
globalThis.DATASET = "production";

globalThis.getUrl = (query) => `https://${globalThis.PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${globalThis.DATASET}?query=${query}`;