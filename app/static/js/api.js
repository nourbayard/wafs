import collection from './collection.js'
import renderHTML from './renderHTML.js'

const api = {
  firstCall: function(url) {

    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function() {

      if (request.status >= 200 && request.status < 400) {

        console.log(request.status);
        this.data = JSON.parse(request.responseText)
        var data = this.data.results

        collection.content = data.map(function(d) {
          // console.log(d);
          return {
            url: d.url,
            name: d.name
          }
        })

        renderHTML.pokemon();
      }
    }

    request.onprogress = function() {
      // console.log('im still loading')
      const loading = document.querySelector('.loading')
      loading.classList.add('gone')
    }

    request.onerror = function() {
      const loading = document.querySelector('.error')
      loading.classList.remove('gone')
    }

    request.timeout = function() {
      const elTimeOut = document.querySelector('.timeOut')
      loading.classList.remove('gone')
    }

    request.send()
  },

  secondCall: function(url) {
    const request = new XMLHttpRequest()
    request.open('GET', url, true)
    request.onload = function() {

      if (request.status >= 200 && request.status < 400) {
        this.data = JSON.parse(request.responseText)
        var data = this.data
        collection.detail = data
        console.log(data) // logt de pokemon data
        // console.log(data.sprites.back_default)
        // console.log(data.abilities[0].ability.name)
        // console.log(data.weight)
        console.log(data.types[0].type.name);

        renderHTML.detailsPage();
      }


    }

    request.onprogress = function() {
      // console.log('im still loading')
      const loading = document.querySelector('.loading')
      loading.classList.add('gone')
    }

    request.onerror = function() {
      const loading = document.querySelector('.error')
      loading.classList.remove('gone')
    }

    request.timeout = function() {
      const elTimeOut = document.querySelector('.timeOut')
      loading.classList.remove('gone')
    }


    request.send()
  }
}

export default api