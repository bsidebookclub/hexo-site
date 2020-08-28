const { minify } = require('html-minifier');

hexo.extend.filter.register('after_render:html', function(str, data){
  return minify(str, {
    collapseBooleanAttributes: true,
    collapseInlineTagWhitespace: true,
    collapseWhitespace: true,
    minifyJS: true,
    minifyCSS: true,
    removeComments: true,
  });
});
