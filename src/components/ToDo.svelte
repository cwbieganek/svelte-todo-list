<script lang="ts">
	import Task from './Task.svelte';
	import type ITask from './ITask';

	export let name: string = "Someone";
	export let tasks: ITask[] = [];

	let newTask: string = "";
	$: nextTaskId = (tasks.length == 0) ? 1 : tasks[tasks.length - 1].id + 1;

	// Dynamic variables
	$: completedTasks = tasks.filter((task) => {
		return task.complete;
	});
	$: incompleteTasks = tasks.filter((task) => {
		return !task.complete;
	});

	function addTask(description: string): void {
		console.log(`Adding a task: ${description}.`);

		let newTask: ITask = {
			id: nextTaskId,
			description: description,
			priority: 'low',
			complete: false
		};

		tasks = [...tasks, newTask];
	}

	function markTaskAsComplete(e: CustomEvent): void {
		let id: number = e.detail;

		tasks = tasks.map((task) => {
			if (task.id === id) {
				// Found the task. Mark it as complete.
				task.complete = true;
			}

			return task;
		});
	}

	function removeTask(e: CustomEvent): void {
		let id: number = e.detail;
		console.log(`Removing task number ${id}.`);
		tasks = tasks.filter((task) => {
			return task.id !== id;
		});
	}

	function removeAllTasks(): void {
		console.log(`Removing all ${tasks.length} tasks.`);
		tasks = [];
	}

	function handleAddTaskInputKeystroke(e: KeyboardEvent): void {
		if (e.key === "Enter") {
			addTask(newTask);
		}
	}
</script>

<div>
	<h2>{name}'s To Do List</h2>
	<div class="tasks-container">
		<div class="add-task-container">
			<input class="add-task-input" placeholder="Add a task" bind:value={newTask} on:keypress={handleAddTaskInputKeystroke} />
			<button class="add-task-button" disabled={newTask.replaceAll(" ", "") === ""} on:click={(e) => {addTask(newTask);}}>Add Task</button>
		</div>
		{#each incompleteTasks as task (task.id)}
			<Task bind:task={task} on:delete={removeTask} />
		{/each}
		<div class="tasks-bottom-buttons-container">
			<button class="remove-all-tasks-button" on:click={removeAllTasks}>Remove All Tasks</button>
		</div>
		{#each completedTasks as task (task.id)}
			<Task bind:task={task} on:delete={removeTask} />
		{/each}
	</div>
</div>

<style>
	h2 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.tasks-container {
		width: 50%;
		margin: 0 auto;
	}

	.add-task-container {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.add-task-container input {
		width: 70%;
		margin-right: 3em;
	}

	.add-task-button {
		flex: 1;
	}
</style>