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
        Index.modal.handlers()

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
    $('.section.section_work > .work > .job > .inner').click Index.job

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

  modal:

    i: (job) ->
      _.on '.fade, .modal'
      gig = config.work[job]
      $('.body > .copy.copy_title').css 'color', gig.color

      $('.body > .copy.copy_title').html gig.title
      $('.body > .copy.copy_tagline').html gig.tagline
      for p in gig.detail
        $('.body > .copy.copy_detail').append "<p>#{p}</p>"

      for type, link of gig.links
        _.on ".body > .links > .link_#{type}"
        $(".body > .links > .link_#{type}").attr 'href', link

    handlers: ->
      $('.fade, .modal > .inner > .close').click Index.modal.d

    d: ->
      _.off '.fade, .modal'
      _.off ".body > .links > .link"

      $('.body > .copy.copy_title').html ''
      $('.body > .copy.copy_tagline').html ''
      $('.body > .copy.copy_detail').html ''

  job: ->
    Index.modal.i $(this).data 'job'


