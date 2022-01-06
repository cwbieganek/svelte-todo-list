<script lang="ts">
	// Based on CodePen here: https://css-tricks.com/creating-non-rectangular-headers/

	export let text: string;
</script>

<div class="header bg-primary-dark">
	<h2>{text}</h2>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
		<polygon fill="white" points="0,100 100,0 100,100"/>
	</svg>
</div>

<style>
	.header {
		position: relative;
		height: 120px;
	}

	h2 {
		text-transform: uppercase;
		font-weight: 200;
		font-size: 3em;
		color: white;
	}

	svg {
		position: absolute;
		bottom: 0;
		width: 100%;
		/* height: 10vw; */
		height: 35px;
		/* set height to pixels if you want angle to change with screen width */
	}
</style>