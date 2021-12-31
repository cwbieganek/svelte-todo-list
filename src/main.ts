import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Chris',
		tasks: [
			'Buy milk',
			'Schedule dentist appointment',
			'Meal prep',
			'Walk dog',
			'Take over the world'
		]
	}
});

export default app;