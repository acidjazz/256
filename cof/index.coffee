Index =

  i: ->

    console.log 'Index.i()'

    Index.handlers()
    setTimeout ->
      $('header').addClass 'settled'
    , 2000

  handlers: ->
    $('.logo').click Index.cycle

  cycle: ->

    $('.logo > .inner').addClass 'offing'

    setTimeout ->
      _.off '.logo'
      $('.logo > .inner').removeClass 'offing'
    , 600

    setTimeout ->
      _.on '.logo'
    , 610
