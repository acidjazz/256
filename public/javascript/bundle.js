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
      "font-size": "16px"
    },
    "copy2": {
      "font-family": "Roboto",
      "font-size": "32px"
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
      "url": "http://www.astrostudios.com/",
      "title": "Definery LLC"
    },
    "astro": {
      "color": "#C8504B",
      "url": "http://www.astrostudios.com/",
      "title": "Astro Studios"
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
        return Index.handlers();
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
    return $('.menu > .option').click(Index.option);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIiwicHJlbG9hZC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQTs7QUFBQSxDQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtXQUNELElBQUMsQ0FBQSxPQUFELEdBQVcsV0FBQSxDQUFZLElBQUMsQ0FBQSxNQUFNLENBQUMsSUFBUixDQUFhLElBQWIsQ0FBWixFQUE2QixHQUE3QjtFQURWLENBQUg7RUFHQSxDQUFBLEVBQ0U7SUFBQSxNQUFBLEVBQVEsS0FBUjtJQUNBLE9BQUEsRUFBUyxDQURUO0dBSkY7RUFPQSxJQUFBLEVBQU0sU0FBQyxFQUFELEVBQUssTUFBTCxFQUFtQixHQUFuQjs7TUFBSyxTQUFPOzs7TUFBTyxNQUFJOztJQUUzQixJQUFHLENBQUEsQ0FBQSxFQUFBLFlBQWtCLE1BQWxCLENBQUg7TUFDRSxFQUFBLEdBQUssQ0FBQSxDQUFFLEVBQUYsRUFEUDs7SUFHQSxJQUFHLE1BQUEsS0FBWSxLQUFmO01BQ0UsRUFBRSxDQUFDLFdBQUgsQ0FBZSxNQUFmLEVBREY7O0lBR0EsSUFBRyxHQUFBLEtBQVMsS0FBWjtNQUNFLEVBQUUsQ0FBQyxRQUFILENBQVksR0FBWixFQURGOztBQUdBLFdBQU87RUFYSCxDQVBOO0VBb0JBLEdBQUEsRUFBSyxTQUFDLEVBQUQsRUFBSyxDQUFMOztNQUFLLElBQUU7O0lBRVYsSUFBRyxDQUFDLENBQUMsTUFBRixJQUFhLENBQUMsQ0FBQyxPQUFGLEdBQVksQ0FBNUI7TUFFRSxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxLQUFWLEVBQWlCLFFBQWpCO01BQ0EsVUFBQSxDQUFXLFNBQUE7UUFDVCxJQUFDLENBQUEsSUFBRCxDQUFNLEVBQU4sRUFBVSxRQUFWLEVBQW9CLEtBQXBCO2VBQ0EsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsSUFBVixFQUFnQixLQUFoQjtNQUZTLENBQVgsRUFHRSxD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QU0sT0FBTjthQUNBLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLFdBQXBCLENBQWdDLFFBQWhDO0lBRlMsQ0FBWCxFQUdFLEdBSEY7V0FLQSxVQUFBLENBQVcsU0FBQTthQUNULENBQUMsQ0FBQyxFQUFGLENBQUssT0FBTDtJQURTLENBQVgsRUFFRSxHQUZGO0VBVEssQ0FwRFA7OztBQ0ZGLElBQUE7O0FBQUEsT0FBQSxHQUFVLFNBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsUUFBbEI7QUFFUixNQUFBO0VBQUEsTUFBQSxHQUFTO0VBQ1QsTUFBQSxHQUFTO0VBQ1QsS0FBQSxHQUFRLEtBQUssQ0FBQztFQUVkLElBQWlCLEtBQUEsS0FBUyxDQUExQjtJQUFBLFFBQUEsQ0FBUyxJQUFULEVBQUE7O0FBRUE7T0FBQSwrQ0FBQTs7SUFDRSxNQUFPLENBQUEsQ0FBQSxDQUFQLEdBQWdCLElBQUEsS0FBQSxDQUFBO0lBQ2hCLE1BQU8sQ0FBQSxDQUFBLENBQUUsQ0FBQyxHQUFWLEdBQWdCO2lCQUNoQixNQUFPLENBQUEsQ0FBQSxDQUFFLENBQUMsTUFBVixHQUFtQixTQUFBO0FBQ2pCLFVBQUE7TUFBQSxNQUFBO01BQ0EsSUFBQSxHQUFPLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBQSxHQUFPLEtBQVAsR0FBYSxHQUF4QixDQUFBLEdBQTZCO01BQ3BDLElBQUcsTUFBQSxLQUFVLEtBQWI7ZUFBd0IsUUFBQSxDQUFTLElBQVQsRUFBeEI7T0FBQSxNQUFBO2VBQTRDLFFBQUEsQ0FBUyxJQUFULEVBQTVDOztJQUhpQjtBQUhyQjs7QUFSUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibGFjazFcIjpcIiMyQjJEMzJcIixcImJsYWNrMlwiOlwiIzQxNDM0N1wiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJ3aGl0ZTJcIjpcIiNlZWVlZWVcIixcIndoaXRlM1wiOlwiI2FiYWJhZFwiLFwicHVycGxlMVwiOlwiIzMzMjYzMVwiLFwicHVycGxlMlwiOlwiIzREMzk0QlwiLFwicHVycGxlM1wiOlwiI0FCOUJBOVwiLFwidGVhbDFcIjpcIiM0Qzk2ODlcIixcInRlYWwyXCI6XCIjQjFDOUM1XCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSBleHRyYWJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzZweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vMjU2LmlvL1wiLFwidGl0bGVcIjpcIjI1NiBsbGNcIixcImRlc2NyaXB0aW9uXCI6XCJidWlsZGluZyBkaWdpdGFsIHRoaW5nc1wiLFwia2V5d29yZHNcIjpcInRoaW5rIG9mIGtleXdvcmRzXCIsXCJwaG9uZVwiOjk0OTI5MDg5ODksXCJ0cmFja2luZ0lEXCI6XCJVQS03NTEyODM1NS0xXCIsXCJsb2dvXCI6XCJpbWcvbG9nb18xMDAweDEwMDAuanBnXCIsXCJzaGFyZVwiOlwiaW1nLzEyMDB4NjMwLmpwZ1wiLFwicmVwb1wiOlwiaHR0cHM6Ly9naXRodWIuY29tL2FjaWRqYXp6LzI1NlwiLFwiZW1haWxcIjpcImtldmluQDI1Ni5pb1wiLFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8yNTZsbGMvXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tLzI1NmxsY1wiLFwiaW5zdGFncmFtXCI6XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLzI1NmxsYy9cIn19LFwid29ya1wiOntcImRlZmluZXJ5XCI6e1wiY29sb3JcIjpcIiM1NUM3QzBcIixcInVybFwiOlwiaHR0cDovL3d3dy5hc3Ryb3N0dWRpb3MuY29tL1wiLFwidGl0bGVcIjpcIkRlZmluZXJ5IExMQ1wifSxcImFzdHJvXCI6e1wiY29sb3JcIjpcIiNDODUwNEJcIixcInVybFwiOlwiaHR0cDovL3d3dy5hc3Ryb3N0dWRpb3MuY29tL1wiLFwidGl0bGVcIjpcIkFzdHJvIFN0dWRpb3NcIn0sXCJhcFwiOntcImNvbG9yXCI6XCIjQTQ5MjY2XCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuYXVkZW1hcnNwaWd1ZXQuY29tL1wiLFwidGl0bGVcIjpcIkF1ZGVtYXJzIFBpZ3VldFwifSxcImJyXCI6e1wiY29sb3JcIjpcIiMyMjFGMjBcIixcInVybFwiOlwiaHR0cDovL3d3dy5ieXN0YW5kZXJyZXZvbHV0aW9uLm9yZy9cIixcInRpdGxlXCI6XCJCeXN0YW5kZXIgUmV2b2x1dGlvblwifSxcImRhZmZvZGlsXCI6e1wiY29sb3JcIjpcIiM3Rjc3NzRcIixcInVybFwiOlwiaHR0cDovL3d3dy5kYWZmb2RpbGRpZ2l0YWwuY29tL1wiLFwidGl0bGVcIjpcIkRhZmZvZGlsIERpZ2l0YWxcIn0sXCJnaWxtYW5cIjp7XCJjb2xvclwiOlwiIzIyMWYyMFwiLFwidXJsXCI6XCJodHRwOi8vZ2lsbWFuLjI1Ni50ZWNoL1wiLFwidGl0bGVcIjpcIkdpbG1hbiBCcmV3aW5nIENvbXBhbnlcIn0sXCJzYWtlXCI6e1wiY29sb3JcIjpcIiM3M0I4QjJcIixcInVyL1wiOlwiaHR0cDovL3d3dy5kZXNpZ25zYWtlc3R1ZGlvLmNvbS9cIixcInRpdGxlXCI6XCJEZXNpZ25zYWtlIFN0dWRpb1wifSxcInN0dWRpb1wiOntcImNvbG9yXCI6XCIjNDg2N2FhXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmFjZWJvb2stc3R1ZGlvLmNvbS9cIixcInRpdGxlXCI6XCJGYWNlYm9vayBTdHVkaW9cIn19fTsiLCJJbmRleCA9XG5cbiAgaTogLT5cblxuICAgIF8ub24gJ2hlYWRlciA+IC5pbm5lciA+IC5sb2dvJ1xuXG4gICAgQGxvYWRJbWFnZXMgLT5cblxuICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRpbmcnXG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5hZGRDbGFzcyAnbG9hZGVkJ1xuXG4gICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnc2V0dGxlZCdcblxuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAgICAgJCgnLm1lbnUgPiAub3B0aW9uJykucmVtb3ZlQ2xhc3MgJ2xvYWRlZCdcbiAgICAgICwgMjAwMFxuXG4gICAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAgIF8ub24gJy5tZW51ID4gLm9wdGlvbi5vcHRpb25fMSdcbiAgICAgICAgXy5vbiAnLnNlY3Rpb24uc2VjdGlvbl93b3JrJ1xuXG4gICAgICAgIG5ldyBQYXJhbGxheCAkKCcuc2VjdGlvbi5zZWN0aW9uX3dvcmsnKVswXVxuXG4gICAgICAgIEluZGV4LmhhbmRsZXJzKClcblxuICAgICAgLCAyMTAwXG5cbiAgbG9hZEltYWdlczogKGNvbXBsZXRlKSAtPlxuXG4gICAgZGJhci5pKClcblxuICAgIGltYWdlcyA9IFtdXG5cbiAgICBmb3IgZGlyIG9mIGNvbmZpZy53b3JrXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9sb2dvLnBuZ1wiXG4gICAgICBpbWFnZXMucHVzaCBcImltYWdlcy93b3JrLyN7ZGlyfS9iYWNrZ3JvdW5kLmpwZ1wiXG5cbiAgICBQcmVsb2FkIGltYWdlcywgKHByb2dyZXNzKSAtPlxuICAgICAgZGJhci5wZXJjIHByb2dyZXNzXG4gICAgLCAoZG9uZSkgLT5cbiAgICAgIGRiYXIuZCgpXG4gICAgICBjb21wbGV0ZSgpXG5cbiAgaGFuZGxlcnM6IC0+XG4gICAgJCgnaGVhZGVyID4gLmlubmVyID4gLmxvZ28nKS5jbGljayBJbmRleC5jeWNsZVxuICAgICQoJy5tZW51ID4gLm9wdGlvbicpLmNsaWNrIEluZGV4Lm9wdGlvblxuXG4gIG9wdGlvbjogLT5cbiAgICBfLm9mZiAnLm1lbnUgPiAub3B0aW9uJ1xuICAgIF8ub24gdGhpc1xuICAgIF8ub2ZmICcuc2VjdGlvbidcbiAgICBfLm9uIFwiLnNlY3Rpb24uc2VjdGlvbl8jeyQodGhpcykuZGF0YSgnb3B0aW9uJyl9XCJcblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcblxuIiwiUHJlbG9hZCA9IChzcmNlcywgcHJvZ3Jlc3MsIGNvbXBsZXRlKSAtPlxuXG4gIGltYWdlcyA9IFtdXG4gIGxvYWRlZCA9IDBcbiAgdG90YWwgPSBzcmNlcy5sZW5ndGhcblxuICBjb21wbGV0ZSB0cnVlIGlmIHRvdGFsIGlzIDBcblxuICBmb3Igc3JjLCBpIGluIHNyY2VzXG4gICAgaW1hZ2VzW2ldID0gbmV3IEltYWdlKClcbiAgICBpbWFnZXNbaV0uc3JjID0gc3JjXG4gICAgaW1hZ2VzW2ldLm9ubG9hZCA9IC0+XG4gICAgICBsb2FkZWQrK1xuICAgICAgcGVyYyA9IE1hdGgucm91bmQobG9hZGVkL3RvdGFsKjEwMCkvMTAwXG4gICAgICBpZiBsb2FkZWQgaXMgdG90YWwgdGhlbiBjb21wbGV0ZSh0cnVlKSBlbHNlIHByb2dyZXNzKHBlcmMpXG4iXX0=
