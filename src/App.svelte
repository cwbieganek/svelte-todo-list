<script lang="ts">
	import Todo from './components/ToDo.svelte';
	import type ITask from './components/ITask';

	let name = "Chris";
	let taskDescriptions: string[] = [
		'Buy milk',
		'Schedule dentist appointment',
		'Meal prep',
		'Walk dog',
		'Take over the world'
	];

	let tasks: ITask[] = [
		{
			id: 1,
			description: 'Buy milk',
			priority: 'medium',
			complete: false
		},
		{
			id: 2,
			description: 'Schedule dentist appointment',
			priority: 'medium',
			complete: false
		},
		{
			id: 3,
			description: 'Meal prep',
			priority: 'medium',
			complete: false
		},
		{
			id: 4,
			description: 'Walk dog',
			priority: 'medium',
			complete: true
		},
		{
			id: 5,
			description: 'Take over the world',
			priority: 'medium',
			complete: false
		}
	];
</script>

<main>
	<Todo {name} {tasks} />
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