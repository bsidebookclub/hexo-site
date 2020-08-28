const { minify: minifyCss } = require('csso');
const { minify: minifyHtml } = require('html-minifier');
const { minify: minifyJs } = require('uglify-js');

hexo.extend.filter.register('after_render:css', function(str){
  const minified = minifyCss(str);
  return minified.css;
});

hexo.extend.filter.register('after_render:html', function(str){
  return minifyHtml(str, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
    removeComments: true,
  });
});

hexo.extend.filter.register('after_render:js', function(str){
  const minified = minifyJs(str);
  return minified.code;
});
