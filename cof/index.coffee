Index =

  i: ->

    Index.handlers()

    setTimeout ->
      $('header').addClass 'settled'
    , 2000
    setTimeout ->
      $('.menu > .option').removeClass 'loading'
    , 4000

  handlers: ->
    $('.logo').click Index.cycle
    $('.menu > .option').click Index.option

  option: ->
    _.off '.menu > .option'
    _.on this

  cycle: ->

    $('.logo > .inner').addClass 'offing'

    setTimeout ->
      _.off '.logo'
      $('.logo > .inner').removeClass 'offing'
    , 600

    setTimeout ->
      _.on '.logo'
    , 610
