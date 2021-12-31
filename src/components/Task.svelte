<script lang="ts">
	export let task: Task;

	interface Task {
		id: number;
		description: string;
		priority: 'low' | 'medium' | 'high';
		complete: boolean;
	}

	function removeTask(): void {
		console.log('Removing this task...');
	}

	function handleTaskDeleteClick(e: MouseEvent) {
		removeTask();
	}
</script>

<div class="task">
	<input type="checkbox" class="task-complete-checkbox" />
	<span class="task-text">Task #{task.id}: {task.description}</span>
	<button class="task-delete" on:click={handleTaskDeleteClick}>x</button>
</div>

<style>

</style>