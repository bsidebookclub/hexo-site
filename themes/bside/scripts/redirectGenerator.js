
const redirects = require('../../../redirects');

const mkredirect = redirect => ({
  path: redirect.from,
  data: `<script>window.location.replace('${redirect.to}')</script>`
});

hexo.extend.generator.register('redirect', locals => {
  hexo.log.d(`building ${redirects.length} redirects`);
  return redirects.map(mkredirect);
});

// rewrite all index.php links to directories.
hexo.extend.filter.register('server_middleware', function(app){
  app.use(function(req, res, next){
    let rgx = /^(.*)\/index.php/;
    let url = req.url;
    let matches = url.match(rgx);
    if(matches) {
      res.writeHead(302, {
        Location: `${matches[1]}/index.html`
      });
      res.end();
    }
    next();
  }, 2);

  app.use('/robots.txt', function(req, res, next) {
    console.log('yoo')
    console.log(Object.keys(app))
    console.log(app.route);
    res.end('User-agent: *\nDisallow: *');
  }, 1);
});
