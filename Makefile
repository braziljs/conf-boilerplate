install:
	@gem install jekyll
	@echo "\n~ Jekyll installed!\n"

run:
	@jekyll --server --auto

build:
	@jekyll
	@echo "\n~ Build succeed!\n"

deploy:
	@# Build the website locally
	@jekyll
	@# Go to the gh-pages branch: git checkout gh-pages
	@git checkout gh-pages
	@# Remove all files under version control: git rm -rf .
	@git rm -rf .
	@# Move files from folder _site to root: mv _site/* .
	@mv _site/* .
	@# Removing _site folder: rm -rf _site
	@rm -rf _site
	@# Commit changes to gh-pages branch
	@git add . && git commit -m "Regenerate" && git push origin gh-pages
	@# Goes back to master branch: git checkout master
	@git checkout master
	@echo "\n~ Deploy succeed!\n"