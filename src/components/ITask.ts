interface ITask {
	id: number;
	description: string;
	priority: 'low' | 'medium' | 'high';
	category: 'personal' | 'work' | 'other' | string;
	complete: boolean;
}

export default ITask;