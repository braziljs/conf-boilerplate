var metalsmith = require('metalsmith')(__dirname);
var plugins    = require('load-metalsmith-plugins')();
var conf       = require('./conference');
var ghpages    = require('gh-pages');
var task       = process.argv[2];

/* Config
   ========================================================================== */

metalsmith.source('src/documents').destination('out').clean(true);

/* Plugins
   ========================================================================== */
metalsmith
  .use(plugins.less())
  .use(plugins.metaobject(conf))
  .use(plugins.layouts({
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
  .use(plugins.inPlace({
    directory: 'src/layouts',
    engine: 'handlebars',
    pattern: '*.html'
  }));

/* Watch
   ========================================================================== */

if (task === 'watch') {
  metalsmith
    .use(plugins.serve({
      port: 9778,
      verbose: true
    }))
    .use(plugins.watch({
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