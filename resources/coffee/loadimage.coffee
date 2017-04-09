###*
# Loads an image with progress callback.
#
# The `onprogress` callback will be called by XMLHttpRequest's onprogress
# event, and will receive the loading progress ratio as an whole number.
# However, if it's not possible to compute the progress ratio, `onprogress`
# will be called only once passing -1 as progress value. This is useful to,
# for example, change the progress animation to an undefined animation.
#
# @param  {string}   imageUrl   The image to load
# @param  {Function} onprogress
# @return {Promise}
###

loadImage = (imageUrl, onprogress) ->
  new Promise((resolve, reject) ->
    xhr = new XMLHttpRequest
    notifiedNotComputable = false
    xhr.open 'GET', imageUrl, true
    xhr.responseType = 'arraybuffer'

    xhr.onprogress = (ev) ->
      if ev.lengthComputable
        onprogress parseInt(ev.loaded / ev.total * 100)
      else
        if !notifiedNotComputable
          notifiedNotComputable = true
          onprogress -1
      return

    xhr.onloadend = ->
      if !xhr.status.toString().match(/^2/)
        reject xhr
      else
        if !notifiedNotComputable
          onprogress 100
        options = {}
        headers = xhr.getAllResponseHeaders()
        m = headers.match(/^Content-Type\:\s*(.*?)$/mi)
        if m and m[1]
          options.type = m[1]
        blob = new Blob([ @response ], options)
        resolve window.URL.createObjectURL(blob)
      return

    xhr.send()
    return
)
