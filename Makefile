include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/stack.js: src/index.js
	$(BABEL) $< -o $@

dist/stack.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/stack.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/stack.js dist/stack.min.js

all: test dist-all lib/stack.js

clean:
	rm -rf lib dist

clean-all: clean
	rm -rf node_modules coverage
