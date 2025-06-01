import { getPokemonById } from "../services/pokeapi.js";
import { addRecentPokemon } from "../storage/recent.js";

export async function pokemonDetailsPage(app, id) {
  app.innerHTML = `<h2>Loading pokemon...</h2>`;

  try {
    const existPokemon = await getPokemonById(id);
    addRecentPokemon(existPokemon.name);

    app.innerHTML = `
      <h2>${existPokemon.name}</h2>
      <img src="${existPokemon.sprites.front_default}" alt="${existPokemon.name}" />
      <p>Weight: ${existPokemon.weight}</p>
      <p>Height: ${existPokemon.height}</p>
      <a href="#/pokemons">Back to pokemons</a>
    `;
  } catch (error) {
    console.error("Failed to load Pokémon:", error);
    app.innerHTML = `<p>Failed to load Pokémon data.</p>`;
  }
}
