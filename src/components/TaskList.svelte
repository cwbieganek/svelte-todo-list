<script lang="ts">
	import Task from './Task.svelte';
	import type ITask from './ITask';
	import { createEventDispatcher } from 'svelte';

	export let tasks: ITask[];

	const dispatch = createEventDispatcher();
</script>

{#each tasks as task (task.id)}
	<Task {task} on:delete={(e) => {dispatch('delete', e.detail)}} />
{/each}

<style></style>