<script lang="ts">
	export let name: string;
	export let tasks: string[];
</script>

<main>
	<h2>{name}'s To Do List</h2>
	<div class="tasks-container">
		{#each tasks as task, i}
			<div class="task">Task #{i + 1}: {task}<button class="task-delete">x</button></div>
		{/each}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	.tasks-container {
		width: 50%;
		margin: 0 auto;
	}

	.task {
		position: relative;
		text-align: left;
		padding: 10px;
		border-left: 2px solid #f7a58a;
		border-radius: 3px;
		background-color: #EEEEEE;
		margin-bottom: 8px;
	}

	.task:hover {
		border-left: 4px solid #FF3E00;
		padding-left: 8px;
	}

	.task-delete {
		position: absolute;
		top: 4px;
		right: 4px;
		border: none;
		background: none;
		padding: 0;
		line-height: 0.5em;
	}

	.task-delete:hover {
		cursor: pointer;
		color: red;
	}
</style>