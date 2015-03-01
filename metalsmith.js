var fs = require('fs');

var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');
var less        = require('metalsmith-less');
var metaobject    = require('metalsmith-metaobject');
var Handlebars  = require('handlebars');

console.log('Building ' + __dirname + '..');

/**
 * Conference Data.
 */

var templateData = {
  "conf": {
    "name": "Conference name",
    "description": "Conference description",
    "date": "November 15",
    "price": "$100",
    "venue": "Coco Bongo",
    "address": "Boulevard Kukulcan, 30",
    "city": "Cancún",
    "state": "Quintana"
  },

  "callToAction": {
    "text": "Register now!",
    "link": "http://eventick.com.br"
  },
  "forkButton": {
    "repository": "https://github.com/braziljs/conf-boilerplate"
  },
  "site": {
    "theme": "yellow-swan",
    "url": "http://braziljs.github.io/conf-boilerplate",
    "googleanalytics": "UA-33656081-1"
  },
  "sections": [
    {
      "slug": "about",
      "label": "About"
    },
    {
      "slug": "location",
      "label": "Location"
    },
    {
      "slug": "speakers",
      "label": "Speakers"
    },
    {
      "slug": "schedule",
      "label": "Schedule"
    },
    {
      "slug": "sponsors",
      "label": "Sponsors"
    },
    {
      "slug": "partners",
      "label": "Partners"
    },
    {
      "slug": "contact",
      "label": "Contact"
    }
  ],
  "schedule": [
    {
      "name": "Check-in / Breakfast",
      "time": "9h00"
    }, {
      "name": "Linus Torvalds",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Linux Foundation",
      "link": {
        "href": "http://twitter.com/linus",
        "text": "@linus"
      },
      "presentation": {
        "title": "Digging into a Linux Kernel",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "10h00"
      }
    }, {
      "name": "Bill Gates",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Microsoft",
      "link": {
        "href": "http://github.com/billy95",
        "text": "@billy95"
      },
      "presentation": {
        "title": "Introducing Windows 12",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "11h00"
      }
    }, {
      "name": "Lunch",
      "time": "12h00"
    }, {
      "name": "Chuck Norris",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Delta Command",
      "link": {
        "href": "http://twitter.com/littlechuck",
        "text": "@littlechuck"
      },
      "presentation": {
        "title": "How to kill a elephant with one finger",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "13h00"
      }
    }, {
      "name": "Steve Jobs",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Apple, Inc.",
      "link": {
        "href": "http://github.com/stevie",
        "text": "@stevie"
      },
      "presentation": {
        "title": "Presenting iPad",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "14h00"
      }
    }, {
      "name": "Coffee-break",
      "time": "15h00"
    }, {
      "name": "Mark Zuckerberg",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Facebook",
      "link": {
        "href": "http://twitter.com/zuck",
        "text": "@zuck"
      },
      "presentation": {
        "title": "Revealing Facebook Secrets",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "16h00"
      }
    }, {
      "name": "Steve Wozniak",
      "photo": "themes/yellow-swan/img/speaker.jpg",
      "bio": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      "company": "Apple, Inc.",
      "link": {
        "href": "http://twitter.com/woz",
        "text": "@woz"
      },
      "presentation": {
        "title": "Why do I prefer Android over iPhone",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        "time": "17h00"
      }
    }
  ],
  "sponsors": [
    {
      "name": "Eventick",
      "logo": "themes/yellow-swan/img/sponsor.png",
      "url": "http://eventick.com.br"
    }
  ],
  "partners": [
    {
      "name": "BrazilJS",
      "logo": "themes/yellow-swan/img/partner.png",
      "url": "http://braziljs.org"
    }
  ]
};

/**
 * Build.
 */

Metalsmith(__dirname)
  .clean(true)
  .source('src/documents')
  .destination('out')
  .use(markdown())
  .use(metaobject(templateData))
  .use(less())
  .use(templates({
    engine: 'handlebars',
    directory: 'src/layouts'
  }))
  .build(function(err){
    if (err) throw err;
    console.log('Done!');
  });


/**
 * Partials Registration.
 */

var partialsDirs = [__dirname + '/src/partials', __dirname + '/src/partials/section'];
partialsDirs.forEach(function (partialsDir) {
  var filenames = fs.readdirSync(partialsDir);
  filenames.forEach(function (filename) {
    var matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) {
      return;
    }
    var name = matches[1];
    var template = fs.readFileSync(partialsDir + '/' + filename, 'utf8');
    Handlebars.registerPartial(name, template);
  });
});

/**
 * Helpers.
 */

Handlebars.registerHelper('toUpperCase', function(ctx, options) {
  return ctx.toUpperCase();
});

Handlebars.registerHelper('partial', function(name, ctx, options) {
  var template = Handlebars.compile(Handlebars.partials[name]);
  var newCtx = extend(ctx, options.data.root)
  return template(newCtx, options);
});

Handlebars.registerHelper('specialIf', function (v1, operator, v2, options) {
    switch (operator) {
        case '==':
            return (v1 == v2) ? options.fn(this) : options.inverse(this);
        case '===':
            return (v1 === v2) ? options.fn(this) : options.inverse(this);
        case '<':
            return (v1 < v2) ? options.fn(this) : options.inverse(this);
        case '<=':
            return (v1 <= v2) ? options.fn(this) : options.inverse(this);
        case '>':
            return (v1 > v2) ? options.fn(this) : options.inverse(this);
        case '>=':
            return (v1 >= v2) ? options.fn(this) : options.inverse(this);
        case '&&':
            return (v1 && v2) ? options.fn(this) : options.inverse(this);
        case '||':
            return (v1 || v2) ? options.fn(this) : options.inverse(this);
        default:
            return options.inverse(this);
    }
});

/**
 * Functions.
 */

function extend(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
