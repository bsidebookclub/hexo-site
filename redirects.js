
// these redirects are for legacy reasons.
// the pages have since been moved elsewhere, but we still want old links to go
// where they used to. these are processed by hexo's gulp instance on generate
// see themes/bside/scripts/redirectGenerator.js

module.exports = [
  {
    from: 'about.html',
    to: '/about/',
  },
  {
    from: 'contactus.html',
    to: '/contact/',
  },
  {
    from: 'events.html',
    to: '/events/',
  },
  {
    from: 'gallery.html',
    to: '/gallery/',
  },
  {
    from: 'ourmusic.html',
    to: '/music/',
  },
  {
    from: 'blog/2019/06/In-the-Spotlight-Adriana-Hernandez-1/',
    to: '/blog/2019/06/In-the-Spotlight-Adriana-Hernandez/',
  },
];
