<script lang="ts">
	import Task from './Task.svelte';
	import type ITask from './ITask';

	export let categoryName: string;
	export let tasks: ITask[] = [];

	// Dynamic variables
	$: completedTasks = tasks.filter((task) => {
		return task.complete;
	}).sort((a, b) => {
		return priorityToNumber(b.priority) - priorityToNumber(a.priority);
	});
	$: incompleteTasks = tasks.filter((task) => {
		return !task.complete;
	}).sort((a, b) => {
		return priorityToNumber(b.priority) - priorityToNumber(a.priority);
	});

	function removeTask(e: CustomEvent): void {
		let id: number = e.detail;
		console.log(`Removing task number ${id}.`);
		tasks = tasks.filter((task) => {
			return task.id !== id;
		});
	}

	function priorityToNumber(priority: string) {
		switch (priority) {
			case 'low':
				return 1;
			case 'medium':
				return 2;
			case 'high':
				return 3;
			default:
				throw new Error(`Invalid priority: ${priority}.`);
		}
	}
</script>

<div class="category">
	<h2 class="color-primary-700">{categoryName}</h2>
	<h3 class="color-primary-500">Incomplete Tasks</h3>
	{#if incompleteTasks.length === 0}
		<div class="pt-12 pb-12">No incomplete tasks.</div>
	{/if}
	{#each incompleteTasks as task (task.id)}
		<Task bind:task={task} on:delete={removeTask} />
	{/each}
	<h3 class="color-primary-500">Completed Tasks</h3>
	{#if completedTasks.length === 0}
		<div class="pt-12 pb-12">No tasks completed.</div>
	{/if}
	{#each completedTasks as task (task.id)}
		<Task bind:task={task} on:delete={removeTask} />
	{/each}
</div>

<style>
	.category {
		display: flex;
		flex-direction: column;
		padding: 12px;
		border-right: 1px solid gray;
		min-width: 800px;
	}

	.category:first-of-type {
		border-left: 1px solid gray;
	}

	h2, h3 {
		text-transform: uppercase;
	}

	h2 {
		font-size: 3em;
		font-weight: 200;
	}

	h3 {
		font-size: 2em;
		font-weight: 100;
	}
</style>
