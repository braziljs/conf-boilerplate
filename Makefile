install:
	@gem install jekyll
	@echo "\n~ Jekyll installed!\n"

run:
	@jekyll --server --auto

build:
	@jekyll
	@echo "\n~ Build succeed!\n"

deploy:
	@git push origin gh-pages
	@echo "\n~ Deploy succeed!\n"