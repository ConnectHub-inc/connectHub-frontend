# Node.js and npm settings
NODE_VERSION=20.9.0
NPM_VERSION=9.8.1
BIN := $(abspath ./bin)
OS := $(shell uname -s | tr '[:upper:]' '[:lower:]')
ARCH := $(shell uname -m)
NODE_DIR := $(BIN)/node-v$(NODE_VERSION)-$(OS)-$(ARCH)
NODE_BIN := $(NODE_DIR)/bin/node
NPM_BIN := $(NODE_DIR)/bin/npm

# Ensure the bin directory exists
$(shell mkdir -p $(BIN))

# Download and install Node.js
$(NODE_BIN):
ifeq ($(OS),darwin)
	curl -o $(BIN)/node.tar.xz https://nodejs.org/dist/v$(NODE_VERSION)/node-v$(NODE_VERSION)-darwin-$(ARCH).tar.xz
else
	curl -o $(BIN)/node.tar.xz https://nodejs.org/dist/v$(NODE_VERSION)/node-v$(NODE_VERSION)-linux-x64.tar.xz
endif
	tar -xf $(BIN)/node.tar.xz -C $(BIN)
	rm $(BIN)/node.tar.xz
	ln -sf $(NODE_DIR)/bin/node $(BIN)/node
	# Install specified version of npm
	$(NODE_DIR)/bin/npm install -g npm@$(NPM_VERSION) --prefix $(NODE_DIR)
	ln -sf $(NODE_DIR)/lib/node_modules/npm/bin/npm-cli.js $(BIN)/npm

# Ensure the correct versions of Node.js and npm are used
.PHONY: check-versions
check-versions: $(NODE_BIN)
	@node_version=$$($(BIN)/node -v); \
	if [ "$${node_version#v}" != "$(NODE_VERSION)" ]; then \
	  echo "Error: Node.js version $(NODE_VERSION) is required, but $${node_version} is installed."; \
	  exit 1; \
	fi
	@npm_version=$$($(BIN)/npm -v); \
	if [ "$${npm_version}" != "$(NPM_VERSION)" ]; then \
	  echo "Error: npm version $(NPM_VERSION) is required, but $${npm_version} is installed."; \
	  exit 1; \
	fi

.PHONY: install-deps
install-deps: $(NODE_BIN)
	PATH=$(BIN):$$PATH npm install

.PHONY: start
start: check-versions install-deps
	PATH=$(BIN):$$PATH npm run start

.PHONY: build
build: check-versions
	PATH=$(BIN):$$PATH npm run build

.PHONY: clean
clean:
	rm -rf $(BIN)/*
