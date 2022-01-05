<script lang="ts">
	import type ITask from './ITask';
	import Category from './Category.svelte';
	import Header from './Header.svelte';

	export let name: string = "Someone";
	export let tasks: ITask[] = [];

	let newTaskDescription: string = "";
	$: nextTaskId = (tasks.length == 0) ? 1 : tasks[tasks.length - 1].id + 1;
	let newTaskPriority: 'low' | 'medium' | 'high' = 'medium';
	let newTaskCategory: string;

	$: personalTasks = tasks.filter((task) => {
		return task.category === 'personal';
	});

	$: workTasks = tasks.filter((task) => {
		return task.category === 'work';
	});

	$: otherTasks = tasks.filter((task) => {
		return task.category === 'other';
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
	<Header text={`${name}'s To Do List`} />
	<div class="tasks-container">
		<div class="add-task-form">
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
			<button class="add-task-button" disabled={newTaskDescription.replace(/\s/g, "") === ""} on:click={(e) => {addTask(newTaskDescription);}}>Add Task</button>
		</div>
		<div class="categories-container">
			<!-- TODO: Use #each instead -->
			<Category bind:tasks={personalTasks} categoryName={'Personal Tasks'} />
			<Category bind:tasks={workTasks} categoryName={'Work Tasks'} />
			<Category bind:tasks={otherTasks} categoryName={'Other Tasks'} />
		</div>
		<div class="tasks-bottom-buttons-container">
			<button class="remove-all-tasks-button" on:click={removeAllTasks}>Remove All Tasks</button>
		</div>
	</div>
</div>

<style>
	.tasks-container {
		/* width: 50%; */
		width: 100%;
		margin: 0 auto;
	}

	.add-task-form {
		width: 50%;
		margin: auto;
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

	.categories-container {
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
	}
</style>