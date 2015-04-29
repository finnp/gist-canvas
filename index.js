var xhr = require('xhr')
var hashchange = require('hashchange')

var canvas = document.querySelector('canvas')

hashchange.update(function (hash) {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  
  hash = hash || 'finnp/a275a003473c6d95f6d8'
  var uri = 'https://gist.githubusercontent.com/' + hash
  var ctx = canvas.getContext('2d')
  var context = ctx

  xhr({
    uri: uri + '/raw'
  }, function (err, resp, body) {
    if(err) console.error(err)
    eval(body)
  })
})
hashchange.update()