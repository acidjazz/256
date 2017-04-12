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
    "copy1s": {
      "font-family": "Roboto",
      "font-size": "16px"
    },
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
      "detail": ["Challenging and fun project for Airbnb to promote spending the holidays away from home.", "This was a mobile-only site where you upload a photo of you and your family celebrating, choose a filter you like and then share it.", "Full stack project even involving operatiions, automated scaling, and load testing."],
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
  sections: ['work', 'code', 'resume'],
  section: 'work',
  i: function() {
    var hash;
    hash = window.location.hash.replace('#', '');
    if (this.sections.indexOf(hash) !== -1) {
      this.section = hash;
    }
    return this.loadThumbnails(function() {
      _.on('header > .inner > .logo');
      $('.menu > .option').removeClass('loading');
      $('.menu > .option').addClass('loaded');
      setTimeout(function() {
        $('.menu > .option').removeClass('loading');
        return $('.menu > .option').removeClass('loaded');
      }, 1000);
      setTimeout(function() {
        _.on(".menu > .option.option_" + Index.section);
        return _.on(".section.section_" + Index.section);
      }, 1100);
      return setTimeout(function() {
        new Parallax($('.section.section_work')[0], {
          limitX: 20,
          limitY: 50
        });
        Index.handlers();
        Index.modal.handlers();
        return setTimeout(function() {
          return Index.loadImages();
        }, 400);
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
    $('.menu > .option, .text_option').click(Index.option);
    return $('.section.section_work > .work > .job > .inner').click(Index.job);
  },
  option: function() {
    var option;
    option = $(this).data('option');
    _.off('.menu > .option');
    _.on(".option_" + option);
    _.off('.section');
    _.on(".section.section_" + option);
    return window.location.hash = option;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibG9hZGltYWdlLmNvZmZlZSIsInByZWxvYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FB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QixJQUEzQixDQUFSLEVBWEY7O0lBRGM7SUFlaEIsR0FBRyxDQUFDLElBQUosQ0FBQTtFQTlCVSxDQUFaO0FBRFU7O0FDZFosSUFBQTs7QUFBQSxPQUFBLEdBQVUsU0FBQyxLQUFELEVBQVEsUUFBUixFQUFrQixRQUFsQjtBQUVSLE1BQUE7RUFBQSxNQUFBLEdBQVM7RUFDVCxNQUFBLEdBQVM7RUFDVCxLQUFBLEdBQVEsS0FBSyxDQUFDO0VBRWQsSUFBaUIsS0FBQSxLQUFTLENBQTFCO0lBQUEsUUFBQSxDQUFTLElBQVQsRUFBQTs7QUFFQTtPQUFBLCtDQUFBOztJQUNFLE1BQU8sQ0FBQSxDQUFBLENBQVAsR0FBWSxJQUFJLEtBQUosQ0FBQTtJQUNaLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxHQUFWLEdBQWdCO2lCQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBVixHQUFtQixTQUFBO0FBQ2pCLFVBQUE7TUFBQSxNQUFBO01BQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBQSxHQUFPLEtBQVAsR0FBYSxHQUF4QixDQUFBLEdBQTZCO01BQ3BDLElBQUcsTUFBQSxLQUFVLEtBQWI7ZUFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7T0FBQSxNQUFBO2VBQTRDLFFBQUEsQ0FBUyxJQUFULEVBQTVDOztJQUhpQjtBQUhyQjs7QUFSUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibGFjazFcIjpcIiMyQjJEMzJcIixcImJsYWNrMlwiOlwiIzQxNDM0N1wiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJ3aGl0ZTJcIjpcIiNlZWVlZWVcIixcIndoaXRlM1wiOlwiI2FiYWJhZFwiLFwicHVycGxlMVwiOlwiIzMzMjYzMVwiLFwicHVycGxlMlwiOlwiIzREMzk0QlwiLFwicHVycGxlM1wiOlwiI0FCOUJBOVwiLFwidGVhbDFcIjpcIiM0Qzk2ODlcIixcInRlYWwyXCI6XCIjQjFDOUM1XCJ9LFwiZm9udFwiOntcImNvcHkxc1wiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMTZweFwifSxcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJjb3B5M1wiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMzJweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImNvcHk0XCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIyNHB4XCIsXCJmb250LXdlaWdodFwiOlwiNTAwXCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSBleHRyYWJvbGRcIixcImZvbnQtc2l6ZVwiOlwiNDhweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjM2cHhcIn19LFwibWV0YVwiOntcInVybFwiOlwiaHR0cDovLzI1Ni5pby9cIixcInRpdGxlXCI6MjU2LFwiZGVzY3JpcHRpb25cIjpcImJ1aWxkaW5nIGRpZ2l0YWwgdGhpbmdzXCIsXCJrZXl3b3Jkc1wiOlwid2ViIGRldmVsb3BtZW50LCBtb2JpbGUgZGV2ZWxvcG1lbnQsIG1vYmlsZSBhcHBzLCBmdWxsIHN0YWNrIGRldmVsb3BtZW50XCIsXCJwaG9uZVwiOjk0OTI5MDg5ODksXCJ0cmFja2luZ0lEXCI6XCJVQS03NTEyODM1NS0xXCIsXCJsb2dvXCI6XCJpbWFnZXMvbG9nb18xMDAweDEwMDAuanBnXCIsXCJzaGFyZVwiOlwiaW1hZ2VzLzEyMDB4NjMwLmpwZ1wiLFwicmVwb1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL2FjaWRqYXp6LzI1NlwiLFwiZW1haWxcIjpcImtldmluQDI1Ni5pb1wiLFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8yNTZsbGMvXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tLzI1NmxsY1wiLFwiaW5zdGFncmFtXCI6XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLzI1NmxsYy9cIn19LFwid29ya1wiOntcImZ1bGxzdW5cIjp7XCJjb2xvclwiOlwiI0YyOTkzNFwiLFwidGl0bGVcIjpcIkZ1bGwgU3VuXCIsXCJ0YWdsaW5lXCI6XCJwcmVtaXVtIHN1bmdyb3duIGdvb2RuZXNzXCIsXCJkZXRhaWxcIjpbXCJDb21waWxlZCBzb21lIHN0dW5uaW5nIGVmZmVjdHMgd2l0aCBDU1MgZ3JhZGllbnRzIG92ZXIgc29tZSB2ZXJ5IHdlbGwgZG9uZSBwaG90b2dyYXBoeS4gIEdvdCB2ZXJ5IGN1c3RvbSB3aXRoIGdvb2dsZSBtYXBzIGZyb20gZXZlcnl0aGluZyB0byBjb2xvcnMgdG8gb3ZlcmxheXMgb2YgZWFjaCBidXNpbmVzcyB1c2luZyBwbGFjZUlkcyB0byBwdWxsIGluIGNvbnRlbnRcIixcIlZlcnkgZXhjaXRpbmcgdG8gZ2V0IGludm9sdmVkIHdpdGggdGhpcyB1cCBhbmQgY29taW5nIGluZHVzdHJ5IGFuZCBsZWFybiBhYm91dCB0aGUgcHJvY2VzcyFcIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cHM6Ly93d3cuZnVsbC1zdW4uY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovZnVsbHN1blwifX0sXCJob2xpZGF5c1wiOntcImNvbG9yXCI6XCIjZmY1YTVmXCIsXCJ0aXRsZVwiOlwiSG9tZSBmb3IgdGhlIEhvbGlkYXlzXCIsXCJ0YWdsaW5lXCI6XCJzYW1lIGhvbGlkYXksIGRpZmZlcmVudCBob21lXCIsXCJkZXRhaWxcIjpbXCJDaGFsbGVuZ2luZyBhbmQgZnVuIHByb2plY3QgZm9yIEFpcmJuYiB0byBwcm9tb3RlIHNwZW5kaW5nIHRoZSBob2xpZGF5cyBhd2F5IGZyb20gaG9tZS5cIixcIlRoaXMgd2FzIGEgbW9iaWxlLW9ubHkgc2l0ZSB3aGVyZSB5b3UgdXBsb2FkIGEgcGhvdG8gb2YgeW91IGFuZCB5b3VyIGZhbWlseSBjZWxlYnJhdGluZywgY2hvb3NlIGEgZmlsdGVyIHlvdSBsaWtlIGFuZCB0aGVuIHNoYXJlIGl0LlwiLFwiRnVsbCBzdGFjayBwcm9qZWN0IGV2ZW4gaW52b2x2aW5nIG9wZXJhdGlpb25zLCBhdXRvbWF0ZWQgc2NhbGluZywgYW5kIGxvYWQgdGVzdGluZy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cHM6Ly9ob2xpZGF5cy53aXRoYWlyYm5iLmNvbS9cIn19LFwibG9va2luZ2dsYXNzXCI6e1wiY29sb3JcIjpcIiNDMjlFNkVcIixcInRpdGxlXCI6XCJMb29raW5nIEdsYXNzIFZSXCIsXCJ0YWdsaW5lXCI6XCJ3aW5kb3dzIHRvIHRoZSBwYXN0IGFyZSBvcGVuIGF0IGxhc3RcIixcImRldGFpbFwiOltcIkl0J3MgYmVlbiBhIGJsYXN0IGNvbnRyaWJ1dGluZyB0byB0aGlzIGF3ZXNvbWUgVlIgYXBwOyBhIDNEIHBob3RvIHZpZXdlciBvZiBhcm91bmQgMjAwIHBob3RvcyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCBhYm91dCBhIGNlbnR1cnkgb2xkLCBmaW5hbGx5IHRvIGJlIHNlZW4gYXMgdGhleSB3ZXJlIGludGVuZGVkLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwczovL2xvb2tpbmdnbGFzc3ZyLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2xvb2tpbmdnbGFzc3ZyL2xvb2tpbmdnbGFzc1wifX0sXCJkZWZpbmVyeVwiOntcImNvbG9yXCI6XCIjNTVDN0MwXCIsXCJ0aXRsZVwiOlwiREVGSU5FUllcIixcInRhZ2xpbmVcIjpcImEgZGlnaXRhbCBwcm9kdWN0IGRlc2lnbiBhbmQgaW5ub3ZhdGlvbiBjb21wYW55XCIsXCJkZXRhaWxcIjpbXCJGb3Igb3VyIGZpcnN0IHZlcnNpb24gb2YgPGEgaHJlZj1cXFwiaHR0cDovL2RlZmluZXJ5LmlvXFxcIiB0YXJnZXQ9XFxcIl9uZXdcXFwiPmRlZmluZXJ5LmlvPC9hPiB3ZSB3YW50ZWQgdG8gZ28gZm9yIHRoZSBtb3N0IGlubm92YXRpdmUgYW5kIHJlY2VudCAod2hpbGUgc3RpbGwgY29tcGF0aWJsZSkgdGVjaCBhdmFpbGFibGUuXCIsXCJXZSBwYWNrZWQgaW4gbG90cyBvZiBsaXZlbHkgZmVhdHVyZXM7IGNsaXBwaW5nLCBtYXNraW5nLCBhbmQgYmxlbmQgbW9kZXMgKG1peC1ibGVuZC1tb2RlIHRvIGJlIHByZWNpc2UpIGZvciBjb21wb3NpdGluZyBncmFwaGljIGVsZW1lbnRzLCB3aGljaCBldmVuIHdvcmtlZCB3ZWxsIHdpdGggdmlkZW8uICBXZSBhbHNvIGhpdCBvdXIgdGFyZ2V0IG9uIG1vYmlsZSBieSBkeW5hbWljYWxseSBhbHRlcm5hdGluZyBtZXRhIHRhZ3MgdXNlZCB0byBjdXN0b21pemUgdGhlIGJyb3dzZXIgaGVhZGVyIGNvbG9ycyBvbiBhbmRyb2lkIGRldmljZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9kZWZpbmVyeS5pby9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovZGVmaW5lcnlcIn19LFwiYXN0cm9cIjp7XCJjb2xvclwiOlwiI0M4NTA0QlwiLFwidGl0bGVcIjpcIkFzdHJvIFN0dWRpb3NcIixcInRhZ2xpbmVcIjpcInN1cGVyY2hhcmdlZCBicmFuZCBhbmQgcHJvZHVjdCBleHBlcmllbmNlcy5cIixcImRldGFpbFwiOltcIkl0IHdhcyBhIGdyZWF0IHBsZWFzdXJlIHdvcmtpbmcgd2l0aCBzdWNoIGFuIGlubm92YXRpdmUgcHJvZHVjdCBkZXNpZ24gYWdlbmN5LlwiLFwiVGhpcyB3YXMgYSBtYWpvciBjaGFsbGVuZ2Ugb2Ygc3RheWluZyB3aXRoIDEwMCUgb3JpZ2luYWwgYW5kIGN1c3RvbSBmdW5jdGlvbmFsaXR5IGFuZCBmZWF0dXJlcyB3aGlsZSBrZWVwaW5nIGFuIGVhc2lseSBtb2RpZmlhYmxlIGFuZCBsZWdpYmxlIHN0cnVjdHVyZSBvZiBzeW50YWN0aWMgc3VnYXIuXCIsXCJXaXRoIHR3byBzZXBlcmF0ZSBhbmQgZnVsbHkgY3VzdG9tIENNUyBzZWN0aW9ucywgYW5kIGEgY291cGxlIGVhc3RlciBlZ2dzLCBldmVyeSBzZWN0aW9uIG9mIHRoaXMgcHJvamVjdCBwYWNrcyBhIHB1bmNoLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmFzdHJvc3R1ZGlvcy5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2FzdHJvXCJ9fSxcImJyXCI6e1wiY29sb3JcIjpcIiNFMDQ4M0VcIixcInRpdGxlXCI6XCJCeXN0YW5kZXIgUmV2b2x1dGlvblwiLFwidGFnbGluZVwiOlwidGFrZSB0aGUgcG93ZXIgb3V0IG9mIGJ1bGx5aW5nXCIsXCJkZXRhaWxcIjpbXCJHb2luZyBvbiAzIHllYXJzLCAzLDAwMCsgY29tbWl0cywgMyBjb21wbGV0ZSByZW5vdmF0aW9ucywgYW5kIDEwKyBjYW1wYWlnbnMsIGl0J3MgYmVlbiBhIGdyZWF0IG9wcG9ydHVuaXR5IHRvIHRha2Ugb24gZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgZm9yIEJ5c3RhbmRlciBSZXZvbHV0aW9uLlwiLFwiV29ya2luZyB3aXRoIG11bHRpcGxlIGFnZW5jaWVzIHRocm91Z2ggdGhlIHllYXJzLCBlc3NlbnRpYWxseSB3aXRoIE1hY0tlbnppZSBCZXpvcycgY29yZSB0ZWFtIGluIFNlYXR0bGUsIHdlJ3ZlIHRhY2tsZWQgYWxsIHNvcnRzIG9mIHRhc2tzIGRlYWxpbmcgd2l0aCBwcmVjb25kaXRpb25lZCBhbmQgdXNlci1jb250cmlidXRlZCBjb250ZW50LCBjb25zdGFudGx5IGV2b2x2aW5nIHRvIGRpc3BsYXkgaXQgY29tZm9ydGFibHkgaW4gbXVsdGlwbGUgZWFzaWx5IG5hdmlnYXRhYmxlIGludGVyZmFjZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYnlzdGFuZGVycmV2b2x1dGlvbi5vcmcvXCJ9fSxcImdpbG1hblwiOntcImNvbG9yXCI6XCIjYzA4MDAwXCIsXCJ0aXRsZVwiOlwiR2lsbWFuIEJyZXdpbmcgQ29tcGFueVwiLFwidGFnbGluZVwiOlwiYm9ybiBhbmQgYnJld2VkIGluIGJlcmtlbGV5LCBjYWxpZm9ybmlhXCIsXCJkZXRhaWxcIjpbXCJMb3RzIG9mIGZ1biBvbiB0aGlzIHByb2plY3QgZ29pbmcgZnVydGhlciB0aGFuIGp1c3QgZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgYW5kIGdldHRpbmcgaW52b2x2ZWQgaW4gY3JlYXRpbmcgc29tZSBjaW5lbWFncmFwaHMgdG8gaGVscCBtYWtlIHRoZSBzaXRlIGNvbWUgYWxpdmUuXCIsXCJPbmNlIGxhdW5jaGVkIHRoaXMgcHJvamVjdCB3aWxsIHRha2UgYWR2YW50YWdlIG9mIHRoZSBuZXdlciB3ZWJraXQgcHVzaCBhbGxvd2luZyBzaWxlbnQgdmlkZW8gdG8gYXV0by1wbGF5LCBnaXZpbmcgdmlkZW8gb24gbW9iaWxlIHdpdGhvdXQgcmVzdWx0aW5nIGluIGJ1bGt5IHVuY29tcHJlc3NlZCBHSUZTXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9naWxtYW4uMjU2LnRlY2gvXCJ9fSxcInNha2VcIjp7XCJjb2xvclwiOlwiIzczQjhCMlwiLFwidGl0bGVcIjpcIkRlc2lnbnNha2UgU3R1ZGlvXCIsXCJ0YWdsaW5lXCI6XCJmb3IgdGhlIHNha2Ugb2YgZ29vZCBkZXNpZ25cIixcImRldGFpbFwiOltcIkJlaW5nIGdpdmVuIHN1Y2ggYSBjbGVhbiBhbmQgcHJldHR5IGRlc2lnbiBhbmQgYSBncmVhdCByaWNoIHBvcnRmb2xpbyBvZiB3b3JrLCBidWlsZGluZyBhIGZsdWlkIGV4cGVyaWVuY2Ugd2FzIGEgcGxlYXN1cmUuXCIsXCJCdWlsdCBhIGNvbXBsZXRlbHkgY3VzdG9tIFNQQSBleHBlcmllbmNlIHByZWxvYWRpbmcgYWxsIGltYWdlcyBvZiBlYWNoIHNlY3Rpb24gYW5kIG5ldmVyIHJlZnJlc2hpbmcsIHdpdGggbG9hZGluZyBhbmltYXRpb25zIHNob3dpbmcgcmVhbHRpbWUgbG9hZGluZyAuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZGVzaWduc2FrZXN0dWRpby5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L3Nha2VcIn19LFwiZGFmZm9kaWxcIjp7XCJjb2xvclwiOlwiI0VGRTA0N1wiLFwidGl0bGVcIjpcIkRhZmZvZGlsIERpZ2l0YWxcIixcInRhZ2xpbmVcIjpcImhlbHBpbmcgYnJhbmRzIHRlbGwgdGhlaXIgc3Rvcmllc1wiLFwiZGV0YWlsXCI6W1wiSSB3YW50ZWQgdG8gYWltIGZvciBhIGNvbXBsZXRlIFNQQSBleHBlcmllbmNlLCBmb2N1c2luZyBkaXJlY3RseSBvbiBwcmVsb2FkaW5nIGFsbCBpbWFnZXJ5IGFuZCB1c2luZyBjdXN0b20gbG9hZGluZyBhbmltYXRpb25zIHRvIGtlZXAgYSBuaWNlIGZsb3dpbmcgZXhwZXJpZW5jZVwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmRhZmZvZGlsZGlnaXRhbC5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2RhZmZvZGlsXCJ9fSxcImFwXCI6e1wiY29sb3JcIjpcIiNBNDkyNjZcIixcInRpdGxlXCI6XCJBdWRlbWFycyBQaWd1ZXRcIixcInRhZ2xpbmVcIjpcInVsdHJhLWx1eHVyeSBzd2lzcyB3YXRjaGVzXCIsXCJkZXRhaWxcIjpbXCJJIGNhbWUgYWJvYXJkIGJyaWVmbHkgdG8gaGVscCB3aXRoIHRoZSBiYWNrLWVuZCwgYW5kIHdhcyBnaXZlbiB0aGUgcGxlYXN1cmUgb2Ygc2V0dGluZyB0aGUgZm91bmRhdGlvbiBhbmQgc3RydWN0dXJlIGZvciB2MSBvZiB0aGVpciBBUEkuXCIsXCJBdCB0aGUgZW5kIHdlIGhhZCBzdWNjZXNzZnVsbHkgY2VudHJhbGl6ZWQgYWxsIHdhdGNoIGFuZCByZXRhaWwgc3RvcmUgY29udGVudCB0aGF0IGRyb3ZlIHRoZSBzaXRlIGFuZCBhcHBzIHRvIHZlcnNpb24tc2VwZXJhdGVkIGVuZHBvaW50cyB0aGF0IG1hdGNoIHRoZSBKU09OQVBJIHNwZWMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYXVkZW1hcnNwaWd1ZXQuY29tL1wifX0sXCJzdHVkaW9cIjp7XCJjb2xvclwiOlwiIzQ4NjdhYVwiLFwidGl0bGVcIjpcIkZhY2Vib29rIFN0dWRpb1wiLFwidGFnbGluZVwiOlwiZmFjZWJvb2sgYXdhcmRzXCIsXCJkZXRhaWxcIjpbXCJWZXJ5IGhhcHB5IHRvIHdvcmsgb24gdGhpcyBtYWpvciBjb2xsYWJvcmF0aW9uIHdpdGggRmFjZWJvb2suIE9uZSBvZiB0aGUgbW9zdCB0aG9yb3VnaCBwcm9qZWN0cyBJJ3ZlIGhhZCBhIHBsZWF1cmUgdG8gd29yayBvbiwgZnJvbSBtdWx0aXBsZSBhdWRpdHMgb2YgZXZlcnkgY2hlY2staW4gdG8gdW5pdCB0ZXN0aW5nIGV2ZXJ5IHBpZWNlIG9mIGZ1bmN0aW9uYWxpdHkuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2stc3R1ZGlvLmNvbS9cIn19fX07IiwiSW5kZXggPVxuICBzZWN0aW9uczogWyd3b3JrJywnY29kZScsJ3Jlc3VtZSddXG4gIHNlY3Rpb246ICd3b3JrJ1xuXG4gIGk6IC0+XG5cbiAgICBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKVxuICAgIEBzZWN0aW9uID0gaGFzaCBpZiBAc2VjdGlvbnMuaW5kZXhPZihoYXNoKSBpc250IC0xXG5cbiAgICBAbG9hZFRodW1ibmFpbHMgLT5cblxuICAgICAgXy5vbiAnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nXG5cbiAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkaW5nJ1xuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykuYWRkQ2xhc3MgJ2xvYWRlZCdcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRlZCdcbiAgICAgICwgMTAwMFxuXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIF8ub24gXCIubWVudSA+IC5vcHRpb24ub3B0aW9uXyN7SW5kZXguc2VjdGlvbn1cIlxuICAgICAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8je0luZGV4LnNlY3Rpb259XCJcbiAgICAgICwgMTEwMFxuXG4gICAgICBzZXRUaW1lb3V0IC0+XG5cbiAgICAgICAgbmV3IFBhcmFsbGF4ICQoJy5zZWN0aW9uLnNlY3Rpb25fd29yaycpWzBdLCBsaW1pdFg6IDIwLCBsaW1pdFk6IDUwXG5cbiAgICAgICAgSW5kZXguaGFuZGxlcnMoKVxuICAgICAgICBJbmRleC5tb2RhbC5oYW5kbGVycygpXG4gICAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgICBJbmRleC5sb2FkSW1hZ2VzKClcbiAgICAgICAgLCA0MDBcblxuICAgICAgLCAxMjAwXG5cbiAgICAgICMjI1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG8gXCIuc2VjdGlvbl93b3JrXCIsXG4gICAgICAgICAgZHVyYXRpb246IDI1MDBcbiAgICAgICAgICBlYXNpbmc6ICdlYXNlSW5PdXRCYWNrJ1xuICAgICAgLCAyNDAwXG4gICAgICAjIyNcbiAgbG9hZFRodW1ibmFpbHM6IChjb21wbGV0ZSkgLT5cblxuICAgIGltYWdlcyA9IFtdXG5cbiAgICBmb3IgZGlyIG9mIGNvbmZpZy53b3JrXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS90aHVtYm5haWxzL2xvZ28ucG5nXCJcbiAgICAgIGltYWdlcy5wdXNoIFwiaW1hZ2VzL3dvcmsvI3tkaXJ9L3RodW1ibmFpbHMvYmFja2dyb3VuZC5qcGdcIlxuXG4gICAgUHJlbG9hZCBpbWFnZXMsIChwcm9ncmVzcykgLT5cbiAgICAgIGRiYXIucGVyYyBwcm9ncmVzc1xuICAgICwgKGRvbmUpIC0+XG4gICAgICBkYmFyLmQoKVxuICAgICAgY29tcGxldGUoKVxuXG5cbiAgbG9hZEltYWdlczogKGNvbXBsZXRlKSAtPlxuXG4gICAgJC5lYWNoIGNvbmZpZy53b3JrLCAobmFtZSkgLT5cblxuICAgICAgbG9hZEltYWdlIFwiaW1hZ2VzL3dvcmsvI3tuYW1lfS9sb2dvLnBuZ1wiLCAgKHJhdGlvKSAtPlxuICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvYWRpbmcgPiAuZnVsbFwiKS5jc3MoJ3dpZHRoJywgXCIje3JhdGlvLzJ9JVwiKVxuICAgICAgLnRoZW4gKGltYWdlU291cmNlKSAtPlxuICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvZ29cIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tpbWFnZVNvdXJjZX0pXCIpXG4gICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLnRodW1ibmFpbF9sb2dvXCJcbiAgICAgICAgXy5vbiBcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2dvXCJcblxuICAgICAgICBsb2FkSW1hZ2UgXCJpbWFnZXMvd29yay8je25hbWV9L2JhY2tncm91bmQuanBnXCIsICAocmF0aW8pIC0+XG4gICAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2FkaW5nID4gLmZ1bGxcIikuY3NzKCd3aWR0aCcsIFwiI3socmF0aW8vMikgKyA1MH0lXCIpXG4gICAgICAgIC50aGVuIChpbWFnZVNvdXJjZSkgLT5cbiAgICAgICAgICAkKFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmJhY2tncm91bmRcIikuY3NzKCdiYWNrZ3JvdW5kLWltYWdlJywgXCJ1cmwoI3tpbWFnZVNvdXJjZX0pXCIpXG4gICAgICAgICAgXy5vZmYgXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAudGh1bWJuYWlsX2JhY2tncm91bmRcIlxuICAgICAgICAgIF8ub24gXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAuYmFja2dyb3VuZFwiXG4gICAgICAgICAgXy5vZmYgXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9hZGluZ1wiXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBJbmRleC5jeWNsZVxuICAgICQoJy5tZW51ID4gLm9wdGlvbiwgLnRleHRfb3B0aW9uJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLnNlY3Rpb24uc2VjdGlvbl93b3JrID4gLndvcmsgPiAuam9iID4gLmlubmVyJykuY2xpY2sgSW5kZXguam9iXG5cbiAgb3B0aW9uOiAtPlxuICAgIG9wdGlvbiA9ICQodGhpcykuZGF0YSgnb3B0aW9uJylcbiAgICBfLm9mZiAnLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub24gXCIub3B0aW9uXyN7b3B0aW9ufVwiXG4gICAgXy5vZmYgJy5zZWN0aW9uJ1xuICAgIF8ub24gXCIuc2VjdGlvbi5zZWN0aW9uXyN7b3B0aW9ufVwiXG4gICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBvcHRpb25cblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcblxuICBtb2RhbDpcblxuICAgIGk6IChqb2IpIC0+XG4gICAgICBfLm9uICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgZ2lnID0gY29uZmlnLndvcmtbam9iXVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuY3NzICdjb2xvcicsIGdpZy5jb2xvclxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sIGdpZy50aXRsZVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sIGdpZy50YWdsaW5lXG4gICAgICBmb3IgcCBpbiBnaWcuZGV0YWlsXG4gICAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV9kZXRhaWwnKS5hcHBlbmQgXCI8cD4je3B9PC9wPlwiXG5cbiAgICAgIGZvciB0eXBlLCBsaW5rIG9mIGdpZy5saW5rc1xuICAgICAgICBfLm9uIFwiLmJvZHkgPiAubGlua3MgPiAubGlua18je3R5cGV9XCJcbiAgICAgICAgJChcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtfI3t0eXBlfVwiKS5hdHRyICdocmVmJywgbGlua1xuXG4gICAgaGFuZGxlcnM6IC0+XG4gICAgICAkKCcuZmFkZSwgLm1vZGFsID4gLmlubmVyID4gLmNsb3NlJykuY2xpY2sgSW5kZXgubW9kYWwuZFxuXG4gICAgZDogLT5cbiAgICAgIF8ub2ZmICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgXy5vZmYgXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXCJcblxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuaHRtbCAnJ1xuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sICcnXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfZGV0YWlsJykuaHRtbCAnJ1xuXG4gIGpvYjogLT5cbiAgICBJbmRleC5tb2RhbC5pICQodGhpcykuZGF0YSAnam9iJ1xuXG5cbiIsIiMjIypcbiMgTG9hZHMgYW4gaW1hZ2Ugd2l0aCBwcm9ncmVzcyBjYWxsYmFjay5cbiNcbiMgVGhlIGBvbnByb2dyZXNzYCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBieSBYTUxIdHRwUmVxdWVzdCdzIG9ucHJvZ3Jlc3NcbiMgZXZlbnQsIGFuZCB3aWxsIHJlY2VpdmUgdGhlIGxvYWRpbmcgcHJvZ3Jlc3MgcmF0aW8gYXMgYW4gd2hvbGUgbnVtYmVyLlxuIyBIb3dldmVyLCBpZiBpdCdzIG5vdCBwb3NzaWJsZSB0byBjb21wdXRlIHRoZSBwcm9ncmVzcyByYXRpbywgYG9ucHJvZ3Jlc3NgXG4jIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZSBwYXNzaW5nIC0xIGFzIHByb2dyZXNzIHZhbHVlLiBUaGlzIGlzIHVzZWZ1bCB0byxcbiMgZm9yIGV4YW1wbGUsIGNoYW5nZSB0aGUgcHJvZ3Jlc3MgYW5pbWF0aW9uIHRvIGFuIHVuZGVmaW5lZCBhbmltYXRpb24uXG4jXG4jIEBwYXJhbSAge3N0cmluZ30gICBpbWFnZVVybCAgIFRoZSBpbWFnZSB0byBsb2FkXG4jIEBwYXJhbSAge0Z1bmN0aW9ufSBvbnByb2dyZXNzXG4jIEByZXR1cm4ge1Byb21pc2V9XG4jIyNcblxubG9hZEltYWdlID0gKGltYWdlVXJsLCBvbnByb2dyZXNzKSAtPlxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSAtPlxuICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdFxuICAgIG5vdGlmaWVkTm90Q29tcHV0YWJsZSA9IGZhbHNlXG4gICAgeGhyLm9wZW4gJ0dFVCcsIGltYWdlVXJsLCB0cnVlXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdhcnJheWJ1ZmZlcidcblxuICAgIHhoci5vbnByb2dyZXNzID0gKGV2KSAtPlxuICAgICAgaWYgZXYubGVuZ3RoQ29tcHV0YWJsZVxuICAgICAgICBvbnByb2dyZXNzIHBhcnNlSW50KGV2LmxvYWRlZCAvIGV2LnRvdGFsICogMTAwKVxuICAgICAgZWxzZVxuICAgICAgICBpZiAhbm90aWZpZWROb3RDb21wdXRhYmxlXG4gICAgICAgICAgbm90aWZpZWROb3RDb21wdXRhYmxlID0gdHJ1ZVxuICAgICAgICAgIG9ucHJvZ3Jlc3MgLTFcbiAgICAgIHJldHVyblxuXG4gICAgeGhyLm9ubG9hZGVuZCA9IC0+XG4gICAgICBpZiAheGhyLnN0YXR1cy50b1N0cmluZygpLm1hdGNoKC9eMi8pXG4gICAgICAgIHJlamVjdCB4aHJcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgIW5vdGlmaWVkTm90Q29tcHV0YWJsZVxuICAgICAgICAgIG9ucHJvZ3Jlc3MgMTAwXG4gICAgICAgIG9wdGlvbnMgPSB7fVxuICAgICAgICBoZWFkZXJzID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG4gICAgICAgIG0gPSBoZWFkZXJzLm1hdGNoKC9eQ29udGVudC1UeXBlXFw6XFxzKiguKj8pJC9taSlcbiAgICAgICAgaWYgbSBhbmQgbVsxXVxuICAgICAgICAgIG9wdGlvbnMudHlwZSA9IG1bMV1cbiAgICAgICAgYmxvYiA9IG5ldyBCbG9iKFsgQHJlc3BvbnNlIF0sIG9wdGlvbnMpXG4gICAgICAgIHJlc29sdmUgd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYilcbiAgICAgIHJldHVyblxuXG4gICAgeGhyLnNlbmQoKVxuICAgIHJldHVyblxuKVxuIiwiUHJlbG9hZCA9IChzcmNlcywgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIGltYWdlcyA9IFtdXG4gIGxvYWRlZCA9IDBcbiAgdG90YWwgPSBzcmNlcy5sZW5ndGhcblxuICBjb21wbGV0ZSB0cnVlIGlmIHRvdGFsIGlzIDBcblxuICBmb3Igc3JjLCBpIGluIHNyY2VzXG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gc3JjXG4gICAgaW1hZ2VzW2ldLm9ubG9hZCA9IC0+XG4gICAgICBsb2FkZWQrK1xuICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG4iXX0=
