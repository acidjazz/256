var _;

_ = {
  i: function() {
    return this.console = setInterval(this.detect.bind(this), 200);
  },
  p: {
    offing: false,
    offtime: 0
  },
  turn: function(el, remove, add) {
    if (remove == null) {
      remove = false;
    }
    if (add == null) {
      add = false;
    }
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (remove !== false) {
      el.removeClass(remove);
    }
    if (add !== false) {
      el.addClass(add);
    }
    return true;
  },
  off: function(el, p) {
    if (p == null) {
      p = {};
    }
    if (p.offing && p.offtime > 0) {
      this.turn(el, false, 'offing');
      setTimeout(function() {
        this.turn(el, 'offing', false);
        return this.turn(el, 'on', 'off');
      }, p.offtime * 1000 + 100);
    } else {
      this.turn(el, 'on', 'off');
    }
  },
  on: function(el, p) {
    return this.turn(el, 'off', 'on');
  },
  swap: function(el, p) {
    if (!(el instanceof jQuery)) {
      el = $(el);
    }
    if (el.hasClass('off')) {
      this.on(el, p);
    } else {
      this.off(el, p);
    }
  },
  encode: function(str) {
    return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A').replace(/%20/g, '+');
  },
  t: function(category, action, label, value) {
    return _gaq.push(['_trackEvent', category, action, label, value]);
  },
  rand: function(min, max) {
    return Math.floor(Math.random() * max) + min;
  },
  llc: function() {
    var ascii;
    ascii = "\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: " + config.meta.repo;
    return console.log(ascii, "color: grey; font-family: Menlo, monospace;");
  },
  detect: function() {
    if (((window.outerHeight - window.innerHeight) > 100) || ((window.outerWidth - window.innerWidth) > 100)) {
      this.llc();
      return clearInterval(this.console);
    }
  }
};

_.i();

var config;

config = {
  "color": {
    "black1": "#2B2D32",
    "black2": "#414347",
    "white1": "#ffffff",
    "white2": "#eeeeee",
    "white3": "#ababad",
    "purple1": "#332631",
    "purple2": "#4D394B",
    "purple3": "#AB9BA9",
    "teal1": "#4C9689",
    "teal2": "#B1C9C5"
  },
  "font": {
    "copy1": {
      "font-family": "Roboto",
      "font-size": "20px"
    },
    "copy2": {
      "font-family": "Roboto",
      "font-size": "32px"
    },
    "copy3": {
      "font-family": "proxima regular",
      "font-size": "32px",
      "font-weight": "500"
    },
    "copy4": {
      "font-family": "proxima regular",
      "font-size": "24px",
      "font-weight": "500"
    },
    "h1": {
      "font-family": "proxima extrabold",
      "font-size": "48px"
    },
    "h2": {
      "font-family": "proxima extrabold",
      "font-size": "36px"
    }
  },
  "meta": {
    "url": "http://256.io/",
    "title": 256,
    "description": "building digital things",
    "keywords": "web development, mobile development, mobile apps, full stack development",
    "phone": 9492908989,
    "trackingID": "UA-75128355-1",
    "logo": "images/logo_1000x1000.jpg",
    "share": "images/1200x630.jpg",
    "repo": "https://github.com/acidjazz/256",
    "email": "kevin@256.io",
    "social": {
      "facebook": "https://www.facebook.com/256llc/",
      "twitter": "https://twitter.com/256llc",
      "instagram": "https://www.instagram.com/256llc/"
    }
  },
  "work": {
    "fullsun": {
      "color": "#F29934",
      "title": "Full Sun",
      "tagline": "premium sungrown goodness",
      "detail": ["Compiled some stunning effects with CSS gradients over some very well done photography.  Got very custom with google maps from everything to colors to overlays of each business using placeIds to pull in content", "Very exciting to get involved with this up and coming industry and learn about the process!"],
      "links": {
        "url": "https://www.full-sun.com/",
        "github": "https://github.com/acidjazz/fullsun"
      }
    },
    "holidays": {
      "color": "#ff5a5f",
      "title": "Home for the Holidays",
      "tagline": "same holiday, different home",
      "detail": ["Real fun project for Airbnb to promote spending the holidays away from home.", "This was a mobile-only site where you upload a photo of you and your family celebrating, choose a filter you like and then share it.", "Full stack project even involving operatiions, automated scaling, and load testing."],
      "links": {
        "url": "https://holidays.withairbnb.com/"
      }
    },
    "lookingglass": {
      "color": "#C29E6E",
      "title": "Looking Glass VR",
      "tagline": "windows to the past are open at last",
      "detail": ["It's been a blast contributing to this awesome VR app; a 3D photo viewer of around 200 photos from all over the world about a century old, finally to be seen as they were intended."],
      "links": {
        "url": "https://lookingglassvr.com/",
        "github": "https://github.com/lookingglassvr/lookingglass"
      }
    },
    "definery": {
      "color": "#55C7C0",
      "title": "DEFINERY",
      "tagline": "a digital product design and innovation company",
      "detail": ["For our first version of <a href=\"http://definery.io\" target=\"_new\">definery.io</a> we wanted to go for the most innovative and recent (while still compatible) tech available.", "We packed in lots of lively features; clipping, masking, and blend modes (mix-blend-mode to be precise) for compositing graphic elements, which even worked well with video.  We also hit our target on mobile by dynamically alternating meta tags used to customize the browser header colors on android devices."],
      "links": {
        "url": "http://definery.io/",
        "github": "http://github.com/acidjazz/definery"
      }
    },
    "astro": {
      "color": "#C8504B",
      "title": "Astro Studios",
      "tagline": "supercharged brand and product experiences.",
      "detail": ["It was a great pleasure working with such an innovative product design agency.", "This was a major challenge of staying with 100% original and custom functionality and features while keeping an easily modifiable and legible structure of syntactic sugar.", "With two seperate and fully custom CMS sections, and a couple easter eggs, every section of this project packs a punch."],
      "links": {
        "url": "http://www.astrostudios.com/",
        "github": "http://github.com/acidjazz/astro"
      }
    },
    "br": {
      "color": "#E0483E",
      "title": "Bystander Revolution",
      "tagline": "take the power out of bullying",
      "detail": ["Going on 3 years, 3,000+ commits, 3 complete renovations, and 10+ campaigns, it's been a great opportunity to take on development and operations for Bystander Revolution.", "Working with multiple agencies through the years, essentially with MacKenzie Bezos' core team in Seattle, we've tackled all sorts of tasks dealing with preconditioned and user-contributed content, constantly evolving to display it comfortably in multiple easily navigatable interfaces."],
      "links": {
        "url": "http://www.bystanderrevolution.org/"
      }
    },
    "gilman": {
      "color": "#c08000",
      "title": "Gilman Brewing Company",
      "tagline": "born and brewed in berkeley, california",
      "detail": ["Lots of fun on this project going further than just development and operations and getting involved in creating some cinemagraphs to help make the site come alive.", "Once launched this project will take advantage of the newer webkit push allowing silent video to auto-play, giving video on mobile without resulting in bulky uncompressed GIFS"],
      "links": {
        "url": "http://gilman.256.tech/"
      }
    },
    "sake": {
      "color": "#73B8B2",
      "title": "Designsake Studio",
      "tagline": "for the sake of good design",
      "detail": ["Being given such a clean and pretty design and a great rich portfolio of work, building a fluid experience was a pleasure.", "Built a completely custom SPA experience preloading all images of each section and never refreshing, with loading animations showing realtime loading ."],
      "links": {
        "url": "http://www.designsakestudio.com/",
        "github": "http://github.com/acidjazz/sake"
      }
    },
    "daffodil": {
      "color": "#EFE047",
      "title": "Daffodil Digital",
      "tagline": "helping brands tell their stories",
      "detail": ["I wanted to aim for a complete SPA experience, focusing directly on preloading all imagery and using custom loading animations to keep a nice flowing experience"],
      "links": {
        "url": "http://www.daffodildigital.com/",
        "github": "http://github.com/acidjazz/daffodil"
      }
    },
    "ap": {
      "color": "#A49266",
      "title": "Audemars Piguet",
      "tagline": "ultra-luxury swiss watches",
      "detail": ["I came aboard briefly to help with the back-end, and was given the pleasure of setting the foundation and structure for v1 of their API.", "At the end we had successfully centralized all watch and retail store content that drove the site and apps to version-seperated endpoints that match the JSONAPI spec."],
      "links": {
        "url": "http://www.audemarspiguet.com/"
      }
    },
    "studio": {
      "color": "#4867aa",
      "title": "Facebook Studio",
      "tagline": "facebook awards",
      "detail": ["Very happy to work on this major collaboration with Facebook. One of the most thorough projects I've had a pleaure to work on, from multiple audits of every check-in to unit testing every piece of functionality."],
      "links": {
        "url": "http://www.facebook-studio.com/"
      }
    }
  }
};

