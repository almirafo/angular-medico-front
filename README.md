# Medico

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

criar projeto
ng new medico --routing --skip-tests

baixar dependencias

npm i bootstrap jquery --save
npm i angular-imask
npm i currency-formatter --save
npm install moment --save
npm i toastr --save
npm install primeng --save
npm install primeicons --save
npm install chart.js --save
npm i angular-in-memory-web-api --save



configura angular.json
dentro de---> "architect": { 

"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "node_modules/toastr/build/toastr.min.css",
              "node_modules/primeicons/primeicons.css",
              "node_modules/primeng/resources/themes/nova-light/theme.css",
              "node_modules/primeng/resources/primeng.min.css"
            ],
            "scripts": [
              "node_modules/jquery/dist/jquery.min.js",
              "node_modules/bootstrap/dist/js/bootstrap.min.js",
              "node_modules/chart.js/dist/Chart.bundle.js"
            ],