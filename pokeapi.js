const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemonList(limit = 20, offset = 0) {
  const response = await fetch(`${BASE_URL}pokemon?limit=${limit}&offset=${offset}`);
  return await response.json();
}

export async function getPokemonById(idOrName) {
  const response = await fetch(`${BASE_URL}pokemon/${idOrName}`);
  return await response.json();
}