var Index;

Index = {
  i: function() {
    _.on('header > .inner > .logo');
    return this.loadThumbnails(function() {
      $('.menu > .option').removeClass('loading');
      $('.menu > .option').addClass('loaded');
      $('header').addClass('settled');
      setTimeout(function() {
        $('.menu > .option').removeClass('loading');
        return $('.menu > .option').removeClass('loaded');
      }, 2000);
      return setTimeout(function() {
        _.on('.menu > .option.option_1');
        _.on('.section.section_work');
        new Parallax($('.section.section_work')[0], {
          limitX: 20,
          limitY: 50
        });
        Index.handlers();
        Index.modal.handlers();
        return Index.loadImages();
      }, 2100);

      /*
      setTimeout ->
        $('html, body').scrollTo ".section_work",
          duration: 2500
          easing: 'easeInOutBack'
      , 2400
       */
    });
  },
  loadThumbnails: function(complete) {
    var dir, images;
    images = [];
    for (dir in config.work) {
      images.push("images/work/" + dir + "/thumbnails/logo.png");
      images.push("images/work/" + dir + "/thumbnails/background.jpg");
    }
    return Preload(images, function(progress) {
      return dbar.perc(progress);
    }, function(done) {
      dbar.d();
      return complete();
    });
  },
  loadImages: function(complete) {
    return $.each(config.work, function(name) {
      return loadImage("images/work/" + name + "/logo.png", function(ratio) {
        return $(".job_" + name + " > .inner > .loading > .full").css('width', (ratio / 2) + "%");
      }).then(function(imageSource) {
        $(".job_" + name + " > .inner > .logo").css('background-image', "url(" + imageSource + ")");
        _.off(".job_" + name + " > .inner > .thumbnail_logo");
        _.on(".job_" + name + " > .inner > .logo");
        return loadImage("images/work/" + name + "/background.jpg", function(ratio) {
          return $(".job_" + name + " > .inner > .loading > .full").css('width', ((ratio / 2) + 50) + "%");
        }).then(function(imageSource) {
          $(".job_" + name + " > .inner > .background").css('background-image', "url(" + imageSource + ")");
          _.off(".job_" + name + " > .inner > .thumbnail_background");
          _.on(".job_" + name + " > .inner > .background");
          return _.off(".job_" + name + " > .inner > .loading");
        });
      });
    });
  },
  handlers: function() {
    $('header > .inner > .logo').click(Index.cycle);
    $('.menu > .option').click(Index.option);
    return $('.section.section_work > .work > .job > .inner').click(Index.job);
  },
  option: function() {
    _.off('.menu > .option');
    _.on(this);
    _.off('.section');
    return _.on(".section.section_" + ($(this).data('option')));
  },
  cycle: function() {
    $('.logo > .inner').addClass('offing');
    setTimeout(function() {
      _.off('.logo');
      return $('.logo > .inner').removeClass('offing');
    }, 600);
    return setTimeout(function() {
      return _.on('.logo');
    }, 610);
  },
  modal: {
    i: function(job) {
      var gig, i, len, link, p, ref, ref1, results, type;
      _.on('.fade, .modal');
      gig = config.work[job];
      $('.body > .copy.copy_title').css('color', gig.color);
      $('.body > .copy.copy_title').html(gig.title);
      $('.body > .copy.copy_tagline').html(gig.tagline);
      ref = gig.detail;
      for (i = 0, len = ref.length; i < len; i++) {
        p = ref[i];
        $('.body > .copy.copy_detail').append("<p>" + p + "</p>");
      }
      ref1 = gig.links;
      results = [];
      for (type in ref1) {
        link = ref1[type];
        _.on(".body > .links > .link_" + type);
        results.push($(".body > .links > .link_" + type).attr('href', link));
      }
      return results;
    },
    handlers: function() {
      return $('.fade, .modal > .inner > .close').click(Index.modal.d);
    },
    d: function() {
      _.off('.fade, .modal');
      _.off(".body > .links > .link");
      $('.body > .copy.copy_title').html('');
      $('.body > .copy.copy_tagline').html('');
      return $('.body > .copy.copy_detail').html('');
    }
  },
  job: function() {
    return Index.modal.i($(this).data('job'));
  }
};


