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
    "title": "256 llc",
    "description": "building digital things",
    "keywords": "think of keywords",
    "phone": 9492908989,
    "trackingID": "UA-75128355-1",
    "logo": "img/logo_1000x1000.jpg",
    "share": "img/1200x630.jpg",
    "repo": "https://github.com/acidjazz/256",
    "email": "kevin@256.io",
    "social": {
      "facebook": "https://www.facebook.com/256llc/",
      "twitter": "https://twitter.com/256llc",
      "instagram": "https://www.instagram.com/256llc/"
    }
  },
  "work": {
    "definery": {
      "color": "#55C7C0",
      "title": "DEFINERY",
      "tagline": "a digital product design and innovation company",
      "detail": ["I had the honor of working with the Definery team on our first version of <a href=\"http://definery.io\" target=\"_new\">definery.io</a>. For this project we wanted to go for the most innovative and recent (while still compatible) technology.", "We packed in lots of lively features like clipping, masking, and using blend modes (mix-blend-mode to be precise) for compositing graphic elements, which even worked well with video.  We also hit our target on mobile by dynamically alternating meta tags used to customize the user experience on android devices."],
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
      "detail": ["Very happy to work on this major collaboration with Facebook. One of the most thorough projects I've had a pleaure to work on, from multiple code audits to very detailed stress and unit testing."],
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwicHJlbG9hZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxD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QUF4QixDQUFBLEdBQTZCO01BQ3BDLElBQUcsTUFBQSxLQUFVLEtBQWI7ZUFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7T0FBQSxNQUFBO2VBQTRDLFFBQUEsQ0FBUyxJQUFULEVBQTVDOztJQUhpQjtBQUhyQjs7QUFSUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibGFjazFcIjpcIiMyQjJEMzJcIixcImJsYWNrMlwiOlwiIzQxNDM0N1wiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJ3aGl0ZTJcIjpcIiNlZWVlZWVcIixcIndoaXRlM1wiOlwiI2FiYWJhZFwiLFwicHVycGxlMVwiOlwiIzMzMjYzMVwiLFwicHVycGxlMlwiOlwiIzREMzk0QlwiLFwicHVycGxlM1wiOlwiI0FCOUJBOVwiLFwidGVhbDFcIjpcIiM0Qzk2ODlcIixcInRlYWwyXCI6XCIjQjFDOUM1XCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIyMHB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJjb3B5M1wiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMzJweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImNvcHk0XCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgcmVndWxhclwiLFwiZm9udC1zaXplXCI6XCIyNHB4XCIsXCJmb250LXdlaWdodFwiOlwiNTAwXCJ9LFwiaDFcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSBleHRyYWJvbGRcIixcImZvbnQtc2l6ZVwiOlwiNDhweFwifSxcImgyXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjM2cHhcIn19LFwibWV0YVwiOntcInVybFwiOlwiaHR0cDovLzI1Ni5pby9cIixcInRpdGxlXCI6XCIyNTYgbGxjXCIsXCJkZXNjcmlwdGlvblwiOlwiYnVpbGRpbmcgZGlnaXRhbCB0aGluZ3NcIixcImtleXdvcmRzXCI6XCJ0aGluayBvZiBrZXl3b3Jkc1wiLFwicGhvbmVcIjo5NDkyOTA4OTg5LFwidHJhY2tpbmdJRFwiOlwiVUEtNzUxMjgzNTUtMVwiLFwibG9nb1wiOlwiaW1nL2xvZ29fMTAwMHgxMDAwLmpwZ1wiLFwic2hhcmVcIjpcImltZy8xMjAweDYzMC5qcGdcIixcInJlcG9cIjpcImh0dHBzOi8vZ2l0aHViLmNvbS9hY2lkamF6ei8yNTZcIixcImVtYWlsXCI6XCJrZXZpbkAyNTYuaW9cIixcInNvY2lhbFwiOntcImZhY2Vib29rXCI6XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vMjU2bGxjL1wiLFwidHdpdHRlclwiOlwiaHR0cHM6Ly90d2l0dGVyLmNvbS8yNTZsbGNcIixcImluc3RhZ3JhbVwiOlwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS8yNTZsbGMvXCJ9fSxcIndvcmtcIjp7XCJkZWZpbmVyeVwiOntcImNvbG9yXCI6XCIjNTVDN0MwXCIsXCJ0aXRsZVwiOlwiREVGSU5FUllcIixcInRhZ2xpbmVcIjpcImEgZGlnaXRhbCBwcm9kdWN0IGRlc2lnbiBhbmQgaW5ub3ZhdGlvbiBjb21wYW55XCIsXCJkZXRhaWxcIjpbXCJJIGhhZCB0aGUgaG9ub3Igb2Ygd29ya2luZyB3aXRoIHRoZSBEZWZpbmVyeSB0ZWFtIG9uIG91ciBmaXJzdCB2ZXJzaW9uIG9mIDxhIGhyZWY9XFxcImh0dHA6Ly9kZWZpbmVyeS5pb1xcXCIgdGFyZ2V0PVxcXCJfbmV3XFxcIj5kZWZpbmVyeS5pbzwvYT4uIEZvciB0aGlzIHByb2plY3Qgd2Ugd2FudGVkIHRvIGdvIGZvciB0aGUgbW9zdCBpbm5vdmF0aXZlIGFuZCByZWNlbnQgKHdoaWxlIHN0aWxsIGNvbXBhdGlibGUpIHRlY2hub2xvZ3kuXCIsXCJXZSBwYWNrZWQgaW4gbG90cyBvZiBsaXZlbHkgZmVhdHVyZXMgbGlrZSBjbGlwcGluZywgbWFza2luZywgYW5kIHVzaW5nIGJsZW5kIG1vZGVzIChtaXgtYmxlbmQtbW9kZSB0byBiZSBwcmVjaXNlKSBmb3IgY29tcG9zaXRpbmcgZ3JhcGhpYyBlbGVtZW50cywgd2hpY2ggZXZlbiB3b3JrZWQgd2VsbCB3aXRoIHZpZGVvLiAgV2UgYWxzbyBoaXQgb3VyIHRhcmdldCBvbiBtb2JpbGUgYnkgZHluYW1pY2FsbHkgYWx0ZXJuYXRpbmcgbWV0YSB0YWdzIHVzZWQgdG8gY3VzdG9taXplIHRoZSB1c2VyIGV4cGVyaWVuY2Ugb24gYW5kcm9pZCBkZXZpY2VzLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vZGVmaW5lcnkuaW8vXCIsXCJnaXRodWJcIjpcImh0dHA6Ly9naXRodWIuY29tL2FjaWRqYXp6L2RlZmluZXJ5XCJ9fSxcImFzdHJvXCI6e1wiY29sb3JcIjpcIiNDODUwNEJcIixcInRpdGxlXCI6XCJBc3RybyBTdHVkaW9zXCIsXCJ0YWdsaW5lXCI6XCJTdXBlcmNoYXJnZWQgQnJhbmQgYW5kIFByb2R1Y3QgRXhwZXJpZW5jZXMuXCIsXCJkZXRhaWxcIjpbXCJJdCB3YXMgYSBncmVhdCBwbGVhc3VyZSB3b3JraW5nIHdpdGggc3VjaCBhbiBpbm5vdmF0aXZlIHByb2R1Y3QgZGVzaWduIGFnZW5jeS5cIixcIlRoaXMgd2FzIGEgbWFqb3IgY2hhbGxlbmdlIG9mIHN0YXlpbmcgd2l0aCAxMDAlIG9yaWdpbmFsIGFuZCBjdXN0b20gZnVuY3Rpb25hbGl0eSBhbmQgZmVhdHVyZXMgd2hpbGUga2VlcGluZyBhbiBlYXNpbHkgbW9kaWZpYWJsZSBhbmQgbGVnaWJsZSBzdHJ1Y3R1cmUgb2Ygc3ludGFjdGljIHN1Z2FyLlwiLFwiV2l0aCB0d28gc2VwZXJhdGUgYW5kIGZ1bGx5IGN1c3RvbSBDTVMgc2VjdGlvbnMsIGFuZCBhIGNvdXBsZSBlYXN0ZXIgZWdncywgZXZlcnkgc2VjdGlvbiBvZiB0aGlzIHByb2plY3QgcGFja3MgYSBwdW5jaC5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5hc3Ryb3N0dWRpb3MuY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9hc3Ryb1wifX0sXCJiclwiOntcImNvbG9yXCI6XCIjRTA0ODNFXCIsXCJ0aXRsZVwiOlwiQnlzdGFuZGVyIFJldm9sdXRpb25cIixcInRhZ2xpbmVcIjpcIlRha2UgdGhlIHBvd2VyIG91dCBvZiBidWxseWluZ1wiLFwiZGV0YWlsXCI6W1wiR29pbmcgb24gMyB5ZWFycywgMywwMDArIGNvbW1pdHMsIDMgY29tcGxldGUgcmVub3ZhdGlvbnMsIGFuZCAxMCsgY2FtcGFpZ25zLCBpdCdzIGJlZW4gYSBncmVhdCBvcHBvcnR1bml0eSB0byB0YWtlIG9uIGRldmVsb3BtZW50IGFuZCBvcGVyYXRpb25zIGZvciBCeXN0YW5kZXIgUmV2b2x1dGlvbi5cIixcIldvcmtpbmcgd2l0aCBtdWx0aXBsZSBhZ2VuY2llcyB0aHJvdWdoIHRoZSB5ZWFycywgZXNzZW50aWFsbHkgd2l0aCBNYWNLZW56aWUgQmV6b3MnIGNvcmUgdGVhbSBpbiBTZWF0dGxlLCB3ZSd2ZSB0YWNrbGVkIGFsbCBzb3J0cyBvZiB0YXNrcyBkZWFsaW5nIHdpdGggcHJlY29uZGl0aW9uZWQgYW5kIHVzZXItY29udHJpYnV0ZWQgY29udGVudCwgY29uc3RhbnRseSBldm9sdmluZyB0byBkaXNwbGF5IGl0IGNvbWZvcnRhYmx5IGluIG11bHRpcGxlIGVhc2lseSBuYXZpZ2F0YWJsZSBpbnRlcmZhY2VzLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmJ5c3RhbmRlcnJldm9sdXRpb24ub3JnL1wifX0sXCJnaWxtYW5cIjp7XCJjb2xvclwiOlwiI2MwODAwMFwiLFwidGl0bGVcIjpcIkdpbG1hbiBCcmV3aW5nIENvbXBhbnlcIixcInRhZ2xpbmVcIjpcIkJvcm4gYW5kIGJyZXdlZCBpbiBCZXJrZWxleSwgQ2FsaWZvcm5pYVwiLFwiZGV0YWlsXCI6W1wiTG90cyBvZiBmdW4gb24gdGhpcyBwcm9qZWN0IGdvaW5nIGZ1cnRoZXIgdGhhbiBqdXN0IGRldmVsb3BtZW50IGFuZCBvcGVyYXRpb25zIGFuZCBnZXR0aW5nIGludm9sdmVkIGluIGNyZWF0aW5nIHNvbWUgY2luZW1hZ3JhcGhzIHRvIGhlbHAgbWFrZSB0aGUgc2l0ZSBjb21lIGFsaXZlLlwiLFwiT25jZSBsYXVuY2hlZCB0aGlzIHByb2plY3Qgd2lsbCB0YWtlIGFkdmFudGFnZSBvZiB0aGUgbmV3ZXIgd2Via2l0IHB1c2ggYWxsb3dpbmcgc2lsZW50IHZpZGVvIHRvIGF1dG8tcGxheSwgZ2l2aW5nIHZpZGVvIG9uIG1vYmlsZSB3aXRob3V0IHJlc3VsdGluZyBpbiBidWxreSB1bmNvbXByZXNzZWQgR0lGU1wiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vZ2lsbWFuLjI1Ni50ZWNoL1wifX0sXCJzYWtlXCI6e1wiY29sb3JcIjpcIiM3M0I4QjJcIixcInRpdGxlXCI6XCJEZXNpZ25zYWtlIFN0dWRpb1wiLFwidGFnbGluZVwiOlwiRm9yIHRoZSBzYWtlIG9mIGdvb2QgZGVzaWduXCIsXCJkZXRhaWxcIjpbXCJCZWluZyBnaXZlbiBzdWNoIGEgY2xlYW4gYW5kIHByZXR0eSBkZXNpZ24gYW5kIGEgZ3JlYXQgcmljaCBwb3J0Zm9saW8gb2Ygd29yaywgYnVpbGRpbmcgYSBmbHVpZCBleHBlcmllbmNlIHdhcyBhIHBsZWFzdXJlLlwiLFwiQnVpbHQgYSBjb21wbGV0ZWx5IGN1c3RvbSBTUEEgZXhwZXJpZW5jZSBwcmVsb2FkaW5nIGFsbCBpbWFnZXMgb2YgZWFjaCBzZWN0aW9uIGFuZCBuZXZlciByZWZyZXNoaW5nLCB3aXRoIGxvYWRpbmcgYW5pbWF0aW9ucyBzaG93aW5nIHJlYWx0aW1lIGxvYWRpbmcgLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmRlc2lnbnNha2VzdHVkaW8uY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9zYWtlXCJ9fSxcImRhZmZvZGlsXCI6e1wiY29sb3JcIjpcIiNFRkUwNDdcIixcInRpdGxlXCI6XCJEYWZmb2RpbCBEaWdpdGFsXCIsXCJ0YWdsaW5lXCI6XCJIZWxwaW5nIGJyYW5kcyB0ZWxsIHRoZWlyIHN0b3JpZXNcIixcImRldGFpbFwiOltcIkkgd2FudGVkIHRvIGFpbSBmb3IgYSBjb21wbGV0ZSBTUEEgZXhwZXJpZW5jZSwgZm9jdXNpbmcgZGlyZWN0bHkgb24gcHJlbG9hZGluZyBhbGwgaW1hZ2VyeSBhbmQgdXNpbmcgY3VzdG9tIGxvYWRpbmcgYW5pbWF0aW9ucyB0byBrZWVwIGEgbmljZSBmbG93aW5nIGV4cGVyaWVuY2VcIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5kYWZmb2RpbGRpZ2l0YWwuY29tL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9kYWZmb2RpbFwifX0sXCJhcFwiOntcImNvbG9yXCI6XCIjQTQ5MjY2XCIsXCJ0aXRsZVwiOlwiQXVkZW1hcnMgUGlndWV0XCIsXCJ0YWdsaW5lXCI6XCJVbHRyYS1sdXh1cnkgc3dpc3Mgd2F0Y2hlc1wiLFwiZGV0YWlsXCI6W1wiSSBjYW1lIGFib2FyZCBicmllZmx5IHRvIGhlbHAgd2l0aCB0aGUgYmFjay1lbmQsIGFuZCB3YXMgZ2l2ZW4gdGhlIHBsZWFzdXJlIG9mIHNldHRpbmcgdGhlIGZvdW5kYXRpb24gYW5kIHN0cnVjdHVyZSBmb3IgdjEgb2YgdGhlaXIgQVBJLlwiLFwiQXQgdGhlIGVuZCB3ZSBoYWQgc3VjY2Vzc2Z1bGx5IGNlbnRyYWxpemVkIGFsbCB3YXRjaCBhbmQgcmV0YWlsIHN0b3JlIGNvbnRlbnQgdGhhdCBkcm92ZSB0aGUgc2l0ZSBhbmQgYXBwcyB0byB2ZXJzaW9uLXNlcGVyYXRlZCBlbmRwb2ludHMgdGhhdCBtYXRjaCB0aGUgSlNPTkFQSSBzcGVjLlwiXSxcImxpbmtzXCI6e1widXJsXCI6XCJodHRwOi8vd3d3LmF1ZGVtYXJzcGlndWV0LmNvbS9cIn19LFwic3R1ZGlvXCI6e1wiY29sb3JcIjpcIiM0ODY3YWFcIixcInRpdGxlXCI6XCJGYWNlYm9vayBTdHVkaW9cIixcInRhZ2xpbmVcIjpcIkZhY2Vib29rIEF3YXJkc1wiLFwiZGV0YWlsXCI6W1wiVmVyeSBoYXBweSB0byB3b3JrIG9uIHRoaXMgbWFqb3IgY29sbGFib3JhdGlvbiB3aXRoIEZhY2Vib29rLiBPbmUgb2YgdGhlIG1vc3QgdGhvcm91Z2ggcHJvamVjdHMgSSd2ZSBoYWQgYSBwbGVhdXJlIHRvIHdvcmsgb24sIGZyb20gbXVsdGlwbGUgY29kZSBhdWRpdHMgdG8gdmVyeSBkZXRhaWxlZCBzdHJlc3MgYW5kIHVuaXQgdGVzdGluZy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL3d3dy5mYWNlYm9vay1zdHVkaW8uY29tL1wifX19fTsiLCJJbmRleCA9XG5cbiAgaTogLT5cblxuICAgIF8ub24gJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJ1xuXG4gICAgQGxvYWRJbWFnZXMgLT5cblxuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5hZGRDbGFzcyAnbG9hZGVkJ1xuXG4gICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnc2V0dGxlZCdcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRlZCdcbiAgICAgICwgMjAwMFxuXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIF8ub24gJy5tZW51ID4gLm9wdGlvbi5vcHRpb25fMSdcbiAgICAgICAgXy5vbiAnLnNlY3Rpb24uc2VjdGlvbl93b3JrJ1xuXG4gICAgICAgIG5ldyBQYXJhbGxheCAkKCcuc2VjdGlvbi5zZWN0aW9uX3dvcmsnKVswXVxuXG4gICAgICAgIEluZGV4LmhhbmRsZXJzKClcbiAgICAgICAgSW5kZXgubW9kYWwuaGFuZGxlcnMoKVxuXG4gICAgICAsIDIxMDBcblxuICBsb2FkSW1hZ2VzOiAoY29tcGxldGUpIC0+XG5cbiAgICBkYmFyLmkoKVxuXG4gICAgaW1hZ2VzID0gW11cblxuICAgIGZvciBkaXIgb2YgY29uZmlnLndvcmtcbiAgICAgIGltYWdlcy5wdXNoIFwiaW1hZ2VzL3dvcmsvI3tkaXJ9L2xvZ28ucG5nXCJcbiAgICAgIGltYWdlcy5wdXNoIFwiaW1hZ2VzL3dvcmsvI3tkaXJ9L2JhY2tncm91bmQuanBnXCJcblxuICAgIFByZWxvYWQgaW1hZ2VzLCAocHJvZ3Jlc3MpIC0+XG4gICAgICBkYmFyLnBlcmMgcHJvZ3Jlc3NcbiAgICAsIChkb25lKSAtPlxuICAgICAgZGJhci5kKClcbiAgICAgIGNvbXBsZXRlKClcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbycpLmNsaWNrIEluZGV4LmN5Y2xlXG4gICAgJCgnLm1lbnUgPiAub3B0aW9uJykuY2xpY2sgSW5kZXgub3B0aW9uXG4gICAgJCgnLnNlY3Rpb24uc2VjdGlvbl93b3JrID4gLndvcmsgPiAuam9iID4gLmlubmVyJykuY2xpY2sgSW5kZXguam9iXG5cbiAgb3B0aW9uOiAtPlxuICAgIF8ub2ZmICcubWVudSA+IC5vcHRpb24nXG4gICAgXy5vbiB0aGlzXG4gICAgXy5vZmYgJy5zZWN0aW9uJ1xuICAgIF8ub24gXCIuc2VjdGlvbi5zZWN0aW9uXyN7JCh0aGlzKS5kYXRhKCdvcHRpb24nKX1cIlxuXG4gIGN5Y2xlOiAtPlxuXG4gICAgJCgnLmxvZ28gPiAuaW5uZXInKS5hZGRDbGFzcyAnb2ZmaW5nJ1xuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vZmYgJy5sb2dvJ1xuICAgICAgJCgnLmxvZ28gPiAuaW5uZXInKS5yZW1vdmVDbGFzcyAnb2ZmaW5nJ1xuICAgICwgNjAwXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBfLm9uICcubG9nbydcbiAgICAsIDYxMFxuXG4gIG1vZGFsOlxuXG4gICAgaTogKGpvYikgLT5cbiAgICAgIF8ub24gJy5mYWRlLCAubW9kYWwnXG4gICAgICBnaWcgPSBjb25maWcud29ya1tqb2JdXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5jc3MgJ2NvbG9yJywgZ2lnLmNvbG9yXG5cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmh0bWwgZ2lnLnRpdGxlXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGFnbGluZScpLmh0bWwgZ2lnLnRhZ2xpbmVcbiAgICAgIGZvciBwIGluIGdpZy5kZXRhaWxcbiAgICAgICAgY29uc29sZS5sb2cgcFxuICAgICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfZGV0YWlsJykuYXBwZW5kIFwiPHA+I3twfTwvcD5cIlxuXG4gICAgICBmb3IgdHlwZSwgbGluayBvZiBnaWcubGlua3NcbiAgICAgICAgXy5vbiBcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtfI3t0eXBlfVwiXG4gICAgICAgICQoXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXyN7dHlwZX1cIikuYXR0ciAnaHJlZicsIGxpbmtcblxuICAgIGhhbmRsZXJzOiAtPlxuICAgICAgJCgnLmZhZGUsIC5tb2RhbCA+IC5pbm5lciA+IC5jbG9zZScpLmNsaWNrIEluZGV4Lm1vZGFsLmRcblxuICAgIGQ6IC0+XG4gICAgICBfLm9mZiAnLmZhZGUsIC5tb2RhbCdcbiAgICAgIF8ub2ZmIFwiLmJvZHkgPiAubGlua3MgPiAubGlua1wiXG5cbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90aXRsZScpLmh0bWwgJydcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV90YWdsaW5lJykuaHRtbCAnJ1xuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X2RldGFpbCcpLmh0bWwgJydcblxuICBqb2I6IC0+XG4gICAgSW5kZXgubW9kYWwuaSAkKHRoaXMpLmRhdGEgJ2pvYidcblxuXG4iLCJQcmVsb2FkID0gKHNyY2VzLCBwcm9ncmVzcywgY29tcGxldGUpIC0+XG5cbiAgaW1hZ2VzID0gW11cbiAgbG9hZGVkID0gMFxuICB0b3RhbCA9IHNyY2VzLmxlbmd0aFxuXG4gIGNvbXBsZXRlIHRydWUgaWYgdG90YWwgaXMgMFxuXG4gIGZvciBzcmMsIGkgaW4gc3JjZXNcbiAgICBpbWFnZXNbaV0gPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlc1tpXS5zcmMgPSBzcmNcbiAgICBpbWFnZXNbaV0ub25sb2FkID0gLT5cbiAgICAgIGxvYWRlZCsrXG4gICAgICBwZXJjID0gTWF0aC5yb3VuZChsb2FkZWQvdG90YWwqMTAwKS8xMDBcbiAgICAgIGlmIGxvYWRlZCBpcyB0b3RhbCB0aGVuIGNvbXBsZXRlKHRydWUpIGVsc2UgcHJvZ3Jlc3MocGVyYylcbiJdfQ==
