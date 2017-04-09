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
    return this.loadThumbnails(function() {
      _.on('header > .inner > .logo');
      $('.menu > .option').removeClass('loading');
      $('.menu > .option').addClass('loaded');
      setTimeout(function() {
        $('.menu > .option').removeClass('loading');
        return $('.menu > .option').removeClass('loaded');
      }, 1000);
      setTimeout(function() {
        _.on('.menu > .option.option_1');
        return _.on('.section.section_work');
      }, 1100);
      return setTimeout(function() {
        new Parallax($('.section.section_work')[0], {
          limitX: 20,
          limitY: 50
        });
        Index.handlers();
        Index.modal.handlers();
        return Index.loadImages();
      }, 1200);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibG9hZGltYWdlLmNvZmZlZSIsInByZWxvYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FBVSxJQUFWLEdBQWlCLEdBSG5CLEVBSEY7S0FBQSxNQUFBO01BU0UsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQixFQVRGOztFQUZHLENBcEJMO0VBbUNBLEVBQUEsRUFBSSxTQUFDLEVBQUQsRUFBSyxDQUFMO1dBQ0YsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixJQUFqQjtFQURFLENBbkNKO0VBc0NBLElBQUEsRUFBTSxTQUFDLEVBQUQsRUFBSyxDQUFMO0lBRUosSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxFQUFFLENBQUMsUUFBSCxDQUFZLEtBQVosQ0FBSDtNQUNFLElBQUMsQ0FBQSxFQUFELENBQUksRUFBSixFQUFRLENBQVIsRUFERjtLQUFBLE1BQUE7TUFHRSxJQUFDLENBQUEsR0FBRCxDQUFLLEVBQUwsRUFBUyxDQUFULEVBSEY7O0VBTEksQ0F0Q047RUFrREEsTUFBQSxFQUFRLFNBQUMsR0FBRDtBQUNOLFdBQU8sa0JBQUEsQ0FBbUIsR0FBbkIsQ0FDTCxDQUFDLE9BREksQ0FDSSxJQURKLEVBQ1UsS0FEVixDQUVMLENBQUMsT0FGSSxDQUVJLElBRkosRUFFVSxLQUZWLENBR0wsQ0FBQyxPQUhJLENBR0ksS0FISixFQUdXLEtBSFgsQ0FJTCxDQUFDLE9BSkksQ0FJSSxLQUpKLEVBSVcsS0FKWCxDQUtMLENBQUMsT0FMSSxDQUtJLEtBTEosRUFLVyxLQUxYLENBTUwsQ0FBQyxPQU5JLENBTUksTUFOSixFQU1ZLEdBTlo7RUFERCxDQWxEUjtFQTJEQSxDQUFBLEVBQUcsU0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixLQUFuQixFQUEwQixLQUExQjtXQUNELElBQUksQ0FBQyxJQUFMLENBQVUsQ0FBQyxhQUFELEVBQWdCLFFBQWhCLEVBQTBCLE1BQTFCLEVBQWtDLEtBQWxDLEVBQXlDLEtBQXpDLENBQVY7RUFEQyxDQTNESDtFQThEQSxJQUFBLEVBQU0sU0FBQyxHQUFELEVBQU0sR0FBTjtBQUNKLFdBQU8sSUFBSSxDQUFDLEtBQUwsQ0FBVyxJQUFJLENBQUMsTUFBTCxDQUFBLENBQUEsR0FBZ0IsR0FBM0IsQ0FBQSxHQUFrQztFQURyQyxDQTlETjtFQWlFQSxHQUFBLEVBQUssU0FBQTtBQUNILFFBQUE7SUFBQSxLQUFBLEdBQVEsMmhDQUFBLEdBbUJELE1BQU0sQ0FBQyxJQUFJLENBQUM7V0FFbkIsT0FBTyxDQUFDLEdBQVIsQ0FBWSxLQUFaLEVBQW1CLDZDQUFuQjtFQXRCRyxDQWpFTDtFQXlGQSxNQUFBLEVBQVEsU0FBQTtJQUNOLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFQLEdBQXFCLE1BQU0sQ0FBQyxXQUE3QixDQUFBLEdBQTRDLEdBQTdDLENBQUEsSUFBcUQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFQLEdBQW9CLE1BQU0sQ0FBQyxVQUE1QixDQUFBLEdBQTBDLEdBQTNDLENBQXpEO01BQ0UsSUFBQyxDQUFBLEdBQUQsQ0FBQTthQUNBLGFBQUEsQ0FBYyxJQUFDLENBQUEsT0FBZixFQUZGOztFQURNLENBekZSOzs7QUE4RkYsQ0FBQyxDQUFDLENBQUYsQ0FBQTs7QUNoR0EsSUFBQTs7QUFBQSxNQUFBLEdBQVM7RUFBQyxPQUFBLEVBQVE7SUFBQyxRQUFBLEVBQVMsU0FBVjtJQUFvQixRQUFBLEVBQVMsU0FBN0I7SUFBdUMsUUFBQSxFQUFTLFNBQWhEO0lBQTBELFFBQUEsRUFBUyxTQUFuRTtJQUE2RSxRQUFBLEVBQVMsU0FBdEY7SUFBZ0csU0FBQSxFQUFVLFNBQTFHO0lBQW9ILFNBQUEsRUFBVSxTQUE5SDtJQUF3SSxTQUFBLEVBQVUsU0FBbEo7SUFBNEosT0FBQSxFQUFRLFNBQXBLO0lBQThLLE9BQUEsRUFBUSxTQUF0TDtHQUFUO0VBQTBNLE1BQUEsRUFBTztJQUFDLE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxRQUFmO01BQXdCLFdBQUEsRUFBWSxNQUFwQztLQUFUO0lBQXFELE9BQUEsRUFBUTtNQUFDLGFBQUEsRUFBYyxRQUFmO01BQXdCLFdBQUEsRUFBWSxNQUFwQztLQUE3RDtJQUF5RyxPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsaUJBQWY7TUFBaUMsV0FBQSxFQUFZLE1BQTdDO01BQW9ELGFBQUEsRUFBYyxLQUFsRTtLQUFqSDtJQUEwTCxPQUFBLEVBQVE7TUFBQyxhQUFBLEVBQWMsaUJBQWY7TUFBaUMsV0FBQSxFQUFZLE1BQTdDO01BQW9ELGFBQUEsRUFBYyxLQUFsRTtLQUFsTTtJQUEyUSxJQUFBLEVBQUs7TUFBQyxhQUFBLEVBQWMsbUJBQWY7TUFBbUMsV0FBQSxFQUFZLE1BQS9DO0tBQWhSO0lBQXVVLElBQUEsRUFBSztNQUFDLGFBQUEsRUFBYyxtQkFBZjtNQUFtQyxXQUFBLEVBQVksTUFBL0M7S0FBNVU7R0FBak47RUFBcWxCLE1BQUEsRUFBTztJQUFDLEtBQUEsRUFBTSxnQkFBUDtJQUF3QixPQUFBLEVBQVEsR0FBaEM7SUFBb0MsYUFBQSxFQUFjLHlCQUFsRDtJQUE0RSxVQUFBLEVBQVcsMEVBQXZGO0lBQWtLLE9BQUEsRUFBUSxVQUExSztJQUFxTCxZQUFBLEVBQWEsZUFBbE07SUFBa04sTUFBQSxFQUFPLDJCQUF6TjtJQUFxUCxPQUFBLEVBQVEscUJBQTdQO0lBQW1SLE1BQUEsRUFBTyxpQ0FBMVI7SUFBNFQsT0FBQSxFQUFRLGNBQXBVO0lBQW1WLFFBQUEsRUFBUztNQUFDLFVBQUEsRUFBVyxrQ0FBWjtNQUErQyxTQUFBLEVBQVUsNEJBQXpEO01BQXNGLFdBQUEsRUFBWSxtQ0FBbEc7S0FBNVY7R0FBNWxCO0VBQWdrQyxNQUFBLEVBQU87SUFBQyxTQUFBLEVBQVU7TUFBQyxPQUFBLEVBQVEsU0FBVDtNQUFtQixPQUFBLEVBQVEsVUFBM0I7TUFBc0MsU0FBQSxFQUFVLDJCQUFoRDtNQUE0RSxRQUFBLEVBQVMsQ0FBQyxvTkFBRCxFQUFzTiw2RkFBdE4sQ0FBckY7TUFBMFksT0FBQSxFQUFRO1FBQUMsS0FBQSxFQUFNLDJCQUFQO1FBQW1DLFFBQUEsRUFBUyxxQ0FBNUM7T0FBbFo7S0FBWDtJQUFpZixVQUFBLEVBQVc7TUFBQyxPQUFBLEVBQVEsU0FBVDtNQUFtQixPQUFBLEVBQVEsdUJBQTNCO01BQW1ELFNBQUEsRUFBVSw4QkFBN0Q7TUFBNEYsUUFBQSxFQUFTLENBQUMsOEVBQUQsRUFBZ0Ysc0lBQWhGLEVBQXVOLHFGQUF2TixDQUFyRztNQUFtWixPQUFBLEVBQVE7UUFBQyxLQUFBLEVBQU0sa0NBQVA7T0FBM1o7S0FBNWY7SUFBbThCLGNBQUEsRUFBZTtNQUFDLE9BQUEsRUFBUSxTQUFUO01BQW1CLE9BQUEsRUFBUSxrQkFBM0I7TUFBOEMsU0FBQSxFQUFVLHNDQUF4RDtNQUErRixRQUFBLEVBQVMsQ0FBQyxzTEFBRCxDQUF4RztNQUFpUyxPQUFBLEVBQVE7UUFBQyxLQUFBLEVBQU0sNkJBQVA7UUFBcUMsUUFBQSxFQUFTLGdEQUE5QztPQUF6UztLQUFsOUI7SUFBNDFDLFVBQUEsRUFBVztNQUFDLE9BQUEsRUFBUSxTQUFUO01BQW1CLE9BQUEsRUFBUSxVQUEzQjtNQUFzQyxTQUFBLEVBQVUsaURBQWhEO01BQWtHLFFBQUEsRUFBUyxDQUFDLHFMQUFELEVBQXVMLHFUQUF2TCxDQUEzRztNQUF5bEIsT0FBQSxFQUFRO1FBQUMsS0FBQSxFQUFNLHFCQUFQO1FBQTZCLFFBQUEsRUFBUyxxQ0FBdEM7T0FBam1CO0tBQXYyQztJQUFzaEUsT0FBQSxFQUFRO01BQUMsT0FBQSxFQUFRLFNBQVQ7TUFBbUIsT0FBQSxFQUFRLGVBQTNCO01BQTJDLFNBQUEsRUFBVSw2Q0FBckQ7TUFBbUcsUUFBQSxFQUFTLENBQUMsZ0ZBQUQsRUFBa0YsNktBQWxGLEVBQWdRLHlIQUFoUSxDQUE1RztNQUF1ZSxPQUFBLEVBQVE7UUFBQyxLQUFBLEVBQU0sOEJBQVA7UUFBc0MsUUFBQSxFQUFTLGtDQUEvQztPQUEvZTtLQUE5aEU7SUFBaW1GLElBQUEsRUFBSztNQUFDLE9BQUEsRUFBUSxTQUFUO01BQW1CLE9BQUEsRUFBUSxzQkFBM0I7TUFBa0QsU0FBQSxFQUFVLGdDQUE1RDtNQUE2RixRQUFBLEVBQVMsQ0FBQyw0S0FBRCxFQUE4SywrUkFBOUssQ0FBdEc7TUFBcWpCLE9BQUEsRUFBUTtRQUFDLEtBQUEsRUFBTSxxQ0FBUDtPQUE3akI7S0FBdG1GO0lBQWt0RyxRQUFBLEVBQVM7TUFBQyxPQUFBLEVBQVEsU0FBVDtNQUFtQixPQUFBLEVBQVEsd0JBQTNCO01BQW9ELFNBQUEsRUFBVSx5Q0FBOUQ7TUFBd0csUUFBQSxFQUFTLENBQUMscUtBQUQsRUFBdUssaUxBQXZLLENBQWpIO01BQTJjLE9BQUEsRUFBUTtRQUFDLEtBQUEsRUFBTSx5QkFBUDtPQUFuZDtLQUEzdEc7SUFBaXRILE1BQUEsRUFBTztNQUFDLE9BQUEsRUFBUSxTQUFUO01BQW1CLE9BQUEsRUFBUSxtQkFBM0I7TUFBK0MsU0FBQSxFQUFVLDZCQUF6RDtNQUF1RixRQUFBLEVBQVMsQ0FBQyw0SEFBRCxFQUE4SCx5SkFBOUgsQ0FBaEc7TUFBeVgsT0FBQSxFQUFRO1FBQUMsS0FBQSxFQUFNLGtDQUFQO1FBQTBDLFFBQUEsRUFBUyxpQ0FBbkQ7T0FBalk7S0FBeHRIO0lBQWdySSxVQUFBLEVBQVc7TUFBQyxPQUFBLEVBQVEsU0FBVDtNQUFtQixPQUFBLEVBQVEsa0JBQTNCO01BQThDLFNBQUEsRUFBVSxtQ0FBeEQ7TUFBNEYsUUFBQSxFQUFTLENBQUMsa0tBQUQsQ0FBckc7TUFBMFEsT0FBQSxFQUFRO1FBQUMsS0FBQSxFQUFNLGlDQUFQO1FBQXlDLFFBQUEsRUFBUyxxQ0FBbEQ7T0FBbFI7S0FBM3JJO0lBQXVpSixJQUFBLEVBQUs7TUFBQyxPQUFBLEVBQVEsU0FBVDtNQUFtQixPQUFBLEVBQVEsaUJBQTNCO01BQTZDLFNBQUEsRUFBVSw0QkFBdkQ7TUFBb0YsUUFBQSxFQUFTLENBQUMsMElBQUQsRUFBNEksd0tBQTVJLENBQTdGO01BQW1aLE9BQUEsRUFBUTtRQUFDLEtBQUEsRUFBTSxnQ0FBUDtPQUEzWjtLQUE1aUo7SUFBaS9KLFFBQUEsRUFBUztNQUFDLE9BQUEsRUFBUSxTQUFUO01BQW1CLE9BQUEsRUFBUSxpQkFBM0I7TUFBNkMsU0FBQSxFQUFVLGlCQUF2RDtNQUF5RSxRQUFBLEVBQVMsQ0FBQyxxTkFBRCxDQUFsRjtNQUEwUyxPQUFBLEVBQVE7UUFBQyxLQUFBLEVBQU0saUNBQVA7T0FBbFQ7S0FBMS9KO0dBQXZrQzs7O0FDQVQsSUFBQTs7QUFBQSxLQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUVELElBQUMsQ0FBQSxjQUFELENBQWdCLFNBQUE7TUFFZCxDQUFDLENBQUMsRUFBRixDQUFLLHlCQUFMO01BRUEsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsV0FBckIsQ0FBaUMsU0FBakM7TUFDQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxRQUFyQixDQUE4QixRQUE5QjtNQUVBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsV0FBckIsQ0FBaUMsU0FBakM7ZUFDQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxXQUFyQixDQUFpQyxRQUFqQztNQUZTLENBQVgsRUFHRSxJQUhGO01BS0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxDQUFDLENBQUMsRUFBRixDQUFLLDBCQUFMO2VBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyx1QkFBTDtNQUZTLENBQVgsRUFHRSxJQUhGO2FBS0EsVUFBQSxDQUFXLFNBQUE7UUFFTCxJQUFBLFFBQUEsQ0FBUyxDQUFBLENBQUUsdUJBQUYsQ0FBMkIsQ0FBQSxDQUFBLENBQXBDLEVBQXdDO1VBQUEsTUFBQSxFQUFRLEVBQVI7VUFBWSxNQUFBLEVBQVEsRUFBcEI7U0FBeEM7UUFFSixLQUFLLENBQUMsUUFBTixDQUFBO1FBQ0EsS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFaLENBQUE7ZUFDQSxLQUFLLENBQUMsVUFBTixDQUFBO01BTlMsQ0FBWCxFQVFFLElBUkY7O0FBVUE7Ozs7Ozs7SUEzQmMsQ0FBaEI7RUFGQyxDQUFIO0VBb0NBLGNBQUEsRUFBZ0IsU0FBQyxRQUFEO0FBRWQsUUFBQTtJQUFBLE1BQUEsR0FBUztBQUVULFNBQUEsa0JBQUE7TUFDRSxNQUFNLENBQUMsSUFBUCxDQUFZLGNBQUEsR0FBZSxHQUFmLEdBQW1CLHNCQUEvQjtNQUNBLE1BQU0sQ0FBQyxJQUFQLENBQVksY0FBQSxHQUFlLEdBQWYsR0FBbUIsNEJBQS9CO0FBRkY7V0FJQSxPQUFBLENBQVEsTUFBUixFQUFnQixTQUFDLFFBQUQ7YUFDZCxJQUFJLENBQUMsSUFBTCxDQUFVLFFBQVY7SUFEYyxDQUFoQixFQUVFLFNBQUMsSUFBRDtNQUNBLElBQUksQ0FBQyxDQUFMLENBQUE7YUFDQSxRQUFBLENBQUE7SUFGQSxDQUZGO0VBUmMsQ0FwQ2hCO0VBbURBLFVBQUEsRUFBWSxTQUFDLFFBQUQ7V0FFVixDQUFDLENBQUMsSUFBRixDQUFPLE1BQU0sQ0FBQyxJQUFkLEVBQW9CLFNBQUMsSUFBRDthQUVsQixTQUFBLENBQVUsY0FBQSxHQUFlLElBQWYsR0FBb0IsV0FBOUIsRUFBMkMsU0FBQyxLQUFEO2VBQ3pDLENBQUEsQ0FBRSxPQUFBLEdBQVEsSUFBUixHQUFhLDhCQUFmLENBQTZDLENBQUMsR0FBOUMsQ0FBa0QsT0FBbEQsRUFBNkQsQ0FBQyxLQUFBLEdBQU0sQ0FBUCxDQUFBLEdBQVMsR0FBdEU7TUFEeUMsQ0FBM0MsQ0FFQSxDQUFDLElBRkQsQ0FFTSxTQUFDLFdBQUQ7UUFDSixDQUFBLENBQUUsT0FBQSxHQUFRLElBQVIsR0FBYSxtQkFBZixDQUFrQyxDQUFDLEdBQW5DLENBQXVDLGtCQUF2QyxFQUEyRCxNQUFBLEdBQU8sV0FBUCxHQUFtQixHQUE5RTtRQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sT0FBQSxHQUFRLElBQVIsR0FBYSw2QkFBbkI7UUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLE9BQUEsR0FBUSxJQUFSLEdBQWEsbUJBQWxCO2VBRUEsU0FBQSxDQUFVLGNBQUEsR0FBZSxJQUFmLEdBQW9CLGlCQUE5QixFQUFpRCxTQUFDLEtBQUQ7aUJBQy9DLENBQUEsQ0FBRSxPQUFBLEdBQVEsSUFBUixHQUFhLDhCQUFmLENBQTZDLENBQUMsR0FBOUMsQ0FBa0QsT0FBbEQsRUFBNkQsQ0FBQyxDQUFDLEtBQUEsR0FBTSxDQUFQLENBQUEsR0FBWSxFQUFiLENBQUEsR0FBZ0IsR0FBN0U7UUFEK0MsQ0FBakQsQ0FFQSxDQUFDLElBRkQsQ0FFTSxTQUFDLFdBQUQ7VUFDSixDQUFBLENBQUUsT0FBQSxHQUFRLElBQVIsR0FBYSx5QkFBZixDQUF3QyxDQUFDLEdBQXpDLENBQTZDLGtCQUE3QyxFQUFpRSxNQUFBLEdBQU8sV0FBUCxHQUFtQixHQUFwRjtVQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sT0FBQSxHQUFRLElBQVIsR0FBYSxtQ0FBbkI7VUFDQSxDQUFDLENBQUMsRUFBRixDQUFLLE9BQUEsR0FBUSxJQUFSLEdBQWEseUJBQWxCO2lCQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sT0FBQSxHQUFRLElBQVIsR0FBYSxzQkFBbkI7UUFKSSxDQUZOO01BTEksQ0FGTjtJQUZrQixDQUFwQjtFQUZVLENBbkRaO0VBc0VBLFFBQUEsRUFBVSxTQUFBO0lBQ1IsQ0FBQSxDQUFFLHlCQUFGLENBQTRCLENBQUMsS0FBN0IsQ0FBbUMsS0FBSyxDQUFDLEtBQXpDO0lBQ0EsQ0FBQSxDQUFFLGlCQUFGLENBQW9CLENBQUMsS0FBckIsQ0FBMkIsS0FBSyxDQUFDLE1BQWpDO1dBQ0EsQ0FBQSxDQUFFLCtDQUFGLENBQWtELENBQUMsS0FBbkQsQ0FBeUQsS0FBSyxDQUFDLEdBQS9EO0VBSFEsQ0F0RVY7RUEyRUEsTUFBQSxFQUFRLFNBQUE7SUFDTixDQUFDLENBQUMsR0FBRixDQUFNLGlCQUFOO0lBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxJQUFMO0lBQ0EsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxVQUFOO1dBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxtQkFBQSxHQUFtQixDQUFDLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsUUFBYixDQUFELENBQXhCO0VBSk0sQ0EzRVI7RUFpRkEsS0FBQSxFQUFPLFNBQUE7SUFFTCxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxRQUFwQixDQUE2QixRQUE3QjtJQUVBLFVBQUEsQ0FBVyxTQUFBO01BQ1QsQ0FBQyxDQUFDLEdBQUYsQ0FBTSxPQUFOO2FBQ0EsQ0FBQSxDQUFFLGdCQUFGLENBQW1CLENBQUMsV0FBcEIsQ0FBZ0MsUUFBaEM7SUFGUyxDQUFYLEVBR0UsR0FIRjtXQUtBLFVBQUEsQ0FBVyxTQUFBO2FBQ1QsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxPQUFMO0lBRFMsQ0FBWCxFQUVFLEdBRkY7RUFUSyxDQWpGUDtFQThGQSxLQUFBLEVBRUU7SUFBQSxDQUFBLEVBQUcsU0FBQyxHQUFEO0FBQ0QsVUFBQTtNQUFBLENBQUMsQ0FBQyxFQUFGLENBQUssZUFBTDtNQUNBLEdBQUEsR0FBTSxNQUFNLENBQUMsSUFBSyxDQUFBLEdBQUE7TUFDbEIsQ0FBQSxDQUFFLDBCQUFGLENBQTZCLENBQUMsR0FBOUIsQ0FBa0MsT0FBbEMsRUFBMkMsR0FBRyxDQUFDLEtBQS9DO01BRUEsQ0FBQSxDQUFFLDBCQUFGLENBQTZCLENBQUMsSUFBOUIsQ0FBbUMsR0FBRyxDQUFDLEtBQXZDO01BQ0EsQ0FBQSxDQUFFLDRCQUFGLENBQStCLENBQUMsSUFBaEMsQ0FBcUMsR0FBRyxDQUFDLE9BQXpDO0FBQ0E7QUFBQSxXQUFBLHFDQUFBOztRQUNFLENBQUEsQ0FBRSwyQkFBRixDQUE4QixDQUFDLE1BQS9CLENBQXNDLEtBQUEsR0FBTSxDQUFOLEdBQVEsTUFBOUM7QUFERjtBQUdBO0FBQUE7V0FBQSxZQUFBOztRQUNFLENBQUMsQ0FBQyxFQUFGLENBQUsseUJBQUEsR0FBMEIsSUFBL0I7cUJBQ0EsQ0FBQSxDQUFFLHlCQUFBLEdBQTBCLElBQTVCLENBQW1DLENBQUMsSUFBcEMsQ0FBeUMsTUFBekMsRUFBaUQsSUFBakQ7QUFGRjs7SUFWQyxDQUFIO0lBY0EsUUFBQSxFQUFVLFNBQUE7YUFDUixDQUFBLENBQUUsaUNBQUYsQ0FBb0MsQ0FBQyxLQUFyQyxDQUEyQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQXZEO0lBRFEsQ0FkVjtJQWlCQSxDQUFBLEVBQUcsU0FBQTtNQUNELENBQUMsQ0FBQyxHQUFGLENBQU0sZUFBTjtNQUNBLENBQUMsQ0FBQyxHQUFGLENBQU0sd0JBQU47TUFFQSxDQUFBLENBQUUsMEJBQUYsQ0FBNkIsQ0FBQyxJQUE5QixDQUFtQyxFQUFuQztNQUNBLENBQUEsQ0FBRSw0QkFBRixDQUErQixDQUFDLElBQWhDLENBQXFDLEVBQXJDO2FBQ0EsQ0FBQSxDQUFFLDJCQUFGLENBQThCLENBQUMsSUFBL0IsQ0FBb0MsRUFBcEM7SUFOQyxDQWpCSDtHQWhHRjtFQXlIQSxHQUFBLEVBQUssU0FBQTtXQUNILEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBWixDQUFjLENBQUEsQ0FBRSxJQUFGLENBQU8sQ0FBQyxJQUFSLENBQWEsS0FBYixDQUFkO0VBREcsQ0F6SEw7Ozs7QUNGRjs7Ozs7Ozs7Ozs7OztBQUFBLElBQUE7O0FBY0EsU0FBQSxHQUFZLFNBQUMsUUFBRCxFQUFXLFVBQVg7U0FDTixJQUFBLE9BQUEsQ0FBUSxTQUFDLE9BQUQsRUFBVSxNQUFWO0FBQ1YsUUFBQTtJQUFBLEdBQUEsR0FBTSxJQUFJO0lBQ1YscUJBQUEsR0FBd0I7SUFDeEIsR0FBRyxDQUFDLElBQUosQ0FBUyxLQUFULEVBQWdCLFFBQWhCLEVBQTBCLElBQTFCO0lBQ0EsR0FBRyxDQUFDLFlBQUosR0FBbUI7SUFFbkIsR0FBRyxDQUFDLFVBQUosR0FBaUIsU0FBQyxFQUFEO01BQ2YsSUFBRyxFQUFFLENBQUMsZ0JBQU47UUFDRSxVQUFBLENBQVcsUUFBQSxDQUFTLEVBQUUsQ0FBQyxNQUFILEdBQVksRUFBRSxDQUFDLEtBQWYsR0FBdUIsR0FBaEMsQ0FBWCxFQURGO09BQUEsTUFBQTtRQUdFLElBQUcsQ0FBQyxxQkFBSjtVQUNFLHFCQUFBLEdBQXdCO1VBQ3hCLFVBQUEsQ0FBVyxDQUFDLENBQVosRUFGRjtTQUhGOztJQURlO0lBU2pCLEdBQUcsQ0FBQyxTQUFKLEdBQWdCLFNBQUE7QUFDZCxVQUFBO01BQUEsSUFBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBWCxDQUFBLENBQXFCLENBQUMsS0FBdEIsQ0FBNEIsSUFBNUIsQ0FBSjtRQUNFLE1BQUEsQ0FBTyxHQUFQLEVBREY7T0FBQSxNQUFBO1FBR0UsSUFBRyxDQUFDLHFCQUFKO1VBQ0UsVUFBQSxDQUFXLEdBQVgsRUFERjs7UUFFQSxPQUFBLEdBQVU7UUFDVixPQUFBLEdBQVUsR0FBRyxDQUFDLHFCQUFKLENBQUE7UUFDVixDQUFBLEdBQUksT0FBTyxDQUFDLEtBQVIsQ0FBYyw0QkFBZDtRQUNKLElBQUcsQ0FBQSxJQUFNLENBQUUsQ0FBQSxDQUFBLENBQVg7VUFDRSxPQUFPLENBQUMsSUFBUixHQUFlLENBQUUsQ0FBQSxDQUFBLEVBRG5COztRQUVBLElBQUEsR0FBVyxJQUFBLElBQUEsQ0FBSyxDQUFFLElBQUMsQ0FBQSxRQUFILENBQUwsRUFBb0IsT0FBcEI7UUFDWCxPQUFBLENBQVEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFYLENBQTJCLElBQTNCLENBQVIsRUFYRjs7SUFEYztJQWVoQixHQUFHLENBQUMsSUFBSixDQUFBO0VBOUJVLENBQVI7QUFETTs7QUNkWixJQUFBOztBQUFBLE9BQUEsR0FBVSxTQUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCO0FBRVIsTUFBQTtFQUFBLE1BQUEsR0FBUztFQUNULE1BQUEsR0FBUztFQUNULEtBQUEsR0FBUSxLQUFLLENBQUM7RUFFZCxJQUFpQixLQUFBLEtBQVMsQ0FBMUI7SUFBQSxRQUFBLENBQVMsSUFBVCxFQUFBOztBQUVBO09BQUEsK0NBQUE7O0lBQ0UsTUFBTyxDQUFBLENBQUEsQ0FBUCxHQUFnQixJQUFBLEtBQUEsQ0FBQTtJQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsR0FBVixHQUFnQjtpQkFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVYsR0FBbUIsU0FBQTtBQUNqQixVQUFBO01BQUEsTUFBQTtNQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBTyxLQUFQLEdBQWEsR0FBeEIsQ0FBQSxHQUE2QjtNQUNwQyxJQUFHLE1BQUEsS0FBVSxLQUFiO2VBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO09BQUEsTUFBQTtlQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7SUFIaUI7QUFIckI7O0FBUlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMkIyRDMyXCIsXCJibGFjazJcIjpcIiM0MTQzNDdcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwid2hpdGUyXCI6XCIjZWVlZWVlXCIsXCJ3aGl0ZTNcIjpcIiNhYmFiYWRcIixcInB1cnBsZTFcIjpcIiMzMzI2MzFcIixcInB1cnBsZTJcIjpcIiM0RDM5NEJcIixcInB1cnBsZTNcIjpcIiNBQjlCQTlcIixcInRlYWwxXCI6XCIjNEM5Njg5XCIsXCJ0ZWFsMlwiOlwiI0IxQzlDNVwifSxcImZvbnRcIjp7XCJjb3B5MVwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImNvcHkyXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIixcImZvbnQtd2VpZ2h0XCI6XCI1MDBcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMjRweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly8yNTYuaW8vXCIsXCJ0aXRsZVwiOjI1NixcImRlc2NyaXB0aW9uXCI6XCJidWlsZGluZyBkaWdpdGFsIHRoaW5nc1wiLFwia2V5d29yZHNcIjpcIndlYiBkZXZlbG9wbWVudCwgbW9iaWxlIGRldmVsb3BtZW50LCBtb2JpbGUgYXBwcywgZnVsbCBzdGFjayBkZXZlbG9wbWVudFwiLFwicGhvbmVcIjo5NDkyOTA4OTg5LFwidHJhY2tpbmdJRFwiOlwiVUEtNzUxMjgzNTUtMVwiLFwibG9nb1wiOlwiaW1hZ2VzL2xvZ29fMTAwMHgxMDAwLmpwZ1wiLFwic2hhcmVcIjpcImltYWdlcy8xMjAweDYzMC5qcGdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei8yNTZcIixcImVtYWlsXCI6XCJrZXZpbkAyNTYuaW9cIixcInNvY2lhbFwiOntcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vMjU2bGxjL1wiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS8yNTZsbGNcIixcImluc3RhZ3JhbVwiOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8yNTZsbGMvXCJ9fSxcIndvcmtcIjp7XCJmdWxsc3VuXCI6e1wiY29sb3JcIjpcIiNGMjk5MzRcIixcInRpdGxlXCI6XCJGdWxsIFN1blwiLFwidGFnbGluZVwiOlwicHJlbWl1bSBzdW5ncm93biBnb29kbmVzc1wiLFwiZGV0YWlsXCI6W1wiQ29tcGlsZWQgc29tZSBzdHVubmluZyBlZmZlY3RzIHdpdGggQ1NTIGdyYWRpZW50cyBvdmVyIHNvbWUgdmVyeSB3ZWxsIGRvbmUgcGhvdG9ncmFwaHkuICBHb3QgdmVyeSBjdXN0b20gd2l0aCBnb29nbGUgbWFwcyBmcm9tIGV2ZXJ5dGhpbmcgdG8gY29sb3JzIHRvIG92ZXJsYXlzIG9mIGVhY2ggYnVzaW5lc3MgdXNpbmcgcGxhY2VJZHMgdG8gcHVsbCBpbiBjb250ZW50XCIsXCJWZXJ5IGV4Y2l0aW5nIHRvIGdldCBpbnZvbHZlZCB3aXRoIHRoaXMgdXAgYW5kIGNvbWluZyBpbmR1c3RyeSBhbmQgbGVhcm4gYWJvdXQgdGhlIHByb2Nlc3MhXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vd3d3LmZ1bGwtc3VuLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2FjaWRqYXp6L2Z1bGxzdW5cIn19LFwiaG9saWRheXNcIjp7XCJjb2xvclwiOlwiI2ZmNWE1ZlwiLFwidGl0bGVcIjpcIkhvbWUgZm9yIHRoZSBIb2xpZGF5c1wiLFwidGFnbGluZVwiOlwic2FtZSBob2xpZGF5LCBkaWZmZXJlbnQgaG9tZVwiLFwiZGV0YWlsXCI6W1wiUmVhbCBmdW4gcHJvamVjdCBmb3IgQWlyYm5iIHRvIHByb21vdGUgc3BlbmRpbmcgdGhlIGhvbGlkYXlzIGF3YXkgZnJvbSBob21lLlwiLFwiVGhpcyB3YXMgYSBtb2JpbGUtb25seSBzaXRlIHdoZXJlIHlvdSB1cGxvYWQgYSBwaG90byBvZiB5b3UgYW5kIHlvdXIgZmFtaWx5IGNlbGVicmF0aW5nLCBjaG9vc2UgYSBmaWx0ZXIgeW91IGxpa2UgYW5kIHRoZW4gc2hhcmUgaXQuXCIsXCJGdWxsIHN0YWNrIHByb2plY3QgZXZlbiBpbnZvbHZpbmcgb3BlcmF0aWlvbnMsIGF1dG9tYXRlZCBzY2FsaW5nLCBhbmQgbG9hZCB0ZXN0aW5nLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwczovL2hvbGlkYXlzLndpdGhhaXJibmIuY29tL1wifX0sXCJsb29raW5nZ2xhc3NcIjp7XCJjb2xvclwiOlwiI0MyOUU2RVwiLFwidGl0bGVcIjpcIkxvb2tpbmcgR2xhc3MgVlJcIixcInRhZ2xpbmVcIjpcIndpbmRvd3MgdG8gdGhlIHBhc3QgYXJlIG9wZW4gYXQgbGFzdFwiLFwiZGV0YWlsXCI6W1wiSXQncyBiZWVuIGEgYmxhc3QgY29udHJpYnV0aW5nIHRvIHRoaXMgYXdlc29tZSBWUiBhcHA7IGEgM0QgcGhvdG8gdmlld2VyIG9mIGFyb3VuZCAyMDAgcGhvdG9zIGZyb20gYWxsIG92ZXIgdGhlIHdvcmxkIGFib3V0IGEgY2VudHVyeSBvbGQsIGZpbmFsbHkgdG8gYmUgc2VlbiBhcyB0aGV5IHdlcmUgaW50ZW5kZWQuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vbG9va2luZ2dsYXNzdnIuY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwczovL2dpdGh1Yi5jb20vbG9va2luZ2dsYXNzdnIvbG9va2luZ2dsYXNzXCJ9fSxcImRlZmluZXJ5XCI6e1wiY29sb3JcIjpcIiM1NUM3QzBcIixcInRpdGxlXCI6XCJERUZJTkVSWVwiLFwidGFnbGluZVwiOlwiYSBkaWdpdGFsIHByb2R1Y3QgZGVzaWduIGFuZCBpbm5vdmF0aW9uIGNvbXBhbnlcIixcImRldGFpbFwiOltcIkZvciBvdXIgZmlyc3QgdmVyc2lvbiBvZiA8YSBocmVmPVxcXCJodHRwOi8vZGVmaW5lcnkuaW9cXFwiIHRhcmdldD1cXFwiX25ld1xcXCI+ZGVmaW5lcnkuaW88L2E+IHdlIHdhbnRlZCB0byBnbyBmb3IgdGhlIG1vc3QgaW5ub3ZhdGl2ZSBhbmQgcmVjZW50ICh3aGlsZSBzdGlsbCBjb21wYXRpYmxlKSB0ZWNoIGF2YWlsYWJsZS5cIixcIldlIHBhY2tlZCBpbiBsb3RzIG9mIGxpdmVseSBmZWF0dXJlczsgY2xpcHBpbmcsIG1hc2tpbmcsIGFuZCBibGVuZCBtb2RlcyAobWl4LWJsZW5kLW1vZGUgdG8gYmUgcHJlY2lzZSkgZm9yIGNvbXBvc2l0aW5nIGdyYXBoaWMgZWxlbWVudHMsIHdoaWNoIGV2ZW4gd29ya2VkIHdlbGwgd2l0aCB2aWRlby4gIFdlIGFsc28gaGl0IG91ciB0YXJnZXQgb24gbW9iaWxlIGJ5IGR5bmFtaWNhbGx5IGFsdGVybmF0aW5nIG1ldGEgdGFncyB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgYnJvd3NlciBoZWFkZXIgY29sb3JzIG9uIGFuZHJvaWQgZGV2aWNlcy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL2RlZmluZXJ5LmlvL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9kZWZpbmVyeVwifX0sXCJhc3Ryb1wiOntcImNvbG9yXCI6XCIjQzg1MDRCXCIsXCJ0aXRsZVwiOlwiQXN0cm8gU3R1ZGlvc1wiLFwidGFnbGluZVwiOlwic3VwZXJjaGFyZ2VkIGJyYW5kIGFuZCBwcm9kdWN0IGV4cGVyaWVuY2VzLlwiLFwiZGV0YWlsXCI6W1wiSXQgd2FzIGEgZ3JlYXQgcGxlYXN1cmUgd29ya2luZyB3aXRoIHN1Y2ggYW4gaW5ub3ZhdGl2ZSBwcm9kdWN0IGRlc2lnbiBhZ2VuY3kuXCIsXCJUaGlzIHdhcyBhIG1ham9yIGNoYWxsZW5nZSBvZiBzdGF5aW5nIHdpdGggMTAwJSBvcmlnaW5hbCBhbmQgY3VzdG9tIGZ1bmN0aW9uYWxpdHkgYW5kIGZlYXR1cmVzIHdoaWxlIGtlZXBpbmcgYW4gZWFzaWx5IG1vZGlmaWFibGUgYW5kIGxlZ2libGUgc3RydWN0dXJlIG9mIHN5bnRhY3RpYyBzdWdhci5cIixcIldpdGggdHdvIHNlcGVyYXRlIGFuZCBmdWxseSBjdXN0b20gQ01TIHNlY3Rpb25zLCBhbmQgYSBjb3VwbGUgZWFzdGVyIGVnZ3MsIGV2ZXJ5IHNlY3Rpb24gb2YgdGhpcyBwcm9qZWN0IHBhY2tzIGEgcHVuY2guXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYXN0cm9zdHVkaW9zLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovYXN0cm9cIn19LFwiYnJcIjp7XCJjb2xvclwiOlwiI0UwNDgzRVwiLFwidGl0bGVcIjpcIkJ5c3RhbmRlciBSZXZvbHV0aW9uXCIsXCJ0YWdsaW5lXCI6XCJ0YWtlIHRoZSBwb3dlciBvdXQgb2YgYnVsbHlpbmdcIixcImRldGFpbFwiOltcIkdvaW5nIG9uIDMgeWVhcnMsIDMsMDAwKyBjb21taXRzLCAzIGNvbXBsZXRlIHJlbm92YXRpb25zLCBhbmQgMTArIGNhbXBhaWducywgaXQncyBiZWVuIGEgZ3JlYXQgb3Bwb3J0dW5pdHkgdG8gdGFrZSBvbiBkZXZlbG9wbWVudCBhbmQgb3BlcmF0aW9ucyBmb3IgQnlzdGFuZGVyIFJldm9sdXRpb24uXCIsXCJXb3JraW5nIHdpdGggbXVsdGlwbGUgYWdlbmNpZXMgdGhyb3VnaCB0aGUgeWVhcnMsIGVzc2VudGlhbGx5IHdpdGggTWFjS2VuemllIEJlem9zJyBjb3JlIHRlYW0gaW4gU2VhdHRsZSwgd2UndmUgdGFja2xlZCBhbGwgc29ydHMgb2YgdGFza3MgZGVhbGluZyB3aXRoIHByZWNvbmRpdGlvbmVkIGFuZCB1c2VyLWNvbnRyaWJ1dGVkIGNvbnRlbnQsIGNvbnN0YW50bHkgZXZvbHZpbmcgdG8gZGlzcGxheSBpdCBjb21mb3J0YWJseSBpbiBtdWx0aXBsZSBlYXNpbHkgbmF2aWdhdGFibGUgaW50ZXJmYWNlcy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5ieXN0YW5kZXJyZXZvbHV0aW9uLm9yZy9cIn19LFwiZ2lsbWFuXCI6e1wiY29sb3JcIjpcIiNjMDgwMDBcIixcInRpdGxlXCI6XCJHaWxtYW4gQnJld2luZyBDb21wYW55XCIsXCJ0YWdsaW5lXCI6XCJib3JuIGFuZCBicmV3ZWQgaW4gYmVya2VsZXksIGNhbGlmb3JuaWFcIixcImRldGFpbFwiOltcIkxvdHMgb2YgZnVuIG9uIHRoaXMgcHJvamVjdCBnb2luZyBmdXJ0aGVyIHRoYW4ganVzdCBkZXZlbG9wbWVudCBhbmQgb3BlcmF0aW9ucyBhbmQgZ2V0dGluZyBpbnZvbHZlZCBpbiBjcmVhdGluZyBzb21lIGNpbmVtYWdyYXBocyB0byBoZWxwIG1ha2UgdGhlIHNpdGUgY29tZSBhbGl2ZS5cIixcIk9uY2UgbGF1bmNoZWQgdGhpcyBwcm9qZWN0IHdpbGwgdGFrZSBhZHZhbnRhZ2Ugb2YgdGhlIG5ld2VyIHdlYmtpdCBwdXNoIGFsbG93aW5nIHNpbGVudCB2aWRlbyB0byBhdXRvLXBsYXksIGdpdmluZyB2aWRlbyBvbiBtb2JpbGUgd2l0aG91dCByZXN1bHRpbmcgaW4gYnVsa3kgdW5jb21wcmVzc2VkIEdJRlNcIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL2dpbG1hbi4yNTYudGVjaC9cIn19LFwic2FrZVwiOntcImNvbG9yXCI6XCIjNzNCOEIyXCIsXCJ0aXRsZVwiOlwiRGVzaWduc2FrZSBTdHVkaW9cIixcInRhZ2xpbmVcIjpcImZvciB0aGUgc2FrZSBvZiBnb29kIGRlc2lnblwiLFwiZGV0YWlsXCI6W1wiQmVpbmcgZ2l2ZW4gc3VjaCBhIGNsZWFuIGFuZCBwcmV0dHkgZGVzaWduIGFuZCBhIGdyZWF0IHJpY2ggcG9ydGZvbGlvIG9mIHdvcmssIGJ1aWxkaW5nIGEgZmx1aWQgZXhwZXJpZW5jZSB3YXMgYSBwbGVhc3VyZS5cIixcIkJ1aWx0IGEgY29tcGxldGVseSBjdXN0b20gU1BBIGV4cGVyaWVuY2UgcHJlbG9hZGluZyBhbGwgaW1hZ2VzIG9mIGVhY2ggc2VjdGlvbiBhbmQgbmV2ZXIgcmVmcmVzaGluZywgd2l0aCBsb2FkaW5nIGFuaW1hdGlvbnMgc2hvd2luZyByZWFsdGltZSBsb2FkaW5nIC5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5kZXNpZ25zYWtlc3R1ZGlvLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovc2FrZVwifX0sXCJkYWZmb2RpbFwiOntcImNvbG9yXCI6XCIjRUZFMDQ3XCIsXCJ0aXRsZVwiOlwiRGFmZm9kaWwgRGlnaXRhbFwiLFwidGFnbGluZVwiOlwiaGVscGluZyBicmFuZHMgdGVsbCB0aGVpciBzdG9yaWVzXCIsXCJkZXRhaWxcIjpbXCJJIHdhbnRlZCB0byBhaW0gZm9yIGEgY29tcGxldGUgU1BBIGV4cGVyaWVuY2UsIGZvY3VzaW5nIGRpcmVjdGx5IG9uIHByZWxvYWRpbmcgYWxsIGltYWdlcnkgYW5kIHVzaW5nIGN1c3RvbSBsb2FkaW5nIGFuaW1hdGlvbnMgdG8ga2VlcCBhIG5pY2UgZmxvd2luZyBleHBlcmllbmNlXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZGFmZm9kaWxkaWdpdGFsLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovZGFmZm9kaWxcIn19LFwiYXBcIjp7XCJjb2xvclwiOlwiI0E0OTI2NlwiLFwidGl0bGVcIjpcIkF1ZGVtYXJzIFBpZ3VldFwiLFwidGFnbGluZVwiOlwidWx0cmEtbHV4dXJ5IHN3aXNzIHdhdGNoZXNcIixcImRldGFpbFwiOltcIkkgY2FtZSBhYm9hcmQgYnJpZWZseSB0byBoZWxwIHdpdGggdGhlIGJhY2stZW5kLCBhbmQgd2FzIGdpdmVuIHRoZSBwbGVhc3VyZSBvZiBzZXR0aW5nIHRoZSBmb3VuZGF0aW9uIGFuZCBzdHJ1Y3R1cmUgZm9yIHYxIG9mIHRoZWlyIEFQSS5cIixcIkF0IHRoZSBlbmQgd2UgaGFkIHN1Y2Nlc3NmdWxseSBjZW50cmFsaXplZCBhbGwgd2F0Y2ggYW5kIHJldGFpbCBzdG9yZSBjb250ZW50IHRoYXQgZHJvdmUgdGhlIHNpdGUgYW5kIGFwcHMgdG8gdmVyc2lvbi1zZXBlcmF0ZWQgZW5kcG9pbnRzIHRoYXQgbWF0Y2ggdGhlIEpTT05BUEkgc3BlYy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5hdWRlbWFyc3BpZ3VldC5jb20vXCJ9fSxcInN0dWRpb1wiOntcImNvbG9yXCI6XCIjNDg2N2FhXCIsXCJ0aXRsZVwiOlwiRmFjZWJvb2sgU3R1ZGlvXCIsXCJ0YWdsaW5lXCI6XCJmYWNlYm9vayBhd2FyZHNcIixcImRldGFpbFwiOltcIlZlcnkgaGFwcHkgdG8gd29yayBvbiB0aGlzIG1ham9yIGNvbGxhYm9yYXRpb24gd2l0aCBGYWNlYm9vay4gT25lIG9mIHRoZSBtb3N0IHRob3JvdWdoIHByb2plY3RzIEkndmUgaGFkIGEgcGxlYXVyZSB0byB3b3JrIG9uLCBmcm9tIG11bHRpcGxlIGF1ZGl0cyBvZiBldmVyeSBjaGVjay1pbiB0byB1bml0IHRlc3RpbmcgZXZlcnkgcGllY2Ugb2YgZnVuY3Rpb25hbGl0eS5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5mYWNlYm9vay1zdHVkaW8uY29tL1wifX19fTsiLCJJbmRleCA9XG5cbiAgaTogLT5cblxuICAgIEBsb2FkVGh1bWJuYWlscyAtPlxuXG4gICAgICBfLm9uICdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbydcblxuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5hZGRDbGFzcyAnbG9hZGVkJ1xuXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkaW5nJ1xuICAgICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGVkJ1xuICAgICAgLCAxMDAwXG5cbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgXy5vbiAnLm1lbnUgPiAub3B0aW9uLm9wdGlvbl8xJ1xuICAgICAgICBfLm9uICcuc2VjdGlvbi5zZWN0aW9uX3dvcmsnXG4gICAgICAsIDExMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuXG4gICAgICAgIG5ldyBQYXJhbGxheCAkKCcuc2VjdGlvbi5zZWN0aW9uX3dvcmsnKVswXSwgbGltaXRYOiAyMCwgbGltaXRZOiA1MFxuXG4gICAgICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICAgICAgSW5kZXgubW9kYWwuaGFuZGxlcnMoKVxuICAgICAgICBJbmRleC5sb2FkSW1hZ2VzKClcblxuICAgICAgLCAxMjAwXG5cbiAgICAgICMjI1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIuc2VjdGlvbl93b3JrXCIsXG4gICAgICAgICAgZHVyYXRpb246IDI1MDBcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRCYWNrJ1xuICAgICAgLCAyNDAwXG4gICAgICAjIyNcbiAgbG9hZFRodW1ibmFpbHM6IChjb21wbGV0ZSkgLT5cblxuICAgIGltYWdlcyA9IFtdXG5cbiAgICBmb3IgZGlyIG9mIGNvbmZpZy53b3JrXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS90aHVtYm5haWxzL2xvZ28ucG5nXCJcbiAgICAgIGltYWdlcy5wdXNoIFwiaW1hZ2VzL3dvcmsvI3tkaXJ9L3RodW1ibmFpbHMvYmFja2dyb3VuZC5qcGdcIlxuXG4gICAgUHJlbG9hZCBpbWFnZXMsIChwcm9ncmVzcykgLT5cbiAgICAgIGRiYXIucGVyYyBwcm9ncmVzc1xuICAgICwgKGRvbmUpIC0+XG4gICAgICBkYmFyLmQoKVxuICAgICAgY29tcGxldGUoKVxuXG5cbiAgbG9hZEltYWdlczogKGNvbXBsZXRlKSAtPlxuXG4gICAgJC5lYWNoIGNvbmZpZy53b3JrLCAobmFtZSkgLT5cblxuICAgICAgbG9hZEltYWdlIFwiaW1hZ2VzL3dvcmsvI3tuYW1lfS9sb2dvLnBuZ1wiLCAgKHJhdGlvKSAtPlxuICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvYWRpbmcgPiAuZnVsbFwiKS5jc3MoJ3dpZHRoJywgXCIje3JhdGlvLzJ9JVwiKVxuICAgICAgLnRoZW4gKGltYWdlU291cmNlKSAtPlxuICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvZ29cIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tpbWFnZVNvdXJjZX0pXCIpXG4gICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLnRodW1ibmFpbF9sb2dvXCJcbiAgICAgICAgXy5vbiBcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2dvXCJcblxuICAgICAgICBsb2FkSW1hZ2UgXCJpbWFnZXMvd29yay8je25hbWV9L2JhY2tncm91bmQuanBnXCIsICAocmF0aW8pIC0+XG4gICAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2FkaW5nID4gLmZ1bGxcIikuY3NzKCd3aWR0aCcsIFwiI3socmF0aW8vMikgKyA1MH0lXCIpXG4gICAgICAgIC50aGVuIChpbWFnZVNvdXJjZSkgLT5cbiAgICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmJhY2tncm91bmRcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tpbWFnZVNvdXJjZX0pXCIpXG4gICAgICAgICAgXy5vZmYgXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAudGh1bWJuYWlsX2JhY2tncm91bmRcIlxuICAgICAgICAgIF8ub24gXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAuYmFja2dyb3VuZFwiXG4gICAgICAgICAgXy5vZmYgXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9hZGluZ1wiXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBJbmRleC5jeWNsZVxuICAgICQoJy5tZW51ID4gLm9wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5zZWN0aW9uLnNlY3Rpb25fd29yayA+IC53b3JrID4gLmpvYiA+IC5pbm5lcicpLmNsaWNrIEluZGV4LmpvYlxuXG4gIG9wdGlvbjogLT5cbiAgICBfLm9mZiAnLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub24gdGhpc1xuICAgIF8ub2ZmICcuc2VjdGlvbidcbiAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8jeyQodGhpcykuZGF0YSgnb3B0aW9uJyl9XCJcblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcblxuICBtb2RhbDpcblxuICAgIGk6IChqb2IpIC0+XG4gICAgICBfLm9uICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgZ2lnID0gY29uZmlnLndvcmtbam9iXVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuY3NzICdjb2xvcicsIGdpZy5jb2xvclxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sIGdpZy50aXRsZVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sIGdpZy50YWdsaW5lXG4gICAgICBmb3IgcCBpbiBnaWcuZGV0YWlsXG4gICAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV9kZXRhaWwnKS5hcHBlbmQgXCI8cD4je3B9PC9wPlwiXG5cbiAgICAgIGZvciB0eXBlLCBsaW5rIG9mIGdpZy5saW5rc1xuICAgICAgICBfLm9uIFwiLmJvZHkgPiAubGlua3MgPiAubGlua18je3R5cGV9XCJcbiAgICAgICAgJChcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtfI3t0eXBlfVwiKS5hdHRyICdocmVmJywgbGlua1xuXG4gICAgaGFuZGxlcnM6IC0+XG4gICAgICAkKCcuZmFkZSwgLm1vZGFsID4gLmlubmVyID4gLmNsb3NlJykuY2xpY2sgSW5kZXgubW9kYWwuZFxuXG4gICAgZDogLT5cbiAgICAgIF8ub2ZmICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgXy5vZmYgXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXCJcblxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuaHRtbCAnJ1xuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sICcnXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfZGV0YWlsJykuaHRtbCAnJ1xuXG4gIGpvYjogLT5cbiAgICBJbmRleC5tb2RhbC5pICQodGhpcykuZGF0YSAnam9iJ1xuXG5cbiIsIiMjIypcbiMgTG9hZHMgYW4gaW1hZ2Ugd2l0aCBwcm9ncmVzcyBjYWxsYmFjay5cbiNcbiMgVGhlIGBvbnByb2dyZXNzYCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBieSBYTUxIdHRwUmVxdWVzdCdzIG9ucHJvZ3Jlc3NcbiMgZXZlbnQsIGFuZCB3aWxsIHJlY2VpdmUgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgcmF0aW8gYXMgYW4gd2hvbGUgbnVtYmVyLlxuIyBIb3dldmVyLCBpZiBpdCdzIG5vdCBwb3NzaWJsZSB0byBjb21wdXRlIHRoZSBwcm9ncmVzcyByYXRpbywgYG9ucHJvZ3Jlc3NgXG4jIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZSBwYXNzaW5nIC0xIGFzIHByb2dyZXNzIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCB0byxcbiMgZm9yIGV4YW1wbGUsIGNoYW5nZSB0aGUgcHJvZ3Jlc3MgYW5pbWF0aW9uIHRvIGFuIHVuZGVmaW5lZCBhbmltYXRpb24uXG4jXG4jIEBwYXJhbSAge3N0cmluZ30gICBpbWFnZVVybCAgIFRoZSBpbWFnZSB0byBsb2FkXG4jIEBwYXJhbSAge0Z1bmN0aW9ufSBvbnByb2dyZXNzXG4jIEByZXR1cm4ge1Byb21pc2V9XG4jIyNcblxubG9hZEltYWdlID0gKGltYWdlVXJsLCBvbnByb2dyZXNzKSAtPlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgIG5vdGlmaWVkTm90Q29tcHV0YWJsZSA9IGZhbHNlXG4gICAgeGhyLm9wZW4gJ0dFVCcsIGltYWdlVXJsLCB0cnVlXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcblxuICAgIHhoci5vbnByb2dyZXNzID0gKGV2KSAtPlxuICAgICAgaWYgZXYubGVuZ3RoQ29tcHV0YWJsZVxuICAgICAgICBvbnByb2dyZXNzIHBhcnNlSW50KGV2LmxvYWRlZCAvIGV2LnRvdGFsICogMTAwKVxuICAgICAgZWxzZVxuICAgICAgICBpZiAhbm90aWZpZWROb3RDb21wdXRhYmxlXG4gICAgICAgICAgbm90aWZpZWROb3RDb21wdXRhYmxlID0gdHJ1ZVxuICAgICAgICAgIG9ucHJvZ3Jlc3MgLTFcbiAgICAgIHJldHVyblxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IC0+XG4gICAgICBpZiAheGhyLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eMi8pXG4gICAgICAgIHJlamVjdCB4aHJcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgIW5vdGlmaWVkTm90Q29tcHV0YWJsZVxuICAgICAgICAgIG9ucHJvZ3Jlc3MgMTAwXG4gICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICAgIG0gPSBoZWFkZXJzLm1hdGNoKC9eQ29udGVudC1UeXBlXFw6XFxzKiguKj8pJC9taSlcbiAgICAgICAgaWYgbSBhbmQgbVsxXVxuICAgICAgICAgIG9wdGlvbnMudHlwZSA9IG1bMV1cbiAgICAgICAgYmxvYiA9IG5ldyBCbG9iKFsgQHJlc3BvbnNlIF0sIG9wdGlvbnMpXG4gICAgICAgIHJlc29sdmUgd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgIHJldHVyblxuXG4gICAgeGhyLnNlbmQoKVxuICAgIHJldHVyblxuKVxuIiwiUHJlbG9hZCA9IChzcmNlcywgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIGltYWdlcyA9IFtdXG4gIGxvYWRlZCA9IDBcbiAgdG90YWwgPSBzcmNlcy5sZW5ndGhcblxuICBjb21wbGV0ZSB0cnVlIGlmIHRvdGFsIGlzIDBcblxuICBmb3Igc3JjLCBpIGluIHNyY2VzXG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gc3JjXG4gICAgaW1hZ2VzW2ldLm9ubG9hZCA9IC0+XG4gICAgICBsb2FkZWQrK1xuICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG4iXX0=
