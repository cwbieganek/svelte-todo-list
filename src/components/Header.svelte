<script lang="ts">
	export let text: string;
</script>

<h2 class="bg-primary-dark">{text}</h2>

<style>
	h2 {
		text-transform: uppercase;
		font-weight: 200;
		font-size: 3em;
		color: white;
		/* Box-shadow based on: https://stackoverflow.com/questions/4561097/css-box-shadow-bottom-only */
		box-shadow: 0 4px 3px -2px #BDBDBD;
	}
</style>