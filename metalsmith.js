const start = process.hrtime();
const task  = process.argv[2];

/* Dependencies
   ========================================================================== */

const conf       = require('./conference');
const chalk      = require('chalk');
const ghpages    = require('gh-pages');
const plugins    = require('load-metalsmith-plugins')();
const prettytime = require('pretty-hrtime');
const metalsmith = require('metalsmith')(__dirname);

/* Configuration
   ========================================================================== */

const config = {
  source: 'src/documents',
  destination: 'out',
  layouts: {
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
  },
  inPlace: {
    directory: 'src/layouts',
    engine: 'handlebars'
  },
  serve: {
    port: 9778,
    verbose: true
  },
  watch: {
    paths: {
      "${source}/**/*": true,
      "src/layouts/**/*": "**/*.html",
      "src/partials/**/*": "**/*.html"
    }
  }
};

/* Pipeline
   ========================================================================== */

metalsmith
  .source(config.source)
  .destination(config.destination)
  .use(plugins.less())
  .use(plugins.metaobject(conf))
  .use(plugins.layouts(config.layouts))
  .use(plugins.inPlace(config.inPlace));

if (task === 'watch') {
  metalsmith
    .use(plugins.serve(config.serve))
    .use(plugins.watch(config.watch));
}

/* Generate
   ========================================================================== */

metalsmith.build((err) => {
  if (err) throw err;
  else buildCompleted();
});

const buildCompleted = () => {
  if (task === 'generate') {
    buildDuration();
  }

  if (task === 'deploy') {
    ghpages.publish(config.destination, (err) => {
      if (err) throw err;
      else buildDuration();
    });
  }
}

const buildDuration = () => {
  const end = prettytime(process.hrtime(start));
  console.log(`> done in ${chalk.green(end)}`);
}
