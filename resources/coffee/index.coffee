Index =

  i: ->

    Index.handlers()

    setTimeout ->
      $('header').addClass 'settled'
    , 2000
    setTimeout ->
      $('.menu > .option').removeClass 'loading'
    , 4000

    setTimeout ->
      _.on '.menu > .option.option_1'
      _.on '.section.section_work'

      $('.section_work > .work > .job').each (i, el) ->
        new Parallax el,
          invertX: true
          invertY: true

    , 4100

  handlers: ->
    $('header > .inner > .logo').click Index.cycle
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
