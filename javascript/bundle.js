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
      "tagline": "Creators of Supercharged Brand and Product Experiences.",
      "links": {
        "url": "http://www.astrostudios.com/"
      }
    },
    "ap": {
      "color": "#A49266",
      "url": "http://www.audemarspiguet.com/",
      "title": "Audemars Piguet"
    },
    "br": {
      "color": "#221F20",
      "url": "http://www.bystanderrevolution.org/",
      "title": "Bystander Revolution"
    },
    "daffodil": {
      "color": "#7F7774",
      "url": "http://www.daffodildigital.com/",
      "title": "Daffodil Digital"
    },
    "gilman": {
      "color": "#221f20",
      "url": "http://gilman.256.tech/",
      "title": "Gilman Brewing Company"
    },
    "sake": {
      "color": "#73B8B2",
      "ur/": "http://www.designsakestudio.com/",
      "title": "Designsake Studio"
    },
    "studio": {
      "color": "#4867aa",
      "url": "http://www.facebook-studio.com/",
      "title": "Facebook Studio"
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwicHJlbG9hZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxD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Q0FBMUI7SUFBQSxRQUFBLENBQVMsSUFBVCxFQUFBOztBQUVBO09BQUEsK0NBQUE7O0lBQ0UsTUFBTyxDQUFBLENBQUEsQ0FBUCxHQUFnQixJQUFBLEtBQUEsQ0FBQTtJQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsR0FBVixHQUFnQjtpQkFDaEIsTUFBTyxDQUFBLENBQUEsQ0FBRSxDQUFDLE1BQVYsR0FBbUIsU0FBQTtBQUNqQixVQUFBO01BQUEsTUFBQTtNQUNBLElBQUEsR0FBTyxJQUFJLENBQUMsS0FBTCxDQUFXLE1BQUEsR0FBTyxLQUFQLEdBQWEsR0FBeEIsQ0FBQSxHQUE2QjtNQUNwQyxJQUFHLE1BQUEsS0FBVSxLQUFiO2VBQXdCLFFBQUEsQ0FBUyxJQUFULEVBQXhCO09BQUEsTUFBQTtlQUE0QyxRQUFBLENBQVMsSUFBVCxFQUE1Qzs7SUFIaUI7QUFIckI7O0FBUlEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXyA9XG5cbiAgaTogLT5cbiAgICBAY29uc29sZSA9IHNldEludGVydmFsKEBkZXRlY3QuYmluZChAKSwgMjAwKVxuXG4gIHA6XG4gICAgb2ZmaW5nOiBmYWxzZVxuICAgIG9mZnRpbWU6IDBcblxuICB0dXJuOiAoZWwsIHJlbW92ZT1mYWxzZSwgYWRkPWZhbHNlKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiByZW1vdmUgaXNudCBmYWxzZVxuICAgICAgZWwucmVtb3ZlQ2xhc3MocmVtb3ZlKVxuXG4gICAgaWYgYWRkIGlzbnQgZmFsc2VcbiAgICAgIGVsLmFkZENsYXNzKGFkZClcblxuICAgIHJldHVybiB0cnVlXG5cbiAgb2ZmOiAoZWwsIHA9e30pIC0+XG5cbiAgICBpZiBwLm9mZmluZyBhbmQgcC5vZmZ0aW1lID4gMFxuXG4gICAgICBAdHVybiBlbCwgZmFsc2UsICdvZmZpbmcnXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIEB0dXJuIGVsLCAnb2ZmaW5nJywgZmFsc2VcbiAgICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG4gICAgICAsIHAub2ZmdGltZSoxMDAwICsgMTAwXG5cbiAgICBlbHNlXG4gICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcblxuICAgIHJldHVyblxuXG4gIG9uOiAoZWwsIHApIC0+XG4gICAgQHR1cm4gZWwsICdvZmYnLCAnb24nXG5cbiAgc3dhcDogKGVsLCBwKSAtPlxuXG4gICAgaWYgZWwgbm90IGluc3RhbmNlb2YgalF1ZXJ5XG4gICAgICBlbCA9ICQoZWwpXG5cbiAgICBpZiBlbC5oYXNDbGFzcyAnb2ZmJ1xuICAgICAgQG9uIGVsLCBwXG4gICAgZWxzZVxuICAgICAgQG9mZiBlbCwgcFxuXG4gICAgcmV0dXJuXG5cbiAgZW5jb2RlOiAoc3RyKSAtPlxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKVxuICAgICAgLnJlcGxhY2UoLyEvZywgJyUyMScpXG4gICAgICAucmVwbGFjZSgvJy9nLCAnJTI3JylcbiAgICAgIC5yZXBsYWNlKC9cXCgvZywgJyUyOCcpXG4gICAgICAucmVwbGFjZSgvXFwpL2csICclMjknKVxuICAgICAgLnJlcGxhY2UoL1xcKi9nLCAnJTJBJylcbiAgICAgIC5yZXBsYWNlKC8lMjAvZywgJysnKVxuXG4gIHQ6IChjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWUpIC0+XG4gICAgX2dhcS5wdXNoIFsnX3RyYWNrRXZlbnQnLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCwgdmFsdWVdXG5cbiAgcmFuZDogKG1pbiwgbWF4KSAtPlxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtYXgpICsgbWluXG5cbiAgbGxjOiAtPlxuICAgIGFzY2lpID0gXCJcIlwiXG5cbiAgICAgICVjbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uLi4uLTo6Ly86Oi0uLi4uLi4uLTo6Ojo6Ojo6Ojo6OjotLi4uLi4uLi4tOjovLy86LS5vbW1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi46K3loZGRkZGRkaHkrLS4uLi4vZGRkZGRkZGRkZGRkZCsuLi4uLi4vc2hkZGRkZGRkeW9kbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLWhtbW1oeXl5eWRtbW1oOi4uLi9tbW1taGhoaGhoaGhoKy4uLi46eWRtbWRoeXl5aGRkb29tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLXNzOi0uLi4uLXltbW15Li4uL21tbW0tLS0tLS0tLS0uLi4uOmRtbW1zOi0uLi4tOi8uLW1cbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4ueW1tbXkuLi4vbW1tbS0vK29vbys6LS4uLi55bW1teS06K29vbysvLS4uZFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNtbW1kOi4uLi9tbW1taG1tbW1tbWRoKy4uLmRtbW1zaGRtbW1tbW1ocy1oXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uOnNkbW1keTouLi4uOmhoZGhvKy8vK3ltbW1tKy4uZG1tbWR5by8vK3NkbW1taGhcbiAgICAgIGQuLi4uLi4uLi4uLi4uLi4uLi4tK3lkbW1keS8uLi4uLi4uLS06Li4uLi4uLnNtbW1oLi55bW1tcy4uLi4uLjptbW1tbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi06c2htbW1kcy8tLS0tLS4uLi46cy8tLS4uLi06aG1tbXMuLjpkbW1kLy0uLi4tb21tbW1tXG4gICAgICBtby4uLi4uLi4uLi4uLi4uaG1tbW1tbWhoaGhoaGhoLi4uK2RtbWRoeXl5aGRtbW15LS4uLi9obW1taHl5eWhtbW1kaG1cbiAgICAgIG1kLS4uLi4uLi4uLi4uLi5kZGRkZGRkZGRkZGRkZGQuLi4tK3NoZGRkZGRkZGh5Ly0uLi4uLi1veWRkZGRkZGRobzpkbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLjo6Ojo6Ojo6Ojo6Ojo6Oi4uLi4uLi4tOi8vLzo6LS4uLi4uLi4uLi4uLTovLy86LS4ub21tXG4gICAgICBtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cblxuICAgICAgOjogc3ludGFjdGljIHN1Z2FyIGJ5IDI1NlxuICAgICAgOjogaHR0cDovLzI1Ni5pby9cbiAgICAgIDo6ICN7Y29uZmlnLm1ldGEucmVwb31cbiAgICBcIlwiXCJcbiAgICBjb25zb2xlLmxvZyBhc2NpaSwgXCJjb2xvcjogZ3JleTsgZm9udC1mYW1pbHk6IE1lbmxvLCBtb25vc3BhY2U7XCJcblxuICBkZXRlY3Q6IC0+XG4gICAgaWYgKCgod2luZG93Lm91dGVySGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0KSA+IDEwMCkgfHwgKCh3aW5kb3cub3V0ZXJXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoKSA+IDEwMCkpXG4gICAgICBAbGxjKClcbiAgICAgIGNsZWFySW50ZXJ2YWwgQGNvbnNvbGVcblxuXy5pKClcbiIsImNvbmZpZyA9IHtcImNvbG9yXCI6e1wiYmxhY2sxXCI6XCIjMkIyRDMyXCIsXCJibGFjazJcIjpcIiM0MTQzNDdcIixcIndoaXRlMVwiOlwiI2ZmZmZmZlwiLFwid2hpdGUyXCI6XCIjZWVlZWVlXCIsXCJ3aGl0ZTNcIjpcIiNhYmFiYWRcIixcInB1cnBsZTFcIjpcIiMzMzI2MzFcIixcInB1cnBsZTJcIjpcIiM0RDM5NEJcIixcInB1cnBsZTNcIjpcIiNBQjlCQTlcIixcInRlYWwxXCI6XCIjNEM5Njg5XCIsXCJ0ZWFsMlwiOlwiI0IxQzlDNVwifSxcImZvbnRcIjp7XCJjb3B5MVwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMjBweFwifSxcImNvcHkyXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIzMnB4XCJ9LFwiY29weTNcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSByZWd1bGFyXCIsXCJmb250LXNpemVcIjpcIjMycHhcIixcImZvbnQtd2VpZ2h0XCI6XCI1MDBcIn0sXCJjb3B5NFwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIHJlZ3VsYXJcIixcImZvbnQtc2l6ZVwiOlwiMjRweFwiLFwiZm9udC13ZWlnaHRcIjpcIjUwMFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly8yNTYuaW8vXCIsXCJ0aXRsZVwiOlwiMjU2IGxsY1wiLFwiZGVzY3JpcHRpb25cIjpcImJ1aWxkaW5nIGRpZ2l0YWwgdGhpbmdzXCIsXCJrZXl3b3Jkc1wiOlwidGhpbmsgb2Yga2V5d29yZHNcIixcInBob25lXCI6OTQ5MjkwODk4OSxcInRyYWNraW5nSURcIjpcIlVBLTc1MTI4MzU1LTFcIixcImxvZ29cIjpcImltZy9sb2dvXzEwMDB4MTAwMC5qcGdcIixcInNoYXJlXCI6XCJpbWcvMTIwMHg2MzAuanBnXCIsXCJyZXBvXCI6XCJodHRwczovL2dpdGh1Yi5jb20vYWNpZGphenovMjU2XCIsXCJlbWFpbFwiOlwia2V2aW5AMjU2LmlvXCIsXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzI1NmxsYy9cIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vMjU2bGxjXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vMjU2bGxjL1wifX0sXCJ3b3JrXCI6e1wiZGVmaW5lcnlcIjp7XCJjb2xvclwiOlwiIzU1QzdDMFwiLFwidGl0bGVcIjpcIkRFRklORVJZXCIsXCJ0YWdsaW5lXCI6XCJhIGRpZ2l0YWwgcHJvZHVjdCBkZXNpZ24gYW5kIGlubm92YXRpb24gY29tcGFueVwiLFwiZGV0YWlsXCI6W1wiSSBoYWQgdGhlIGhvbm9yIG9mIHdvcmtpbmcgd2l0aCB0aGUgRGVmaW5lcnkgdGVhbSBvbiBvdXIgZmlyc3QgdmVyc2lvbiBvZiA8YSBocmVmPVxcXCJodHRwOi8vZGVmaW5lcnkuaW9cXFwiIHRhcmdldD1cXFwiX25ld1xcXCI+ZGVmaW5lcnkuaW88L2E+LiBGb3IgdGhpcyBwcm9qZWN0IHdlIHdhbnRlZCB0byBnbyBmb3IgdGhlIG1vc3QgaW5ub3ZhdGl2ZSBhbmQgcmVjZW50ICh3aGlsZSBzdGlsbCBjb21wYXRpYmxlKSB0ZWNobm9sb2d5LlwiLFwiV2UgcGFja2VkIGluIGxvdHMgb2YgbGl2ZWx5IGZlYXR1cmVzIGxpa2UgY2xpcHBpbmcsIG1hc2tpbmcsIGFuZCB1c2luZyBibGVuZCBtb2RlcyAobWl4LWJsZW5kLW1vZGUgdG8gYmUgcHJlY2lzZSkgZm9yIGNvbXBvc2l0aW5nIGdyYXBoaWMgZWxlbWVudHMsIHdoaWNoIGV2ZW4gd29ya2VkIHdlbGwgd2l0aCB2aWRlby4gIFdlIGFsc28gaGl0IG91ciB0YXJnZXQgb24gbW9iaWxlIGJ5IGR5bmFtaWNhbGx5IGFsdGVybmF0aW5nIG1ldGEgdGFncyB1c2VkIHRvIGN1c3RvbWl6ZSB0aGUgdXNlciBleHBlcmllbmNlIG9uIGFuZHJvaWQgZGV2aWNlcy5cIl0sXCJsaW5rc1wiOntcInVybFwiOlwiaHR0cDovL2RlZmluZXJ5LmlvL1wiLFwiZ2l0aHViXCI6XCJodHRwOi8vZ2l0aHViLmNvbS9hY2lkamF6ei9kZWZpbmVyeVwifX0sXCJhc3Ryb1wiOntcImNvbG9yXCI6XCIjQzg1MDRCXCIsXCJ0aXRsZVwiOlwiQXN0cm8gU3R1ZGlvc1wiLFwidGFnbGluZVwiOlwiQ3JlYXRvcnMgb2YgU3VwZXJjaGFyZ2VkIEJyYW5kIGFuZCBQcm9kdWN0IEV4cGVyaWVuY2VzLlwiLFwibGlua3NcIjp7XCJ1cmxcIjpcImh0dHA6Ly93d3cuYXN0cm9zdHVkaW9zLmNvbS9cIn19LFwiYXBcIjp7XCJjb2xvclwiOlwiI0E0OTI2NlwiLFwidXJsXCI6XCJodHRwOi8vd3d3LmF1ZGVtYXJzcGlndWV0LmNvbS9cIixcInRpdGxlXCI6XCJBdWRlbWFycyBQaWd1ZXRcIn0sXCJiclwiOntcImNvbG9yXCI6XCIjMjIxRjIwXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuYnlzdGFuZGVycmV2b2x1dGlvbi5vcmcvXCIsXCJ0aXRsZVwiOlwiQnlzdGFuZGVyIFJldm9sdXRpb25cIn0sXCJkYWZmb2RpbFwiOntcImNvbG9yXCI6XCIjN0Y3Nzc0XCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuZGFmZm9kaWxkaWdpdGFsLmNvbS9cIixcInRpdGxlXCI6XCJEYWZmb2RpbCBEaWdpdGFsXCJ9LFwiZ2lsbWFuXCI6e1wiY29sb3JcIjpcIiMyMjFmMjBcIixcInVybFwiOlwiaHR0cDovL2dpbG1hbi4yNTYudGVjaC9cIixcInRpdGxlXCI6XCJHaWxtYW4gQnJld2luZyBDb21wYW55XCJ9LFwic2FrZVwiOntcImNvbG9yXCI6XCIjNzNCOEIyXCIsXCJ1ci9cIjpcImh0dHA6Ly93d3cuZGVzaWduc2FrZXN0dWRpby5jb20vXCIsXCJ0aXRsZVwiOlwiRGVzaWduc2FrZSBTdHVkaW9cIn0sXCJzdHVkaW9cIjp7XCJjb2xvclwiOlwiIzQ4NjdhYVwiLFwidXJsXCI6XCJodHRwOi8vd3d3LmZhY2Vib29rLXN0dWRpby5jb20vXCIsXCJ0aXRsZVwiOlwiRmFjZWJvb2sgU3R1ZGlvXCJ9fX07IiwiSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBfLm9uICdoZWFkZXIgPiAuaW5uZXIgPiAubG9nbydcblxuICAgIEBsb2FkSW1hZ2VzIC0+XG5cbiAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkaW5nJ1xuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykuYWRkQ2xhc3MgJ2xvYWRlZCdcblxuICAgICAgJCgnaGVhZGVyJykuYWRkQ2xhc3MgJ3NldHRsZWQnXG5cbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAgICQoJy5tZW51ID4gLm9wdGlvbicpLnJlbW92ZUNsYXNzICdsb2FkZWQnXG4gICAgICAsIDIwMDBcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBfLm9uICcubWVudSA+IC5vcHRpb24ub3B0aW9uXzEnXG4gICAgICAgIF8ub24gJy5zZWN0aW9uLnNlY3Rpb25fd29yaydcblxuICAgICAgICBuZXcgUGFyYWxsYXggJCgnLnNlY3Rpb24uc2VjdGlvbl93b3JrJylbMF1cblxuICAgICAgICBJbmRleC5oYW5kbGVycygpXG4gICAgICAgIEluZGV4Lm1vZGFsLmhhbmRsZXJzKClcblxuICAgICAgLCAyMTAwXG5cbiAgbG9hZEltYWdlczogKGNvbXBsZXRlKSAtPlxuXG4gICAgZGJhci5pKClcblxuICAgIGltYWdlcyA9IFtdXG5cbiAgICBmb3IgZGlyIG9mIGNvbmZpZy53b3JrXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9sb2dvLnBuZ1wiXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9iYWNrZ3JvdW5kLmpwZ1wiXG5cbiAgICBQcmVsb2FkIGltYWdlcywgKHByb2dyZXNzKSAtPlxuICAgICAgZGJhci5wZXJjIHByb2dyZXNzXG4gICAgLCAoZG9uZSkgLT5cbiAgICAgIGRiYXIuZCgpXG4gICAgICBjb21wbGV0ZSgpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBJbmRleC5jeWNsZVxuICAgICQoJy5tZW51ID4gLm9wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuICAgICQoJy5zZWN0aW9uLnNlY3Rpb25fd29yayA+IC53b3JrID4gLmpvYiA+IC5pbm5lcicpLmNsaWNrIEluZGV4LmpvYlxuXG4gIG9wdGlvbjogLT5cbiAgICBfLm9mZiAnLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub24gdGhpc1xuICAgIF8ub2ZmICcuc2VjdGlvbidcbiAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8jeyQodGhpcykuZGF0YSgnb3B0aW9uJyl9XCJcblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcblxuICBtb2RhbDpcblxuICAgIGk6IChqb2IpIC0+XG4gICAgICBfLm9uICcuZmFkZSwgLm1vZGFsJ1xuICAgICAgZ2lnID0gY29uZmlnLndvcmtbam9iXVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RpdGxlJykuY3NzICdjb2xvcicsIGdpZy5jb2xvclxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sIGdpZy50aXRsZVxuICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X3RhZ2xpbmUnKS5odG1sIGdpZy50YWdsaW5lXG4gICAgICBmb3IgcCBpbiBnaWcuZGV0YWlsXG4gICAgICAgIGNvbnNvbGUubG9nIHBcbiAgICAgICAgJCgnLmJvZHkgPiAuY29weS5jb3B5X2RldGFpbCcpLmFwcGVuZCBcIjxwPiN7cH08L3A+XCJcblxuICAgICAgZm9yIHR5cGUsIGxpbmsgb2YgZ2lnLmxpbmtzXG4gICAgICAgIF8ub24gXCIuYm9keSA+IC5saW5rcyA+IC5saW5rXyN7dHlwZX1cIlxuICAgICAgICAkKFwiLmJvZHkgPiAubGlua3MgPiAubGlua18je3R5cGV9XCIpLmF0dHIgJ2hyZWYnLCBsaW5rXG5cbiAgICBoYW5kbGVyczogLT5cbiAgICAgICQoJy5mYWRlLCAubW9kYWwgPiAuaW5uZXIgPiAuY2xvc2UnKS5jbGljayBJbmRleC5tb2RhbC5kXG5cbiAgICBkOiAtPlxuICAgICAgXy5vZmYgJy5mYWRlLCAubW9kYWwnXG4gICAgICBfLm9mZiBcIi5ib2R5ID4gLmxpbmtzID4gLmxpbmtcIlxuXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGl0bGUnKS5odG1sICcnXG4gICAgICAkKCcuYm9keSA+IC5jb3B5LmNvcHlfdGFnbGluZScpLmh0bWwgJydcbiAgICAgICQoJy5ib2R5ID4gLmNvcHkuY29weV9kZXRhaWwnKS5odG1sICcnXG5cbiAgam9iOiAtPlxuICAgIEluZGV4Lm1vZGFsLmkgJCh0aGlzKS5kYXRhICdqb2InXG5cblxuIiwiUHJlbG9hZCA9IChzcmNlcywgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIGltYWdlcyA9IFtdXG4gIGxvYWRlZCA9IDBcbiAgdG90YWwgPSBzcmNlcy5sZW5ndGhcblxuICBjb21wbGV0ZSB0cnVlIGlmIHRvdGFsIGlzIDBcblxuICBmb3Igc3JjLCBpIGluIHNyY2VzXG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gc3JjXG4gICAgaW1hZ2VzW2ldLm9ubG9hZCA9IC0+XG4gICAgICBsb2FkZWQrK1xuICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG4iXX0=