/**
 * Loads an image with progress callback.
 *
 * The `onprogress` callback will be called by XMLHttpRequest's onprogress
 * event, and will receive the loading progress ratio as an whole number.
 * However, if it's not possible to compute the progress ratio, `onprogress`
 * will be called only once passing -1 as progress value. This is useful to,
 * for example, change the progress animation to an undefined animation.
 *
 * @param  {string}   imageUrl   The image to load
 * @param  {Function} onprogress
 * @return {Promise}
 */
var loadImage;

loadImage = function(imageUrl, onprogress) {
  return new Promise(function(resolve, reject) {
    var notifiedNotComputable, xhr;
    xhr = new XMLHttpRequest;
    notifiedNotComputable = false;
    xhr.open('GET', imageUrl, true);
    xhr.responseType = 'arraybuffer';
    xhr.onprogress = function(ev) {
      if (ev.lengthComputable) {
        onprogress(parseInt(ev.loaded / ev.total * 100));
      } else {
        if (!notifiedNotComputable) {
          notifiedNotComputable = true;
          onprogress(-1);
        }
      }
    };
    xhr.onloadend = function() {
      var blob, headers, m, options;
      if (!xhr.status.toString().match(/^2/)) {
        reject(xhr);
      } else {
        if (!notifiedNotComputable) {
          onprogress(100);
        }
        options = {};
        headers = xhr.getAllResponseHeaders();
        m = headers.match(/^Content-Type\:\s*(.*?)$/mi);
        if (m && m[1]) {
          options.type = m[1];
        }
        blob = new Blob([this.response], options);
        resolve(window.URL.createObjectURL(blob));
      }
    };
    xhr.send();
  });
};

var Preload;

