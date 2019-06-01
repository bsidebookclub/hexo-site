#! /bin/bash
LIVESRC='./live/'

git add -A
git commit -m 'updated site from hexo'
git push origin master

npm run generate

rsync -lrt ./public/ $LIVESRC
cd $LIVESRC

# Home/ is used to generate index.html, but we don't need the actual page
rm -fr Home/

git add -A
git commit -m 'updated site from hexo'
git push origin master

