<script lang="ts">
	import type ITask from './ITask';
	import Header from './Header.svelte';
	import AddTaskForm from './AddTaskForm.svelte';
	import Category from './Category.svelte';

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

	function onTaskAdded(e: CustomEvent): void {
		addTask(e.detail as ITask);
	}

	function addTask(task: ITask): void {
		console.log(`Adding a task: ${task.description}.`);

		task.id = nextTaskId;

		tasks = [...tasks, task];
	}

	function removeAllTasks(): void {
		console.log(`Removing all ${tasks.length} tasks.`);
		tasks = [];
	}
</script>

<div>
	<Header text={`${name}'s To Do List`} />
	<!-- <SkewedHeader text={`${name}'s To Do List`} /> -->
	<div class="tasks-container">
		<AddTaskForm on:task-added={onTaskAdded} />
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
		padding: 2em;
	}

	.categories-container {
		display: flex;
		flex-direction: row;
		overflow-x: scroll;
	}
</style>