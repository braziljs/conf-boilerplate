var fs = require('fs');

var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var templates   = require('metalsmith-templates');
var less        = require('metalsmith-less');
var metadata    = require('metalsmith-metadata');
var Handlebars  = require('handlebars');

console.log('Building ' + __dirname + '..');

var templateData = {
  conf: "data/conf.json",
  site: "data/site.json",
  sections: "data/sections.json",
  partners: "data/partners.json",
  schedule: "data/schedule.json",
  sponsors: "data/sponsors.json",
  misc: "data/misc.json"
}

Metalsmith(__dirname)
  .clean(true)
  .source('src/documents')
  .destination('out')
  .use(markdown())
  .use(metadata(templateData))
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
