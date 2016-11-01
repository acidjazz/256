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
      "color": "#FF002B",
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
    Index.handlers();
    setTimeout(function() {
      return $('header').addClass('settled');
    }, 2000);
    return setTimeout(function() {
      return $('.menu > .option').removeClass('loading');
    }, 4000);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIjI1Ni5jb2ZmZWUiLCJjb25maWcuY29mZmVlIiwiaW5kZXguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUE7O0FBQUEsQ0FBQSxHQUVFO0VBQUEsQ0FBQSxFQUFHLFNBQUE7V0FDRCxJQUFDLENBQUEsT0FBRCxHQUFXLFdBQUEsQ0FBWSxJQUFDLENBQUEsTUFBTSxDQUFDLElBQVIsQ0FBYSxJQUFiLENBQVosRUFBNkIsR0FBN0I7RUFEVixDQUFIO0VBR0EsQ0FBQSxFQUNFO0lBQUEsTUFBQSxFQUFRLEtBQVI7SUFDQSxPQUFBLEVBQVMsQ0FEVDtHQUpGO0VBT0EsSUFBQSxFQUFNLFNBQUMsRUFBRCxFQUFLLE1BQUwsRUFBbUIsR0FBbkI7O01BQUssU0FBTzs7O01BQU8sTUFBSTs7SUFFM0IsSUFBRyxDQUFBLENBQUEsRUFBQSxZQUFrQixNQUFsQixDQUFIO01BQ0UsRUFBQSxHQUFLLENBQUEsQ0FBRSxFQUFGLEVBRFA7O0lBR0EsSUFBRyxNQUFBLEtBQVksS0FBZjtNQUNFLEVBQUUsQ0FBQyxXQUFILENBQWUsTUFBZixFQURGOztJQUdBLElBQUcsR0FBQSxLQUFTLEtBQVo7TUFDRSxFQUFFLENBQUMsUUFBSCxDQUFZLEdBQVosRUFERjs7QUFHQSxXQUFPO0VBWEgsQ0FQTjtFQW9CQSxHQUFBLEVBQUssU0FBQyxFQUFELEVBQUssQ0FBTDs7TUFBSyxJQUFFOztJQUVWLElBQUcsQ0FBQyxDQUFDLE1BQUYsSUFBYSxDQUFDLENBQUMsT0FBRixHQUFZLENBQTVCO01BRUUsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsS0FBVixFQUFpQixRQUFqQjtNQUNBLFVBQUEsQ0FBVyxTQUFBO1FBQ1QsSUFBQyxDQUFBLElBQUQsQ0FBTSxFQUFOLEVBQVUsUUFBVixFQUFvQixLQUFwQjtlQUNBLElBQUMsQ0FBQSxJQUFELENBQU0sRUFBTixFQUFVLElBQVYsRUFBZ0IsS0FBaEI7TUFGUyxDQUFYLEVBR0UsQ0FBQyxDQUFDLE9BQUYsR0FB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QTs7QUFBQSxLQUFBLEdBRUU7RUFBQSxDQUFBLEVBQUcsU0FBQTtJQUVELEtBQUssQ0FBQyxRQUFOLENBQUE7SUFFQSxVQUFBLENBQVcsU0FBQTthQUNULENBQUEsQ0FBRSxRQUFGLENBQVcsQ0FBQyxRQUFaLENBQXFCLFNBQXJCO0lBRFMsQ0FBWCxFQUVFLElBRkY7V0FHQSxVQUFBLENBQVcsU0FBQTthQUNULENBQUEsQ0FBRSxpQkFBRixDQUFvQixDQUFDLFdBQXJCLENBQWlDLFNBQWpDO0lBRFMsQ0FBWCxFQUVFLElBRkY7RUFQQyxDQUFIO0VBV0EsUUFBQSxFQUFVLFNBQUE7SUFDUixDQUFBLENBQUUsT0FBRixDQUFVLENBQUMsS0FBWCxDQUFpQixLQUFLLENBQUMsS0FBdkI7V0FDQSxDQUFBLENBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxLQUFyQixDQUEyQixLQUFLLENBQUMsTUFBakM7RUFGUSxDQVhWO0VBZUEsTUFBQSxFQUFRLFNBQUE7SUFDTixDQUFDLENBQUMsR0FBRixDQUFNLGlCQUFOO1dBQ0EsQ0FBQyxDQUFDLEVBQUYsQ0FBSyxJQUFMO0VBRk0sQ0FmUjtFQW1CQSxLQUFBLEVBQU8sU0FBQTtJQUVMLENBQUEsQ0FBRSxnQkFBRixDQUFtQixDQUFDLFFBQXBCLENBQTZCLFFBQTdCO0lBRUEsVUFBQSxDQUFXLFNBQUE7TUFDVCxDQUFDLENBQUMsR0FBRixDQUFNLE9BQU47YUFDQSxDQUFBLENBQUUsZ0JBQUYsQ0FBbUIsQ0FBQyxXQUFwQixDQUFnQyxRQUFoQztJQUZTLENBQVgsRUFHRSxHQUhGO1dBS0EsVUFBQSxDQUFXLFNBQUE7YUFDVCxDQUFDLENBQUMsRUFBRixDQUFLLE9BQUw7SUFEUyxDQUFYLEVBRUUsR0FGRjtFQVRLLENBbkJQIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIl8gPVxuXG4gIGk6IC0+XG4gICAgQGNvbnNvbGUgPSBzZXRJbnRlcnZhbChAZGV0ZWN0LmJpbmQoQCksIDIwMClcblxuICBwOlxuICAgIG9mZmluZzogZmFsc2VcbiAgICBvZmZ0aW1lOiAwXG5cbiAgdHVybjogKGVsLCByZW1vdmU9ZmFsc2UsIGFkZD1mYWxzZSkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgcmVtb3ZlIGlzbnQgZmFsc2VcbiAgICAgIGVsLnJlbW92ZUNsYXNzKHJlbW92ZSlcblxuICAgIGlmIGFkZCBpc250IGZhbHNlXG4gICAgICBlbC5hZGRDbGFzcyhhZGQpXG5cbiAgICByZXR1cm4gdHJ1ZVxuXG4gIG9mZjogKGVsLCBwPXt9KSAtPlxuXG4gICAgaWYgcC5vZmZpbmcgYW5kIHAub2ZmdGltZSA+IDBcblxuICAgICAgQHR1cm4gZWwsIGZhbHNlLCAnb2ZmaW5nJ1xuICAgICAgc2V0VGltZW91dCAtPlxuICAgICAgICBAdHVybiBlbCwgJ29mZmluZycsIGZhbHNlXG4gICAgICAgIEB0dXJuIGVsLCAnb24nLCAnb2ZmJ1xuICAgICAgLCBwLm9mZnRpbWUqMTAwMCArIDEwMFxuXG4gICAgZWxzZVxuICAgICAgQHR1cm4gZWwsICdvbicsICdvZmYnXG5cbiAgICByZXR1cm5cblxuICBvbjogKGVsLCBwKSAtPlxuICAgIEB0dXJuIGVsLCAnb2ZmJywgJ29uJ1xuXG4gIHN3YXA6IChlbCwgcCkgLT5cblxuICAgIGlmIGVsIG5vdCBpbnN0YW5jZW9mIGpRdWVyeVxuICAgICAgZWwgPSAkKGVsKVxuXG4gICAgaWYgZWwuaGFzQ2xhc3MgJ29mZidcbiAgICAgIEBvbiBlbCwgcFxuICAgIGVsc2VcbiAgICAgIEBvZmYgZWwsIHBcblxuICAgIHJldHVyblxuXG4gIGVuY29kZTogKHN0cikgLT5cbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cilcbiAgICAgIC5yZXBsYWNlKC8hL2csICclMjEnKVxuICAgICAgLnJlcGxhY2UoLycvZywgJyUyNycpXG4gICAgICAucmVwbGFjZSgvXFwoL2csICclMjgnKVxuICAgICAgLnJlcGxhY2UoL1xcKS9nLCAnJTI5JylcbiAgICAgIC5yZXBsYWNlKC9cXCovZywgJyUyQScpXG4gICAgICAucmVwbGFjZSgvJTIwL2csICcrJylcblxuICB0OiAoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlKSAtPlxuICAgIF9nYXEucHVzaCBbJ190cmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwsIHZhbHVlXVxuXG4gIHJhbmQ6IChtaW4sIG1heCkgLT5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbWF4KSArIG1pblxuXG4gIGxsYzogLT5cbiAgICBhc2NpaSA9IFwiXCJcIlxuXG4gICAgICAlY21tbS8uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uL21tbVxuICAgICAgbW1vLi4uLi4uLi4uLi4uLi4uLi06Oi8vOjotLi4uLi4uLi06Ojo6Ojo6Ojo6Ojo6LS4uLi4uLi4uLTo6Ly8vOi0ub21tXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uOit5aGRkZGRkZGh5Ky0uLi4uL2RkZGRkZGRkZGRkZGQrLi4uLi4uL3NoZGRkZGRkZHlvZG1cbiAgICAgIG1vLi4uLi4uLi4uLi4uLi1obW1taHl5eXlkbW1taDouLi4vbW1tbWhoaGhoaGhoaCsuLi4uOnlkbW1kaHl5eWhkZG9vbVxuICAgICAgbS0uLi4uLi4uLi4uLi4uLi1zczotLi4uLi15bW1teS4uLi9tbW1tLS0tLS0tLS0tLi4uLjpkbW1tczotLi4uLTovLi1tXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLnltbW15Li4uL21tbW0tLytvb28rOi0uLi4ueW1tbXktOitvb28rLy0uLmRcbiAgICAgIGguLi4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzbW1tZDouLi4vbW1tbWhtbW1tbW1kaCsuLi5kbW1tc2hkbW1tbW1taHMtaFxuICAgICAgaC4uLi4uLi4uLi4uLi4uLi4uLi4uLjpzZG1tZHk6Li4uLjpoaGRobysvLyt5bW1tbSsuLmRtbW1keW8vLytzZG1tbWhoXG4gICAgICBkLi4uLi4uLi4uLi4uLi4uLi4uLSt5ZG1tZHkvLi4uLi4uLi0tOi4uLi4uLi5zbW1taC4ueW1tbXMuLi4uLi46bW1tbW1cbiAgICAgIG0tLi4uLi4uLi4uLi4uLi4tOnNobW1tZHMvLS0tLS0uLi4uOnMvLS0uLi4tOmhtbW1zLi46ZG1tZC8tLi4uLW9tbW1tbVxuICAgICAgbW8uLi4uLi4uLi4uLi4uLmhtbW1tbW1oaGhoaGhoaC4uLitkbW1kaHl5eWhkbW1teS0uLi4vaG1tbWh5eXlobW1tZGhtXG4gICAgICBtZC0uLi4uLi4uLi4uLi4uZGRkZGRkZGRkZGRkZGRkLi4uLStzaGRkZGRkZGRoeS8tLi4uLi4tb3lkZGRkZGRkaG86ZG1cbiAgICAgIG1tby4uLi4uLi4uLi4uLi46Ojo6Ojo6Ojo6Ojo6OjouLi4uLi4uLTovLy86Oi0uLi4uLi4uLi4uLi06Ly8vOi0uLm9tbVxuICAgICAgbW1tLy4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4vbW1tXG5cbiAgICAgIDo6IHN5bnRhY3RpYyBzdWdhciBieSAyNTZcbiAgICAgIDo6IGh0dHA6Ly8yNTYuaW8vXG4gICAgICA6OiAje2NvbmZpZy5tZXRhLnJlcG99XG4gICAgXCJcIlwiXG4gICAgY29uc29sZS5sb2cgYXNjaWksIFwiY29sb3I6IGdyZXk7IGZvbnQtZmFtaWx5OiBNZW5sbywgbW9ub3NwYWNlO1wiXG5cbiAgZGV0ZWN0OiAtPlxuICAgIGlmICgoKHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodCkgPiAxMDApIHx8ICgod2luZG93Lm91dGVyV2lkdGggLSB3aW5kb3cuaW5uZXJXaWR0aCkgPiAxMDApKVxuICAgICAgQGxsYygpXG4gICAgICBjbGVhckludGVydmFsIEBjb25zb2xlXG5cbl8uaSgpXG4iLCJjb25maWcgPSB7XCJjb2xvclwiOntcImJsYWNrMVwiOlwiIzJCMkQzMlwiLFwiYmxhY2syXCI6XCIjNDE0MzQ3XCIsXCJ3aGl0ZTFcIjpcIiNmZmZmZmZcIixcIndoaXRlMlwiOlwiI2VlZWVlZVwiLFwid2hpdGUzXCI6XCIjYWJhYmFkXCIsXCJwdXJwbGUxXCI6XCIjMzMyNjMxXCIsXCJwdXJwbGUyXCI6XCIjNEQzOTRCXCIsXCJwdXJwbGUzXCI6XCIjQUI5QkE5XCIsXCJ0ZWFsMVwiOlwiIzRDOTY4OVwiLFwidGVhbDJcIjpcIiNCMUM5QzVcIn0sXCJmb250XCI6e1wiY29weTFcIjp7XCJmb250LWZhbWlseVwiOlwiUm9ib3RvXCIsXCJmb250LXNpemVcIjpcIjE2cHhcIn0sXCJjb3B5MlwiOntcImZvbnQtZmFtaWx5XCI6XCJSb2JvdG9cIixcImZvbnQtc2l6ZVwiOlwiMzJweFwifSxcImgxXCI6e1wiZm9udC1mYW1pbHlcIjpcInByb3hpbWEgZXh0cmFib2xkXCIsXCJmb250LXNpemVcIjpcIjQ4cHhcIn0sXCJoMlwiOntcImZvbnQtZmFtaWx5XCI6XCJwcm94aW1hIGV4dHJhYm9sZFwiLFwiZm9udC1zaXplXCI6XCIzNnB4XCJ9fSxcIm1ldGFcIjp7XCJ1cmxcIjpcImh0dHA6Ly8yNTYuaW8vXCIsXCJ0aXRsZVwiOlwiMjU2IGxsY1wiLFwiZGVzY3JpcHRpb25cIjpcImJ1aWxkaW5nIGRpZ2l0YWwgdGhpbmdzXCIsXCJrZXl3b3Jkc1wiOlwidGhpbmsgb2Yga2V5d29yZHNcIixcInBob25lXCI6OTQ5MjkwODk4OSxcInRyYWNraW5nSURcIjpcIlVBLTc1MTI4MzU1LTFcIixcImxvZ29cIjpcImltZy9sb2dvXzEwMDB4MTAwMC5qcGdcIixcInNoYXJlXCI6XCJpbWcvMTIwMHg2MzAuanBnXCIsXCJyZXBvXCI6XCJodHRwOi8vd3d3LmdpdGh1Yi5jb20vYWNpZGphenovMjU2XCIsXCJlbWFpbFwiOlwia2V2aW5AMjU2LmlvXCIsXCJzb2NpYWxcIjp7XCJmYWNlYm9va1wiOlwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLzI1NmxsYy9cIixcInR3aXR0ZXJcIjpcImh0dHBzOi8vdHdpdHRlci5jb20vMjU2bGxjXCIsXCJpbnN0YWdyYW1cIjpcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vMjU2bGxjL1wifX0sXCJ3b3JrXCI6e1wiYXN0cm9cIjp7XCJjb2xvclwiOlwiI0ZGMDAyQlwiLFwibmFtZVwiOlwiQXN0cm8gU3R1ZGlvc1wiLFwidXJsXCI6XCJodHRwOi8vd3d3LmFzdHJvc3R1ZGlvcy5jb20vXCJ9LFwiYnJcIjp7XCJjb2xvclwiOlwiI0ZGMDAyQlwiLFwibmFtZVwiOlwiQnlzdGFuZGVyIFJldm9sdXRpb25cIixcInVybFwiOlwiaHR0cDovL3d3dy5ieXN0YW5kZXJyZXZvbHV0aW9uLm9yZy9cIn0sXCJkYWZmb2RpbFwiOntcImNvbG9yXCI6XCIjZmZmZmZmXCIsXCJuYW1lXCI6XCJEYWZmb2RpbCBEaWdpdGFsXCIsXCJ1cmxcIjpcImh0dHA6Ly93d3cuZGFmZm9kaWxkaWdpdGFsLmNvbS9cIn0sXCJmam9yZFwiOntcImNvbG9yXCI6XCIjZmZmZmZmXCIsXCJuYW1lXCI6XCJGb3JkIExpZmVcIixcInVybFwiOlwiaHR0cDovL3d3dy5mam9yZGxpZmUuY2EvXCJ9fX07IiwiSW5kZXggPVxuXG4gIGk6IC0+XG5cbiAgICBJbmRleC5oYW5kbGVycygpXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCdoZWFkZXInKS5hZGRDbGFzcyAnc2V0dGxlZCdcbiAgICAsIDIwMDBcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICAkKCcubWVudSA+IC5vcHRpb24nKS5yZW1vdmVDbGFzcyAnbG9hZGluZydcbiAgICAsIDQwMDBcblxuICBoYW5kbGVyczogLT5cbiAgICAkKCcubG9nbycpLmNsaWNrIEluZGV4LmN5Y2xlXG4gICAgJCgnLm1lbnUgPiAub3B0aW9uJykuY2xpY2sgSW5kZXgub3B0aW9uXG5cbiAgb3B0aW9uOiAtPlxuICAgIF8ub2ZmICcubWVudSA+IC5vcHRpb24nXG4gICAgXy5vbiB0aGlzXG5cbiAgY3ljbGU6IC0+XG5cbiAgICAkKCcubG9nbyA+IC5pbm5lcicpLmFkZENsYXNzICdvZmZpbmcnXG5cbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBfLm9mZiAnLmxvZ28nXG4gICAgICAkKCcubG9nbyA+IC5pbm5lcicpLnJlbW92ZUNsYXNzICdvZmZpbmcnXG4gICAgLCA2MDBcblxuICAgIHNldFRpbWVvdXQgLT5cbiAgICAgIF8ub24gJy5sb2dvJ1xuICAgICwgNjEwXG4iXX0=
