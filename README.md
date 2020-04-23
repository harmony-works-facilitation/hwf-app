# hwf-app

Angular 9 web app for the Harmony Works Facilitation website.

*This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.*

## Developer stuff

### Content management

Content is manageed by [Kentico Kontent](https://app.kontent.ai/projects).

#### Model generator

Install the model generator globally

```bash
npm i @kentico/kontent-model-generator -g
```

Then run:

```bash
kontent-generate --projectId=xxx --moduleResolution=ES2015 --codeType=TypeScript --addTimestamp --strictPropertyInitalization
```

> `xxx` refers to the project ID and can be found in Kentico Kontent project dashboard.

### Hosting and CI

Domain hosting and CI functionality provided by [Netlify](https://app.netlify.com/teams/patnunis2/sites).

### Angular related

#### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

#### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

#### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

#### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

#### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

#### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
