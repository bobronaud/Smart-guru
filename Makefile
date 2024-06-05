install:
	npm install

start:
	npm start

build:
	npm run build:prod

lint:
	npx eslint .

lint-fix:
	npx eslint --fix

lint-css:
	npx stylelint src

lint-css-fix:
	make lint-css -- --fix