Preload = function(srces, progress, complete) {
  var i, images, j, len, loaded, results, src, total;
  images = [];
  loaded = 0;
  total = srces.length;
  if (total === 0) {
    complete(true);
  }
  results = [];
  for (i = j = 0, len = srces.length; j < len; i = ++j) {
    src = srces[i];
    images[i] = new Image();
    images[i].src = src;
    results.push(images[i].onload = function() {
      var perc;
      loaded++;
      perc = Math.round(loaded / total * 100) / 100;
      if (loaded === total) {
        return complete(true);
      } else {
        return progress(perc);
      }
    });
  }
  return results;
};

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibG9hZGltYWdlLmNvZmZlZSIsInByZWxvYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FB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S0FBUCxHQUFhLEdBQXhCLENBQUEsR0FBNkI7TUFDcEMsSUFBRyxNQUFBLEtBQVUsS0FBYjtlQUF3QixRQUFBLENBQVMsSUFBVCxFQUF4QjtPQUFBLE1BQUE7ZUFBNEMsUUFBQSxDQUFTLElBQVQsRUFBNUM7O0lBSGlCO0FBSHJCOztBQVJRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjb2xvclwiOntcImJsYWNrMVwiOlwiIzJCMkQzMlwiLFwiYmxhY2syXCI6XCIjNDE0MzQ3XCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcIndoaXRlMlwiOlwiI2VlZWVlZVwiLFwid2hpdGUzXCI6XCIjYWJhYmFkXCIsXCJwdXJwbGUxXCI6XCIjMzMyNjMxXCIsXCJwdXJwbGUyXCI6XCIjNEQzOTRCXCIsXCJwdXJwbGUzXCI6XCIjQUI5QkE5XCIsXCJ0ZWFsMVwiOlwiIzRDOTY4OVwiLFwidGVhbDJcIjpcIiNCMUM5QzVcIn0sXCJmb250XCI6e1wiY29weTFcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjIwcHhcIn0sXCJjb3B5MlwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMzJweFwifSxcImNvcHkzXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIzMnB4XCIsXCJmb250LXdlaWdodFwiOlwiNTAwXCJ9LFwiY29weTRcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjI0cHhcIixcImZvbnQtd2VpZ2h0XCI6XCI1MDBcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSBleHRyYWJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzZweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vMjU2LmlvL1wiLFwidGl0bGVcIjoyNTYsXCJkZXNjcmlwdGlvblwiOlwiYnVpbGRpbmcgZGlnaXRhbCB0aGluZ3NcIixcImtleXdvcmRzXCI6XCJ3ZWIgZGV2ZWxvcG1lbnQsIG1vYmlsZSBkZXZlbG9wbWVudCwgbW9iaWxlIGFwcHMsIGZ1bGwgc3RhY2sgZGV2ZWxvcG1lbnRcIixcInBob25lXCI6OTQ5MjkwODk4OSxcInRyYWNraW5nSURcIjpcIlVBLTc1MTI4MzU1LTFcIixcImxvZ29cIjpcImltYWdlcy9sb2dvXzEwMDB4MTAwMC5qcGdcIixcInNoYXJlXCI6XCJpbWFnZXMvMTIwMHg2MzAuanBnXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovMjU2XCIsXCJlbWFpbFwiOlwia2V2aW5AMjU2LmlvXCIsXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzI1NmxsYy9cIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vMjU2bGxjXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vMjU2bGxjL1wifX0sXCJ3b3JrXCI6e1wiZnVsbHN1blwiOntcImNvbG9yXCI6XCIjRjI5OTM0XCIsXCJ0aXRsZVwiOlwiRnVsbCBTdW5cIixcInRhZ2xpbmVcIjpcInByZW1pdW0gc3VuZ3Jvd24gZ29vZG5lc3NcIixcImRldGFpbFwiOltcIkNvbXBpbGVkIHNvbWUgc3R1bm5pbmcgZWZmZWN0cyB3aXRoIENTUyBncmFkaWVudHMgb3ZlciBzb21lIHZlcnkgd2VsbCBkb25lIHBob3RvZ3JhcGh5LiAgR290IHZlcnkgY3VzdG9tIHdpdGggZ29vZ2xlIG1hcHMgZnJvbSBldmVyeXRoaW5nIHRvIGNvbG9ycyB0byBvdmVybGF5cyBvZiBlYWNoIGJ1c2luZXNzIHVzaW5nIHBsYWNlSWRzIHRvIHB1bGwgaW4gY29udGVudFwiLFwiVmVyeSBleGNpdGluZyB0byBnZXQgaW52b2x2ZWQgd2l0aCB0aGlzIHVwIGFuZCBjb21pbmcgaW5kdXN0cnkgYW5kIGxlYXJuIGFib3V0IHRoZSBwcm9jZXNzIVwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwczovL3d3dy5mdWxsLXN1bi5jb20vXCIsXCJnaXRodWJcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9mdWxsc3VuXCJ9fSxcImhvbGlkYXlzXCI6e1wiY29sb3JcIjpcIiNmZjVhNWZcIixcInRpdGxlXCI6XCJIb21lIGZvciB0aGUgSG9saWRheXNcIixcInRhZ2xpbmVcIjpcInNhbWUgaG9saWRheSwgZGlmZmVyZW50IGhvbWVcIixcImRldGFpbFwiOltcIlJlYWwgZnVuIHByb2plY3QgZm9yIEFpcmJuYiB0byBwcm9tb3RlIHNwZW5kaW5nIHRoZSBob2xpZGF5cyBhd2F5IGZyb20gaG9tZS5cIixcIlRoaXMgd2FzIGEgbW9iaWxlLW9ubHkgc2l0ZSB3aGVyZSB5b3UgdXBsb2FkIGEgcGhvdG8gb2YgeW91IGFuZCB5b3VyIGZhbWlseSBjZWxlYnJhdGluZywgY2hvb3NlIGEgZmlsdGVyIHlvdSBsaWtlIGFuZCB0aGVuIHNoYXJlIGl0LlwiLFwiRnVsbCBzdGFjayBwcm9qZWN0IGV2ZW4gaW52b2x2aW5nIG9wZXJhdGlpb25zLCBhdXRvbWF0ZWQgc2NhbGluZywgYW5kIGxvYWQgdGVzdGluZy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cHM6Ly9ob2xpZGF5cy53aXRoYWlyYm5iLmNvbS9cIn19LFwibG9va2luZ2dsYXNzXCI6e1wiY29sb3JcIjpcIiNDMjlFNkVcIixcInRpdGxlXCI6XCJMb29raW5nIEdsYXNzIFZSXCIsXCJ0YWdsaW5lXCI6XCJ3aW5kb3dzIHRvIHRoZSBwYXN0IGFyZSBvcGVuIGF0IGxhc3RcIixcImRldGFpbFwiOltcIkl0J3MgYmVlbiBhIGJsYXN0IGNvbnRyaWJ1dGluZyB0byB0aGlzIGF3ZXNvbWUgVlIgYXBwOyBhIDNEIHBob3RvIHZpZXdlciBvZiBhcm91bmQgMjAwIHBob3RvcyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCBhYm91dCBhIGNlbnR1cnkgb2xkLCBmaW5hbGx5IHRvIGJlIHNlZW4gYXMgdGhleSB3ZXJlIGludGVuZGVkLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwczovL2xvb2tpbmdnbGFzc3ZyLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2xvb2tpbmdnbGFzc3ZyL2xvb2tpbmdnbGFzc1wifX0sXCJkZWZpbmVyeVwiOntcImNvbG9yXCI6XCIjNTVDN0MwXCIsXCJ0aXRsZVwiOlwiREVGSU5FUllcIixcInRhZ2xpbmVcIjpcImEgZGlnaXRhbCBwcm9kdWN0IGRlc2lnbiBhbmQgaW5ub3ZhdGlvbiBjb21wYW55XCIsXCJkZXRhaWxcIjpbXCJGb3Igb3VyIGZpcnN0IHZlcnNpb24gb2YgPGEgaHJlZj1cXFwiaHR0cDovL2RlZmluZXJ5LmlvXFxcIiB0YXJnZXQ9XFxcIl9uZXdcXFwiPmRlZmluZXJ5LmlvPC9hPiB3ZSB3YW50ZWQgdG8gZ28gZm9yIHRoZSBtb3N0IGlubm92YXRpdmUgYW5kIHJlY2VudCAod2hpbGUgc3RpbGwgY29tcGF0aWJsZSkgdGVjaCBhdmFpbGFibGUuXCIsXCJXZSBwYWNrZWQgaW4gbG90cyBvZiBsaXZlbHkgZmVhdHVyZXM7IGNsaXBwaW5nLCBtYXNraW5nLCBhbmQgYmxlbmQgbW9kZXMgKG1peC1ibGVuZC1tb2RlIHRvIGJlIHByZWNpc2UpIGZvciBjb21wb3NpdGluZyBncmFwaGljIGVsZW1lbnRzLCB3aGljaCBldmVuIHdvcmtlZCB3ZWxsIHdpdGggdmlkZW8uICBXZSBhbHNvIGhpdCBvdXIgdGFyZ2V0IG9uIG1vYmlsZSBieSBkeW5hbWljYWxseSBhbHRlcm5hdGluZyBtZXRhIHRhZ3MgdXNlZCB0byBjdXN0b21pemUgdGhlIGJyb3dzZXIgaGVhZGVyIGNvbG9ycyBvbiBhbmRyb2lkIGRldmljZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9kZWZpbmVyeS5pby9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovZGVmaW5lcnlcIn19LFwiYXN0cm9cIjp7XCJjb2xvclwiOlwiI0M4NTA0QlwiLFwidGl0bGVcIjpcIkFzdHJvIFN0dWRpb3NcIixcInRhZ2xpbmVcIjpcInN1cGVyY2hhcmdlZCBicmFuZCBhbmQgcHJvZHVjdCBleHBlcmllbmNlcy5cIixcImRldGFpbFwiOltcIkl0IHdhcyBhIGdyZWF0IHBsZWFzdXJlIHdvcmtpbmcgd2l0aCBzdWNoIGFuIGlubm92YXRpdmUgcHJvZHVjdCBkZXNpZ24gYWdlbmN5LlwiLFwiVGhpcyB3YXMgYSBtYWpvciBjaGFsbGVuZ2Ugb2Ygc3RheWluZyB3aXRoIDEwMCUgb3JpZ2luYWwgYW5kIGN1c3RvbSBmdW5jdGlvbmFsaXR5IGFuZCBmZWF0dXJlcyB3aGlsZSBrZWVwaW5nIGFuIGVhc2lseSBtb2RpZmlhYmxlIGFuZCBsZWdpYmxlIHN0cnVjdHVyZSBvZiBzeW50YWN0aWMgc3VnYXIuXCIsXCJXaXRoIHR3byBzZXBlcmF0ZSBhbmQgZnVsbHkgY3VzdG9tIENNUyBzZWN0aW9ucywgYW5kIGEgY291cGxlIGVhc3RlciBlZ2dzLCBldmVyeSBzZWN0aW9uIG9mIHRoaXMgcHJvamVjdCBwYWNrcyBhIHB1bmNoLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmFzdHJvc3R1ZGlvcy5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2FzdHJvXCJ9fSxcImJyXCI6e1wiY29sb3JcIjpcIiNFMDQ4M0VcIixcInRpdGxlXCI6XCJCeXN0YW5kZXIgUmV2b2x1dGlvblwiLFwidGFnbGluZVwiOlwidGFrZSB0aGUgcG93ZXIgb3V0IG9mIGJ1bGx5aW5nXCIsXCJkZXRhaWxcIjpbXCJHb2luZyBvbiAzIHllYXJzLCAzLDAwMCsgY29tbWl0cywgMyBjb21wbGV0ZSByZW5vdmF0aW9ucywgYW5kIDEwKyBjYW1wYWlnbnMsIGl0J3MgYmVlbiBhIGdyZWF0IG9wcG9ydHVuaXR5IHRvIHRha2Ugb24gZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgZm9yIEJ5c3RhbmRlciBSZXZvbHV0aW9uLlwiLFwiV29ya2luZyB3aXRoIG11bHRpcGxlIGFnZW5jaWVzIHRocm91Z2ggdGhlIHllYXJzLCBlc3NlbnRpYWxseSB3aXRoIE1hY0tlbnppZSBCZXpvcycgY29yZSB0ZWFtIGluIFNlYXR0bGUsIHdlJ3ZlIHRhY2tsZWQgYWxsIHNvcnRzIG9mIHRhc2tzIGRlYWxpbmcgd2l0aCBwcmVjb25kaXRpb25lZCBhbmQgdXNlci1jb250cmlidXRlZCBjb250ZW50LCBjb25zdGFudGx5IGV2b2x2aW5nIHRvIGRpc3BsYXkgaXQgY29tZm9ydGFibHkgaW4gbXVsdGlwbGUgZWFzaWx5IG5hdmlnYXRhYmxlIGludGVyZmFjZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYnlzdGFuZGVycmV2b2x1dGlvbi5vcmcvXCJ9fSxcImdpbG1hblwiOntcImNvbG9yXCI6XCIjYzA4MDAwXCIsXCJ0aXRsZVwiOlwiR2lsbWFuIEJyZXdpbmcgQ29tcGFueVwiLFwidGFnbGluZVwiOlwiYm9ybiBhbmQgYnJld2VkIGluIGJlcmtlbGV5LCBjYWxpZm9ybmlhXCIsXCJkZXRhaWxcIjpbXCJMb3RzIG9mIGZ1biBvbiB0aGlzIHByb2plY3QgZ29pbmcgZnVydGhlciB0aGFuIGp1c3QgZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgYW5kIGdldHRpbmcgaW52b2x2ZWQgaW4gY3JlYXRpbmcgc29tZSBjaW5lbWFncmFwaHMgdG8gaGVscCBtYWtlIHRoZSBzaXRlIGNvbWUgYWxpdmUuXCIsXCJPbmNlIGxhdW5jaGVkIHRoaXMgcHJvamVjdCB3aWxsIHRha2UgYWR2YW50YWdlIG9mIHRoZSBuZXdlciB3ZWJraXQgcHVzaCBhbGxvd2luZyBzaWxlbnQgdmlkZW8gdG8gYXV0by1wbGF5LCBnaXZpbmcgdmlkZW8gb24gbW9iaWxlIHdpdGhvdXQgcmVzdWx0aW5nIGluIGJ1bGt5IHVuY29tcHJlc3NlZCBHSUZTXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9naWxtYW4uMjU2LnRlY2gvXCJ9fSxcInNha2VcIjp7XCJjb2xvclwiOlwiIzczQjhCMlwiLFwidGl0bGVcIjpcIkRlc2lnbnNha2UgU3R1ZGlvXCIsXCJ0YWdsaW5lXCI6XCJmb3IgdGhlIHNha2Ugb2YgZ29vZCBkZXNpZ25cIixcImRldGFpbFwiOltcIkJlaW5nIGdpdmVuIHN1Y2ggYSBjbGVhbiBhbmQgcHJldHR5IGRlc2lnbiBhbmQgYSBncmVhdCByaWNoIHBvcnRmb2xpbyBvZiB3b3JrLCBidWlsZGluZyBhIGZsdWlkIGV4cGVyaWVuY2Ugd2FzIGEgcGxlYXN1cmUuXCIsXCJCdWlsdCBhIGNvbXBsZXRlbHkgY3VzdG9tIFNQQSBleHBlcmllbmNlIHByZWxvYWRpbmcgYWxsIGltYWdlcyBvZiBlYWNoIHNlY3Rpb24gYW5kIG5ldmVyIHJlZnJlc2hpbmcsIHdpdGggbG9hZGluZyBhbmltYXRpb25zIHNob3dpbmcgcmVhbHRpbWUgbG9hZGluZyAuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZGVzaWduc2FrZXN0dWRpby5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L3Nha2VcIn19LFwiZGFmZm9kaWxcIjp7XCJjb2xvclwiOlwiI0VGRTA0N1wiLFwidGl0bGVcIjpcIkRhZmZvZGlsIERpZ2l0YWxcIixcInRhZ2xpbmVcIjpcImhlbHBpbmcgYnJhbmRzIHRlbGwgdGhlaXIgc3Rvcmllc1wiLFwiZGV0YWlsXCI6W1wiSSB3YW50ZWQgdG8gYWltIGZvciBhIGNvbXBsZXRlIFNQQSBleHBlcmllbmNlLCBmb2N1c2luZyBkaXJlY3RseSBvbiBwcmVsb2FkaW5nIGFsbCBpbWFnZXJ5IGFuZCB1c2luZyBjdXN0b20gbG9hZGluZyBhbmltYXRpb25zIHRvIGtlZXAgYSBuaWNlIGZsb3dpbmcgZXhwZXJpZW5jZVwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmRhZmZvZGlsZGlnaXRhbC5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2RhZmZvZGlsXCJ9fSxcImFwXCI6e1wiY29sb3JcIjpcIiNBNDkyNjZcIixcInRpdGxlXCI6XCJBdWRlbWFycyBQaWd1ZXRcIixcInRhZ2xpbmVcIjpcInVsdHJhLWx1eHVyeSBzd2lzcyB3YXRjaGVzXCIsXCJkZXRhaWxcIjpbXCJJIGNhbWUgYWJvYXJkIGJyaWVmbHkgdG8gaGVscCB3aXRoIHRoZSBiYWNrLWVuZCwgYW5kIHdhcyBnaXZlbiB0aGUgcGxlYXN1cmUgb2Ygc2V0dGluZyB0aGUgZm91bmRhdGlvbiBhbmQgc3RydWN0dXJlIGZvciB2MSBvZiB0aGVpciBBUEkuXCIsXCJBdCB0aGUgZW5kIHdlIGhhZCBzdWNjZXNzZnVsbHkgY2VudHJhbGl6ZWQgYWxsIHdhdGNoIGFuZCByZXRhaWwgc3RvcmUgY29udGVudCB0aGF0IGRyb3ZlIHRoZSBzaXRlIGFuZCBhcHBzIHRvIHZlcnNpb24tc2VwZXJhdGVkIGVuZHBvaW50cyB0aGF0IG1hdGNoIHRoZSBKU09OQVBJIHNwZWMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYXVkZW1hcnNwaWd1ZXQuY29tL1wifX0sXCJzdHVkaW9cIjp7XCJjb2xvclwiOlwiIzQ4NjdhYVwiLFwidGl0bGVcIjpcIkZhY2Vib29rIFN0dWRpb1wiLFwidGFnbGluZVwiOlwiZmFjZWJvb2sgYXdhcmRzXCIsXCJkZXRhaWxcIjpbXCJWZXJ5IGhhcHB5IHRvIHdvcmsgb24gdGhpcyBtYWpvciBjb2xsYWJvcmF0aW9uIHdpdGggRmFjZWJvb2suIE9uZSBvZiB0aGUgbW9zdCB0aG9yb3VnaCBwcm9qZWN0cyBJJ3ZlIGhhZCBhIHBsZWF1cmUgdG8gd29yayBvbiwgZnJvbSBtdWx0aXBsZSBhdWRpdHMgb2YgZXZlcnkgY2hlY2staW4gdG8gdW5pdCB0ZXN0aW5nIGV2ZXJ5IHBpZWNlIG9mIGZ1bmN0aW9uYWxpdHkuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2stc3R1ZGlvLmNvbS9cIn19fX07IiwiSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBfLm9uICdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbydcblxuICAgIEBsb2FkVGh1bWJuYWlscyAtPlxuXG5cbiAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkaW5nJ1xuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykuYWRkQ2xhc3MgJ2xvYWRlZCdcblxuICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ3NldHRsZWQnXG5cbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkZWQnXG4gICAgICAsIDIwMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcubWVudSA+IC5vcHRpb24ub3B0aW9uXzEnXG4gICAgICAgIF8ub24gJy5zZWN0aW9uLnNlY3Rpb25fd29yaydcblxuICAgICAgICBuZXcgUGFyYWxsYXggJCgnLnNlY3Rpb24uc2VjdGlvbl93b3JrJylbMF0sIGxpbWl0WDogMjAsIGxpbWl0WTogNTBcblxuICAgICAgICBJbmRleC5oYW5kbGVycygpXG4gICAgICAgIEluZGV4Lm1vZGFsLmhhbmRsZXJzKClcbiAgICAgICAgSW5kZXgubG9hZEltYWdlcygpXG5cbiAgICAgICwgMjEwMFxuXG4gICAgICAjIyNcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiLnNlY3Rpb25fd29ya1wiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyNTAwXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0QmFjaydcbiAgICAgICwgMjQwMFxuICAgICAgIyMjXG4gIGxvYWRUaHVtYm5haWxzOiAoY29tcGxldGUpIC0+XG5cbiAgICBpbWFnZXMgPSBbXVxuXG4gICAgZm9yIGRpciBvZiBjb25maWcud29ya1xuICAgICAgaW1hZ2VzLnB1c2ggXCJpbWFnZXMvd29yay8je2Rpcn0vdGh1bWJuYWlscy9sb2dvLnBuZ1wiXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS90aHVtYm5haWxzL2JhY2tncm91bmQuanBnXCJcblxuICAgIFByZWxvYWQgaW1hZ2VzLCAocHJvZ3Jlc3MpIC0+XG4gICAgICBkYmFyLnBlcmMgcHJvZ3Jlc3NcbiAgICAsIChkb25lKSAtPlxuICAgICAgZGJhci5kKClcbiAgICAgIGNvbXBsZXRlKClcblxuXG4gIGxvYWRJbWFnZXM6IChjb21wbGV0ZSkgLT5cblxuICAgICQuZWFjaCBjb25maWcud29yaywgKG5hbWUpIC0+XG5cbiAgICAgIGxvYWRJbWFnZSBcImltYWdlcy93b3JrLyN7bmFtZX0vbG9nby5wbmdcIiwgIChyYXRpbykgLT5cbiAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2FkaW5nID4gLmZ1bGxcIikuY3NzKCd3aWR0aCcsIFwiI3tyYXRpby8yfSVcIilcbiAgICAgIC50aGVuIChpbWFnZVNvdXJjZSkgLT5cbiAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2dvXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7aW1hZ2VTb3VyY2V9KVwiKVxuICAgICAgICBfLm9mZiBcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC50aHVtYm5haWxfbG9nb1wiXG4gICAgICAgIF8ub24gXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9nb1wiXG5cbiAgICAgICAgbG9hZEltYWdlIFwiaW1hZ2VzL3dvcmsvI3tuYW1lfS9iYWNrZ3JvdW5kLmpwZ1wiLCAgKHJhdGlvKSAtPlxuICAgICAgICAgICQoXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9hZGluZyA+IC5mdWxsXCIpLmNzcygnd2lkdGgnLCBcIiN7KHJhdGlvLzIpICsgNTB9JVwiKVxuICAgICAgICAudGhlbiAoaW1hZ2VTb3VyY2UpIC0+XG4gICAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5iYWNrZ3JvdW5kXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7aW1hZ2VTb3VyY2V9KVwiKVxuICAgICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLnRodW1ibmFpbF9iYWNrZ3JvdW5kXCJcbiAgICAgICAgICBfLm9uIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmJhY2tncm91bmRcIlxuICAgICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvYWRpbmdcIlxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgSW5kZXguY3ljbGVcbiAgICAkKCcubWVudSA+IC5vcHRpb24nKS5jbGljayBJbmRleC5vcHRpb25cbiAgICAkKCcuc2VjdGlvbi5zZWN0aW9uX3dvcmsgPiAud29yayA+IC5qb2IgPiAuaW5uZXInKS5jbGljayBJbmRleC5qb2JcblxuICBvcHRpb246IC0+XG4gICAgXy5vZmYgJy5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9uIHRoaXNcbiAgICBfLm9mZiAnLnNlY3Rpb24nXG4gICAgXy5vbiBcIi5zZWN0aW9uLnNlY3Rpb25fI3skKHRoaXMpLmRhdGEoJ29wdGlvbicpfVwiXG5cbiAgY3ljbGU6IC0+XG5cbiAgICAkKCcubG9nbyA+IC5pbm5lcicpLmFkZENsYXNzICdvZmZpbmcnXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBfLm9mZiAnLmxvZ28nXG4gICAgICAkKCcubG9nbyA+IC5pbm5lcicpLnJlbW92ZUNsYXNzICdvZmZpbmcnXG4gICAgLCA2MDBcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub24gJy5sb2dvJ1xuICAgICwgNjEwXG5cbiAgbW9kYWw6XG5cbiAgICBpOiAoam9iKSAtPlxuICAgICAgXy5vbiAnLmZhZGUsIC5tb2RhbCdcbiAgICAgIGdpZyA9IGNvbmZpZy53b3JrW2pvYl1cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmNzcyAnY29sb3InLCBnaWcuY29sb3JcblxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuaHRtbCBnaWcudGl0bGVcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90YWdsaW5lJykuaHRtbCBnaWcudGFnbGluZVxuICAgICAgZm9yIHAgaW4gZ2lnLmRldGFpbFxuICAgICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfZGV0YWlsJykuYXBwZW5kIFwiPHA+I3twfTwvcD5cIlxuXG4gICAgICBmb3IgdHlwZSwgbGluayBvZiBnaWcubGlua3NcbiAgICAgICAgXy5vbiBcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtfI3t0eXBlfVwiXG4gICAgICAgICQoXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXyN7dHlwZX1cIikuYXR0ciAnaHJlZicsIGxpbmtcblxuICAgIGhhbmRsZXJzOiAtPlxuICAgICAgJCgnLmZhZGUsIC5tb2RhbCA+IC5pbm5lciA+IC5jbG9zZScpLmNsaWNrIEluZGV4Lm1vZGFsLmRcblxuICAgIGQ6IC0+XG4gICAgICBfLm9mZiAnLmZhZGUsIC5tb2RhbCdcbiAgICAgIF8ub2ZmIFwiLmJvZHkgPiAubGlua3MgPiAubGlua1wiXG5cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmh0bWwgJydcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90YWdsaW5lJykuaHRtbCAnJ1xuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X2RldGFpbCcpLmh0bWwgJydcblxuICBqb2I6IC0+XG4gICAgSW5kZXgubW9kYWwuaSAkKHRoaXMpLmRhdGEgJ2pvYidcblxuXG4iLCIjIyMqXG4jIExvYWRzIGFuIGltYWdlIHdpdGggcHJvZ3Jlc3MgY2FsbGJhY2suXG4jXG4jIFRoZSBgb25wcm9ncmVzc2AgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYnkgWE1MSHR0cFJlcXVlc3QncyBvbnByb2dyZXNzXG4jIGV2ZW50LCBhbmQgd2lsbCByZWNlaXZlIHRoZSBsb2FkaW5nIHByb2dyZXNzIHJhdGlvIGFzIGFuIHdob2xlIG51bWJlci5cbiMgSG93ZXZlciwgaWYgaXQncyBub3QgcG9zc2libGUgdG8gY29tcHV0ZSB0aGUgcHJvZ3Jlc3MgcmF0aW8sIGBvbnByb2dyZXNzYFxuIyB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UgcGFzc2luZyAtMSBhcyBwcm9ncmVzcyB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgdG8sXG4jIGZvciBleGFtcGxlLCBjaGFuZ2UgdGhlIHByb2dyZXNzIGFuaW1hdGlvbiB0byBhbiB1bmRlZmluZWQgYW5pbWF0aW9uLlxuI1xuIyBAcGFyYW0gIHtzdHJpbmd9ICAgaW1hZ2VVcmwgICBUaGUgaW1hZ2UgdG8gbG9hZFxuIyBAcGFyYW0gIHtGdW5jdGlvbn0gb25wcm9ncmVzc1xuIyBAcmV0dXJuIHtQcm9taXNlfVxuIyMjXG5cbmxvYWRJbWFnZSA9IChpbWFnZVVybCwgb25wcm9ncmVzcykgLT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3RcbiAgICBub3RpZmllZE5vdENvbXB1dGFibGUgPSBmYWxzZVxuICAgIHhoci5vcGVuICdHRVQnLCBpbWFnZVVybCwgdHJ1ZVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG5cbiAgICB4aHIub25wcm9ncmVzcyA9IChldikgLT5cbiAgICAgIGlmIGV2Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgICAgb25wcm9ncmVzcyBwYXJzZUludChldi5sb2FkZWQgLyBldi50b3RhbCAqIDEwMClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgIW5vdGlmaWVkTm90Q29tcHV0YWJsZVxuICAgICAgICAgIG5vdGlmaWVkTm90Q29tcHV0YWJsZSA9IHRydWVcbiAgICAgICAgICBvbnByb2dyZXNzIC0xXG4gICAgICByZXR1cm5cblxuICAgIHhoci5vbmxvYWRlbmQgPSAtPlxuICAgICAgaWYgIXhoci5zdGF0dXMudG9TdHJpbmcoKS5tYXRjaCgvXjIvKVxuICAgICAgICByZWplY3QgeGhyXG4gICAgICBlbHNlXG4gICAgICAgIGlmICFub3RpZmllZE5vdENvbXB1dGFibGVcbiAgICAgICAgICBvbnByb2dyZXNzIDEwMFxuICAgICAgICBvcHRpb25zID0ge31cbiAgICAgICAgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICBtID0gaGVhZGVycy5tYXRjaCgvXkNvbnRlbnQtVHlwZVxcOlxccyooLio/KSQvbWkpXG4gICAgICAgIGlmIG0gYW5kIG1bMV1cbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSBtWzFdXG4gICAgICAgIGJsb2IgPSBuZXcgQmxvYihbIEByZXNwb25zZSBdLCBvcHRpb25zKVxuICAgICAgICByZXNvbHZlIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICByZXR1cm5cblxuICAgIHhoci5zZW5kKClcbiAgICByZXR1cm5cbilcbiIsIlByZWxvYWQgPSAoc3JjZXMsIHByb2dyZXNzLCBjb21wbGV0ZSkgLT5cblxuICBpbWFnZXMgPSBbXVxuICBsb2FkZWQgPSAwXG4gIHRvdGFsID0gc3JjZXMubGVuZ3RoXG5cbiAgY29tcGxldGUgdHJ1ZSBpZiB0b3RhbCBpcyAwXG5cbiAgZm9yIHNyYywgaSBpbiBzcmNlc1xuICAgIGltYWdlc1tpXSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2VzW2ldLnNyYyA9IHNyY1xuICAgIGltYWdlc1tpXS5vbmxvYWQgPSAtPlxuICAgICAgbG9hZGVkKytcbiAgICAgIHBlcmMgPSBNYXRoLnJvdW5kKGxvYWRlZC90b3RhbCoxMDApLzEwMFxuICAgICAgaWYgbG9hZGVkIGlzIHRvdGFsIHRoZW4gY29tcGxldGUodHJ1ZSkgZWxzZSBwcm9ncmVzcyhwZXJjKVxuIl19
