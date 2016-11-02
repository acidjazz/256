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
    "repo": "http://www.github.com/acidjazz/256",
    "email": "kevin@256.io",
    "social": {
      "facebook": "https://www.facebook.com/256llc/",
      "twitter": "https://twitter.com/256llc",
      "instagram": "https://www.instagram.com/256llc/"
    }
  },
  "work": {
    "astro": {
      "color": "#FF002B",
      "name": "Astro Studios",
      "url": "http://www.astrostudios.com/"
    },
    "br": {
      "color": "#221F20",
      "name": "Bystander Revolution",
      "url": "http://www.bystanderrevolution.org/"
    },
    "daffodil": {
      "color": "#ffffff",
      "name": "Daffodil Digital",
      "url": "http://www.daffodildigital.com/"
    },
    "fjord": {
      "color": "#ffffff",
      "name": "Ford Life",
      "url": "http://www.fjordlife.ca/"
    }
  }
};

var Index;

Index = {
  i: function() {
    alert('test');
    Index.handlers();
    setTimeout(function() {
      return $('header').addClass('settled');
    }, 2000);
    setTimeout(function() {
      return $('.menu > .option').removeClass('loading');
    }, 4000);
    return setTimeout(function() {
      _.on('.menu > .option.option_1');
      _.on('.section.section_work');
      $('.section_work').parallax();
      return console.log('activating work');
    }, 4500);
  },
  handlers: function() {
    $('.logo').click(Index.cycle);
    return $('.menu > .option').click(Index.option);
  },
  option: function() {
    _.off('.menu > .option');
    return _.on(this);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FB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Q1QsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxPQUFMO0lBRFMsQ0FBWCxFQUVFLEdBRkY7RUFUSyxDQTVCUCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJfID1cblxuICBpOiAtPlxuICAgIEBjb25zb2xlID0gc2V0SW50ZXJ2YWwoQGRldGVjdC5iaW5kKEApLCAyMDApXG5cbiAgcDpcbiAgICBvZmZpbmc6IGZhbHNlXG4gICAgb2ZmdGltZTogMFxuXG4gIHR1cm46IChlbCwgcmVtb3ZlPWZhbHNlLCBhZGQ9ZmFsc2UpIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIHJlbW92ZSBpc250IGZhbHNlXG4gICAgICBlbC5yZW1vdmVDbGFzcyhyZW1vdmUpXG5cbiAgICBpZiBhZGQgaXNudCBmYWxzZVxuICAgICAgZWwuYWRkQ2xhc3MoYWRkKVxuXG4gICAgcmV0dXJuIHRydWVcblxuICBvZmY6IChlbCwgcD17fSkgLT5cblxuICAgIGlmIHAub2ZmaW5nIGFuZCBwLm9mZnRpbWUgPiAwXG5cbiAgICAgIEB0dXJuIGVsLCBmYWxzZSwgJ29mZmluZydcbiAgICAgIHNldFRpbWVvdXQgLT5cbiAgICAgICAgQHR1cm4gZWwsICdvZmZpbmcnLCBmYWxzZVxuICAgICAgICBAdHVybiBlbCwgJ29uJywgJ29mZidcbiAgICAgICwgcC5vZmZ0aW1lKjEwMDAgKyAxMDBcblxuICAgIGVsc2VcbiAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuXG4gICAgcmV0dXJuXG5cbiAgb246IChlbCwgcCkgLT5cbiAgICBAdHVybiBlbCwgJ29mZicsICdvbidcblxuICBzd2FwOiAoZWwsIHApIC0+XG5cbiAgICBpZiBlbCBub3QgaW5zdGFuY2VvZiBqUXVlcnlcbiAgICAgIGVsID0gJChlbClcblxuICAgIGlmIGVsLmhhc0NsYXNzICdvZmYnXG4gICAgICBAb24gZWwsIHBcbiAgICBlbHNlXG4gICAgICBAb2ZmIGVsLCBwXG5cbiAgICByZXR1cm5cblxuICBlbmNvZGU6IChzdHIpIC0+XG4gICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpXG4gICAgICAucmVwbGFjZSgvIS9nLCAnJTIxJylcbiAgICAgIC5yZXBsYWNlKC8nL2csICclMjcnKVxuICAgICAgLnJlcGxhY2UoL1xcKC9nLCAnJTI4JylcbiAgICAgIC5yZXBsYWNlKC9cXCkvZywgJyUyOScpXG4gICAgICAucmVwbGFjZSgvXFwqL2csICclMkEnKVxuICAgICAgLnJlcGxhY2UoLyUyMC9nLCAnKycpXG5cbiAgdDogKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZSkgLT5cbiAgICBfZ2FxLnB1c2ggWydfdHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsLCB2YWx1ZV1cblxuICByYW5kOiAobWluLCBtYXgpIC0+XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG1heCkgKyBtaW5cblxuICBsbGM6IC0+XG4gICAgYXNjaWkgPSBcIlwiXCJcblxuICAgICAgJWNtbW0vLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi9tbW1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi4uLi4tOjovLzo6LS4uLi4uLi4tOjo6Ojo6Ojo6Ojo6Oi0uLi4uLi4uLi06Oi8vLzotLm9tbVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLjoreWhkZGRkZGRoeSstLi4uLi9kZGRkZGRkZGRkZGRkKy4uLi4uLi9zaGRkZGRkZGR5b2RtXG4gICAgICBtby4uLi4uLi4uLi4uLi4taG1tbWh5eXl5ZG1tbWg6Li4uL21tbW1oaGhoaGhoaGgrLi4uLjp5ZG1tZGh5eXloZGRvb21cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tc3M6LS4uLi4teW1tbXkuLi4vbW1tbS0tLS0tLS0tLS4uLi46ZG1tbXM6LS4uLi06Ly4tbVxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi55bW1teS4uLi9tbW1tLS8rb29vKzotLi4uLnltbW15LTorb29vKy8tLi5kXG4gICAgICBoLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi46c21tbWQ6Li4uL21tbW1obW1tbW1tZGgrLi4uZG1tbXNoZG1tbW1tbWhzLWhcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi46c2RtbWR5Oi4uLi46aGhkaG8rLy8reW1tbW0rLi5kbW1tZHlvLy8rc2RtbW1oaFxuICAgICAgZC4uLi4uLi4uLi4uLi4uLi4uLi0reWRtbWR5Ly4uLi4uLi4tLTouLi4uLi4uc21tbWguLnltbW1zLi4uLi4uOm1tbW1tXG4gICAgICBtLS4uLi4uLi4uLi4uLi4uLTpzaG1tbWRzLy0tLS0tLi4uLjpzLy0tLi4uLTpobW1tcy4uOmRtbWQvLS4uLi1vbW1tbW1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi5obW1tbW1taGhoaGhoaGguLi4rZG1tZGh5eXloZG1tbXktLi4uL2htbW1oeXl5aG1tbWRobVxuICAgICAgbWQtLi4uLi4uLi4uLi4uLmRkZGRkZGRkZGRkZGRkZC4uLi0rc2hkZGRkZGRkaHkvLS4uLi4uLW95ZGRkZGRkZGhvOmRtXG4gICAgICBtbW8uLi4uLi4uLi4uLi4uOjo6Ojo6Ojo6Ojo6Ojo6Li4uLi4uLi06Ly8vOjotLi4uLi4uLi4uLi4tOi8vLzotLi5vbW1cbiAgICAgIG1tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuXG4gICAgICA6OiBzeW50YWN0aWMgc3VnYXIgYnkgMjU2XG4gICAgICA6OiBodHRwOi8vMjU2LmlvL1xuICAgICAgOjogI3tjb25maWcubWV0YS5yZXBvfVxuICAgIFwiXCJcIlxuICAgIGNvbnNvbGUubG9nIGFzY2lpLCBcImNvbG9yOiBncmV5OyBmb250LWZhbWlseTogTWVubG8sIG1vbm9zcGFjZTtcIlxuXG4gIGRldGVjdDogLT5cbiAgICBpZiAoKCh3aW5kb3cub3V0ZXJIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpID4gMTAwKSB8fCAoKHdpbmRvdy5vdXRlcldpZHRoIC0gd2luZG93LmlubmVyV2lkdGgpID4gMTAwKSlcbiAgICAgIEBsbGMoKVxuICAgICAgY2xlYXJJbnRlcnZhbCBAY29uc29sZVxuXG5fLmkoKVxuIiwiY29uZmlnID0ge1wiY29sb3JcIjp7XCJibGFjazFcIjpcIiMyQjJEMzJcIixcImJsYWNrMlwiOlwiIzQxNDM0N1wiLFwid2hpdGUxXCI6XCIjZmZmZmZmXCIsXCJ3aGl0ZTJcIjpcIiNlZWVlZWVcIixcIndoaXRlM1wiOlwiI2FiYWJhZFwiLFwicHVycGxlMVwiOlwiIzMzMjYzMVwiLFwicHVycGxlMlwiOlwiIzREMzk0QlwiLFwicHVycGxlM1wiOlwiI0FCOUJBOVwiLFwidGVhbDFcIjpcIiM0Qzk2ODlcIixcInRlYWwyXCI6XCIjQjFDOUM1XCJ9LFwiZm9udFwiOntcImNvcHkxXCI6e1wiZm9udC1mYW1pbHlcIjpcIlJvYm90b1wiLFwiZm9udC1zaXplXCI6XCIxNnB4XCJ9LFwiY29weTJcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjMycHhcIn0sXCJoMVwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCI0OHB4XCJ9LFwiaDJcIjp7XCJmb250LWZhbWlseVwiOlwicHJveGltYSBleHRyYWJvbGRcIixcImZvbnQtc2l6ZVwiOlwiMzZweFwifX0sXCJtZXRhXCI6e1widXJsXCI6XCJodHRwOi8vMjU2LmlvL1wiLFwidGl0bGVcIjpcIjI1NiBsbGNcIixcImRlc2NyaXB0aW9uXCI6XCJidWlsZGluZyBkaWdpdGFsIHRoaW5nc1wiLFwia2V5d29yZHNcIjpcInRoaW5rIG9mIGtleXdvcmRzXCIsXCJwaG9uZVwiOjk0OTI5MDg5ODksXCJ0cmFja2luZ0lEXCI6XCJVQS03NTEyODM1NS0xXCIsXCJsb2dvXCI6XCJpbWcvbG9nb18xMDAweDEwMDAuanBnXCIsXCJzaGFyZVwiOlwiaW1nLzEyMDB4NjMwLmpwZ1wiLFwicmVwb1wiOlwiaHR0cDovL3d3dy5naXRodWIuY29tL2FjaWRqYXp6LzI1NlwiLFwiZW1haWxcIjpcImtldmluQDI1Ni5pb1wiLFwic29jaWFsXCI6e1wiZmFjZWJvb2tcIjpcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS8yNTZsbGMvXCIsXCJ0d2l0dGVyXCI6XCJodHRwczovL3R3aXR0ZXIuY29tLzI1NmxsY1wiLFwiaW5zdGFncmFtXCI6XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tLzI1NmxsYy9cIn19LFwid29ya1wiOntcImFzdHJvXCI6e1wiY29sb3JcIjpcIiNGRjAwMkJcIixcIm5hbWVcIjpcIkFzdHJvIFN0dWRpb3NcIixcInVybFwiOlwiaHR0cDovL3d3dy5hc3Ryb3N0dWRpb3MuY29tL1wifSxcImJyXCI6e1wiY29sb3JcIjpcIiMyMjFGMjBcIixcIm5hbWVcIjpcIkJ5c3RhbmRlciBSZXZvbHV0aW9uXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuYnlzdGFuZGVycmV2b2x1dGlvbi5vcmcvXCJ9LFwiZGFmZm9kaWxcIjp7XCJjb2xvclwiOlwiI2ZmZmZmZlwiLFwibmFtZVwiOlwiRGFmZm9kaWwgRGlnaXRhbFwiLFwidXJsXCI6XCJodHRwOi8vd3d3LmRhZmZvZGlsZGlnaXRhbC5jb20vXCJ9LFwiZmpvcmRcIjp7XCJjb2xvclwiOlwiI2ZmZmZmZlwiLFwibmFtZVwiOlwiRm9yZCBMaWZlXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuZmpvcmRsaWZlLmNhL1wifX19OyIsIkluZGV4ID1cblxuICBpOiAtPlxuXG4gICAgYWxlcnQgJ3Rlc3QnXG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnc2V0dGxlZCdcbiAgICAsIDIwMDBcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAsIDQwMDBcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub24gJy5tZW51ID4gLm9wdGlvbi5vcHRpb25fMSdcbiAgICAgIF8ub24gJy5zZWN0aW9uLnNlY3Rpb25fd29yaydcbiAgICAgICQoJy5zZWN0aW9uX3dvcmsnKS5wYXJhbGxheCgpXG4gICAgICBjb25zb2xlLmxvZyAnYWN0aXZhdGluZyB3b3JrJ1xuICAgICwgNDUwMFxuXG4gIGhhbmRsZXJzOiAtPlxuICAgICQoJy5sb2dvJykuY2xpY2sgSW5kZXguY3ljbGVcbiAgICAkKCcubWVudSA+IC5vcHRpb24nKS5jbGljayBJbmRleC5vcHRpb25cblxuICBvcHRpb246IC0+XG4gICAgXy5vZmYgJy5tZW51ID4gLm9wdGlvbidcbiAgICBfLm9uIHRoaXNcblxuICBjeWNsZTogLT5cblxuICAgICQoJy5sb2dvID4gLmlubmVyJykuYWRkQ2xhc3MgJ29mZmluZydcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub2ZmICcubG9nbydcbiAgICAgICQoJy5sb2dvID4gLmlubmVyJykucmVtb3ZlQ2xhc3MgJ29mZmluZydcbiAgICAsIDYwMFxuXG4gICAgc2V0VGltZW91dCAtPlxuICAgICAgXy5vbiAnLmxvZ28nXG4gICAgLCA2MTBcbiJdfQ==