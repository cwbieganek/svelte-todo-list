<script lang="ts">
	// Adapted from CodePen here: https://codepen.io/andreaballerino/pen/OwOZNo

	export let text: string;
</script>

<div class="header">
	<h2 class="header-text">{text}</h2>
  <div class="wave">
    <svg viewBox="0 0 1440 120">
      <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"></path>
    </svg>
  </div>
</div>

<style>
	.header {
		position: relative;
		overflow: hidden;
		height: 150px;
		/* background-color: #0289d1; */
		background: linear-gradient(to bottom right, #0289d1, #4fc3f7);
	}

	.header-text {
		text-align: center;
	}

	h2 {
		text-transform: uppercase;
		font-weight: 200;
		font-size: 3em;
		color: white;
	}

	.wave {
		position: absolute;
		bottom: 0;
		overflow: hidden;
		width: 100%;
		transform: translateY(60%);
	}

	.wave svg {
		width: 102%;
		height: auto;
		margin-left: -1%;
		fill: #fff;
	}
</style>