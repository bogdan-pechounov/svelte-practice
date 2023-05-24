import { writable } from 'svelte/store';

const fetchPokemon = async () => {
	const url = `https://pokeapi.co/api/v2/pokemon?limit=100`;
	const res = await fetch(url);
	const data = await res.json();
	const loadedPokemon = data.results.map((pokemon, i) => ({
		name: pokemon.name,
		id: i + 1,
		image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
	}));
	pokemon.set(loadedPokemon);
};
fetchPokemon();

export const pokemon = writable([]);
