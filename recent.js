export function addRecentPokemon(name) {
  let recent = JSON.parse(localStorage.getItem("recentPokemons")) || [];
  if (!recent.includes(name)) {
    recent.push(name);
    localStorage.setItem("recentPokemons", JSON.stringify(recent));
  }
}
