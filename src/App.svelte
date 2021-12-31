<script lang="ts">
	import Todo from './components/ToDo.svelte';

	let name = "Chris";
	// let tasks: [
	// 	{id: 1, description: 'Buy milk'},
	// 	{id: 2, description: 'Schedule dentist appointment'},
	// 	{id: 3, description: 'Meal prep'},
	// 	{id: 4, description: 'Walk dog'},
	// 	{id: 5, description: 'Take over the world'}
	// ];

	let taskDescriptions: string[] = [
		'Buy milk',
		'Schedule dentist appointment',
		'Meal prep',
		'Walk dog',
		'Take over the world'
	];
</script>

<main>
	<Todo {name} {taskDescriptions} />
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>