Index =

  i: ->

    @loadThumbnails ->

      _.on 'header > .inner > .logo'

      $('.menu > .option').removeClass 'loading'
      $('.menu > .option').addClass 'loaded'

      setTimeout ->
        $('.menu > .option').removeClass 'loading'
        $('.menu > .option').removeClass 'loaded'
      , 1000

      setTimeout ->
        _.on '.menu > .option.option_1'
        _.on '.section.section_work'
      , 1100

      setTimeout ->

        new Parallax $('.section.section_work')[0], limitX: 20, limitY: 50

        Index.handlers()
        Index.modal.handlers()
        setTimeout ->
          Index.loadImages()
        , 400

      , 1200

      ###
      setTimeout ->
        $('html, body').scrollTo ".section_work",
          duration: 2500
          easing: 'easeInOutBack'
      , 2400
      ###
  loadThumbnails: (complete) ->

    images = []

    for dir of config.work
      images.push "images/work/#{dir}/thumbnails/logo.png"
      images.push "images/work/#{dir}/thumbnails/background.jpg"

    Preload images, (progress) ->
      dbar.perc progress
    , (done) ->
      dbar.d()
      complete()


  loadImages: (complete) ->

    $.each config.work, (name) ->

      loadImage "images/work/#{name}/logo.png",  (ratio) ->
        $(".job_#{name} > .inner > .loading > .full").css('width', "#{ratio/2}%")
      .then (imageSource) ->
        $(".job_#{name} > .inner > .logo").css('background-image', "url(#{imageSource})")
        _.off ".job_#{name} > .inner > .thumbnail_logo"
        _.on ".job_#{name} > .inner > .logo"

        loadImage "images/work/#{name}/background.jpg",  (ratio) ->
          $(".job_#{name} > .inner > .loading > .full").css('width', "#{(ratio/2) + 50}%")
        .then (imageSource) ->
          $(".job_#{name} > .inner > .background").css('background-image', "url(#{imageSource})")
          _.off ".job_#{name} > .inner > .thumbnail_background"
          _.on ".job_#{name} > .inner > .background"
          _.off ".job_#{name} > .inner > .loading"

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


