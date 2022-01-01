<script lang="ts">
	import Todo from './components/ToDo.svelte';
	import type ITask from './components/ITask';

	let name = "Chris";
	let tasks: ITask[] = [
		{
			id: 1,
			description: 'Buy milk',
			priority: 'medium',
			category: 'personal',
			complete: false
		},
		{
			id: 2,
			description: 'Schedule dentist appointment',
			priority: 'low',
			category: 'personal',
			complete: false
		},
		{
			id: 3,
			description: 'Work project',
			priority: 'high',
			category: 'work',
			complete: false
		},
		{
			id: 4,
			description: 'Walk dog',
			priority: 'medium',
			category: 'personal',
			complete: false
		},
		{
			id: 5,
			description: 'Take over the world',
			priority: 'high',
			category: 'personal',
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