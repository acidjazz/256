var _;_={i:function(){return this.console=setInterval(this.detect.bind(this),200)},p:{offing:!1,offtime:0},turn:function(m,d,n){return null==d&&(d=!1),null==n&&(n=!1),m instanceof jQuery||(m=$(m)),d!==!1&&m.removeClass(d),n!==!1&&m.addClass(n),!0},off:function(m,d){null==d&&(d={}),d.offing&&d.offtime>0?(this.turn(m,!1,"offing"),setTimeout(function(){return this.turn(m,"offing",!1),this.turn(m,"on","off")},1e3*d.offtime+100)):this.turn(m,"on","off")},on:function(m,d){return this.turn(m,"off","on")},swap:function(m,d){m instanceof jQuery||(m=$(m)),m.hasClass("off")?this.on(m,d):this.off(m,d)},encode:function(m){return encodeURIComponent(m).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A").replace(/%20/g,"+")},t:function(m,d,n,o){return _gaq.push(["_trackEvent",m,d,n,o])},rand:function(m,d){return Math.floor(Math.random()*d)+m},llc:function(){var m;return m="\n%cmmm/............................................................./mmm\nmmo................-:://::-.......-:::::::::::::-........-::///:-.omm\nmd-.............:+yhddddddhy+-..../ddddddddddddd+....../shdddddddyodm\nmo.............-hmmmhyyyydmmmh:.../mmmmhhhhhhhhh+....:ydmmdhyyyhddoom\nm-..............-ss:-....-ymmmy.../mmmm---------....:dmmms:-...-:/.-m\nd.........................ymmmy.../mmmm-/+ooo+:-....ymmmy-:+ooo+/-..d\nh.......................:smmmd:.../mmmmhmmmmmmdh+...dmmmshdmmmmmmhs-h\nh.....................:sdmmdy:....:hhdho+//+ymmmm+..dmmmdyo//+sdmmmhh\nd..................-+ydmmdy/.......--:.......smmmh..ymmms......:mmmmm\nm-..............-:shmmmds/-----....:s/--...-:hmmms..:dmmd/-...-ommmmm\nmo..............hmmmmmmhhhhhhhh...+dmmdhyyyhdmmmy-.../hmmmhyyyhmmmdhm\nmd-.............ddddddddddddddd...-+shdddddddhy/-.....-oydddddddho:dm\nmmo.............:::::::::::::::.......-:///::-...........-:///:-..omm\nmmm/............................................................./mmm\n\n:: syntactic sugar by 256\n:: http://256.io/\n:: "+config.meta.repo,console.log(m,"color: grey; font-family: Menlo, monospace;")},detect:function(){if(window.outerHeight-window.innerHeight>100||window.outerWidth-window.innerWidth>100)return this.llc(),clearInterval(this.console)}},_.i();
var config;config={color:{black1:"#2B2D32",black2:"#414347",white1:"#ffffff",white2:"#eeeeee",white3:"#ababad",purple1:"#332631",purple2:"#4D394B",purple3:"#AB9BA9",teal1:"#4C9689",teal2:"#B1C9C5"},font:{copy1:{"font-family":"Roboto","font-size":"20px"},copy2:{"font-family":"Roboto","font-size":"32px"},copy3:{"font-family":"proxima regular","font-size":"32px","font-weight":"500"},copy4:{"font-family":"proxima regular","font-size":"24px","font-weight":"500"},h1:{"font-family":"proxima extrabold","font-size":"48px"},h2:{"font-family":"proxima extrabold","font-size":"36px"}},meta:{url:"http://256.io/",title:256,description:"building digital things",keywords:"web development, mobile development, mobile apps, full stack development",phone:9492908989,trackingID:"UA-75128355-1",logo:"images/logo_1000x1000.jpg",share:"images/1200x630.jpg",repo:"https://github.com/acidjazz/256",email:"kevin@256.io",social:{facebook:"https://www.facebook.com/256llc/",twitter:"https://twitter.com/256llc",instagram:"https://www.instagram.com/256llc/"}},work:{fullsun:{color:"#F29934",title:"Full Sun",tagline:"premium sungrown goodness",detail:["Compiled some stunning effects with CSS gradients over some very well done photography.  Got very custom with google maps from everything to colors to overlays of each business using placeIds to pull in content","Very exciting to get involved with this up and coming industry and learn about the process!"],links:{url:"https://www.full-sun.com/",github:"https://github.com/acidjazz/fullsun"}},holidays:{color:"#ff5a5f",title:"Home for the Holidays",tagline:"same holiday, different home",detail:["Real fun project for Airbnb to promote spending the holidays away from home.","This was a mobile-only site where you upload a photo of you and your family celebrating, choose a filter you like and then share it.","Full stack project even involving operatiions, automated scaling, and load testing."],links:{url:"https://holidays.withairbnb.com/"}},lookingglass:{color:"#C29E6E",title:"Looking Glass VR",tagline:"windows to the past are open at last",detail:["It's been a blast contributing to this awesome VR app; a 3D photo viewer of around 200 photos from all over the world about a century old, finally to be seen as they were intended."],links:{url:"https://lookingglassvr.com/",github:"https://github.com/lookingglassvr/lookingglass"}},definery:{color:"#55C7C0",title:"DEFINERY",tagline:"a digital product design and innovation company",detail:['For our first version of <a href="http://definery.io" target="_new">definery.io</a> we wanted to go for the most innovative and recent (while still compatible) tech available.',"We packed in lots of lively features; clipping, masking, and blend modes (mix-blend-mode to be precise) for compositing graphic elements, which even worked well with video.  We also hit our target on mobile by dynamically alternating meta tags used to customize the browser header colors on android devices."],links:{url:"http://definery.io/",github:"http://github.com/acidjazz/definery"}},astro:{color:"#C8504B",title:"Astro Studios",tagline:"supercharged brand and product experiences.",detail:["It was a great pleasure working with such an innovative product design agency.","This was a major challenge of staying with 100% original and custom functionality and features while keeping an easily modifiable and legible structure of syntactic sugar.","With two seperate and fully custom CMS sections, and a couple easter eggs, every section of this project packs a punch."],links:{url:"http://www.astrostudios.com/",github:"http://github.com/acidjazz/astro"}},br:{color:"#E0483E",title:"Bystander Revolution",tagline:"take the power out of bullying",detail:["Going on 3 years, 3,000+ commits, 3 complete renovations, and 10+ campaigns, it's been a great opportunity to take on development and operations for Bystander Revolution.","Working with multiple agencies through the years, essentially with MacKenzie Bezos' core team in Seattle, we've tackled all sorts of tasks dealing with preconditioned and user-contributed content, constantly evolving to display it comfortably in multiple easily navigatable interfaces."],links:{url:"http://www.bystanderrevolution.org/"}},gilman:{color:"#c08000",title:"Gilman Brewing Company",tagline:"born and brewed in berkeley, california",detail:["Lots of fun on this project going further than just development and operations and getting involved in creating some cinemagraphs to help make the site come alive.","Once launched this project will take advantage of the newer webkit push allowing silent video to auto-play, giving video on mobile without resulting in bulky uncompressed GIFS"],links:{url:"http://gilman.256.tech/"}},sake:{color:"#73B8B2",title:"Designsake Studio",tagline:"for the sake of good design",detail:["Being given such a clean and pretty design and a great rich portfolio of work, building a fluid experience was a pleasure.","Built a completely custom SPA experience preloading all images of each section and never refreshing, with loading animations showing realtime loading ."],links:{url:"http://www.designsakestudio.com/",github:"http://github.com/acidjazz/sake"}},daffodil:{color:"#EFE047",title:"Daffodil Digital",tagline:"helping brands tell their stories",detail:["I wanted to aim for a complete SPA experience, focusing directly on preloading all imagery and using custom loading animations to keep a nice flowing experience"],links:{url:"http://www.daffodildigital.com/",github:"http://github.com/acidjazz/daffodil"}},ap:{color:"#A49266",title:"Audemars Piguet",tagline:"ultra-luxury swiss watches",detail:["I came aboard briefly to help with the back-end, and was given the pleasure of setting the foundation and structure for v1 of their API.","At the end we had successfully centralized all watch and retail store content that drove the site and apps to version-seperated endpoints that match the JSONAPI spec."],links:{url:"http://www.audemarspiguet.com/"}},studio:{color:"#4867aa",title:"Facebook Studio",tagline:"facebook awards",detail:["Very happy to work on this major collaboration with Facebook. One of the most thorough projects I've had a pleaure to work on, from multiple audits of every check-in to unit testing every piece of functionality."],links:{url:"http://www.facebook-studio.com/"}}}};
var Index;Index={i:function(){return _.on("header > .inner > .logo"),this.loadImages(function(){return $(".menu > .option").removeClass("loading"),$(".menu > .option").addClass("loaded"),$("header").addClass("settled"),setTimeout(function(){return $(".menu > .option").removeClass("loading"),$(".menu > .option").removeClass("loaded")},2e3),setTimeout(function(){return _.on(".menu > .option.option_1"),_.on(".section.section_work"),new Parallax($(".section.section_work")[0],{limitX:20,limitY:50}),Index.handlers(),Index.modal.handlers()},2100),setTimeout(function(){return $("html, body").scrollTo(".section_work",{duration:2500,easing:"easeInOutBack"})},2400)})},loadImages:function(o){var n,e;dbar.i(),e=[];for(n in config.work)e.push("images/work/"+n+"/logo.png"),e.push("images/work/"+n+"/background.jpg");return Preload(e,function(o){return dbar.perc(o)},function(n){return dbar.d(),o()})},handlers:function(){return $("header > .inner > .logo").click(Index.cycle),$(".menu > .option").click(Index.option),$(".section.section_work > .work > .job > .inner").click(Index.job)},option:function(){return _.off(".menu > .option"),_.on(this),_.off(".section"),_.on(".section.section_"+$(this).data("option"))},cycle:function(){return $(".logo > .inner").addClass("offing"),setTimeout(function(){return _.off(".logo"),$(".logo > .inner").removeClass("offing")},600),setTimeout(function(){return _.on(".logo")},610)},modal:{i:function(o){var n,e,t,i,r,l,d,a,c;for(_.on(".fade, .modal"),n=config.work[o],$(".body > .copy.copy_title").css("color",n.color),$(".body > .copy.copy_title").html(n.title),$(".body > .copy.copy_tagline").html(n.tagline),l=n.detail,e=0,t=l.length;e<t;e++)r=l[e],$(".body > .copy.copy_detail").append("<p>"+r+"</p>");d=n.links,a=[];for(c in d)i=d[c],_.on(".body > .links > .link_"+c),a.push($(".body > .links > .link_"+c).attr("href",i));return a},handlers:function(){return $(".fade, .modal > .inner > .close").click(Index.modal.d)},d:function(){return _.off(".fade, .modal"),_.off(".body > .links > .link"),$(".body > .copy.copy_title").html(""),$(".body > .copy.copy_tagline").html(""),$(".body > .copy.copy_detail").html("")}},job:function(){return Index.modal.i($(this).data("job"))}};
var Preload;Preload=function(r,n,a){var e,o,t,u,l,d,h,c;for(o=[],l=0,c=r.length,0===c&&a(!0),d=[],e=t=0,u=r.length;t<u;e=++t)h=r[e],o[e]=new Image,o[e].src=h,d.push(o[e].onload=function(){var r;return l++,r=Math.round(l/c*100)/100,l===c?a(!0):n(r)});return d};