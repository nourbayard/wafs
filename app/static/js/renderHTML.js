import collection from './collection.js'
import api from './api.js'

const renderHTML = {
  pokemon: function() {
    var data = collection.content;
    var home = document.getElementById('list')

    for (var i = 0; i < data.length; i++) {
      home.innerHTML += `
        <li>
          <a href= #details/${data[i].name} ><span>${data[i].name}</span></a>
        </li>
      `
    }

    var theInput = document.querySelector('#myInput')
    theInput.addEventListener('keyup', function myFunction() {
      var input = document.getElementById('myInput')
      var filter = input.value.toUpperCase()
      var ul = document.getElementById('list')
      var li = ul.getElementsByTagName('li')
      for (var i = 0; i < data.length; i++) {
        var a = li[i].getElementsByTagName('a')[0]
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = ''
        } else {
          li[i].style.display = 'none'
        }
      }
    }, false)

  },
  detailsPage: function(name, weight) {

    var anotherOne = document.getElementById('information');
    var detail = collection.detail
    // console.log(detail, 2)
    var pokemonDetail = document.querySelector('#details').classList.remove('hidden')

    anotherOne.innerHTML = `
        <h2>${detail.name}</h2>
        <p>Weight: ${detail.weight / 10}kg</p>
        <p>Height: ${detail.height / 10}m</p>

        <h3>Abilities</h3>
        <p>${detail.abilities.map(function(d) {
          // console.log(d);
            return ' ' + d.ability.name;
        })} </p>
        <h3>Statistics</h3>
        <p>${detail.stats.map(function(d) {
          // console.log(d);
            return ' ' + d.stat.name + ': ' + d.base_stat;
        })} </p>

        <p>Type Pokémon: ${detail.types.map(function(d) {
          // console.log(d);
            return ' ' + d.type.name;
        })} </p>
        <p>Default Pokémon</p>
        <img src= ${detail.sprites.front_default} />
        <img src= ${detail.sprites.back_default} />
        <p>Shiny Pokémon</p>
        <img src= ${detail.sprites.front_shiny} />
        <img src= ${detail.sprites.back_shiny} />
          `
    // <img src= ${detail.sprites.front_shiny_female} />
    // <img src= ${detail.sprites.back_shiny_female} />

  }
}

export default renderHTML