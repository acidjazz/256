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
    "holidays": {
      "color": "#7b0051",
      "title": "home for the holidays",
      "tagline": "same holiday, different home",
      "detail": ["Real fun project for Airbnb to promote spending the holidays away from home.", "This was a mobile-only site where you upload a photo of you and your family celebrating, then choose a filter you like and then share it.", "Full stack project even involving operatiions, scalinng, and load testing."],
      "links": {
        "url": "https://holidays.withairbnb.com/"
      }
    },
    "lookingglass": {
      "color": "#C29E6E",
      "title": "looking glass VR",
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
      "tagline": "Supercharged Brand and Product Experiences.",
      "detail": ["It was a great pleasure working with such an innovative product design agency.", "This was a major challenge of staying with 100% original and custom functionality and features while keeping an easily modifiable and legible structure of syntactic sugar.", "With two seperate and fully custom CMS sections, and a couple easter eggs, every section of this project packs a punch."],
      "links": {
        "url": "http://www.astrostudios.com/",
        "github": "http://github.com/acidjazz/astro"
      }
    },
    "br": {
      "color": "#E0483E",
      "title": "Bystander Revolution",
      "tagline": "Take the power out of bullying",
      "detail": ["Going on 3 years, 3,000+ commits, 3 complete renovations, and 10+ campaigns, it's been a great opportunity to take on development and operations for Bystander Revolution.", "Working with multiple agencies through the years, essentially with MacKenzie Bezos' core team in Seattle, we've tackled all sorts of tasks dealing with preconditioned and user-contributed content, constantly evolving to display it comfortably in multiple easily navigatable interfaces."],
      "links": {
        "url": "http://www.bystanderrevolution.org/"
      }
    },
    "gilman": {
      "color": "#c08000",
      "title": "Gilman Brewing Company",
      "tagline": "Born and brewed in Berkeley, California",
      "detail": ["Lots of fun on this project going further than just development and operations and getting involved in creating some cinemagraphs to help make the site come alive.", "Once launched this project will take advantage of the newer webkit push allowing silent video to auto-play, giving video on mobile without resulting in bulky uncompressed GIFS"],
      "links": {
        "url": "http://gilman.256.tech/"
      }
    },
    "sake": {
      "color": "#73B8B2",
      "title": "Designsake Studio",
      "tagline": "For the sake of good design",
      "detail": ["Being given such a clean and pretty design and a great rich portfolio of work, building a fluid experience was a pleasure.", "Built a completely custom SPA experience preloading all images of each section and never refreshing, with loading animations showing realtime loading ."],
      "links": {
        "url": "http://www.designsakestudio.com/",
        "github": "http://github.com/acidjazz/sake"
      }
    },
    "daffodil": {
      "color": "#EFE047",
      "title": "Daffodil Digital",
      "tagline": "Helping brands tell their stories",
      "detail": ["I wanted to aim for a complete SPA experience, focusing directly on preloading all imagery and using custom loading animations to keep a nice flowing experience"],
      "links": {
        "url": "http://www.daffodildigital.com/",
        "github": "http://github.com/acidjazz/daffodil"
      }
    },
    "ap": {
      "color": "#A49266",
      "title": "Audemars Piguet",
      "tagline": "Ultra-luxury swiss watches",
      "detail": ["I came aboard briefly to help with the back-end, and was given the pleasure of setting the foundation and structure for v1 of their API.", "At the end we had successfully centralized all watch and retail store content that drove the site and apps to version-seperated endpoints that match the JSONAPI spec."],
      "links": {
        "url": "http://www.audemarspiguet.com/"
      }
    },
    "studio": {
      "color": "#4867aa",
      "title": "Facebook Studio",
      "tagline": "Facebook Awards",
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
    return this.loadImages(function() {
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
        new Parallax($('.section.section_work')[0]);
        Index.handlers();
        return Index.modal.handlers();
      }, 2100);
    });
  },
  loadImages: function(complete) {
    var dir, images;
    dbar.i();
    images = [];
    for (dir in config.work) {
      images.push("images/work/" + dir + "/logo.png");
      images.push("images/work/" + dir + "/background.jpg");
    }
    return Preload(images, function(progress) {
      return dbar.perc(progress);
    }, function(done) {
      dbar.d();
      return complete();
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
        console.log(p);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwicHJlbG9hZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxD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QUFDLEtBQUQsRUFBUSxRQUFSLEVBQWtCLFFBQWxCO0FBRVIsTUFBQTtFQUFBLE1BQUEsR0FBUztFQUNULE1BQUEsR0FBUztFQUNULEtBQUEsR0FBUSxLQUFLLENBQUM7RUFFZCxJQUFpQixLQUFBLEtBQVMsQ0FBMUI7SUFBQSxRQUFBLENBQVMsSUFBVCxFQUFBOztBQUVBO09BQUEsK0NBQUE7O0lBQ0UsTUFBTyxDQUFBLENBQUEsQ0FBUCxHQUFnQixJQUFBLEtBQUEsQ0FBQTtJQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsR0FBVixHQUFnQjtpQkFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVYsR0FBbUIsU0FBQTtBQUNqQixVQUFBO01BQUEsTUFBQTtNQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBTyxLQUFQLEdBQWEsR0FBeEIsQ0FBQSxHQUE2QjtNQUNwQyxJQUFHLE1BQUEsS0FBVSxLQUFiO2VBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO09BQUEsTUFBQTtlQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7SUFIaUI7QUFIckI7O0FBUlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMkIyRDMyXCIsXCJibGFjazJcIjpcIiM0MTQzNDdcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwid2hpdGUyXCI6XCIjZWVlZWVlXCIsXCJ3aGl0ZTNcIjpcIiNhYmFiYWRcIixcInB1cnBsZTFcIjpcIiMzMzI2MzFcIixcInB1cnBsZTJcIjpcIiM0RDM5NEJcIixcInB1cnBsZTNcIjpcIiNBQjlCQTlcIixcInRlYWwxXCI6XCIjNEM5Njg5XCIsXCJ0ZWFsMlwiOlwiI0IxQzlDNVwifSxcImZvbnRcIjp7XCJjb3B5MVwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImNvcHkyXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIixcImZvbnQtd2VpZ2h0XCI6XCI1MDBcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMjRweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly8yNTYuaW8vXCIsXCJ0aXRsZVwiOjI1NixcImRlc2NyaXB0aW9uXCI6XCJidWlsZGluZyBkaWdpdGFsIHRoaW5nc1wiLFwia2V5d29yZHNcIjpcIndlYiBkZXZlbG9wbWVudCwgbW9iaWxlIGRldmVsb3BtZW50LCBtb2JpbGUgYXBwcywgZnVsbCBzdGFjayBkZXZlbG9wbWVudFwiLFwicGhvbmVcIjo5NDkyOTA4OTg5LFwidHJhY2tpbmdJRFwiOlwiVUEtNzUxMjgzNTUtMVwiLFwibG9nb1wiOlwiaW1hZ2VzL2xvZ29fMTAwMHgxMDAwLmpwZ1wiLFwic2hhcmVcIjpcImltYWdlcy8xMjAweDYzMC5qcGdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei8yNTZcIixcImVtYWlsXCI6XCJrZXZpbkAyNTYuaW9cIixcInNvY2lhbFwiOntcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vMjU2bGxjL1wiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS8yNTZsbGNcIixcImluc3RhZ3JhbVwiOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8yNTZsbGMvXCJ9fSxcIndvcmtcIjp7XCJob2xpZGF5c1wiOntcImNvbG9yXCI6XCIjN2IwMDUxXCIsXCJ0aXRsZVwiOlwiaG9tZSBmb3IgdGhlIGhvbGlkYXlzXCIsXCJ0YWdsaW5lXCI6XCJzYW1lIGhvbGlkYXksIGRpZmZlcmVudCBob21lXCIsXCJkZXRhaWxcIjpbXCJSZWFsIGZ1biBwcm9qZWN0IGZvciBBaXJibmIgdG8gcHJvbW90ZSBzcGVuZGluZyB0aGUgaG9saWRheXMgYXdheSBmcm9tIGhvbWUuXCIsXCJUaGlzIHdhcyBhIG1vYmlsZS1vbmx5IHNpdGUgd2hlcmUgeW91IHVwbG9hZCBhIHBob3RvIG9mIHlvdSBhbmQgeW91ciBmYW1pbHkgY2VsZWJyYXRpbmcsIHRoZW4gY2hvb3NlIGEgZmlsdGVyIHlvdSBsaWtlIGFuZCB0aGVuIHNoYXJlIGl0LlwiLFwiRnVsbCBzdGFjayBwcm9qZWN0IGV2ZW4gaW52b2x2aW5nIG9wZXJhdGlpb25zLCBzY2FsaW5uZywgYW5kIGxvYWQgdGVzdGluZy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cHM6Ly9ob2xpZGF5cy53aXRoYWlyYm5iLmNvbS9cIn19LFwibG9va2luZ2dsYXNzXCI6e1wiY29sb3JcIjpcIiNDMjlFNkVcIixcInRpdGxlXCI6XCJsb29raW5nIGdsYXNzIFZSXCIsXCJ0YWdsaW5lXCI6XCJ3aW5kb3dzIHRvIHRoZSBwYXN0IGFyZSBvcGVuIGF0IGxhc3RcIixcImRldGFpbFwiOltcIkl0J3MgYmVlbiBhIGJsYXN0IGNvbnRyaWJ1dGluZyB0byB0aGlzIGF3ZXNvbWUgVlIgYXBwOyBhIDNEIHBob3RvIHZpZXdlciBvZiBhcm91bmQgMjAwIHBob3RvcyBmcm9tIGFsbCBvdmVyIHRoZSB3b3JsZCBhYm91dCBhIGNlbnR1cnkgb2xkLCBmaW5hbGx5IHRvIGJlIHNlZW4gYXMgdGhleSB3ZXJlIGludGVuZGVkLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwczovL2xvb2tpbmdnbGFzc3ZyLmNvbS9cIixcImdpdGh1YlwiOlwiaHR0cHM6Ly9naXRodWIuY29tL2xvb2tpbmdnbGFzc3ZyL2xvb2tpbmdnbGFzc1wifX0sXCJkZWZpbmVyeVwiOntcImNvbG9yXCI6XCIjNTVDN0MwXCIsXCJ0aXRsZVwiOlwiREVGSU5FUllcIixcInRhZ2xpbmVcIjpcImEgZGlnaXRhbCBwcm9kdWN0IGRlc2lnbiBhbmQgaW5ub3ZhdGlvbiBjb21wYW55XCIsXCJkZXRhaWxcIjpbXCJGb3Igb3VyIGZpcnN0IHZlcnNpb24gb2YgPGEgaHJlZj1cXFwiaHR0cDovL2RlZmluZXJ5LmlvXFxcIiB0YXJnZXQ9XFxcIl9uZXdcXFwiPmRlZmluZXJ5LmlvPC9hPiB3ZSB3YW50ZWQgdG8gZ28gZm9yIHRoZSBtb3N0IGlubm92YXRpdmUgYW5kIHJlY2VudCAod2hpbGUgc3RpbGwgY29tcGF0aWJsZSkgdGVjaCBhdmFpbGFibGUuXCIsXCJXZSBwYWNrZWQgaW4gbG90cyBvZiBsaXZlbHkgZmVhdHVyZXM7IGNsaXBwaW5nLCBtYXNraW5nLCBhbmQgYmxlbmQgbW9kZXMgKG1peC1ibGVuZC1tb2RlIHRvIGJlIHByZWNpc2UpIGZvciBjb21wb3NpdGluZyBncmFwaGljIGVsZW1lbnRzLCB3aGljaCBldmVuIHdvcmtlZCB3ZWxsIHdpdGggdmlkZW8uICBXZSBhbHNvIGhpdCBvdXIgdGFyZ2V0IG9uIG1vYmlsZSBieSBkeW5hbWljYWxseSBhbHRlcm5hdGluZyBtZXRhIHRhZ3MgdXNlZCB0byBjdXN0b21pemUgdGhlIGJyb3dzZXIgaGVhZGVyIGNvbG9ycyBvbiBhbmRyb2lkIGRldmljZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9kZWZpbmVyeS5pby9cIixcImdpdGh1YlwiOlwiaHR0cDovL2dpdGh1Yi5jb20vYWNpZGphenovZGVmaW5lcnlcIn19LFwiYXN0cm9cIjp7XCJjb2xvclwiOlwiI0M4NTA0QlwiLFwidGl0bGVcIjpcIkFzdHJvIFN0dWRpb3NcIixcInRhZ2xpbmVcIjpcIlN1cGVyY2hhcmdlZCBCcmFuZCBhbmQgUHJvZHVjdCBFeHBlcmllbmNlcy5cIixcImRldGFpbFwiOltcIkl0IHdhcyBhIGdyZWF0IHBsZWFzdXJlIHdvcmtpbmcgd2l0aCBzdWNoIGFuIGlubm92YXRpdmUgcHJvZHVjdCBkZXNpZ24gYWdlbmN5LlwiLFwiVGhpcyB3YXMgYSBtYWpvciBjaGFsbGVuZ2Ugb2Ygc3RheWluZyB3aXRoIDEwMCUgb3JpZ2luYWwgYW5kIGN1c3RvbSBmdW5jdGlvbmFsaXR5IGFuZCBmZWF0dXJlcyB3aGlsZSBrZWVwaW5nIGFuIGVhc2lseSBtb2RpZmlhYmxlIGFuZCBsZWdpYmxlIHN0cnVjdHVyZSBvZiBzeW50YWN0aWMgc3VnYXIuXCIsXCJXaXRoIHR3byBzZXBlcmF0ZSBhbmQgZnVsbHkgY3VzdG9tIENNUyBzZWN0aW9ucywgYW5kIGEgY291cGxlIGVhc3RlciBlZ2dzLCBldmVyeSBzZWN0aW9uIG9mIHRoaXMgcHJvamVjdCBwYWNrcyBhIHB1bmNoLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmFzdHJvc3R1ZGlvcy5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2FzdHJvXCJ9fSxcImJyXCI6e1wiY29sb3JcIjpcIiNFMDQ4M0VcIixcInRpdGxlXCI6XCJCeXN0YW5kZXIgUmV2b2x1dGlvblwiLFwidGFnbGluZVwiOlwiVGFrZSB0aGUgcG93ZXIgb3V0IG9mIGJ1bGx5aW5nXCIsXCJkZXRhaWxcIjpbXCJHb2luZyBvbiAzIHllYXJzLCAzLDAwMCsgY29tbWl0cywgMyBjb21wbGV0ZSByZW5vdmF0aW9ucywgYW5kIDEwKyBjYW1wYWlnbnMsIGl0J3MgYmVlbiBhIGdyZWF0IG9wcG9ydHVuaXR5IHRvIHRha2Ugb24gZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgZm9yIEJ5c3RhbmRlciBSZXZvbHV0aW9uLlwiLFwiV29ya2luZyB3aXRoIG11bHRpcGxlIGFnZW5jaWVzIHRocm91Z2ggdGhlIHllYXJzLCBlc3NlbnRpYWxseSB3aXRoIE1hY0tlbnppZSBCZXpvcycgY29yZSB0ZWFtIGluIFNlYXR0bGUsIHdlJ3ZlIHRhY2tsZWQgYWxsIHNvcnRzIG9mIHRhc2tzIGRlYWxpbmcgd2l0aCBwcmVjb25kaXRpb25lZCBhbmQgdXNlci1jb250cmlidXRlZCBjb250ZW50LCBjb25zdGFudGx5IGV2b2x2aW5nIHRvIGRpc3BsYXkgaXQgY29tZm9ydGFibHkgaW4gbXVsdGlwbGUgZWFzaWx5IG5hdmlnYXRhYmxlIGludGVyZmFjZXMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYnlzdGFuZGVycmV2b2x1dGlvbi5vcmcvXCJ9fSxcImdpbG1hblwiOntcImNvbG9yXCI6XCIjYzA4MDAwXCIsXCJ0aXRsZVwiOlwiR2lsbWFuIEJyZXdpbmcgQ29tcGFueVwiLFwidGFnbGluZVwiOlwiQm9ybiBhbmQgYnJld2VkIGluIEJlcmtlbGV5LCBDYWxpZm9ybmlhXCIsXCJkZXRhaWxcIjpbXCJMb3RzIG9mIGZ1biBvbiB0aGlzIHByb2plY3QgZ29pbmcgZnVydGhlciB0aGFuIGp1c3QgZGV2ZWxvcG1lbnQgYW5kIG9wZXJhdGlvbnMgYW5kIGdldHRpbmcgaW52b2x2ZWQgaW4gY3JlYXRpbmcgc29tZSBjaW5lbWFncmFwaHMgdG8gaGVscCBtYWtlIHRoZSBzaXRlIGNvbWUgYWxpdmUuXCIsXCJPbmNlIGxhdW5jaGVkIHRoaXMgcHJvamVjdCB3aWxsIHRha2UgYWR2YW50YWdlIG9mIHRoZSBuZXdlciB3ZWJraXQgcHVzaCBhbGxvd2luZyBzaWxlbnQgdmlkZW8gdG8gYXV0by1wbGF5LCBnaXZpbmcgdmlkZW8gb24gbW9iaWxlIHdpdGhvdXQgcmVzdWx0aW5nIGluIGJ1bGt5IHVuY29tcHJlc3NlZCBHSUZTXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly9naWxtYW4uMjU2LnRlY2gvXCJ9fSxcInNha2VcIjp7XCJjb2xvclwiOlwiIzczQjhCMlwiLFwidGl0bGVcIjpcIkRlc2lnbnNha2UgU3R1ZGlvXCIsXCJ0YWdsaW5lXCI6XCJGb3IgdGhlIHNha2Ugb2YgZ29vZCBkZXNpZ25cIixcImRldGFpbFwiOltcIkJlaW5nIGdpdmVuIHN1Y2ggYSBjbGVhbiBhbmQgcHJldHR5IGRlc2lnbiBhbmQgYSBncmVhdCByaWNoIHBvcnRmb2xpbyBvZiB3b3JrLCBidWlsZGluZyBhIGZsdWlkIGV4cGVyaWVuY2Ugd2FzIGEgcGxlYXN1cmUuXCIsXCJCdWlsdCBhIGNvbXBsZXRlbHkgY3VzdG9tIFNQQSBleHBlcmllbmNlIHByZWxvYWRpbmcgYWxsIGltYWdlcyBvZiBlYWNoIHNlY3Rpb24gYW5kIG5ldmVyIHJlZnJlc2hpbmcsIHdpdGggbG9hZGluZyBhbmltYXRpb25zIHNob3dpbmcgcmVhbHRpbWUgbG9hZGluZyAuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZGVzaWduc2FrZXN0dWRpby5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L3Nha2VcIn19LFwiZGFmZm9kaWxcIjp7XCJjb2xvclwiOlwiI0VGRTA0N1wiLFwidGl0bGVcIjpcIkRhZmZvZGlsIERpZ2l0YWxcIixcInRhZ2xpbmVcIjpcIkhlbHBpbmcgYnJhbmRzIHRlbGwgdGhlaXIgc3Rvcmllc1wiLFwiZGV0YWlsXCI6W1wiSSB3YW50ZWQgdG8gYWltIGZvciBhIGNvbXBsZXRlIFNQQSBleHBlcmllbmNlLCBmb2N1c2luZyBkaXJlY3RseSBvbiBwcmVsb2FkaW5nIGFsbCBpbWFnZXJ5IGFuZCB1c2luZyBjdXN0b20gbG9hZGluZyBhbmltYXRpb25zIHRvIGtlZXAgYSBuaWNlIGZsb3dpbmcgZXhwZXJpZW5jZVwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmRhZmZvZGlsZGlnaXRhbC5jb20vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2RhZmZvZGlsXCJ9fSxcImFwXCI6e1wiY29sb3JcIjpcIiNBNDkyNjZcIixcInRpdGxlXCI6XCJBdWRlbWFycyBQaWd1ZXRcIixcInRhZ2xpbmVcIjpcIlVsdHJhLWx1eHVyeSBzd2lzcyB3YXRjaGVzXCIsXCJkZXRhaWxcIjpbXCJJIGNhbWUgYWJvYXJkIGJyaWVmbHkgdG8gaGVscCB3aXRoIHRoZSBiYWNrLWVuZCwgYW5kIHdhcyBnaXZlbiB0aGUgcGxlYXN1cmUgb2Ygc2V0dGluZyB0aGUgZm91bmRhdGlvbiBhbmQgc3RydWN0dXJlIGZvciB2MSBvZiB0aGVpciBBUEkuXCIsXCJBdCB0aGUgZW5kIHdlIGhhZCBzdWNjZXNzZnVsbHkgY2VudHJhbGl6ZWQgYWxsIHdhdGNoIGFuZCByZXRhaWwgc3RvcmUgY29udGVudCB0aGF0IGRyb3ZlIHRoZSBzaXRlIGFuZCBhcHBzIHRvIHZlcnNpb24tc2VwZXJhdGVkIGVuZHBvaW50cyB0aGF0IG1hdGNoIHRoZSBKU09OQVBJIHNwZWMuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYXVkZW1hcnNwaWd1ZXQuY29tL1wifX0sXCJzdHVkaW9cIjp7XCJjb2xvclwiOlwiIzQ4NjdhYVwiLFwidGl0bGVcIjpcIkZhY2Vib29rIFN0dWRpb1wiLFwidGFnbGluZVwiOlwiRmFjZWJvb2sgQXdhcmRzXCIsXCJkZXRhaWxcIjpbXCJWZXJ5IGhhcHB5IHRvIHdvcmsgb24gdGhpcyBtYWpvciBjb2xsYWJvcmF0aW9uIHdpdGggRmFjZWJvb2suIE9uZSBvZiB0aGUgbW9zdCB0aG9yb3VnaCBwcm9qZWN0cyBJJ3ZlIGhhZCBhIHBsZWF1cmUgdG8gd29yayBvbiwgZnJvbSBtdWx0aXBsZSBhdWRpdHMgb2YgZXZlcnkgY2hlY2staW4gdG8gdW5pdCB0ZXN0aW5nIGV2ZXJ5IHBpZWNlIG9mIGZ1bmN0aW9uYWxpdHkuXCJdLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2stc3R1ZGlvLmNvbS9cIn19fX07IiwiSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBfLm9uICdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbydcblxuICAgIEBsb2FkSW1hZ2VzIC0+XG5cbiAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkaW5nJ1xuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykuYWRkQ2xhc3MgJ2xvYWRlZCdcblxuICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ3NldHRsZWQnXG5cbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkZWQnXG4gICAgICAsIDIwMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcubWVudSA+IC5vcHRpb24ub3B0aW9uXzEnXG4gICAgICAgIF8ub24gJy5zZWN0aW9uLnNlY3Rpb25fd29yaydcblxuICAgICAgICBuZXcgUGFyYWxsYXggJCgnLnNlY3Rpb24uc2VjdGlvbl93b3JrJylbMF1cblxuICAgICAgICBJbmRleC5oYW5kbGVycygpXG4gICAgICAgIEluZGV4Lm1vZGFsLmhhbmRsZXJzKClcblxuICAgICAgLCAyMTAwXG5cbiAgbG9hZEltYWdlczogKGNvbXBsZXRlKSAtPlxuXG4gICAgZGJhci5pKClcblxuICAgIGltYWdlcyA9IFtdXG5cbiAgICBmb3IgZGlyIG9mIGNvbmZpZy53b3JrXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9sb2dvLnBuZ1wiXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9iYWNrZ3JvdW5kLmpwZ1wiXG5cbiAgICBQcmVsb2FkIGltYWdlcywgKHByb2dyZXNzKSAtPlxuICAgICAgZGJhci5wZXJjIHByb2dyZXNzXG4gICAgLCAoZG9uZSkgLT5cbiAgICAgIGRiYXIuZCgpXG4gICAgICBjb21wbGV0ZSgpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBJbmRleC5jeWNsZVxuICAgICQoJy5tZW51ID4gLm9wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5zZWN0aW9uLnNlY3Rpb25fd29yayA+IC53b3JrID4gLmpvYiA+IC5pbm5lcicpLmNsaWNrIEluZGV4LmpvYlxuXG4gIG9wdGlvbjogLT5cbiAgICBfLm9mZiAnLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub24gdGhpc1xuICAgIF8ub2ZmICcuc2VjdGlvbidcbiAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8jeyQodGhpcykuZGF0YSgnb3B0aW9uJyl9XCJcblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcblxuICBtb2RhbDpcblxuICAgIGk6IChqb2IpIC0+XG4gICAgICBfLm9uICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgZ2lnID0gY29uZmlnLndvcmtbam9iXVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuY3NzICdjb2xvcicsIGdpZy5jb2xvclxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sIGdpZy50aXRsZVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sIGdpZy50YWdsaW5lXG4gICAgICBmb3IgcCBpbiBnaWcuZGV0YWlsXG4gICAgICAgIGNvbnNvbGUubG9nIHBcbiAgICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X2RldGFpbCcpLmFwcGVuZCBcIjxwPiN7cH08L3A+XCJcblxuICAgICAgZm9yIHR5cGUsIGxpbmsgb2YgZ2lnLmxpbmtzXG4gICAgICAgIF8ub24gXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXyN7dHlwZX1cIlxuICAgICAgICAkKFwiLmJvZHkgPiAubGlua3MgPiAubGlua18je3R5cGV9XCIpLmF0dHIgJ2hyZWYnLCBsaW5rXG5cbiAgICBoYW5kbGVyczogLT5cbiAgICAgICQoJy5mYWRlLCAubW9kYWwgPiAuaW5uZXIgPiAuY2xvc2UnKS5jbGljayBJbmRleC5tb2RhbC5kXG5cbiAgICBkOiAtPlxuICAgICAgXy5vZmYgJy5mYWRlLCAubW9kYWwnXG4gICAgICBfLm9mZiBcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtcIlxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sICcnXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGFnbGluZScpLmh0bWwgJydcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV9kZXRhaWwnKS5odG1sICcnXG5cbiAgam9iOiAtPlxuICAgIEluZGV4Lm1vZGFsLmkgJCh0aGlzKS5kYXRhICdqb2InXG5cblxuIiwiUHJlbG9hZCA9IChzcmNlcywgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIGltYWdlcyA9IFtdXG4gIGxvYWRlZCA9IDBcbiAgdG90YWwgPSBzcmNlcy5sZW5ndGhcblxuICBjb21wbGV0ZSB0cnVlIGlmIHRvdGFsIGlzIDBcblxuICBmb3Igc3JjLCBpIGluIHNyY2VzXG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gc3JjXG4gICAgaW1hZ2VzW2ldLm9ubG9hZCA9IC0+XG4gICAgICBsb2FkZWQrK1xuICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG4iXX0=
