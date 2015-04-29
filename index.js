var on = require('add-event-listener')
var xhr = require('xhr')
var hashchange = require('hashchange')
var edit = require('edit')

var canvas = document.querySelector('canvas')
var $url = document.querySelector('#url')
var $file = document.querySelector('#file')
var $source = document.querySelector('#source')

//<!--<script src="https://gist.github.com/finnp/a275a003473c6d95f6d8.js"></script>-->

hashchange.update(function (hash) {
  console.log('update')
  if(!hash) return
  $file.style.display = 'none'
  $source.style.display = 'block'
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight / 2

  var uri = 'https://gist.githubusercontent.com/' + hash
  var ctx = canvas.getContext('2d')
  var context = ctx
  
  var cm = edit({
    autofocus: false
  })

  xhr({
    uri: uri + '/raw'
  }, function (err, resp, body) {
    if(err) console.error(err)
    cm.setValue(body)
    eval(body)
  })
})
hashchange.update()

on($url, 'keydown', function (e) {
  var gist = $url.value
  // https://gist.github.com/finnp/64b628be54b9bbab3c24
  var parts = gist.split('/')
  var gistId = parts.pop()
  var gistName = parts.pop()
  if(e.keyCode === 13) window.location.hash = gistName + '/' + gistId
})