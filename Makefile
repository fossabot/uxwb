SHELL=/bin/bash

install:
	(npm i || true) && npm audit fix --force

update:
	(npm update || true) && npm audit fix --force

build_lib: components.build services.build forms.build

start:
	parallel "npm run start" --shell=/bin/bash

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

release_ngx_fix: components.lint components.patch components.build components.publish

release_ngx_component: components.lint components.minor components.build components.publish

release_services_fix: services.lint services.patch services.build services.publish

release_services_component: services.lint services.minor services.build services.publish

release_forms_fix: forms.lint forms.patch forms.build forms.publish

release_forms_component: forms.lint forms.minor forms.build forms.publish

######################################################################

%.lint:
	npm run build:$*

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




