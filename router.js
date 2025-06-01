import { homePage } from "./home.js";
import { pokemonListPage } from "./pokemons.js";
import { pokemonDetailsPage } from "./pokemonDetails.js";
import { aboutPage } from "./about.js";


export async function router(app) {
  const hash = window.location.hash;

  if (hash === "#/home" || hash === "" || hash === "#") {
    homePage(app);
  } else if (hash === "#/about") {
    aboutPage(app);
  } else if (hash === "#/pokemons") {
    pokemonListPage(app);
  } else if (hash.startsWith("#/pokemons/")) {
    const id = hash.split("/")[2];
    pokemonDetailsPage(app, id);
  } else {
    app.innerHTML = `<h2>Page not found</h2>`;
  }
}
