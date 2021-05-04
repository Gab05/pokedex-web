#!/usr/bin/env bash

echo "INFO - setting up Travis user..."
git config user.email "travis@travis-ci.org"
git config user.name "travis-ci"
echo "INFO - done setting up Travis user!"

echo "INFO - cloning repo..."
git clone https://travis-ci:${GH_TOKEN}@github.com/Gab05/pokedex-web.git --branch=master
cd pokedex-web
git remote rm origin
git remote add origin https://travis-ci:${GH_TOKEN}@github.com/Gab05/pokedex-web.git
echo "INFO - done cloning repo!"

echo "INFO - fetching remote branches..."
git fetch
echo "INFO - done fetching remote branches!"

echo "INFO - merging develop into master..."
git merge origin/develop --squash
git commit -m "Travis build: $TRAVIS_BUILD_NUMBER"
echo "INFO - done merging develop into master!"

echo "INFO - pushing refs to remote..."
git push -u origin master
echo "Done! Merged develop into master."
