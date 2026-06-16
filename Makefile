.PHONY: dev serve cms install migrate

dev:
	@bash scripts/dev.sh

serve:
	bundle exec jekyll serve --host 0.0.0.0 --livereload

cms:
	decap-server

install:
	bundle install
	npm install
	npm install -g decap-server

migrate:
	python3 scripts/migrate.py
