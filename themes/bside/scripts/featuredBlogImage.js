hexo.extend.helper.register('featuredImage', function(post){
  if(post && post._content) {
    let content = post._content;
    const imgReg = /!\[(.*?)\]\((.*?)\)/g;
    let matches = content.match(imgReg);

    let theMatch = '/img/bside-logo.svg';
    if(matches && matches.length) {
      theMatch = matches[0].match(/\((.*?)\)/g)[0];
      theMatch = theMatch.substr(1, theMatch.length - 2);
    }

    let thumbnail = `<img class='post-featured-image' src='${theMatch}' title="${post.title}" />`;

    return thumbnail;
  }
});
