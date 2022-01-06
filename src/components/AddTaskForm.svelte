<script lang="ts">
	import type ITask from './ITask';
	import { createEventDispatcher } from 'svelte';

	let task: ITask = {
		id: -1,
		description: "",
		priority: "medium",
		category: "other",
		complete: false
	};

	const dispatch = createEventDispatcher();

	function addTaskClicked() {
		dispatch('task-added', task);
	}

	function handleAddTaskInputKeystroke(e: KeyboardEvent): void {
		if (e.key === "Enter") {
			addTaskClicked();
		}
	}
</script>

<div class="add-task-form">
	<div class="add-task-container-row">
		<input class="add-task-input" placeholder="Enter a task description" bind:value={task.description} on:keypress={handleAddTaskInputKeystroke} />
	</div>
	<div class="add-task-container-row">
		<label for="priority" style="font-weight: bold;">Priority:&nbsp;&nbsp;&nbsp;&nbsp;</label>
		<select bind:value={task.priority}>
			<option value="low">Low</option>
			<option value="medium" selected>Medium</option>
			<option value="high">High</option>
		</select>
	</div>
	<div class="add-task-container-row">
		<label for="category" style="font-weight: bold;">Category:&nbsp;&nbsp;&nbsp;&nbsp;</label>
		<select bind:value={task.category}>
			<option value="personal" selected>Personal</option>
			<option value="work">Work</option>
			<option value="other">Other</option>
		</select>
	</div>
	<button class="add-task-button" disabled={task.description.replace(/\s/g, "") === ""} on:click={addTaskClicked}>Add Task</button>
</div>

<style>
	.add-task-form {
		width: 50%;
		margin: 0 auto;
		margin-bottom: 2em;
	}

	.add-task-container-row {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 10px;
	}

	.add-task-container-row input {
		width: 70%;
		margin-right: 3em;
	}

	.add-task-container-row label {
		width: 6em;
		text-align: left;
	}

	.add-task-button {
		flex: 1;
	}
</style>