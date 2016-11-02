Index =

  i: ->

    _.on 'header > .inner > .logo'

    @loadImages ->

      $('.menu > .option').removeClass 'loading'
      $('.menu > .option').addClass 'loaded'

      $('header').addClass 'settled'

      setTimeout ->
        $('.menu > .option').removeClass 'loading'
        $('.menu > .option').removeClass 'loaded'
      , 2000

      setTimeout ->
        _.on '.menu > .option.option_1'
        _.on '.section.section_work'

        new Parallax $('.section.section_work')[0]

        Index.handlers()

      , 2100

  loadImages: (complete) ->

    dbar.i()

    images = []

    for dir of config.work
      images.push "images/work/#{dir}/logo.png"
      images.push "images/work/#{dir}/background.jpg"

    Preload images, (progress) ->
      dbar.perc progress
    , (done) ->
      dbar.d()
      complete()

  handlers: ->
    $('header > .inner > .logo').click Index.cycle
    $('.menu > .option').click Index.option

  option: ->
    _.off '.menu > .option'
    _.on this
    _.off '.section'
    _.on ".section.section_#{$(this).data('option')}"

  cycle: ->

    $('.logo > .inner').addClass 'offing'

    setTimeout ->
      _.off '.logo'
      $('.logo > .inner').removeClass 'offing'
    , 600

    setTimeout ->
      _.on '.logo'
    , 610

