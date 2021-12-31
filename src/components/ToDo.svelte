<script lang="ts">
	export let name: string = "Someone";
	export let taskDescriptions: string[] = [];
	export let tasks: Task[] = [];

	let newTask: string = "";

	// Set initial array of tasks, since passing in Task objects from App was not working.
	// It's possible this was because the App component was not aware of the Task interface,
	// even though the objects were properly implementing the Task interface. ¯\_(ツ)_/¯
	tasks = taskDescriptions.map((taskDescription, i) => {
		return {
			id: i + 1,
			description: taskDescription
		};
	});

	interface Task {
		id: number;
		description: string;
	}

	function addTask(description: string): void {
		console.log(`Adding a task: ${description}.`);

		let newTask: Task = {
			id: tasks.length + 1,
			description: description
		};

		tasks = [...tasks, newTask];
	}

	function removeTask(id: number): void {
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

	function handleTaskDeleteClick(e: MouseEvent) {
		let target = e.target as HTMLButtonElement;
		let taskId = +target.getAttribute('data-task-id');
		removeTask(taskId);
	}
</script>

<div>
	<h2>{name}'s To Do List</h2>
	<div class="tasks-container">
		<div class="add-task-container">
			<input class="add-task-input" placeholder="Add a task" bind:value={newTask} on:keypress={handleAddTaskInputKeystroke} />
			<button class="add-task-button" disabled={newTask.replaceAll(" ", "") === ""} on:click={(e) => {addTask(newTask);}}>Add Task</button>
		</div>
		{#each tasks as task}
			<div class="task" data-task-id={task.id}>
				<span class="task-text">Task #{task.id}: {task.description}</span>
				<button class="task-delete" on:click={handleTaskDeleteClick} data-task-id={task.id}>x</button>
			</div>
		{/each}
		<div class="tasks-bottom-buttons-container">
			<button class="remove-all-tasks-button" on:click={removeAllTasks}>Remove All Tasks</button>
		</div>
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