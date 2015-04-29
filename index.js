var xhr = require('xhr')

var hash = window.location.hash.substr(1) || 'finnp/a275a003473c6d95f6d8'
var canvas = document.querySelector('canvas')
var uri = 'https://gist.githubusercontent.com/' + hash
canvas.width = window.innerWidth
canvas.height = window.innerHeight

//window.onresize = fitCanvas

var ctx = canvas.getContext('2d')
var context = ctx

xhr({
  uri: uri + '/raw'
}, function (err, resp, body) {
  if(err) console.error(err)
  eval(body)
})
