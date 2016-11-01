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

      scene = $('.section_work')[0]
      parallax = new Parallax scene,
        invertX: true
        invertY: true
        scalarX: 2
        scalary: 2
        frictionX: 0.1
        frictionY: 0.1
        scalarX: 25
        scalarY: 15

    , 4500

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
