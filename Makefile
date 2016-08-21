SHELL := /bin/bash

install: preflight
	npm install

build: clean copy-static-assets
	NODE_ENV=production $$(npm bin)/webpack

serve:
	node dev-server.js

test: preflight
	NODE_ENV=test $$(npm bin)/tape test-helpers/setup.js src/**/*/spec.{js,jsx} | $$(npm bin)/tap-spec

lint: preflight
	$$(npm bin)/eslint . --ignore-path .gitignore --ext '.js,.jsx'

copy-static-assets:
	@echo -n 'Copying static files... '
	@mkdir -p dist
	@cp -R src/index.html dist
	@echo 'Done'

clean:
	-rm -r dist

preflight:
	@(which npm > /dev/null) || (echo 'missing dependency: npm'; exit 1)
	@(which node > /dev/null) || (echo 'missing dependency: node'; exit 1)
