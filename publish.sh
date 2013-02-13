# Install dependencies
npm install .

# Build the website locally
docpad generate

# Go to the gh-pages branch
git checkout gh-pages

# Copy files from folder out to root
cp -f out/* .

# Removing out folder
rm -rf out

# Removing node_modules folder
rm -rf node_modules

# Commit changes to gh-pages branch
git add . && git commit -m "Regenerate" && git push origin gh-pages

# Goes back to master branch
git checkout master

# Reinstall dependencies
npm install .