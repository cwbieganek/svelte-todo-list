import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Chris',
		tasks: [
			{id: 1, description: 'Buy milk'},
			{id: 2, description: 'Schedule dentist appointment'},
			{id: 3, description: 'Meal prep'},
			{id: 4, description: 'Walk dog'},
			{id: 5, description: 'Take over the world'}
		]
	}
});

export default app;