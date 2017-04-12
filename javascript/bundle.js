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
    "url": "https://256.io/",
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
    },
    "analytics_id": "UA-97233816-1"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwibG9hZGltYWdlLmNvZmZlZSIsInByZWxvYWQuY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FB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QUMsR0FBRyxDQUFDLGVBQVgsQ0FBMkIsSUFBM0IsQ0FBUixFQVhGOztJQURjO0lBZWhCLEdBQUcsQ0FBQyxJQUFKLENBQUE7RUE5QlUsQ0FBWjtBQURVOztBQ2RaLElBQUE7O0FBQUEsT0FBQSxHQUFVLFNBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFFUixNQUFBO0VBQUEsTUFBQSxHQUFTO0VBQ1QsTUFBQSxHQUFTO0VBQ1QsS0FBQSxHQUFRLEtBQUssQ0FBQztFQUVkLElBQWlCLEtBQUEsS0FBUyxDQUExQjtJQUFBLFFBQUEsQ0FBUyxJQUFULEVBQUE7O0FBRUE7T0FBQSwrQ0FBQTs7SUFDRSxNQUFPLENBQUEsQ0FBQSxDQUFQLEdBQVksSUFBSSxLQUFKLENBQUE7SUFDWixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsR0FBVixHQUFnQjtpQkFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVYsR0FBbUIsU0FBQTtBQUNqQixVQUFBO01BQUEsTUFBQTtNQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBTyxLQUFQLEdBQWEsR0FBeEIsQ0FBQSxHQUE2QjtNQUNwQyxJQUFHLE1BQUEsS0FBVSxLQUFiO2VBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO09BQUEsTUFBQTtlQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7SUFIaUI7QUFIckI7O0FBUlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMkIyRDMyXCIsXCJibGFjazJcIjpcIiM0MTQzNDdcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwid2hpdGUyXCI6XCIjZWVlZWVlXCIsXCJ3aGl0ZTNcIjpcIiNhYmFiYWRcIixcInB1cnBsZTFcIjpcIiMzMzI2MzFcIixcInB1cnBsZTJcIjpcIiM0RDM5NEJcIixcInB1cnBsZTNcIjpcIiNBQjlCQTlcIixcInRlYWwxXCI6XCIjNEM5Njg5XCIsXCJ0ZWFsMlwiOlwiI0IxQzlDNVwifSxcImZvbnRcIjp7XCJjb3B5MXNcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5MVwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImNvcHkyXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIixcImZvbnQtd2VpZ2h0XCI6XCI1MDBcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMjRweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHBzOi8vMjU2LmlvL1wiLFwidGl0bGVcIjoyNTYsXCJkZXNjcmlwdGlvblwiOlwiYnVpbGRpbmcgZGlnaXRhbCB0aGluZ3NcIixcImtleXdvcmRzXCI6XCJ3ZWIgZGV2ZWxvcG1lbnQsIG1vYmlsZSBkZXZlbG9wbWVudCwgbW9iaWxlIGFwcHMsIGZ1bGwgc3RhY2sgZGV2ZWxvcG1lbnRcIixcInBob25lXCI6OTQ5MjkwODk4OSxcInRyYWNraW5nSURcIjpcIlVBLTc1MTI4MzU1LTFcIixcImxvZ29cIjpcImltYWdlcy9sb2dvXzEwMDB4MTAwMC5qcGdcIixcInNoYXJlXCI6XCJpbWFnZXMvMTIwMHg2MzAuanBnXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovMjU2XCIsXCJlbWFpbFwiOlwia2V2aW5AMjU2LmlvXCIsXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzI1NmxsYy9cIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vMjU2bGxjXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vMjU2bGxjL1wifSxcImFuYWx5dGljc19pZFwiOlwiVUEtOTcyMzM4MTYtMVwifSxcIndvcmtcIjp7XCJmdWxsc3VuXCI6e1wiY29sb3JcIjpcIiNGMjk5MzRcIixcInRpdGxlXCI6XCJGdWxsIFN1blwiLFwidGFnbGluZVwiOlwicHJlbWl1bSBzdW5ncm93biBnb29kbmVzc1wiLFwiZGV0YWlsXCI6W1wiQ29tcGlsZWQgc29tZSBzdHVubmluZyBlZmZlY3RzIHdpdGggQ1NTIGdyYWRpZW50cyBvdmVyIHNvbWUgdmVyeSB3ZWxsIGRvbmUgcGhvdG9ncmFwaHkuICBHb3QgdmVyeSBjdXN0b20gd2l0aCBnb29nbGUgbWFwcyBmcm9tIGV2ZXJ5dGhpbmcgdG8gY29sb3JzIHRvIG92ZXJsYXlzIG9mIGVhY2ggYnVzaW5lc3MgdXNpbmcgcGxhY2VJZHMgdG8gcHVsbCBpbiBjb250ZW50XCIsXCJWZXJ5IGV4Y2l0aW5nIHRvIGdldCBpbnZvbHZlZCB3aXRoIHRoaXMgdXAgYW5kIGNvbWluZyBpbmR1c3RyeSBhbmQgbGVhcm4gYWJvdXQgdGhlIHByb2Nlc3MhXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vd3d3LmZ1bGwtc3VuLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2FjaWRqYXp6L2Z1bGxzdW5cIn19LFwiaG9saWRheXNcIjp7XCJjb2xvclwiOlwiI2ZmNWE1ZlwiLFwidGl0bGVcIjpcIkhvbWUgZm9yIHRoZSBIb2xpZGF5c1wiLFwidGFnbGluZVwiOlwic2FtZSBob2xpZGF5LCBkaWZmZXJlbnQgaG9tZVwiLFwiZGV0YWlsXCI6W1wiQ2hhbGxlbmdpbmcgYW5kIGZ1biBwcm9qZWN0IGZvciBBaXJibmIgdG8gcHJvbW90ZSBzcGVuZGluZyB0aGUgaG9saWRheXMgYXdheSBmcm9tIGhvbWUuXCIsXCJUaGlzIHdhcyBhIG1vYmlsZS1vbmx5IHNpdGUgd2hlcmUgeW91IHVwbG9hZCBhIHBob3RvIG9mIHlvdSBhbmQgeW91ciBmYW1pbHkgY2VsZWJyYXRpbmcsIGNob29zZSBhIGZpbHRlciB5b3UgbGlrZSBhbmQgdGhlbiBzaGFyZSBpdC5cIixcIkZ1bGwgc3RhY2sgcHJvamVjdCBldmVuIGludm9sdmluZyBvcGVyYXRpaW9ucywgYXV0b21hdGVkIHNjYWxpbmcsIGFuZCBsb2FkIHRlc3RpbmcuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHBzOi8vaG9saWRheXMud2l0aGFpcmJuYi5jb20vXCJ9fSxcImxvb2tpbmdnbGFzc1wiOntcImNvbG9yXCI6XCIjQzI5RTZFXCIsXCJ0aXRsZVwiOlwiTG9va2luZyBHbGFzcyBWUlwiLFwidGFnbGluZVwiOlwid2luZG93cyB0byB0aGUgcGFzdCBhcmUgb3BlbiBhdCBsYXN0XCIsXCJkZXRhaWxcIjpbXCJJdCdzIGJlZW4gYSBibGFzdCBjb250cmlidXRpbmcgdG8gdGhpcyBhd2Vzb21lIFZSIGFwcDsgYSAzRCBwaG90byB2aWV3ZXIgb2YgYXJvdW5kIDIwMCBwaG90b3MgZnJvbSBhbGwgb3ZlciB0aGUgd29ybGQgYWJvdXQgYSBjZW50dXJ5IG9sZCwgZmluYWxseSB0byBiZSBzZWVuIGFzIHRoZXkgd2VyZSBpbnRlbmRlZC5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cHM6Ly9sb29raW5nZ2xhc3N2ci5jb20vXCIsXCJnaXRodWJcIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9sb29raW5nZ2xhc3N2ci9sb29raW5nZ2xhc3NcIn19LFwiZGVmaW5lcnlcIjp7XCJjb2xvclwiOlwiIzU1QzdDMFwiLFwidGl0bGVcIjpcIkRFRklORVJZXCIsXCJ0YWdsaW5lXCI6XCJhIGRpZ2l0YWwgcHJvZHVjdCBkZXNpZ24gYW5kIGlubm92YXRpb24gY29tcGFueVwiLFwiZGV0YWlsXCI6W1wiRm9yIG91ciBmaXJzdCB2ZXJzaW9uIG9mIDxhIGhyZWY9XFxcImh0dHA6Ly9kZWZpbmVyeS5pb1xcXCIgdGFyZ2V0PVxcXCJfbmV3XFxcIj5kZWZpbmVyeS5pbzwvYT4gd2Ugd2FudGVkIHRvIGdvIGZvciB0aGUgbW9zdCBpbm5vdmF0aXZlIGFuZCByZWNlbnQgKHdoaWxlIHN0aWxsIGNvbXBhdGlibGUpIHRlY2ggYXZhaWxhYmxlLlwiLFwiV2UgcGFja2VkIGluIGxvdHMgb2YgbGl2ZWx5IGZlYXR1cmVzOyBjbGlwcGluZywgbWFza2luZywgYW5kIGJsZW5kIG1vZGVzIChtaXgtYmxlbmQtbW9kZSB0byBiZSBwcmVjaXNlKSBmb3IgY29tcG9zaXRpbmcgZ3JhcGhpYyBlbGVtZW50cywgd2hpY2ggZXZlbiB3b3JrZWQgd2VsbCB3aXRoIHZpZGVvLiAgV2UgYWxzbyBoaXQgb3VyIHRhcmdldCBvbiBtb2JpbGUgYnkgZHluYW1pY2FsbHkgYWx0ZXJuYXRpbmcgbWV0YSB0YWdzIHVzZWQgdG8gY3VzdG9taXplIHRoZSBicm93c2VyIGhlYWRlciBjb2xvcnMgb24gYW5kcm9pZCBkZXZpY2VzLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vZGVmaW5lcnkuaW8vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2RlZmluZXJ5XCJ9fSxcImFzdHJvXCI6e1wiY29sb3JcIjpcIiNDODUwNEJcIixcInRpdGxlXCI6XCJBc3RybyBTdHVkaW9zXCIsXCJ0YWdsaW5lXCI6XCJzdXBlcmNoYXJnZWQgYnJhbmQgYW5kIHByb2R1Y3QgZXhwZXJpZW5jZXMuXCIsXCJkZXRhaWxcIjpbXCJJdCB3YXMgYSBncmVhdCBwbGVhc3VyZSB3b3JraW5nIHdpdGggc3VjaCBhbiBpbm5vdmF0aXZlIHByb2R1Y3QgZGVzaWduIGFnZW5jeS5cIixcIlRoaXMgd2FzIGEgbWFqb3IgY2hhbGxlbmdlIG9mIHN0YXlpbmcgd2l0aCAxMDAlIG9yaWdpbmFsIGFuZCBjdXN0b20gZnVuY3Rpb25hbGl0eSBhbmQgZmVhdHVyZXMgd2hpbGUga2VlcGluZyBhbiBlYXNpbHkgbW9kaWZpYWJsZSBhbmQgbGVnaWJsZSBzdHJ1Y3R1cmUgb2Ygc3ludGFjdGljIHN1Z2FyLlwiLFwiV2l0aCB0d28gc2VwZXJhdGUgYW5kIGZ1bGx5IGN1c3RvbSBDTVMgc2VjdGlvbnMsIGFuZCBhIGNvdXBsZSBlYXN0ZXIgZWdncywgZXZlcnkgc2VjdGlvbiBvZiB0aGlzIHByb2plY3QgcGFja3MgYSBwdW5jaC5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5hc3Ryb3N0dWRpb3MuY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9hc3Ryb1wifX0sXCJiclwiOntcImNvbG9yXCI6XCIjRTA0ODNFXCIsXCJ0aXRsZVwiOlwiQnlzdGFuZGVyIFJldm9sdXRpb25cIixcInRhZ2xpbmVcIjpcInRha2UgdGhlIHBvd2VyIG91dCBvZiBidWxseWluZ1wiLFwiZGV0YWlsXCI6W1wiR29pbmcgb24gMyB5ZWFycywgMywwMDArIGNvbW1pdHMsIDMgY29tcGxldGUgcmVub3ZhdGlvbnMsIGFuZCAxMCsgY2FtcGFpZ25zLCBpdCdzIGJlZW4gYSBncmVhdCBvcHBvcnR1bml0eSB0byB0YWtlIG9uIGRldmVsb3BtZW50IGFuZCBvcGVyYXRpb25zIGZvciBCeXN0YW5kZXIgUmV2b2x1dGlvbi5cIixcIldvcmtpbmcgd2l0aCBtdWx0aXBsZSBhZ2VuY2llcyB0aHJvdWdoIHRoZSB5ZWFycywgZXNzZW50aWFsbHkgd2l0aCBNYWNLZW56aWUgQmV6b3MnIGNvcmUgdGVhbSBpbiBTZWF0dGxlLCB3ZSd2ZSB0YWNrbGVkIGFsbCBzb3J0cyBvZiB0YXNrcyBkZWFsaW5nIHdpdGggcHJlY29uZGl0aW9uZWQgYW5kIHVzZXItY29udHJpYnV0ZWQgY29udGVudCwgY29uc3RhbnRseSBldm9sdmluZyB0byBkaXNwbGF5IGl0IGNvbWZvcnRhYmx5IGluIG11bHRpcGxlIGVhc2lseSBuYXZpZ2F0YWJsZSBpbnRlcmZhY2VzLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmJ5c3RhbmRlcnJldm9sdXRpb24ub3JnL1wifX0sXCJnaWxtYW5cIjp7XCJjb2xvclwiOlwiI2MwODAwMFwiLFwidGl0bGVcIjpcIkdpbG1hbiBCcmV3aW5nIENvbXBhbnlcIixcInRhZ2xpbmVcIjpcImJvcm4gYW5kIGJyZXdlZCBpbiBiZXJrZWxleSwgY2FsaWZvcm5pYVwiLFwiZGV0YWlsXCI6W1wiTG90cyBvZiBmdW4gb24gdGhpcyBwcm9qZWN0IGdvaW5nIGZ1cnRoZXIgdGhhbiBqdXN0IGRldmVsb3BtZW50IGFuZCBvcGVyYXRpb25zIGFuZCBnZXR0aW5nIGludm9sdmVkIGluIGNyZWF0aW5nIHNvbWUgY2luZW1hZ3JhcGhzIHRvIGhlbHAgbWFrZSB0aGUgc2l0ZSBjb21lIGFsaXZlLlwiLFwiT25jZSBsYXVuY2hlZCB0aGlzIHByb2plY3Qgd2lsbCB0YWtlIGFkdmFudGFnZSBvZiB0aGUgbmV3ZXIgd2Via2l0IHB1c2ggYWxsb3dpbmcgc2lsZW50IHZpZGVvIHRvIGF1dG8tcGxheSwgZ2l2aW5nIHZpZGVvIG9uIG1vYmlsZSB3aXRob3V0IHJlc3VsdGluZyBpbiBidWxreSB1bmNvbXByZXNzZWQgR0lGU1wiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vZ2lsbWFuLjI1Ni50ZWNoL1wifX0sXCJzYWtlXCI6e1wiY29sb3JcIjpcIiM3M0I4QjJcIixcInRpdGxlXCI6XCJEZXNpZ25zYWtlIFN0dWRpb1wiLFwidGFnbGluZVwiOlwiZm9yIHRoZSBzYWtlIG9mIGdvb2QgZGVzaWduXCIsXCJkZXRhaWxcIjpbXCJCZWluZyBnaXZlbiBzdWNoIGEgY2xlYW4gYW5kIHByZXR0eSBkZXNpZ24gYW5kIGEgZ3JlYXQgcmljaCBwb3J0Zm9saW8gb2Ygd29yaywgYnVpbGRpbmcgYSBmbHVpZCBleHBlcmllbmNlIHdhcyBhIHBsZWFzdXJlLlwiLFwiQnVpbHQgYSBjb21wbGV0ZWx5IGN1c3RvbSBTUEEgZXhwZXJpZW5jZSBwcmVsb2FkaW5nIGFsbCBpbWFnZXMgb2YgZWFjaCBzZWN0aW9uIGFuZCBuZXZlciByZWZyZXNoaW5nLCB3aXRoIGxvYWRpbmcgYW5pbWF0aW9ucyBzaG93aW5nIHJlYWx0aW1lIGxvYWRpbmcgLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmRlc2lnbnNha2VzdHVkaW8uY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9zYWtlXCJ9fSxcImRhZmZvZGlsXCI6e1wiY29sb3JcIjpcIiNFRkUwNDdcIixcInRpdGxlXCI6XCJEYWZmb2RpbCBEaWdpdGFsXCIsXCJ0YWdsaW5lXCI6XCJoZWxwaW5nIGJyYW5kcyB0ZWxsIHRoZWlyIHN0b3JpZXNcIixcImRldGFpbFwiOltcIkkgd2FudGVkIHRvIGFpbSBmb3IgYSBjb21wbGV0ZSBTUEEgZXhwZXJpZW5jZSwgZm9jdXNpbmcgZGlyZWN0bHkgb24gcHJlbG9hZGluZyBhbGwgaW1hZ2VyeSBhbmQgdXNpbmcgY3VzdG9tIGxvYWRpbmcgYW5pbWF0aW9ucyB0byBrZWVwIGEgbmljZSBmbG93aW5nIGV4cGVyaWVuY2VcIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5kYWZmb2RpbGRpZ2l0YWwuY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9kYWZmb2RpbFwifX0sXCJhcFwiOntcImNvbG9yXCI6XCIjQTQ5MjY2XCIsXCJ0aXRsZVwiOlwiQXVkZW1hcnMgUGlndWV0XCIsXCJ0YWdsaW5lXCI6XCJ1bHRyYS1sdXh1cnkgc3dpc3Mgd2F0Y2hlc1wiLFwiZGV0YWlsXCI6W1wiSSBjYW1lIGFib2FyZCBicmllZmx5IHRvIGhlbHAgd2l0aCB0aGUgYmFjay1lbmQsIGFuZCB3YXMgZ2l2ZW4gdGhlIHBsZWFzdXJlIG9mIHNldHRpbmcgdGhlIGZvdW5kYXRpb24gYW5kIHN0cnVjdHVyZSBmb3IgdjEgb2YgdGhlaXIgQVBJLlwiLFwiQXQgdGhlIGVuZCB3ZSBoYWQgc3VjY2Vzc2Z1bGx5IGNlbnRyYWxpemVkIGFsbCB3YXRjaCBhbmQgcmV0YWlsIHN0b3JlIGNvbnRlbnQgdGhhdCBkcm92ZSB0aGUgc2l0ZSBhbmQgYXBwcyB0byB2ZXJzaW9uLXNlcGVyYXRlZCBlbmRwb2ludHMgdGhhdCBtYXRjaCB0aGUgSlNPTkFQSSBzcGVjLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmF1ZGVtYXJzcGlndWV0LmNvbS9cIn19LFwic3R1ZGlvXCI6e1wiY29sb3JcIjpcIiM0ODY3YWFcIixcInRpdGxlXCI6XCJGYWNlYm9vayBTdHVkaW9cIixcInRhZ2xpbmVcIjpcImZhY2Vib29rIGF3YXJkc1wiLFwiZGV0YWlsXCI6W1wiVmVyeSBoYXBweSB0byB3b3JrIG9uIHRoaXMgbWFqb3IgY29sbGFib3JhdGlvbiB3aXRoIEZhY2Vib29rLiBPbmUgb2YgdGhlIG1vc3QgdGhvcm91Z2ggcHJvamVjdHMgSSd2ZSBoYWQgYSBwbGVhdXJlIHRvIHdvcmsgb24sIGZyb20gbXVsdGlwbGUgYXVkaXRzIG9mIGV2ZXJ5IGNoZWNrLWluIHRvIHVuaXQgdGVzdGluZyBldmVyeSBwaWVjZSBvZiBmdW5jdGlvbmFsaXR5LlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmZhY2Vib29rLXN0dWRpby5jb20vXCJ9fX19OyIsIkluZGV4ID1cbiAgc2VjdGlvbnM6IFsnd29yaycsJ2NvZGUnLCdyZXN1bWUnXVxuICBzZWN0aW9uOiAnd29yaydcblxuICBpOiAtPlxuXG4gICAgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJylcbiAgICBAc2VjdGlvbiA9IGhhc2ggaWYgQHNlY3Rpb25zLmluZGV4T2YoaGFzaCkgaXNudCAtMVxuXG4gICAgQGxvYWRUaHVtYm5haWxzIC0+XG5cbiAgICAgIF8ub24gJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJ1xuXG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLmFkZENsYXNzICdsb2FkZWQnXG5cbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkZWQnXG4gICAgICAsIDEwMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uIFwiLm1lbnUgPiAub3B0aW9uLm9wdGlvbl8je0luZGV4LnNlY3Rpb259XCJcbiAgICAgICAgXy5vbiBcIi5zZWN0aW9uLnNlY3Rpb25fI3tJbmRleC5zZWN0aW9ufVwiXG4gICAgICAsIDExMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuXG4gICAgICAgIG5ldyBQYXJhbGxheCAkKCcuc2VjdGlvbi5zZWN0aW9uX3dvcmsnKVswXSwgbGltaXRYOiAyMCwgbGltaXRZOiA1MFxuXG4gICAgICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICAgICAgSW5kZXgubW9kYWwuaGFuZGxlcnMoKVxuICAgICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgICAgSW5kZXgubG9hZEltYWdlcygpXG4gICAgICAgICwgNDAwXG5cbiAgICAgICwgMTIwMFxuXG4gICAgICAjIyNcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnNjcm9sbFRvIFwiLnNlY3Rpb25fd29ya1wiLFxuICAgICAgICAgIGR1cmF0aW9uOiAyNTAwXG4gICAgICAgICAgZWFzaW5nOiAnZWFzZUluT3V0QmFjaydcbiAgICAgICwgMjQwMFxuICAgICAgIyMjXG4gIGxvYWRUaHVtYm5haWxzOiAoY29tcGxldGUpIC0+XG5cbiAgICBpbWFnZXMgPSBbXVxuXG4gICAgZm9yIGRpciBvZiBjb25maWcud29ya1xuICAgICAgaW1hZ2VzLnB1c2ggXCJpbWFnZXMvd29yay8je2Rpcn0vdGh1bWJuYWlscy9sb2dvLnBuZ1wiXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS90aHVtYm5haWxzL2JhY2tncm91bmQuanBnXCJcblxuICAgIFByZWxvYWQgaW1hZ2VzLCAocHJvZ3Jlc3MpIC0+XG4gICAgICBkYmFyLnBlcmMgcHJvZ3Jlc3NcbiAgICAsIChkb25lKSAtPlxuICAgICAgZGJhci5kKClcbiAgICAgIGNvbXBsZXRlKClcblxuXG4gIGxvYWRJbWFnZXM6IChjb21wbGV0ZSkgLT5cblxuICAgICQuZWFjaCBjb25maWcud29yaywgKG5hbWUpIC0+XG5cbiAgICAgIGxvYWRJbWFnZSBcImltYWdlcy93b3JrLyN7bmFtZX0vbG9nby5wbmdcIiwgIChyYXRpbykgLT5cbiAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2FkaW5nID4gLmZ1bGxcIikuY3NzKCd3aWR0aCcsIFwiI3tyYXRpby8yfSVcIilcbiAgICAgIC50aGVuIChpbWFnZVNvdXJjZSkgLT5cbiAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5sb2dvXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7aW1hZ2VTb3VyY2V9KVwiKVxuICAgICAgICBfLm9mZiBcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC50aHVtYm5haWxfbG9nb1wiXG4gICAgICAgIF8ub24gXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9nb1wiXG5cbiAgICAgICAgbG9hZEltYWdlIFwiaW1hZ2VzL3dvcmsvI3tuYW1lfS9iYWNrZ3JvdW5kLmpwZ1wiLCAgKHJhdGlvKSAtPlxuICAgICAgICAgICQoXCIuam9iXyN7bmFtZX0gPiAuaW5uZXIgPiAubG9hZGluZyA+IC5mdWxsXCIpLmNzcygnd2lkdGgnLCBcIiN7KHJhdGlvLzIpICsgNTB9JVwiKVxuICAgICAgICAudGhlbiAoaW1hZ2VTb3VyY2UpIC0+XG4gICAgICAgICAgJChcIi5qb2JfI3tuYW1lfSA+IC5pbm5lciA+IC5iYWNrZ3JvdW5kXCIpLmNzcygnYmFja2dyb3VuZC1pbWFnZScsIFwidXJsKCN7aW1hZ2VTb3VyY2V9KVwiKVxuICAgICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLnRodW1ibmFpbF9iYWNrZ3JvdW5kXCJcbiAgICAgICAgICBfLm9uIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmJhY2tncm91bmRcIlxuICAgICAgICAgIF8ub2ZmIFwiLmpvYl8je25hbWV9ID4gLmlubmVyID4gLmxvYWRpbmdcIlxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJykuY2xpY2sgSW5kZXguY3ljbGVcbiAgICAkKCcubWVudSA+IC5vcHRpb24sIC50ZXh0X29wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5zZWN0aW9uLnNlY3Rpb25fd29yayA+IC53b3JrID4gLmpvYiA+IC5pbm5lcicpLmNsaWNrIEluZGV4LmpvYlxuXG4gIG9wdGlvbjogLT5cbiAgICBvcHRpb24gPSAkKHRoaXMpLmRhdGEoJ29wdGlvbicpXG4gICAgXy5vZmYgJy5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9uIFwiLm9wdGlvbl8je29wdGlvbn1cIlxuICAgIF8ub2ZmICcuc2VjdGlvbidcbiAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8je29wdGlvbn1cIlxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gb3B0aW9uXG5cbiAgY3ljbGU6IC0+XG5cbiAgICAkKCcubG9nbyA+IC5pbm5lcicpLmFkZENsYXNzICdvZmZpbmcnXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBfLm9mZiAnLmxvZ28nXG4gICAgICAkKCcubG9nbyA+IC5pbm5lcicpLnJlbW92ZUNsYXNzICdvZmZpbmcnXG4gICAgLCA2MDBcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub24gJy5sb2dvJ1xuICAgICwgNjEwXG5cbiAgbW9kYWw6XG5cbiAgICBpOiAoam9iKSAtPlxuICAgICAgXy5vbiAnLmZhZGUsIC5tb2RhbCdcbiAgICAgIGdpZyA9IGNvbmZpZy53b3JrW2pvYl1cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmNzcyAnY29sb3InLCBnaWcuY29sb3JcblxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuaHRtbCBnaWcudGl0bGVcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90YWdsaW5lJykuaHRtbCBnaWcudGFnbGluZVxuICAgICAgZm9yIHAgaW4gZ2lnLmRldGFpbFxuICAgICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfZGV0YWlsJykuYXBwZW5kIFwiPHA+I3twfTwvcD5cIlxuXG4gICAgICBmb3IgdHlwZSwgbGluayBvZiBnaWcubGlua3NcbiAgICAgICAgXy5vbiBcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtfI3t0eXBlfVwiXG4gICAgICAgICQoXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXyN7dHlwZX1cIikuYXR0ciAnaHJlZicsIGxpbmtcblxuICAgIGhhbmRsZXJzOiAtPlxuICAgICAgJCgnLmZhZGUsIC5tb2RhbCA+IC5pbm5lciA+IC5jbG9zZScpLmNsaWNrIEluZGV4Lm1vZGFsLmRcblxuICAgIGQ6IC0+XG4gICAgICBfLm9mZiAnLmZhZGUsIC5tb2RhbCdcbiAgICAgIF8ub2ZmIFwiLmJvZHkgPiAubGlua3MgPiAubGlua1wiXG5cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmh0bWwgJydcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90YWdsaW5lJykuaHRtbCAnJ1xuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X2RldGFpbCcpLmh0bWwgJydcblxuICBqb2I6IC0+XG4gICAgSW5kZXgubW9kYWwuaSAkKHRoaXMpLmRhdGEgJ2pvYidcblxuXG4iLCIjIyMqXG4jIExvYWRzIGFuIGltYWdlIHdpdGggcHJvZ3Jlc3MgY2FsbGJhY2suXG4jXG4jIFRoZSBgb25wcm9ncmVzc2AgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgYnkgWE1MSHR0cFJlcXVlc3QncyBvbnByb2dyZXNzXG4jIGV2ZW50LCBhbmQgd2lsbCByZWNlaXZlIHRoZSBsb2FkaW5nIHByb2dyZXNzIHJhdGlvIGFzIGFuIHdob2xlIG51bWJlci5cbiMgSG93ZXZlciwgaWYgaXQncyBub3QgcG9zc2libGUgdG8gY29tcHV0ZSB0aGUgcHJvZ3Jlc3MgcmF0aW8sIGBvbnByb2dyZXNzYFxuIyB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UgcGFzc2luZyAtMSBhcyBwcm9ncmVzcyB2YWx1ZS4gVGhpcyBpcyB1c2VmdWwgdG8sXG4jIGZvciBleGFtcGxlLCBjaGFuZ2UgdGhlIHByb2dyZXNzIGFuaW1hdGlvbiB0byBhbiB1bmRlZmluZWQgYW5pbWF0aW9uLlxuI1xuIyBAcGFyYW0gIHtzdHJpbmd9ICAgaW1hZ2VVcmwgICBUaGUgaW1hZ2UgdG8gbG9hZFxuIyBAcGFyYW0gIHtGdW5jdGlvbn0gb25wcm9ncmVzc1xuIyBAcmV0dXJuIHtQcm9taXNlfVxuIyMjXG5cbmxvYWRJbWFnZSA9IChpbWFnZVVybCwgb25wcm9ncmVzcykgLT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgLT5cbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3RcbiAgICBub3RpZmllZE5vdENvbXB1dGFibGUgPSBmYWxzZVxuICAgIHhoci5vcGVuICdHRVQnLCBpbWFnZVVybCwgdHJ1ZVxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYXJyYXlidWZmZXInXG5cbiAgICB4aHIub25wcm9ncmVzcyA9IChldikgLT5cbiAgICAgIGlmIGV2Lmxlbmd0aENvbXB1dGFibGVcbiAgICAgICAgb25wcm9ncmVzcyBwYXJzZUludChldi5sb2FkZWQgLyBldi50b3RhbCAqIDEwMClcbiAgICAgIGVsc2VcbiAgICAgICAgaWYgIW5vdGlmaWVkTm90Q29tcHV0YWJsZVxuICAgICAgICAgIG5vdGlmaWVkTm90Q29tcHV0YWJsZSA9IHRydWVcbiAgICAgICAgICBvbnByb2dyZXNzIC0xXG4gICAgICByZXR1cm5cblxuICAgIHhoci5vbmxvYWRlbmQgPSAtPlxuICAgICAgaWYgIXhoci5zdGF0dXMudG9TdHJpbmcoKS5tYXRjaCgvXjIvKVxuICAgICAgICByZWplY3QgeGhyXG4gICAgICBlbHNlXG4gICAgICAgIGlmICFub3RpZmllZE5vdENvbXB1dGFibGVcbiAgICAgICAgICBvbnByb2dyZXNzIDEwMFxuICAgICAgICBvcHRpb25zID0ge31cbiAgICAgICAgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgICBtID0gaGVhZGVycy5tYXRjaCgvXkNvbnRlbnQtVHlwZVxcOlxccyooLio/KSQvbWkpXG4gICAgICAgIGlmIG0gYW5kIG1bMV1cbiAgICAgICAgICBvcHRpb25zLnR5cGUgPSBtWzFdXG4gICAgICAgIGJsb2IgPSBuZXcgQmxvYihbIEByZXNwb25zZSBdLCBvcHRpb25zKVxuICAgICAgICByZXNvbHZlIHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4gICAgICByZXR1cm5cblxuICAgIHhoci5zZW5kKClcbiAgICByZXR1cm5cbilcbiIsIlByZWxvYWQgPSAoc3JjZXMsIHByb2dyZXNzLCBjb21wbGV0ZSkgLT5cblxuICBpbWFnZXMgPSBbXVxuICBsb2FkZWQgPSAwXG4gIHRvdGFsID0gc3JjZXMubGVuZ3RoXG5cbiAgY29tcGxldGUgdHJ1ZSBpZiB0b3RhbCBpcyAwXG5cbiAgZm9yIHNyYywgaSBpbiBzcmNlc1xuICAgIGltYWdlc1tpXSA9IG5ldyBJbWFnZSgpXG4gICAgaW1hZ2VzW2ldLnNyYyA9IHNyY1xuICAgIGltYWdlc1tpXS5vbmxvYWQgPSAtPlxuICAgICAgbG9hZGVkKytcbiAgICAgIHBlcmMgPSBNYXRoLnJvdW5kKGxvYWRlZC90b3RhbCoxMDApLzEwMFxuICAgICAgaWYgbG9hZGVkIGlzIHRvdGFsIHRoZW4gY29tcGxldGUodHJ1ZSkgZWxzZSBwcm9ncmVzcyhwZXJjKVxuIl19
