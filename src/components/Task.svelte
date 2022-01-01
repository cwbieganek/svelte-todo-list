<script lang="ts">
	import type ITask from './ITask';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

	export let task: ITask;

	function handleTaskDeleteClick(e: MouseEvent) {
		dispatch('delete', task.id);
	}
</script>

<div class="task" class:task-incomplete="{!task.complete}" class:task-complete="{task.complete}">
	<div class="priority circle">{task.priority[0].toUpperCase()}</div>
	<div class="flex flex-row items-center">
		<div class="w-6"><input type="checkbox" class="task-complete-checkbox" bind:checked={task.complete} /></div>
		<div class="flex-1"><span class="task-text">{task.description} {task.complete ? '(complete)' : ''}</span></div>
		<div class="w-48 last-column"><span class="category-text text-sm"><strong>Category:</strong> {task.category}</span></div>
	</div>
	<button class="task-delete" on:click={handleTaskDeleteClick}>x</button>
</div>

<style>
	.task {
		position: relative;
		text-align: left;
		padding: 10px;
		border-radius: 3px;
		background-color: #EEEEEE;
		margin-bottom: 8px;
	}

	.task-incomplete {
		border-left: 2px solid #f7a58a;
	}

	.task-incomplete:hover {
		border-left: 4px solid #FF3E00;
		padding-left: 8px;
	}

	.task-complete {
		border-left: 2px solid green;
	}

	.task-complete:hover {
		border-left: 4px solid green;
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

	.last-column {
		padding-right: 1em;
	}

	.circle {
		width: 12px;
		height: 12px;
		background: red;
		-moz-border-radius: 6px;
		-webkit-border-radius: 6px;
		border-radius: 6px;
	}

	.priority {
		position: absolute;
		top: -6px;
		left: -6px;
		font-size: 0.5em;
		text-align: center;
	}

	/* Utility classes */
	.center-text {
		text-align: center;
	}

	.right-text {
		text-align: right;
	}
</style>