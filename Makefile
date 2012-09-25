install:
	gem install jekyll
	echo "Jekyll installed!"

run:
	jekyll --server --auto

build:
	jekyll

deploy:
	jekyll && git checkout gh-pages && git rm -rf . && mv _site/* . && rm -rf _site && git add . && git commit -m "update" && git push origin gh-pages && git checkout master