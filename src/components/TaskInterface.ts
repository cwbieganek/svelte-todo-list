interface Task {
	id: number;
	description: string;
	priority: 'low' | 'medium' | 'high';
	complete: boolean;
}

export default Task;