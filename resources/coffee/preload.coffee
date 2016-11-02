Preload = (srces, progress, complete) ->

  images = []
  loaded = 0
  total = srces.length

  complete true if total is 0

  for src, i in srces
    images[i] = new Image()
    images[i].src = src
    images[i].onload = ->
      loaded++
      perc = Math.round(loaded/total*100)/100
      if loaded is total then complete(true) else progress(perc)
