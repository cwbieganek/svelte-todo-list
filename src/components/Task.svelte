<script lang="ts">
	import type ITask from './ITask';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

	export let task: ITask;

	function handleTaskDeleteClick(e: MouseEvent) {
		dispatch('delete', task.id);
	}

	function handleCheckboxChange(e: Event) {
		if (task.complete) {
			dispatch('complete', task.id);
		}
	}
</script>

<div class="task">
	<input type="checkbox" class="task-complete-checkbox" bind:checked={task.complete} />
	<span class="task-text">{task.description} {task.complete ? '(complete)' : ''}</span>
	<button class="task-delete" on:click={handleTaskDeleteClick}>x</button>
</div>

<style>
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