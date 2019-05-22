#! /bin/bash
LIVESRC='../live/'

yarn run generate

rsync -lrt ./public/ $LIVESRC
cd $LIVESRC

# Home/ is used to generate index.html, but we don't need the actual page
rm -fr Home/

git status
git add -A
git commit -m 'updated site from hexo'
