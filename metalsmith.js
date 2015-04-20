var task = process.argv[2];

var metalsmith = require('metalsmith')(__dirname);
var assets     = require('metalsmith-assets');
var layouts    = require('metalsmith-layouts');
var less       = require('metalsmith-less');
var meta       = require('metalsmith-metaobject');
var partial    = require('metalsmith-partial');
var serve      = require('metalsmith-serve');
var templates  = require('metalsmith-in-place');
var watch      = require('metalsmith-watch');
var conference = require('./conference');

metalsmith
  .clean(true)
  .source('src/documents')
  .destination('out')
  .use(meta(conference))
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
    engine: 'handlebars'
  }))
  .build(function(err) {
    if (err) { throw err; }
  });

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