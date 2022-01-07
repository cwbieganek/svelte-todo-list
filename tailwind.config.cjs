module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	theme: {
		extend: {
			colors: {
				'primary-dark': '#005c9f',
				'primary-base': '#0289d1',
				'primary-light': '#5eb9ff',
				primary: {
					50: '#e1f5fe',
					100: '#b3e5fc',
					200: '#81d4fa',
					300: '#4fc3f7',
					400: '#2ab7f6',
					500: '#04aaf4',
					600: '#049ce5',
					700: '#0289d1',  // This is the default shade (base) for primary.
					800: '#0278bd',
					900: '#01589b'
				},
				'secondary-dark': '#009f83',
				'secondary-base': '#02d1b2',
				'secondary-light': '#62ffe4',
				secondary: {
					50: '#def7f3',
					100: '#adebde',
					200: '#72dfc9',
					300: '#02d1b2',  // This is the default shade (base) for secondary.
					400: '#00c5a0',
					500: '#00b78f',
					600: '#00a981',
					700: '#009870',
					800: '#008762',
					900: '#006944'
				},
			}
		},
	},
}