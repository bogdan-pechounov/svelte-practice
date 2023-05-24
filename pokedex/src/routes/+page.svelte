<script>
	import Card from '../components/card.svelte';
	import { pokemon } from '../stores/pokestore';

	let searchTerm;
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokemon) =>
				pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}
</script>

<svelte:head>
	<title>Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokedex</h1>

<input
	type="text"
	placeholder="Search Pokemon"
	bind:value={searchTerm}
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
/>
<div class="grid gap-4 md:grid-cols-2 grid-cols-1 py-4">
	{#each filteredPokemon as pokemon}
		<Card {pokemon} />
	{/each}
</div>
