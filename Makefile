.PHONY: install
install:
	docker run --rm -it -v $$PWD:/app -w /app --publish 3000:3000 node:14-alpine yarn install

.PHONY: start
start:
	docker run --rm -it -v $$PWD:/app -w /app --publish 3000:3000 -e CHOKIDAR_USEPOLLING=true node:14-alpine yarn start

.PHONY: test
test:
	docker run --rm -it -v $$PWD:/app -w /app node:14-alpine yarn test
