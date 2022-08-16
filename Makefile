SHELL=/bin/bash

install:
	(npm i || true) && npm audit fix --force

update:
	(npm update || true) && npm audit fix --force

start:
	npm run start

localize:
	npm run i18n

lint:
	npm run lint

build: lint localize demo.build

new_lib:
	@read -p "Enter Library Name: " LIB && \
	read -p "Enter Library Prefix: " PREFIX && \
	ng generate library $$LIB --prefix=$$PREFIX && \
	ng generate @angular-eslint/schematics:add-eslint-to-project $$LIB

######################################################################

release_ngx_fix: lint ngx-components.patch ngx-components.build ngx-components.publish

release_ngx_component: lint ngx-components.minor ngx-components.build ngx-components.publish

release_services_fix: lint services.patch services.build services.publish

release_services_component: lint services.minor services.build services.publish

release_jform_fix: lint -jform_vendors json-forms.patch json-forms.build json-forms.publish

release_jform_component: lint -jform_vendors json-forms.minor json-forms.build json-forms.publish

-jform_vendors: ngx-components.vendor services.vendor

######################################################################

%.vendor: %.ver
	cd projects/uxwb/json-forms && \
		npm add @uxwb/$*@^$(PACK_VER) --save-peer --no-package-lock && \
		rm -rf node_modules

%.build:
	npm run build:$*

%.patch:
	cd projects/uxwb/$* && \
 			npm version patch

%.minor:
	cd projects/uxwb/$* && \
 			npm version minor

%.major:
	cd projects/uxwb/$* && \
 			npm version major

%.publish:
	cd dist/uxwb/$* && \
    		npm pack && \
    		npm publish --access public

%.ver:
	$(eval PACK_VER=$(shell node -pe "require('./projects/uxwb/$*/package.json').version"))

######################################################################




