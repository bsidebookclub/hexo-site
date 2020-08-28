const { minify: minifyHtml } = require('html-minifier');
const { minify: minifyJS } = require('uglify-js');

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
  const minified = minifyJS(str);
  return minified.code;
});
