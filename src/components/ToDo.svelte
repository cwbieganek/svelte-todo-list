<script lang="ts">
	import Task from './Task.svelte';
	import type ITask from './ITask';

	export let name: string = "Someone";
	export let tasks: ITask[] = [];

	let newTaskDescription: string = "";
	$: nextTaskId = (tasks.length == 0) ? 1 : tasks[tasks.length - 1].id + 1;
	let newTaskPriority: 'low' | 'medium' | 'high' = 'medium';
	let newTaskCategory: string;

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
			priority: newTaskPriority,
			category: newTaskCategory,
			complete: false
		};

		tasks = [...tasks, newTask];
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
			addTask(newTaskDescription);
		}
	}
</script>

<div>
	<h2>{name}'s To Do List</h2>
	<div class="tasks-container">
		<div class="add-task-container-row">
			<input class="add-task-input" placeholder="Enter a task description" bind:value={newTaskDescription} on:keypress={handleAddTaskInputKeystroke} />
		</div>
		<div class="add-task-container-row">
			<label for="priority" style="font-weight: bold;">Priority:&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<select bind:value={newTaskPriority}>
				<option value="low">Low</option>
				<option value="medium" selected>Medium</option>
				<option value="high">High</option>
			</select>
		</div>
		<div class="add-task-container-row">
			<label for="category" style="font-weight: bold;">Category:&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<select bind:value={newTaskCategory}>
				<option value="personal" selected>Personal</option>
				<option value="work">Work</option>
				<option value="other">Other</option>
			</select>
		</div>
		<button class="add-task-button" disabled={newTaskDescription.replaceAll(" ", "") === ""} on:click={(e) => {addTask(newTaskDescription);}}>Add Task</button>
		<h3>Incomplete Tasks</h3>
		{#each incompleteTasks as task (task.id)}
			<Task bind:task={task} on:delete={removeTask} />
		{/each}
		<h3>Completed Tasks</h3>
		{#each completedTasks as task (task.id)}
			<Task bind:task={task} on:delete={removeTask} />
		{/each}
		<div class="tasks-bottom-buttons-container">
			<button class="remove-all-tasks-button" on:click={removeAllTasks}>Remove All Tasks</button>
		</div>
	</div>
</div>

<style>
	h2, h3 {
		color: #ff3e00;
		text-transform: uppercase;
		font-weight: 100;
	}

	h2 {
		font-size: 3em;
	}

	h3 {
		font-size: 2em;
	}

	.tasks-container {
		width: 50%;
		margin: 0 auto;
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