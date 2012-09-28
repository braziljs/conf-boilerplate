install:
	@gem install jekyll
	@echo "\n~ Jekyll installed!\n"

run:
	@jekyll --server --auto

build:
	@jekyll
	@echo "\n~ Build succeed!\n"

deploy:
	@git checkout gh-pages
	@git merge master
	@git push origin gh-pages
	@git checkout master
	@echo "\n~ Deploy succeed!\n"