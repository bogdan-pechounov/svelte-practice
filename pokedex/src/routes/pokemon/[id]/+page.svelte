<script>
	import { pokemon } from '../../../stores/pokestore';

	export let data;
	const type = data.pokemon.types[0].type.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{data.pokemon.name}</h1>
	<p>
		Type: <strong>{type}</strong> | Height: <strong>{data.pokemon.height}</strong> | Weight:
		<strong>{data.pokemon.weight}</strong>
	</p>

	<img class="card-image" src={data.pokemon.sprites['front_default']} alt={data.pokemon.name} />
</div>
