# Build the website locally: jekyll
# Go to the gh-pages branch: git checkout gh-pages
# Remove all files under version control: git rm -rf .
# Move files from folder _site to root: mv _site/* .
# Removing _site folder: rm -rf _site
# Commit changes to gh-pages branch: git add . && git commit -m "update" && git push origin gh-pages
# Goes back to master branch: git checkout master

jekyll && git checkout gh-pages && git rm -rf . && mv _site/* . && rm -rf _site && git add . && git commit -m "update" && git push origin gh-pages && git checkout master