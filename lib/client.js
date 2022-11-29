import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "8265suj3",
  dataset: "production",
  apiVersion: "2022-11-28",
  useCdn: true,
  token:
    "skXwaOuuULK4OLyErrwj8Bgi6MoFv50ZfXNmzAKhKDSIrgfxi8FyOucdhqbfxdYUpnbO2Y745wE2fEMZsnEzCz8YqNVP4ej8fHrxaTxJlxfaBWDNsfoI63jMpm0q5dUtJXmwnyA2HbFu3xiQaP1KQlNgCWMmEGx82gVrDhMbrusRrWgkvugk",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
