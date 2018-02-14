(function() {
	'use strict'
	const settings = {
		sections: document.querySelectorAll('section')
	}
	const app = {
		init() {
			sections.init()
			router.init()
			router.checkHash()
		}
	}
	const router = {
		init() {
			routie({
				'home': function() {
					sections.toggle(helpers.splitHash(location.hash))
				},
				'pokemon': function() {
					sections.toggle(helpers.splitHash(location.hash))

					const fetchPokeList = async () =>
						await (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')).json()

					fetchPokeList()
						.then((data) => {

							const directives = {
								name: {
									href() {
										return `#pokemon/${this.name}`
									}
								}
							}

							let dataPokemon = data.results.map(function(i) {
								return {
									name: i.name,
									url: i.url
								}
							})

							var el = document.querySelector('#pokemon-list')
							Transparency.render(el, dataPokemon, directives)
						})
						.catch(reason => console.log(reason.message))
				},
				'pokemon/?:name': function(name) {
					let pokemonName = name

					console.log(pokemonName)
					const fetchPokeList = async () =>
						await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)).json()

					fetchPokeList().then((data) => {
						const directives = {
							sprite: {
								src() {
									return `${this.sprite}`
								}
							}
						}

						const pokeDetails = {
							name: data.name,
							id: data.id,
							sprite: data.sprites.front_default
						}

						sections.toggle(helpers.splitHash(location.hash))

						document.querySelector('#pokemon-detail').classList.remove('hidden')
						console.log(data)
						console.log(name)
						Transparency.render(document.querySelector('#pokemon-detail'), pokeDetails, directives)
					})
				}
			})
		},
		checkHash() {
			if (window.location.hash) {
				sections.toggle(helpers.splitHash(location.hash))
			} else {
				document.querySelector('#home').classList.remove('hidden')
			}
		}
	}
	const sections = {
		init() {
			settings.sections.forEach((el) => {
				el.classList.add('hidden')
			})
		},
		toggle(route) {
			settings.sections.forEach((el) => {
				if (el.id === route) {
					el.classList.remove('hidden')
				} else {
					el.classList.add('hidden')
				}
			})
		}
	}

	const helpers = {
		splitHash(hash) {
			return hash.split('#')[1]
		},
		splitSlash(slash) {
			return slash.split('/')[1]
		}
	}
	app.init()
})()