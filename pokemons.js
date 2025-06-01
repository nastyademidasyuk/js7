import { getPokemonList, getPokemonById } from "../services/pokeapi.js";

export async function pokemonListPage(app) {
  app.innerHTML = `<h2>Loading pokemons...</h2>`;

  try {
    const data = await getPokemonList(3, 0); // получаем 3 покемона
    const pokemons = await Promise.all(
      data.results.map(p => getPokemonById(p.name))
    );

    app.innerHTML = `
      <h2>Pokemon List</h2>
      <ul style="list-style: none; padding: 0;">
        ${pokemons.map(p => `
          <li style="margin-bottom: 20px;">
            <a href="#/pokemons/${p.id}">
              <img src="${p.sprites.front_default}" alt="${p.name}" />
              <p>${p.name}</p>
            </a>
          </li>
        `).join('')}
      </ul>
    `;
  } catch (error) {
    app.innerHTML = `<p>Error loading pokemons.</p>`;
    console.error("Fetch error:", error);
  }
}
