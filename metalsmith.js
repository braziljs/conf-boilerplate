var metalsmith = require('metalsmith')(__dirname);
var layouts    = require('metalsmith-layouts');
var less       = require('metalsmith-less');
var meta       = require('metalsmith-metaobject');
var partial    = require('metalsmith-partial');
var serve      = require('metalsmith-serve');
var templates  = require('metalsmith-in-place');
var watch      = require('metalsmith-watch');
var conf       = require('./conference');
var ghpages    = require('gh-pages');
var task       = process.argv[2];

/* Config
   ========================================================================== */

metalsmith.source('src/documents').destination('out').clean(true);

/* Plugins
   ========================================================================== */
metalsmith
  .use(less())
  .use(meta(conf))
  .use(layouts({
    directory: 'src/layouts',
    engine: 'handlebars',
    partials: {
      header   : '../partials/header',
      nav      : '../partials/nav',
      about    : '../partials/section/about',
      contact  : '../partials/section/contact',
      location : '../partials/section/location',
      partners : '../partials/section/partners',
      schedule : '../partials/section/schedule',
      speakers : '../partials/section/speakers',
      sponsors : '../partials/section/sponsors'
    }
  }))
  .use(templates({
    directory: 'src/layouts',
    engine: 'handlebars',
    pattern: '*.html'
  }));

/* Watch
   ========================================================================== */

if (task === 'watch') {
  metalsmith
    .use(serve({
      port: 9778,
      verbose: true
    }))
    .use(watch({
      pattern: 'src/**/*'
    }));
}

/* Deploy
   ========================================================================== */

metalsmith
  .build(function(err) {
    if (err) throw err;

    if (task === 'deploy') {
      ghpages.publish('out', function(err) {
        if (err) throw err;
      });
    }
  });