
const redirects = require('../../../redirects');

const mkredirect = redirect => ({
  path: redirect.from,
  data: `<script>window.location.replace('${redirect.to}')</script>`
});

hexo.extend.generator.register('redirect', locals => {
  hexo.log.d(`building ${redirects.length} redirects`);
  return redirects.map(mkredirect);
});
