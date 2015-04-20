var metalsmith = require('metalsmith');
var assets     = require('metalsmith-assets');
var layouts    = require('metalsmith-layouts');
var less       = require('metalsmith-less');
var meta       = require('metalsmith-metaobject');
var partial    = require('metalsmith-partial');
var templates  = require('metalsmith-in-place');
var conference = require('./conference');

metalsmith(__dirname)
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
